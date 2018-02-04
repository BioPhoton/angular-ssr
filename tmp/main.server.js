import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from './aot/src/app/app.server.module.ngfactory';
import * as express from 'express';
import { ngExpressEngine } from './express-engine';
enableProdMode();
var app = express();
app.engine('html', ngExpressEngine({
    baseUrl: 'http://localhost:8000',
    bootstrap: [AppServerModuleNgFactory],
}));
app.set('view engine', 'html');
app.set('views', '.');
app.get('/', function (req, res) {
    res.render('index', { req: req });
});
app.get('/home*', function (req, res) {
    res.render('index', { req: req });
});
app.get('/flight-booking*', function (req, res) {
    res.render('index', { req: req });
});
app.get('/passenger*', function (req, res) {
    res.render('index', { req: req });
});
app.get('/history*', function (req, res) {
    res.render('index', { req: req });
});
app.use(express.static('.'));
app.listen(8000, function () {
    console.log('listening...');
});
