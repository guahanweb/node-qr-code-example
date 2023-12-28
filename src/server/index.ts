import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

export function createServer() {
    const app = express();

    app.set('view engine', 'pug');
    app.set('views', path.resolve(__dirname, '../views'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    return app;
}
