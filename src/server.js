const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Configurando nunjucks (Template Engine);
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Início e configuração do servidor
server
    // Receber os dados do req.body
    .use(express.urlencoded({ extended: true }))
    // Configurando arquivos estáticos (css, scripts, imgs);
    .use(express.static('public'))
    // Rotas da aplicação;
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    // Start do servidor
    .listen(5500) // Porta do servidor

console.log('Aqui é back-end');
// console.log() no back-end é aqui no VSCODE, no terminal