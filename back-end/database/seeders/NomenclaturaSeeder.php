<?php

namespace Database\Seeders;

use App\Models\Entidade;
use Illuminate\Database\Seeder;

class NomenclaturaSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $nomenclaturas = [
      "adesao" => ['single' => "adesão", 'plural' => "adesões", 'female' => true],
      "afastamento" => ['single' => "afastamento", 'plural' => "afastamentos", 'female' => false],
      "atividade" => ['single' => "detalhamento da execução", 'plural' => "detalhamentos da execução", 'female' => false],
      "avaliação" => ['single' => "avaliação", 'plural' => "avaliações", 'female' => true],
      "cadeia de valor" => ['single' => "cadeia de valor", 'plural' => "cadeias de valor", 'female' => true],
      "capacidade" => ['single' => "capacidade", 'plural' => "capacidades", 'female' => true],
      "cidade" => ['single' => "cidade", 'plural' => "cidades", 'female' => true],
      "data de distribuição" => ['single' => "data do registro", 'plural' => "datas do registro", 'female' => true],
      "demanda" => ['single' => "demanda", 'plural' => "demandas", 'female' => true],
      "documento" => ['single' => "documento", 'plural' => "documentos", 'female' => false],
      "entidade" => ['single' => "instituição", 'plural' => "instituições", 'female' => true],
      "entrega" => ['single' => "entrega", 'plural' => "entregas", 'female' => true],
      "entrega da demanda" => ['single' => "tarefa", 'plural' => "tarefas", 'female' => true],
      "eixo temático" => ['single' => "eixo temático", 'plural' => "eixos temáticos", 'female' => false],
      "feriado" => ['single' => "feriado", 'plural' => "feriados", 'female' => false],
      "justificativa" => ['single' => "justificativa", 'plural' => "justificativas", 'female' => true],
      "lotação" => ['single' => "lotação", 'plural' => "lotações", 'female' => true],
      "material e serviço" => ['single' => "material e serviço", 'plural' => "materiais e serviços", 'female' => false],
      "modalidade" => ['single' => "modalidade", 'plural' => "modalidades", 'female' => true],
      "motivo de afastamento" => ['single' => "motivo de afastamento", 'plural' => "motivos de afastamento", 'female' => false],
      "objetivo" => ['single' => "objetivo", 'plural' => "objetivos", 'female' => false],
      "perfil" => ['single' => "nível de acesso", 'plural' => "níveis de acesso", 'female' => false],
      "planejamento institucional" => ['single' => "planejamento institucional", 'plural' => "planejamentos institucionais", 'female' => false],
      "plano de trabalho" => ['single' => "plano de trabalho", 'plural' => "planos de trabalho", 'female' => false],
      "plano de entrega" => ['single' => "plano de entrega", 'plural' => "planos de entrega", 'female' => false],
      "ponto de controle" => ['single' => "ponto de controle", 'plural' => "pontos de controle", 'female' => false],
      "prazo de entrega" => ['single' => "prazo para conclusão", 'plural' => "prazos para conclusão", 'female' => false],
      "processo" => ['single' => "processo", 'plural' => "processos", 'female' => false],
      "programa de gestão" => ['single' => "regramento de instituição do pgd", 'plural' => "regramentos de instituição do pgd", 'female' => false],
      "projeto" => ['single' => "projeto", 'plural' => "projetos", 'female' => false],
      "requisição" => ['single' => "requisição", 'plural' => "requisições", 'female' => true],
      "rotina de integração" => ['single' => "rotina de integração", 'plural' => "rotinas de integração", 'female' => true],
      "tarefa" => ['single' => "tarefa", 'plural' => "tarefas", 'female' => true],
      "tcr" => ['single' => "tcr", 'plural' => "tcrs", 'female' => false],
      "tempo pactuado" => ['single' => "esforço", 'plural' => "esforços", 'female' => false],
      "tempo planejado" => ['single' => "tempo planejado", 'plural' => "tempos planejados", 'female' => false],
      "template" => ['single' => "template", 'plural' => "templates", 'female' => false],
      "termo" => ['single' => "tcr compilado", 'plural' => "tcr compilados", 'female' => false],
      "tipo de atividade" => ['single' => "tipo de registro de execução", 'plural' => "tipos de registro de execução", 'female' => false],
      "unidade" => ['single' => "unidade executora", 'plural' => "unidades executoras", 'female' => true],
      "usuario" => ['single' => "agente público", 'plural' => "agentes públicos", 'female' => false],
      // Faltantes com DB de Prod em 19/03/24
      "área de trabalho" => ['single' => "área de trabalho", 'plural' => "áreas de trabalho", 'female' => true],
      "area do conhecimento" => ['single' => "area do conhecimento", 'plural' => "areas dos conhecimentos", 'female' => true],
      "atribuição" => ['single' => "atribuição", 'plural' => "atribuições", 'female' => true],
      "consolidação" => ['single' => "registro de execução", 'plural' => "registros de execução", 'female' => false],
      "data de homologação" => ['single' => "data de homologação", 'plural' => "datas de homologação", 'female' => true],
      "modelo de entrega:" => ['single' => "tipo de meta", 'plural' => "tipos de meta", 'female' => false],
      "notificação" => ['single' => "notificação", 'plural' => "notificações", 'female' => true],
      "pela unidade gestora" => ['single' => "pela Unidade Gestora", 'plural' => "pelas Unidades Gestoras", 'female' => true],
      "resultado institucional" => ['single' => "resultado institucional", 'plural' => "resultados institucionais", 'female' => false],
      "produtividade" => ['single' => "produtividade", 'plural' => "produtividades", 'female' => true],
      "programa" => ['single' => "programa", 'plural' => "programas", 'female' => false],
      "responsável" => ['single' => "agente p. responsável", 'plural' => "agentes p. responsáveis", 'female' => false],
      "texto complementar" => ['single' => "particularidade da unidade e participante", 'plural' => "particularidades da unidade e participante", 'female' => true],
      "tipo de indicador" => ['single' => "tipo de indicador", 'plural' => "tipos de indicadores", 'female' => false],
      "tipo de capacidade" => ['single' => "tipo de capacidade", 'plural' => "tipos de capacidades", 'female' => false],
      "valor institucional" => ['single' => "valor institucional", 'plural' => "valores institucionais", 'female' => false],
      "administrador" => ['single' => "administrador", 'plural' => "administradores", 'female' => false],
      "cadastro" => ['single' => "cadastro", 'plural' => "cadastros", 'female' => false],
      "desenvolvedor" => ['single' => "desenvolvedor", 'plural' => "desenvolvedores", 'female' => false],
      "execução" => ['single' => "execução", 'plural' => "execuções", 'female' => false],
      "gerenciamento" => ['single' => "gerenciamento", 'plural' => "gerenciamentos", 'female' => false],
      "perfil do menu" => ['single' => "perfil do menu", 'plural' => "perfis do menu", 'female' => false],
      "planejamento" => ['single' => "planejamento", 'plural' => "planejamentos", 'female' => false],
      "ponto eletrônico" => ['single' => "ponto eletrônico", 'plural' => "pontos eletrônicos", 'female' => false],
      "desabilitado" => ['single' => "não selecionado", 'plural' => "não selecionados", 'female' => false],
      "desabilitar" => ['single' => "desligar", 'plural' => "desligar", 'female' => false],
      "inclusão de atividade" => ['single' => "inclusão de registro detalhado", 'plural' => "inclusões de registros detalhados", 'female' => false],
      "habilitação" => ['single' => "seleção de participantes", 'plural' => "seleção de participantes", 'female' => true],
      "habilitado" => ['single' => "selecionado", 'plural' => "selecionados", 'female' => false],
      "habilitar" => ['single' => "selecionar", 'plural' => "selecionar", 'female' => false],
      "modelo de entrega" => ['single' => "tipo de meta", 'plural' => "tipos de meta", 'female' => false],
      "ocorrência" => ['single' => "ocorrência", 'plural' => "ocorrências", 'female' => true],
    ];

    $entidade = Entidade::first() ?? new Entidade();

    foreach ($nomenclaturas as $id => $nomenclatura) {
      if (!in_array($id, array_column($entidade->nomenclatura ?? [], 'id'))) {
        $entidade->nomenclatura = array_merge($entidade->nomenclatura ?? [], [
          [
            "id" => $id,
            "nome" => $id,
            "plural" => $nomenclatura["plural"],
            "feminino" => $nomenclatura["female"],
            "singular" => $nomenclatura["single"]
          ]
        ]);
      }
    }

    $entidade->save();
  }
}
