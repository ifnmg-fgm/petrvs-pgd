import { Component, Injector, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { CentroTreinamento } from 'src/app/models/centro-treinamento.model';
import { PageListBase } from 'src/app/modules/base/page-list-base';
import { CentroTreinamentoDaoService } from 'src/app/dao/centro-treinamento-dao.service';

@Component({
  selector: 'centro-treinamento-list',
  templateUrl: './centro-treinamento-list.component.html',
  styleUrls: ['./centro-treinamento-list.component.scss']
})
export class CentroTreinamentoListComponent extends PageListBase<CentroTreinamento, CentroTreinamentoDaoService> {
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;

  constructor(public injector: Injector) {
    super(injector, CentroTreinamento, CentroTreinamentoDaoService);
    /* Inicializações */
    this.title = this.lex.translate("Centros de Treinamento");
    this.code = "MOD_RX_CURR";
    this.orderBy = [['nome', 'asc']];
    this.filter = this.fh.FormBuilder({
      nome: { default: "" }
    });
    this.addOption(this.OPTION_INFORMACOES);
    this.addOption(this.OPTION_EXCLUIR, "MOD_RX_OUT_EXCL");
  }

  public filterClear(filter: FormGroup) {
    filter.controls.nome.setValue("");
    super.filterClear(filter);
  }

  public filterWhere = (filter: FormGroup) => {
    let result: any[] = [];
    let form: any = filter.value;
    if (form.nome?.length) {
      result.push(["nome", "like", "%" + form.nome.trim().replace(" ", "%") + "%"]);
    }
    return result;
  }
}