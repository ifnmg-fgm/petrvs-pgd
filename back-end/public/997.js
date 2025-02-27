"use strict";
(self["webpackChunkpetrvs"] = self["webpackChunkpetrvs"] || []).push([[997],{

/***/ 89997:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-trabalho/plano-trabalho-list/plano-trabalho-list.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoTrabalhoListComponent: () => (/* binding */ PlanoTrabalhoListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_documento_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/documento-dao-service */ 25026);
/* harmony import */ var src_app_dao_plano_trabalho_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/plano-trabalho-dao.service */ 87744);
/* harmony import */ var src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/programa-dao.service */ 92214);
/* harmony import */ var src_app_dao_tipo_modalidade_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/tipo-modalidade-dao.service */ 66075);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ 35255);
/* harmony import */ var src_app_models_plano_trabalho_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/plano-trabalho.model */ 20762);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var _plano_trabalho_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../plano-trabalho.service */ 80684);
/* harmony import */ var src_app_modules_uteis_documentos_documento_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/uteis/documentos/documento.service */ 22702);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/util.service */ 49193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;













function PlanoTrabalhoListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "toolbar")(1, "input-switch", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function PlanoTrabalhoListComponent_toolbar_1_Template_input_switch_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r40.onAgruparChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 4)("control", ctx_r0.filter.controls.agrupar);
  }
}
function PlanoTrabalhoListComponent_column_12_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r46.entregas == null ? null : row_r46.entregas.length, "");
  }
}
function PlanoTrabalhoListComponent_column_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, PlanoTrabalhoListComponent_column_12_ng_template_1_span_0_Template, 3, 1, "span", 48);
  }
  if (rf & 2) {
    const row_r46 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r46.entregas == null ? null : row_r46.entregas.length);
  }
}
function PlanoTrabalhoListComponent_column_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "plano-trabalho-list-entrega", 51);
  }
  if (rf & 2) {
    const row_r49 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("entity", row_r49);
  }
}
function PlanoTrabalhoListComponent_column_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "column", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PlanoTrabalhoListComponent_column_12_ng_template_1_Template, 1, 1, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, PlanoTrabalhoListComponent_column_12_ng_template_3_Template, 1, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("align", "center")("hint", ctx_r1.lex.translate("Entrega"))("template", _r42)("expandTemplate", _r44);
  }
}
function PlanoTrabalhoListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "order", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "#ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r50 = ctx.header;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("header", header_r50);
  }
}
function PlanoTrabalhoListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r51 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", "#" + row_r51.numero, "");
  }
}
function PlanoTrabalhoListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "order", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Usu\u00E1rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r52 = ctx.header;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("header", header_r52);
  }
}
function PlanoTrabalhoListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r53 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (row_r53.usuario == null ? null : row_r53.usuario.nome) || "", "");
  }
}
function PlanoTrabalhoListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r54 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (row_r54.programa == null ? null : row_r54.programa.nome) || "", "");
  }
}
function PlanoTrabalhoListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r55 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (row_r55.unidade == null ? null : row_r55.unidade.sigla) || "", "");
  }
}
function PlanoTrabalhoListComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r56 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (row_r56.tipo_modalidade == null ? null : row_r56.tipo_modalidade.nome) || "", "");
  }
}
function PlanoTrabalhoListComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0, " Vig\u00EAncia de");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "order", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "In\u00EDcio");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "order", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Fim");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r57 = ctx.header;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("header", header_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("header", header_r57);
  }
}
function PlanoTrabalhoListComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r58 = ctx.row;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r19.dao.getDateFormatted(row_r58.data_inicio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", " at\u00E9 " + ctx_r19.dao.getDateFormatted(row_r58.data_fim), "");
  }
}
function PlanoTrabalhoListComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "documentos-badge", 56);
  }
  if (rf & 2) {
    const row_r59 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("documento", row_r59.documento)("maxWidth", 200);
  }
}
function PlanoTrabalhoListComponent_ng_template_41_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "badge", 59);
  }
}
function PlanoTrabalhoListComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "badge", 57)(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, PlanoTrabalhoListComponent_ng_template_41_badge_2_Template, 1, 0, "badge", 58);
  }
  if (rf & 2) {
    const row_r60 = ctx.row;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx_r23.lookup.getColor(ctx_r23.lookup.PLANO_TRABALHO_STATUS, row_r60.status))("icon", ctx_r23.lookup.getIcon(ctx_r23.lookup.PLANO_TRABALHO_STATUS, row_r60.status))("label", ctx_r23.lookup.getValue(ctx_r23.lookup.PLANO_TRABALHO_STATUS, row_r60.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r60.data_arquivamento);
  }
}
function PlanoTrabalhoListComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r62 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](row_r62.numero);
  }
}
function PlanoTrabalhoListComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r63 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((row_r63.usuario == null ? null : row_r63.usuario.matricula) || "");
  }
}
function PlanoTrabalhoListComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r64 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((row_r64.programa == null ? null : row_r64.programa.nome) || "");
  }
}
function PlanoTrabalhoListComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r65 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((row_r65.unidade == null ? null : row_r65.unidade.nome) || "");
  }
}
function PlanoTrabalhoListComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r66 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((row_r66.tipo_modalidade == null ? null : row_r66.tipo_modalidade.nome) || "");
  }
}
function PlanoTrabalhoListComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r67 = ctx.row;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r35.util.getDateTimeFormatted(row_r67.data_inicio));
  }
}
function PlanoTrabalhoListComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r68 = ctx.row;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r37.util.getDateTimeFormatted(row_r68.data_fim));
  }
}
function PlanoTrabalhoListComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r69 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((row_r69.documento == null ? null : row_r69.documento.numero_processo == null ? null : row_r69.documento.numero_processo.length) ? row_r69.documento == null ? null : row_r69.documento.numero_processo : "N\u00E3o atribu\u00EDdo");
  }
}
class PlanoTrabalhoListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_8__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_plano_trabalho_model__WEBPACK_IMPORTED_MODULE_7__.PlanoTrabalho, src_app_dao_plano_trabalho_dao_service__WEBPACK_IMPORTED_MODULE_2__.PlanoTrabalhoDaoService);
    this.injector = injector;
    this.routeStatus = {
      route: ["uteis", "status"]
    };
    this.multiselectAllFields = ["tipo_modalidade_id", "usuario_id", "unidade_id", "documento_id"];
    this.botoes = [];
    this.DATAS_FILTRO = [{
      key: "VIGENTE",
      value: "Vigente"
    }, {
      key: "NAOVIGENTE",
      value: "Não vigente"
    }, {
      key: "INICIAM",
      value: "Iniciam"
    }, {
      key: "FINALIZAM",
      value: "Finalizam"
    }];
    this.filterValidate = (control, controlName) => {
      let result = null;
      if (controlName == "data_filtro_inicio" && control.value > this.filter?.controls.data_filtro_fim.value) {
        result = "Maior que fim";
      } else if (controlName == "data_filtro_fim" && control.value < this.filter?.controls.data_filtro_inicio.value) {
        result = "Menor que início";
      }
      return result;
    };
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.tipo_modalidade_id?.length) {
        result.push(["tipo_modalidade_id", "==", form.tipo_modalidade_id]);
      }
      if (form.data_filtro) {
        result.push(["data_filtro", "==", form.data_filtro]);
        result.push(["data_filtro_inicio", "==", form.data_filtro_inicio]);
        result.push(["data_filtro_fim", "==", form.data_filtro_fim]);
      }
      if (form.usuario?.length) {
        result.push(["usuario.nome", "like", "%" + form.usuario.trim().replace(" ", "%") + "%"]);
      }
      if (form.unidade_id?.length) {
        result.push(["unidade_id", "==", form.unidade_id]);
      }
      return result;
    };
    this.dynamicMultiselectMenu = multiselected => {
      let assinar = !!Object.keys(multiselected).length;
      let menu = [];
      Object.entries(multiselected).forEach(([key, value]) => {
        if (!this.planoTrabalhoService.needSign(value)) assinar = false;
      });
      if (assinar) menu.push({
        label: "Assinar",
        icon: "bi bi-pen",
        onClick: this.assinar.bind(this)
      });
      return menu;
    };
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__.UnidadeDaoService);
    this.programaDao = injector.get(src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_3__.ProgramaDaoService);
    this.documentoDao = injector.get(src_app_dao_documento_dao_service__WEBPACK_IMPORTED_MODULE_1__.DocumentoDaoService);
    this.documentoService = injector.get(src_app_modules_uteis_documentos_documento_service__WEBPACK_IMPORTED_MODULE_10__.DocumentoService);
    this.utilService = injector.get(src_app_services_util_service__WEBPACK_IMPORTED_MODULE_11__.UtilService);
    this.usuarioDao = injector.get(src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_6__.UsuarioDaoService);
    this.planoTrabalhoService = injector.get(_plano_trabalho_service__WEBPACK_IMPORTED_MODULE_9__.PlanoTrabalhoService);
    this.tipoModalidadeDao = injector.get(src_app_dao_tipo_modalidade_dao_service__WEBPACK_IMPORTED_MODULE_4__.TipoModalidadeDaoService);
    /* Inicializações */
    this.title = this.lex.translate("Planos de Trabalho");
    this.code = "MOD_PTR";
    this.filter = this.fh.FormBuilder({
      agrupar: {
        default: true
      },
      usuario: {
        default: ""
      },
      unidade_id: {
        default: null
      },
      tipo_modalidade_id: {
        default: null
      },
      data_filtro: {
        default: null
      },
      data_filtro_inicio: {
        default: new Date()
      },
      data_filtro_fim: {
        default: new Date()
      }
    }, this.cdRef, this.filterValidate);
    this.join = ["unidade.entidade", "unidade.gestor.usuario:id", "usuario", "programa.template_tcr", "documento.assinaturas.usuario:id,nome,url_foto", "tipo_modalidade", "entregas.plano_entrega_entrega.entrega", "entregas.plano_entrega_entrega.plano_entrega:id,unidade_id", "entregas.plano_entrega_entrega.plano_entrega.unidade", "entregas.entrega", "entregas.reacoes.usuario:id,nome,apelido"];
    this.groupBy = [{
      field: "unidade.sigla",
      label: "Unidade"
    }];
    this.BOTAO_ALTERAR = {
      label: "Alterar",
      icon: "bi bi-pencil-square",
      color: "btn-outline-info",
      onClick: this.edit.bind(this)
    };
    this.BOTAO_ARQUIVAR = {
      label: "Arquivar",
      icon: "bi bi-inboxes",
      onClick: this.arquivar.bind(this)
    };
    this.BOTAO_ASSINAR = {
      label: "Assinar",
      icon: "bi bi-pen",
      onClick: this.assinar.bind(this)
    };
    this.BOTAO_ATIVAR = {
      label: "Ativar",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "ATIVO"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "ATIVO"),
      onClick: this.ativar.bind(this)
    };
    this.BOTAO_CANCELAR_ASSINATURA = {
      label: "Cancelar assinatura",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "AGUARDANDO_ASSINATURA ou INCLUIDO"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "AGUARDANDO_ASSINATURA ou INCLUIDO"),
      onClick: this.cancelarAssinatura.bind(this)
    };
    this.BOTAO_CANCELAR_PLANO = {
      label: "Cancelar plano",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "CANCELADO"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "CANCELADO"),
      onClick: this.cancelarPlano.bind(this)
    };
    this.BOTAO_DESARQUIVAR = {
      label: "Desarquivar",
      icon: "bi bi-reply",
      onClick: this.desarquivar.bind(this)
    };
    this.BOTAO_ENVIAR_ASSINATURA = {
      label: "Enviar para assinatura",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "AGUARDANDO_ASSINATURA"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "AGUARDANDO_ASSINATURA"),
      onClick: this.enviarParaAssinatura.bind(this)
    };
    this.BOTAO_INFORMACOES = {
      label: "Informações",
      icon: "bi bi-info-circle",
      onClick: this.consult.bind(this)
    };
    this.BOTAO_TERMOS = {
      label: "Termos",
      icon: "bi bi-file-earmark-check",
      onClick: (row => this.go.navigate({
        route: ['uteis', 'documentos', 'TCR', row.id]
      }, {
        modalClose: modalResult => (this.grid?.query || this.query).refreshId(row.id),
        metadata: this.planoTrabalhoService.metadados(row)
      })).bind(this)
    };
    this.BOTAO_CONSOLIDACOES = {
      label: "Consolidações",
      icon: this.entityService.getIcon('PlanoTrabalhoConsolidacao'),
      onClick: (row => this.go.navigate({
        route: ['gestao', 'plano-trabalho', 'consolidacao', row.usuario_id, row.id]
      }, {
        modalClose: modalResult => (this.grid?.query || this.query).refreshId(row.id),
        modal: true
      })).bind(this)
    };
    this.BOTAO_REATIVAR = {
      label: "Reativar",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "ATIVO"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "ATIVO"),
      onClick: this.reativar.bind(this)
    };
    this.BOTAO_SUSPENDER = {
      label: "Suspender",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "SUSPENSO"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "SUSPENSO"),
      onClick: this.suspender.bind(this)
    };
    this.botoes = [this.BOTAO_ALTERAR, this.BOTAO_ARQUIVAR, this.BOTAO_ASSINAR, this.BOTAO_ATIVAR, this.BOTAO_CANCELAR_ASSINATURA, this.BOTAO_CANCELAR_PLANO, this.BOTAO_DESARQUIVAR, this.BOTAO_ENVIAR_ASSINATURA, this.BOTAO_INFORMACOES, this.BOTAO_TERMOS, this.BOTAO_CONSOLIDACOES, this.BOTAO_REATIVAR, this.BOTAO_SUSPENDER];
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.metadata?.minha_unidade) {
      this.filter?.controls.unidade_id.setValue(this.auth.unidade?.id);
    }
  }
  dynamicOptions(row) {
    let result = [];
    this.botoes.forEach(botao => {
      if (this.botaoAtendeCondicoes(botao, row)) result.push(botao);
    });
    return result;
  }
  dynamicButtons(row) {
    let result = [];
    let planoTrabalho = row;
    switch (this.planoTrabalhoService.situacaoPlano(planoTrabalho)) {
      case 'INCLUIDO':
        if (this.botaoAtendeCondicoes(this.BOTAO_ASSINAR, row)) result.push(this.BOTAO_ASSINAR);else if (this.botaoAtendeCondicoes(this.BOTAO_ATIVAR, row)) result.push(this.BOTAO_ATIVAR);else if (this.botaoAtendeCondicoes(this.BOTAO_ENVIAR_ASSINATURA, row)) result.push(this.BOTAO_ENVIAR_ASSINATURA);
        /*
          - botões-padrão:
            - 'Assinar'. Condições para ser exibido: vide RN_PTR_O;                  (quando for exigida apenas a assinatura do usuário logado no TCR)
            - 'Ativar'. Condições para ser exibido: vide RN_PTR_P;                   (quando não for exigida nenhuma assinatura no TCR)
            - 'Enviar para Assinatura'. Condições para ser exibido: vide RN_PTR_U;
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'AGUARDANDO_ASSINATURA':
        if (this.botaoAtendeCondicoes(this.BOTAO_ASSINAR, row)) result.push(this.BOTAO_ASSINAR);
        /**
          - botões-padrão:
            - 'Assinar'. Condições para ser exibido: vide RN_PTR_O;
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'ATIVO':
        /**
          - botões-padrão:
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'CONCLUIDO':
        if (this.botaoAtendeCondicoes(this.BOTAO_ARQUIVAR, row)) result.push(this.BOTAO_ARQUIVAR);
        /**
          - botões-padrão:
            - 'Arquivar'. Condições para ser exibido: vide RN_PTR_N;
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'SUSPENSO':
        /**
          - botões-padrão:
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'ARQUIVADO':
        /**
          - botões-padrão:
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'CANCELADO':
        if (this.botaoAtendeCondicoes(this.BOTAO_ARQUIVAR, row)) result.push(this.BOTAO_ARQUIVAR);
        /**
          - botões-padrão:
            - 'Arquivar'. Condições para ser exibido: vide RN_PTR_N;
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
    }
    if (!result.length) result.push(this.BOTAO_INFORMACOES);
    return result;
  }
  filterClear(filter) {
    filter.controls.usuario.setValue("");
    filter.controls.unidade_id.setValue(null);
    filter.controls.tipo_modalidade_id.setValue(null);
    filter.controls.data_filtro.setValue(null);
    filter.controls.data_filtro_inicio.setValue(new Date());
    filter.controls.data_filtro_fim.setValue(new Date());
    super.filterClear(filter);
  }
  onAgruparChange(event) {
    const agrupar = this.filter.controls.agrupar.value;
    if (agrupar && !this.groupBy?.length || !agrupar && this.groupBy?.length) {
      this.groupBy = agrupar ? [{
        field: "unidade.sigla",
        label: "Unidade"
      }] : [];
      this.grid.reloadFilter();
    }
  }
  botaoAtendeCondicoes(botao, planoTrabalho) {
    let assinaturasExigidas = planoTrabalho.assinaturasExigidas;
    let assinaturasFaltantes = this.utilService.array_diff(planoTrabalho.assinaturasExigidas, planoTrabalho.jaAssinaramTCR);
    let usuarioEhGestorUnidadeExecutora = this.auth.usuario?.id == planoTrabalho.unidade?.gestor?.usuario?.id;
    let usuarioJaAssinouTCR = planoTrabalho.jaAssinaramTCR.includes(this.auth.usuario?.id);
    let assinaturaUsuarioEhExigida = planoTrabalho.assinaturasExigidas.includes(this.auth.usuario?.id);
    let planoIncluido = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'INCLUIDO';
    let usuarioEhParticipante = this.auth.usuario?.id == planoTrabalho.usuario_id;
    let planoAguardandoAssinatura = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'AGUARDANDO_ASSINATURA';
    let planoAtivo = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'ATIVO';
    let planoConcluido = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'CONCLUIDO';
    let planoCancelado = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'CANCELADO';
    let planoArquivado = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'ARQUIVADO';
    //let programaExigeOutrasAssinaturas = !!assinaturasExigidas.filter(a => a != this.auth.usuario?.id).length;
    let planoSuspenso = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'SUSPENSO';
    let planoPossuiEntrega = planoTrabalho.entregas.length > 0;
    switch (botao) {
      case this.BOTAO_ALTERAR:
        /*
          (RN_PTR_M) Condições para que um Plano de Trabalho possa ser alterado:
          O usuário logado precisa possuir a capacidade "MOD_PTR_EDT", o Plano de Trabalho precisa ser válido (ou seja, nem deletado, nem arquivado, nem estar no status CANCELADO), e:
              - estando com o status 'INCLUIDO', o usuário logado precisa ser o participante do plano ou o gestor da Unidade Executora;
              - estando com o status 'AGUARDANDO_ASSINATURA', o usuário logado precisa ser um dos que já assinaram o TCR e todas as assinaturas tornam-se sem efeito;
              - estando com o status 'ATIVO', o usuário precisa ser gestor da Unidade Executora e possuir a capacidade MOD_PTR_EDT_ATV. Após alterado, o Plano de Trabalho precisa ser repactuado (novo TCR), e o plano retorna ao status 'AGUARDANDO_ASSINATURA';
        */
        let condition1 = this.auth.hasPermissionTo("MOD_PTR_EDT");
        let condition2 = this.planoTrabalhoService.isValido(planoTrabalho);
        let condition3 = planoIncluido && (usuarioEhParticipante || usuarioEhGestorUnidadeExecutora);
        let condition4 = planoAguardandoAssinatura && usuarioJaAssinouTCR;
        let condition5 = planoAtivo && usuarioEhGestorUnidadeExecutora && this.auth.hasPermissionTo("MOD_PTR_EDT_ATV");
        return condition1 && condition2 && (condition3 || condition4 || condition5);
      case this.BOTAO_ARQUIVAR:
        /*
          (RN_PTR_N) ARQUIVAR
          O plano precisa estar com o status CONCLUIDO ou CANCELADO, não ter sido arquivado, e:
            - o usuário logado precisa ser o participante ou o gestor da Unidade Executora;
        */
        return (planoConcluido || planoCancelado) && !planoArquivado && (usuarioEhParticipante || usuarioEhGestorUnidadeExecutora);
      case this.BOTAO_ASSINAR:
        /*
          (RN_PTR_O) ASSINAR
            - o plano precisa possuir ao menos uma entrega, e:
            - o plano precisa estar com o status INCLUIDO, e:
              - o usuário logado precisa ser o participante do plano ou o gestor da sua Unidade Executora, e
              - a assinatura do usuário logado precisa ser uma das exigidas pelo Programa de Gestão, e ele não ter ainda assinado;
            - ou o plano precisa estar com o status AGUARDANDO_ASSINATURA, e:
              - a assinatura do usuário logado precisa ser uma das exigidas pelo Programa de Gestão, e ele não ter ainda assinado;
        */
        let condicao1 = usuarioEhParticipante || usuarioEhGestorUnidadeExecutora;
        let condicao2 = assinaturaUsuarioEhExigida && !usuarioJaAssinouTCR;
        return planoPossuiEntrega && (planoIncluido && condicao1 && condicao2 || planoAguardandoAssinatura && condicao2);
      case this.BOTAO_ATIVAR:
        /*
          (RN_PTR_P) ATIVAR
          O plano precisa estar no status 'INCLUIDO', e
              - o usuário logado precisa ser o participante do plano ou gestor da Unidade Executora, e
              - nenhuma assinatura no TCR ser exigida pelo programa, e
              - o plano de trabalho precisa ter ao menos uma entrega;
        */
        return planoIncluido && (usuarioEhParticipante || usuarioEhGestorUnidadeExecutora) && !assinaturasExigidas.length && planoPossuiEntrega;
      case this.BOTAO_CANCELAR_ASSINATURA:
        /*
          (RN_PTR_Q) CANCELAR ASSINATURA
          O plano precisa estar no status 'AGUARDANDO_ASSINATURA'; e
            - o usuário logado precisa já ter assinado o TCR;
        */
        return planoAguardandoAssinatura && usuarioJaAssinouTCR;
      case this.BOTAO_CANCELAR_PLANO:
        /*
          (RN_PTR_R) CANCELAR
          O usuário logado precisa possuir a capacidade "MOD_PTR_CNC", e
            - o plano precisa estar em um dos seguintes status: INCLUIDO, AGUARDANDO_ASSINATURA, ATIVO ou CONCLUIDO; e
            - o usuário logado precisa ser gestor da Unidade Executora;
        */
        return this.auth.hasPermissionTo("MOD_PTR_CNC") && ['INCLUIDO', 'AGUARDANDO_ASSINATURA', 'ATIVO', 'CONCLUIDO'].includes(planoTrabalho.status);
      case this.BOTAO_INFORMACOES:
        /*
          (RN_PTR_S) CONSULTAR
          Todos os participantes podem visualizar todos os planos de trabalho, desde que possuam a capacidade "MOD_PTR";
        */
        return this.auth.hasPermissionTo("MOD_PTR");
      case this.BOTAO_DESARQUIVAR:
        /*
          (RN_PTR_T) DESARQUIVAR
          O plano precisa estar arquivado, e:
              - o usuário logado precisa ser o participante ou gestor da Unidade Executora;
        */
        return planoArquivado && (usuarioEhParticipante || usuarioEhGestorUnidadeExecutora);
      case this.BOTAO_ENVIAR_ASSINATURA:
        /*
          (RN_PTR_U) ENVIAR PARA ASSINATURA
          O plano precisa estar com o status INCLUIDO; e
            - o usuário logado precisa ser o participante do plano ou gestor da sua Unidade Executora; e
            - se a assinatura do usuário logado for exigida, ele já deve ter assinado o TCR; e
            - devem existir assinaturas exigíveis ainda pendentes; e
            - o plano precisa possuir ao menos uma entrega;
        */
        return planoIncluido && (usuarioEhParticipante || usuarioEhGestorUnidadeExecutora) && (!assinaturaUsuarioEhExigida || usuarioJaAssinouTCR) && !!assinaturasFaltantes.length && planoPossuiEntrega;
      case this.BOTAO_REATIVAR:
        /*
          (RN_PTR_W) REATIVAR
          O plano precisa estar com o status SUSPENSO, e
            - o usuário logado precisa ser gestor da Unidade Executora;
        */
        return planoSuspenso && usuarioEhGestorUnidadeExecutora;
      case this.BOTAO_SUSPENDER:
        /*
          (RN_PTR_X) SUSPENDER
          O plano precisa estar com o status ATIVO, e
            - o usuário logado precisa ser gestor da Unidade Executora;
        */
        return planoAtivo && usuarioEhGestorUnidadeExecutora;
      case this.BOTAO_TERMOS:
        return this.auth.hasPermissionTo("MOD_PTR");
      case this.BOTAO_CONSOLIDACOES:
        return true;
    }
    return false;
  }
  arquivar(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: Object.assign({}, planoTrabalho, {
          arquivar: true
        }),
        novoStatus: planoTrabalho.status,
        onClick: this.dao.arquivar.bind(this.dao)
      },
      title: "Arquivar Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  assinar(planoTrabalho) {
    const planosIds = planoTrabalho ? [planoTrabalho.id] : Object.keys(this.grid.multiselected || {});
    const documentos = this.grid.items.filter(x => planosIds.includes(x.id) && x.documento_id?.length).map(x => x.documento);
    if (!documentos.length) {
      this.dialog.alert("Selecione", "Nenhum plano selecionado!");
    } else {
      this.documentoService.sign(documentos).then(() => (this.grid?.query || this.query).refreshId(planoTrabalho.id));
    }
  }
  ativar(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: planoTrabalho,
        novoStatus: "ATIVO",
        onClick: this.dao.ativar.bind(this.dao)
      },
      title: "Ativar Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  // COMPLEMENTAR A IMPLEMENTAÇÃO DO MÉTODO
  cancelarAssinatura(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: planoTrabalho,
        novoStatus: "AGUARDANDO_ASSINATURA",
        onClick: this.dao.cancelarAssinatura.bind(this.dao)
      },
      title: "Cancelar Assinatura do TCR",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  cancelarPlano(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: Object.assign({}, planoTrabalho, {
          arquivar: true
        }),
        novoStatus: "CANCELADO",
        onClick: this.dao.cancelarPlano.bind(this.dao)
      },
      title: "Cancelar Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  desarquivar(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: Object.assign({}, planoTrabalho, {
          arquivar: false
        }),
        novoStatus: planoTrabalho.status,
        onClick: this.dao.arquivar.bind(this.dao)
      },
      title: "Desarquivar Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  enviarParaAssinatura(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: planoTrabalho,
        novoStatus: "AGUARDANDO_ASSINATURA",
        onClick: this.dao.enviarParaAssinatura.bind(this.dao)
      },
      title: "Disponibilizar Plano de Trabalho para assinatura",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  reativar(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: planoTrabalho,
        novoStatus: "ATIVO",
        onClick: this.dao.reativar.bind(this.dao)
      },
      title: "Reativar Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  suspender(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: planoTrabalho,
        novoStatus: "SUSPENSO",
        onClick: this.dao.suspender.bind(this.dao)
      },
      title: "Suspender Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  canAdd() {
    return this.auth.hasPermissionTo('MOD_PTR_INCL');
    //IMPLEMENTAR AS DEMAIS CONDIÇÕES NA VALIDAÇÃO DO FORM *******************
    /*
    (RN_PTR_V) INCLUIR/INSERIR
    O usuário logado precisa possuir a capacidade "MOD_PTR_INCL", e:
        - o usuário logado precisa ser um participante do PGD, habilitado, ou ser gestor da Unidade Executora do plano; (RN_PTR_B); e
        - o participante do plano precisa estar lotado em uma das áreas de trabalho do usuário logado, ou este deve possuir a capacidade MOD_PTR_USERS_INCL; e
        - o participante do plano precisa estar lotado na Unidade Executora, ou o usuário logado possuir a capacidade MOD_PTR_INCL_SEM_LOT; e
        - o novo Plano de Trabalho não pode apresentar período conflitante com outro plano já existente para a mesma Unidade Executora e mesmo participante, ou o usuário logado possuir a capacidade MOD_PTR_INTSC_DATA
    */
  }
}
_class = PlanoTrabalhoListComponent;
_class.selectRoute = {
  route: ["gestao", "plano-trabalho"]
};
_class.ɵfac = function PlanoTrabalhoListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["plano-trabalho-list"]],
  viewQuery: function PlanoTrabalhoListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 70,
  vars: 64,
  consts: [["multiselect", "", 3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "dynamicMultiselectMenu", "multiselectAllFields", "select"], [4, "ngIf"], [3, "deleted", "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["controlName", "usuario", "placeholder", "Usu\u00E1rio", 3, "size", "label", "control"], ["controlName", "unidade_id", 3, "size", "control", "dao"], ["controlName", "tipo_modalidade_id", 3, "size", "control", "dao"], ["label", "Data", "itemTodos", "- Nenhum -", "controlName", "data_filtro", 3, "size", "valueTodos", "control", "items"], ["date", "", "label", "In\u00EDcio", "controlName", "data_filtro_inicio", "labelInfo", "Data in\u00EDcio do per\u00EDodo", 3, "size", "disabled", "control"], ["date", "", "label", "Fim", "controlName", "data_filtro_fim", "labelInfo", "Data fim do per\u00EDodo", 3, "size", "disabled", "control"], ["type", "expand", "icon", "bi bi-list-check", 3, "align", "hint", "template", "expandTemplate", 4, "ngIf"], [3, "titleTemplate", "template", "minWidth"], ["titleNumero", ""], ["columnNumero", ""], [3, "titleTemplate", "template"], ["titleUsuario", ""], ["columnUsuario", ""], ["title", "Programa", 3, "template"], ["columnPrograma", ""], ["title", "Unidade", 3, "template"], ["columnUnidade", ""], ["title", "Modalidade", 3, "template"], ["columnModalidade", ""], ["titleVigencia", ""], ["columnInicioVigencia", ""], [3, "title", "template"], ["documento", ""], ["title", "Status", 3, "template"], ["columnStatus", ""], ["type", "options", 3, "dynamicOptions", "dynamicButtons"], ["title", "Numero", 3, "template"], ["reportNumero", ""], ["title", "Matricula usu\u00E1rio", 3, "template"], ["reportMatricula", ""], ["reportPrograma", ""], ["reportUnidade", ""], ["reportModalidade", ""], ["title", "In\u00EDcio vig\u00EAncia", 3, "template"], ["reportInicioVigencia", ""], ["title", "Fim vig\u00EAncia", 3, "template"], ["reportFimVigencia", ""], ["title", "Termo de Ades\u00E3o", 3, "template"], ["reportTermoAdesao", ""], [3, "rows"], ["labelPosition", "left", "label", "Agrupar por Un.", "controlName", "agrupar", 3, "size", "control", "change"], ["type", "expand", "icon", "bi bi-list-check", 3, "align", "hint", "template", "expandTemplate"], ["columnEntregas", ""], ["columnExpandedEntregas", ""], ["class", "badge rounded-pill bg-light text-dark", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-light", "text-dark"], [1, "bi", "bi-list-check"], [3, "entity"], ["by", "numero", 3, "header"], ["by", "usuario.nome", 3, "header"], ["by", "data_inicio", 3, "header"], ["by", "data_fim", 3, "header"], ["signatures", "", "noRounded", "", "withLink", "", 3, "documento", "maxWidth"], [3, "color", "icon", "label"], ["color", "warning", "icon", "bi bi-inboxes", "label", "Arquivado", 4, "ngIf"], ["color", "warning", "icon", "bi bi-inboxes", "label", "Arquivado"]],
  template: function PlanoTrabalhoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("select", function PlanoTrabalhoListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PlanoTrabalhoListComponent_toolbar_1_Template, 2, 2, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "input-text", 4)(5, "input-search", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "input-search", 6)(8, "input-select", 7)(9, "input-datetime", 8)(10, "input-datetime", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, PlanoTrabalhoListComponent_column_12_Template, 5, 4, "column", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "column", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, PlanoTrabalhoListComponent_ng_template_14_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, PlanoTrabalhoListComponent_ng_template_16_Template, 2, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "column", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, PlanoTrabalhoListComponent_ng_template_19_Template, 2, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, PlanoTrabalhoListComponent_ng_template_21_Template, 2, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "column", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, PlanoTrabalhoListComponent_ng_template_24_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "column", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, PlanoTrabalhoListComponent_ng_template_27_Template, 2, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "column", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, PlanoTrabalhoListComponent_ng_template_30_Template, 2, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "column", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, PlanoTrabalhoListComponent_ng_template_33_Template, 7, 2, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, PlanoTrabalhoListComponent_ng_template_35_Template, 4, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "column", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, PlanoTrabalhoListComponent_ng_template_38_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "column", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, PlanoTrabalhoListComponent_ng_template_41_Template, 3, 4, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "column", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "report")(45, "column", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, PlanoTrabalhoListComponent_ng_template_46_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "column", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](49, PlanoTrabalhoListComponent_ng_template_49_Template, 1, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "column", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](52, PlanoTrabalhoListComponent_ng_template_52_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "column", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, PlanoTrabalhoListComponent_ng_template_55_Template, 1, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "column", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](58, PlanoTrabalhoListComponent_ng_template_58_Template, 1, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "column", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, PlanoTrabalhoListComponent_ng_template_61_Template, 1, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "column", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](64, PlanoTrabalhoListComponent_ng_template_64_Template, 1, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "column", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](67, PlanoTrabalhoListComponent_ng_template_67_Template, 1, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](69, "pagination", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](15);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](17);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](20);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](22);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](25);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](28);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](31);
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](34);
      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](36);
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](39);
      const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](42);
      const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](47);
      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](50);
      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](53);
      const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](56);
      const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](59);
      const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](62);
      const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](65);
      const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.canAdd())("hasEdit", false)("dynamicMultiselectMenu", ctx.dynamicMultiselectMenu.bind(ctx))("multiselectAllFields", ctx.multiselectAllFields);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("deleted", ctx.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6)("label", ctx.lex.translate("Usu\u00E1rio"))("control", ctx.filter.controls.usuario);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("maxlength", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.unidade_id)("dao", ctx.unidadeDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.tipo_modalidade_id)("dao", ctx.tipoModalidadeDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 2)("valueTodos", null)("control", ctx.filter.controls.data_filtro)("items", ctx.DATAS_FILTRO);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 2)("disabled", ctx.filter.controls.data_filtro.value == null ? "true" : undefined)("control", ctx.filter.controls.data_filtro_inicio);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 2)("disabled", ctx.filter.controls.data_filtro.value == null ? "true" : undefined)("control", ctx.filter.controls.data_filtro_fim);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("titleTemplate", _r2)("template", _r4)("minWidth", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("titleTemplate", _r6)("template", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("titleTemplate", _r16)("template", _r18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", "Termo\nAssinaturas")("template", _r20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dynamicOptions", ctx.dynamicOptions.bind(ctx))("dynamicButtons", ctx.dynamicButtons.bind(ctx));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r28);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r32);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r34);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r36);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r38);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=997.js.map