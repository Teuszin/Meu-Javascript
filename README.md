# Meu Javascript
 Aprendendo Java

 =-=-=-=-= Aula 1 =-=-=-=-=

 Surgiu como uma tecnologia para clientes (Tecnologia "client side")

 - Cliente (Website) - Compostor por:

     * Conteúdo -> Html
     * Design (Estilo) -> Css
     * Programação (Interação) -> __JavaScritpt__

 =-=-=-=-= Aula 2 =-=-=-=-=
 
 Surgimento do JavaScript

 Tecnologias a se aprender:

     • Jquery 
     • Angular 
     • React 
     • Vue 
     • Electron 
     • Ionic 
     • Cordova
     ------//------
     • Phaser 
     • PixiJS 
     • Impact 
     • Melon.Js 
     • CraftyJs

 =-=-=-=-= Aula 3 =-=-=-=-=

 

 - Bibliografia:

     * JapaScript - O Guia Definitivo - Davic Flanagun
     * JapaScript - Guia do Programador - Mauricio Samisilva
     * Guia de Referência da [Mozilla](https://developer.mozilla.org/pt-BR/)
     * Guia de Referência da [Ecma](https://www.ecma-international.org/)

 - Instalação do Node.js (o Visual Code eu ja tinha)

 =-=-=-=-= Aula 4 =-=-=-=-=

 - Head: Onde vão as configurações
 - Body: Onde vai aparecer no site
    - Window: Pra aparecer um prompt
        - .alert() = Exibe prompt de alerta
        - .confirm() = Exibe prompt de confirmação
        - .prompt() = Exibe prompt de pergunta

 =-=-=-=-= Aula 5 =-=-=-=-=

 - Comentários:
    - // = comentários de uma única linha > Apenas em JavaScript
    - <!-- --> = comentários de mais uma linha > Apenas em html
    - /* */ = comentários de mais uma linha > JavaScript e Css
    

 - Variáveis e Tipos Primitivos:
    - Pode ser nomeado como "var", "const" ou "let"
    - A palavra que vem depois, chama-se __Identificador__, o que irá dar nome a variável 
        * Pode começar com letra, $ ou _
        * Não pode começar com números
        * Pode conter letras e númeors
        * É possível usar acentos e símbolos
        * Não pode conter espaços
        * Não podem ser palavras reservadas (palavras que o JS usa como comandos)
        * Maiúsculas e minúsculas fazem diferença

    - O valor atribuído a ela, chama-se __Atribuição__

    * " = " = Ler-se como __Recebe__ (se receber um "null" significa que ficará vazio)
    * [ __''__ ] , [ __""__ ] e [ __``__ " ] = Servem para delimitar strings

 - Tipos Primitívos (primordiais)
    * Number
        * Infinity
        * NaN
    * String
    * Boolean
    * Null
    * Undefined
    * Object
        * Array
    * Function

    O comando __typeof__ identifica o tipo de um valor ou de uma variavel

 - Utilizando o Node.Js

 =-=-=-=-= Aula 6 =-=-=-=-=

 Tratamento de Dados

 - Converter para Number:
    * Number.parseInt(n) = Converter pra inteiro
    * Number.parseFloat(n) = Converter pra flutuante
    * Number(n) = Converter pra Number

 - Converter para String:
    * String(n) = Converter pra String
    * n.toString() = Converter pra String

 - Formatando Strings:

    var algo = "aleatório"

    * "exemplo __algo__" > Não faz interpolação
    * "exemplo" + __algo__ > Usa concatenação
    * `exemplo ${__algo__}` > Usa __template string__ (tem que usar as crases)

    * __algo__.length > Quantos caracteres tem a String
    * __algo__.toUpperCase() > Poe tudo pra MAIÚSCULO
    * __algo__.toLowerCase() > Poe tudo pra minúsculo

 - Formatando Numbers:

    * __algo__.toFixed() = Difinir a quantidade de casas decimais
    * __algo__.toFixed().replace('algo','outra coisa') = Mudar de ponto pra virgula por exemplo
    * __algo__.toLocateString('pt-BR',{style: 'currency',currency:'BRL'}) = Converte o número pra moeda monetária do respectivo país