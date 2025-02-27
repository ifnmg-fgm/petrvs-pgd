import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-raioxhome',
  templateUrl: './raioxhome.component.html',
  styleUrls: ['./raioxhome.component.scss']
})

export class RaioxhomeComponent implements OnInit {

  logoInicial: string;
  imgDadosPessoais: string;
  imgDadosProfissionais: string;
  imgAtributos: string;
  imgOportunidades: string;

  constructor(private router: Router, private auth: AuthService) {
    this.logoInicial = "../../../../assets/images/logo_raiox_1.png";
    this.imgDadosPessoais = "../../../../assets/images/dados_pessoais.png";
    this.imgDadosProfissionais = "../../../../assets/images/dados_profissionais.png";
    this.imgAtributos = "../../../../assets/images/atributos_comportamentais.png";
    this.imgOportunidades = "../../../../assets/images/oportunidade.png";
  }

  ngOnInit(): void {
  }

  dadosPessoais() {
    this.router.navigate(['raiox/pessoal'])
  }

  public mensagemSaudacao() {
    const hora = parseInt(this.auth.unidadeHora.replace(":", ""));
    const apelido = this.auth.usuario?.apelido.toUpperCase();
    const mail = this.auth.usuario?.email;
    return hora < 1200 ? "BOM DIA, " + apelido : hora < 1800 ? "BOA TARDE, " + apelido : "BOA NOITE, " + apelido;
  }
}
