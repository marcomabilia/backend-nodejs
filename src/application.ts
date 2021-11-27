import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()

const application = express()
const path = require('path');

application.engine('html', require('ejs').renderFile);
application.set('view engine','html');
application.use('/public',express.static(path.join(__dirname,'public')));
application.set('views', path.join(__dirname,'views'));


application.get('/saque/cc/:quantia', (req, res) => {
   res.render('index',{quantia:req.params.quantia , saldo:1500, tipoConta:'Conta Corrente', tipo:2})
})

application.get('/saque/poup/:quantia', (req, res) => {
    res.render('index',{quantia:req.params.quantia, saldo:400 , tipoConta:'Poupança', tipo:2})
})

application.get('/deposito/cc/:quantia', (req, res) => {
    res.render('index',{quantia: req.params.quantia , saldo:3000 , tipoConta:'Conta Corrente' , tipo:1, })
})

application.get('/deposito/poup/:quantia', (req, res) => {
    res.render('index',{quantia: req.params.quantia , saldo:500 , tipoConta:'Poupança' , tipo:1, })
})

application.set('port', process.env.APP_PORT || 5000)

export { application }
