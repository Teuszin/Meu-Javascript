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

 =-=-=-=-= Aula 7 =-=-=-=-=

 - Principais Operadores part. 1

    * Aritméticos
      * " + , - , * , / , % , ** "
      * (Adição, Subtração, Multiplicação, Divisão, Resto da Divisão e Potenciação)
      * Ordem de Precedência:
         * ( ) , ** , * / % , + -
         * ---------------------->

    * Atribuição
      * Simples: " = " Atribui um valor a uma variavel,ex: a = b
      * Auto-Atribuoção: Vai renovando o valor da mesma variavel, ex: a += 5
      * Incremento: Sempre adiciona 1 à variavel, ex: a++ (existe o pós e o pré)

 =-=-=-=-= Aula 8 =-=-=-=-=

 - Principais Operadores part. 2

    * Relacionais
      * >, <, >=, <=, ==, !=
      * (Maior, Menor, Maior Igual, Menor igual, Igual, Diferente)
      * Vão dar valores booleando
      * Relacionais de Identidade
         * ex: 5 == "5" (vai dar TRUE, por que o sinal de igualdade "==", não testa o tipo)
         para isso existe o Relacional de Identidade Restrita, o "===", isso testaria se os dois 5's são identicos, ou seja, do mesmo valor e do mesmo tipo, então daria "FALSE"

    * Lógicos
      * !, &&, ||
      * (Negação [NÃO], Conjunção [E], Disjunção [OU], a ordem de execução é essa também)
      * Eles só vao dar TRUE OU FALSE como resultado

    * Ternário
      * ? , :
      * TESTE ? TRUE : FALSE
      * (Teste lógico [TRUE OU FALSE], O que vai acontecer quando o teste der TRUE, O que vai acontecer quando o teste false)

 =-=-=-=-= Aula 9 =-=-=-=-=

 - Iniciando com o __DOM__

   É um acrônimo de Document Object Model (Modelo de Objetos para Documento [Conjuntos de objetos dentro do navegador, que vão dar acesso ao Site])

 - Árvore Dom:
   Quem vem em cima, é parent do de baixo, e o de baixo é child de quem  ta em cima
    * window
      * location (Localização do site [URL] e localição do Usuário)
      * document (Dumento Atual)
         * Html
            * head
               * meta
               * title
               ...
            * body
               * h1
               * p
                  * strong
               * div
               ...
      * history (Guarda a navegaçãp no site)
      ...
   
   Todos são elementos, e podem ser selecionados por:
    * Marma = getElementsByTagName()
    * ID = getElementById()
    * Nome = getElementsByName()
    * Clasee = getElementsByClassName()
    * Seletor (css) =  querySelector() // querySelectorAll() < prural