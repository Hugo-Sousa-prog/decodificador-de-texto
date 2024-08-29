# 📃 Decodificador de Texto

![Static Badge](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)

Este projeto realizado foi um desafio proposto pelo projeto ONE (Oracle Next Education), em parceria com a Alura. Consiste em um site que criptografa ou descriptografa palavras.

<h4>Projeto em finalização</h4>

>O que foi solicitado no desafio já está completo, porém ainda quero trabalhar com a responsividade do projeto, tornado-o mais acessível e interativo de qualquer dispositivo.

# 🛠️ Funcionalidades do projeto
- `Botão Criptografar`: É utilizado no arquivo <a href="app.js">app.js</a> a função criptografarTexto() o método replace para criptografar as palavras, bara mais detalhes conferir a função na linha 19 do arquivo.

- `Botão Descriptografar`: É feito o inverso da função criptografarTexto() para descriptografar os textos ainda utilizando o método replace, conferir a lógica da função descriptografarTexto() na linha 40 do <a href="app.js">app.js</a>

- `Botão Copiar`: Pesquisei sobre API Clipboard e utilizei na função copiarTexto() para copiar o texto da textarea do resultado da criptografação/descriptografação.

- `Validação`: Como requisito do projeto, não eram aceitas letras maiúsculas e caracteres especiais, então inclui um if nas funções criptografarTexto() e descriptografarTexto() para fazer essa verificação e caso verdadeiro retorna um alert.

- `function botaoVisivel`: Esse foi o que mais me deu "dor de cabeça", como um extra quis colocar um botão de copiar na página, o botão de copiar em questão foi bem simples de fazer após pesquisar sobre, mas fazer ele aparecer na textarea após gerar o resultado foi um pouco desafiador. Após a geração do resultado tudo que estava na textarea "sumia" (imagem, texto e o botão de copiar), então decidi ocultar o botão através do CSS (visibilty: hidden) e remover o atribudo por um função no JavaScript, mas não deu certo, tentei de várias formas... com setAtributte, removeAtributte, mas nada funcionava. Até que chamei por reforços e com a ajuda de um amigo achamos o X da questão, acontece que como dito anteriormente "tudo que estava na textarea "sumia"", então ao tentar alterar a propriedade do botão pelo JS a função não encontrava nenhum elemento, porquê ele não se encotrava mais na textarea. Como solução fiz uma tag div no HTML dentro da textarea com os textos, imagem e o botão, que seriam "escondidos" pela função ‎botaoVisivel() quando o resultado fosse gerado e o inverso aconteceria com o botão, que se encontra escondido (display: none), até ser chamado pela função e aparecer (display: block).

# 🔗 Acesso ao projeto
É possível acessar o projeto por meio deste <a href="https://decodificador-de-texto-one-iota.vercel.app">link</a>

# ⌨ Tecnologias utilizadas
![css_icon](https://github.com/user-attachments/assets/3a588f78-603c-4f80-a1c7-1582fb944da0)
![js_icon](https://github.com/user-attachments/assets/64fd497a-37fc-4509-8a90-15dcaa4a104a) 
![html5_icon](https://github.com/user-attachments/assets/25fb262c-4dbd-451c-9dd5-193e601e3b8a) 
