import { Component, Injector, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { ToolbarButton } from 'src/app/components/toolbar/toolbar.component';
import { ProgramaDaoService } from 'src/app/dao/programa-dao.service';
import { Base } from 'src/app/models/base.model';
import { Programa } from 'src/app/models/programa.model';
import { PageListBase } from 'src/app/modules/base/page-list-base';

@Component({
  selector: 'app-programa-list',
  templateUrl: './programa-list.component.html',
  styleUrls: ['./programa-list.component.scss']
})
export class ProgramaListComponent extends PageListBase<Programa, ProgramaDaoService> {
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;

  public vigentesUnidadeExecutora: boolean = false;
  public todosUnidadeExecutora: boolean = false;

  constructor(public injector: Injector, dao: ProgramaDaoService) {
    super(injector, Programa, ProgramaDaoService);
    /* Inicializações */
    this.title = this.lex.translate("Programas de Gestão");
    this.code = "MOD_PRGT";
    this.join = ["unidade:id, nome"];
    this.filter = this.fh.FormBuilder({
      nome: {default: ""},
    });

    this.addOption(this.OPTION_INFORMACOES);
    this.addOption(this.OPTION_EXCLUIR, "MOD_PRGT_EXCL");
    this.addOption(this.OPTION_LOGS, "MOD_AUDIT_LOG");
    // Testa se o usuário possui permissão para visualizar os participantes do programa de gestão
    if (this.auth.hasPermissionTo("MOD_PART")) {
      this.options.push({
        icon: "bi bi-people",
        label: "Participantes",
        onClick: (programa: Programa) => this.go.navigate({route: ["gestao", "programa", programa.id, "participantes"]}, {metadata: {'programa': programa}})
      });
    }

/*     if (this.auth.hasPermissionTo("MOD_PART")) {
      this.options.push({
        icon: "bi bi-folder",
        label: "Desdobramentos",
        onClick: (programa: Programa) => this.go.navigate({route: ["gestao", "desdobramento", programa.id, "programa"]})
      });
    } */
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.vigentesUnidadeExecutora = this.metadata?.vigentesUnidadeExecutora; 
    this.todosUnidadeExecutora = this.metadata?.todosUnidadeExecutora; 
  }

  public filterWhere = (filter: FormGroup) => {
    let result: any[] = [];
    let form: any = filter.value;
    if(this.vigentesUnidadeExecutora) result.push(['vigentesUnidadeExecutora',"==",this.auth.unidade!.id]);
    if(this.todosUnidadeExecutora || !this.util.isDeveloper()) result.push(['todosUnidadeExecutora',"==",this.auth.unidade!.id]);
    if(form.nome?.length) {
      result.push(["nome", "like", "%" + form.nome.trim().replace(" ", "%") + "%"]);
    }

    return result;
  }
}

