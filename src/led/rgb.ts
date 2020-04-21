import five, { Board, Led } from 'johnny-five';
import {RaspiIO as Raspi} from 'raspi-io';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../auth/serviceAccount.json';
import pin from '../pins';

const rgb = {
  init: () => {
    const board: Board = new five.Board({
      io: new Raspi
    });

    board.on('ready', () => {
      const led: Led.RGB = new Led.RGB({
        pins: [ pin(11), pin(13), pin(15) ]
      });

      // lel cuz ts wont allow snake cased keys
      const certParams = {
        type: serviceAccount.type,
        projectId: serviceAccount.project_id,
        privateKeyId: serviceAccount.private_key_id,
        privateKey: serviceAccount.private_key,
        clientEmail: serviceAccount.client_email,
        clientid: serviceAccount.client_id,
        authuri: serviceAccount.auth_uri,
        tokenuri: serviceAccount.token_uri,
        authproviderX509CertUrl: serviceAccount.auth_uri,
        clientX509CertUrl: serviceAccount.client_x509_cert_url
      };

      // init firebase
      admin.initializeApp({
        credential: admin.credential.cert(certParams),
        databaseURL: 'https://raspberry-7069a.firebaseio.com'
      });

      const db = admin.database();
      const ref = db.ref('firedata/color');

      ref.on('value', (snapshot) => {
        if (snapshot) {
          const color = snapshot.val();

          console.log(color);

          board.repl.inject({ led });

          led.on();
          led.color(color);
          // led.blink(1000);
        }
      }, (err: any) => {
        console.log(err);
      });
    });
  }
};

export default rgb;