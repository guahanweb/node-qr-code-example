import qr from 'qrcode';

import { configuration } from "./config";
import { createServer } from "./server";
import { Request, Response } from 'express';

if (require.main === module) {
    const app = createServer();

    // set up our routes
    // for this demo, we just have the handlers in this file
    app.get('/', (req: Request, res: Response) => {
        res.render('index');
    });

    app.post('/generate', (req: Request, res: Response) => {
        const url = req.body.url;

        if (url.length === 0) {
            res.send('Empty Data!');
        }

        // convert the input to a QR code
        // image will be a PNG in the form of a data URI
        qr.toDataURL(url, (err, src) => {
            if (err) {
                res.send('Error occured');
            }

            // render the view with the qr code
            res.render('code', { src });
        })
    });

    app.listen(configuration.port);
    console.info(`listenting on port ${configuration.port}`);
} 
