### Recomendações
```
- Antes de iniciar o desenvolvimento, dar obrigatoriamente um pull no back e front (para cada funcionalidade implementada, cada ticket um commit)
- build no front da aplicação (transpilar o front-end para a pasta public do back-end)
- commit no back e front (obrigatório para permitir o pull)
- pull no back e front
- resolver os conflitos no back e front, resolver os .maps com HEAD, e quando tiver conflito, perguntar à pessoa do arquivo que deu conflito
- se for pra gerar uma nova versão precisa alterar o arquivo app.json na propriedade "version"
- npm run build
- commmit no back-end e no front-end
- push no back-end e no front-end
```
### Dicionário de dados

## Sintaxe
- Usar sempre a extensão do VSCode php intelephense (Nunca deixar arquivo em vermelho)
- Indentação de 2 espaços
- Campos de banco de dados com nome composto sempre usar "_" (não pode haver letras maiúsculas)
- Propriedades de classes são sempre camelcase (exceto se for referente a campo de banco)
- Funções são sempre camelcase
- Propriedades do config (laravel) sempre são separados por "-"

## Metodos úteis
- Usar o metodo parent::loggedUser() ao invés do Auth::user() nos controllers e services
- Dentro de um service (herdado de ServiceBase), quando for necessário utilizar a data e hora da unidade que o usuário selecionou, utilizar o função dataHora()

## Datas
- Os campos de banco de dados armazenam as datas no formato date("Y-m-d H:i:s"). Caso precise alimentar um campo, esse deverá ser o formato adotado
- ... escrever aqui os equivalentes do JS 
