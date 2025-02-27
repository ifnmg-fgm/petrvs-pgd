import { Component, Injector, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { PageListBase } from 'src/app/modules/base/page-list-base';
import { Funcao } from 'src/app/models/funcao.model';
import { FuncaoDaoService } from 'src/app/dao/funcao-dao.service';

@Component({
  selector: 'funcao-list',
  templateUrl: './funcao-list.component.html',
  styleUrls: ['./funcao-list.component.scss']
})
export class FuncaoListComponent extends PageListBase<Funcao, FuncaoDaoService> {
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;

  constructor(public injector: Injector) {
    super(injector, Funcao, FuncaoDaoService);
    /* Inicializações */
    this.title = this.lex.translate("Funções");
    this.code = "MOD_RX_CURR";
    this.filter = this.fh.FormBuilder({
      nome: { default: "" },
      descricao: { default: "" },
      nivel: { default: "" },
      siape: { default: "" },
      cbo: { default: "" },
      ativo: { default: 1 },
    });
    this.addOption(this.OPTION_INFORMACOES);
    this.addOption(this.OPTION_EXCLUIR, "MOD_RX_OUT_EXCL");
  }

  public filterClear(filter: FormGroup) {
    filter.controls.nome.setValue("");
    filter.controls.descrição.setValue("");
    filter.controls.nivel.setValue("");
    filter.controls.siape.setValue("");
    filter.controls.cbo.setValue("");
    super.filterClear(filter);
  }

  public filterWhere = (filter: FormGroup) => {
    let result: any[] = [];
    let form: any = filter.value;
    if (form.nome?.length) {
      result.push(["nome", "like", "%" + form.nome.trim().replace(" ", "%") + "%"]);
    }
    if (form.descricao?.length) {
      result.push(["descricao", "like", "%" + form.descricao.trim().replace(" ", "%") + "%"]);
    }
    if (form.nivel?.length) {
      result.push(["nivel", "like", "%" + form.nivel.trim().replace(" ", "%") + "%"]);
    }
    if (form.siape?.length) {
      result.push(["siape", "like", "%" + form.siape.trim().replace(" ", "%") + "%"]);
    }
    if (form.cbo?.length) {
      result.push(["cbo", "like", "%" + form.cbo.trim().replace(" ", "%") + "%"]);
    }
    return result;
  }
}


