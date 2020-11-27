Projeto da discliplina INTRODUÇÃO A MULTIMIDIA - 2020.3

Primeiros passos

Vamos começar instalando os programas necessários pra fazer o projeto: Node.js
Primeiro verifique se já tem o node.js na sua máquina, para isso é necessário abrir o terminal
e digitar o comando node --version . Se já tiver verifique se é a versão mais recente (no
momento é a 12.18.4, se não tiver o node baixado você pode ir no site e baixar o node na
sua máquina.

Npm

Provavelmente o npm já será instalado junto com o node.js, mas você pode conferir se tem
npm na sua máquina usando o comando npm --version, a versão mais recente e usada no
momento é a 6.14.6.

Com o npm instalado vamos criar a pasta onde o projeto ficará. Abra o terminal nessa pasta
e digite o comando npm init, esse comando vai iniciar um projeto em node.

anTONEo.js 2

Tone.js e dependências
Para instalar o Tone pelo terminal digite o comando npm install tone;

Para instalar o Web Bundler Parcel, que é um empacotador de aplicativos web que
vamos precisar, digite no terminal o comando npm install -g parcel-bundler;

Para instalar o Babel, que é um compilador de JavaScript que também vamos precisar,
digite no terminal npm install --save-dev @babel/core.

Como executar o código para rodar no navegador? 

Com o terminal aberto na pasta do projeto digite o comando npm install e em seguida npm start . O primeiro só
precisa ser executado uma vez, enquanto o segundo tem que ser executado todas as vezes que
você quiser rodar o projeto. Quando você executar o npm start no terminal irá obter uma
mensagem como essa:
Server running at http://localhost:1234
✨ Built in 562ms.
