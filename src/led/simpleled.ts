import five, { Board, Led } from 'johnny-five';
import {RaspiIO as Raspi} from 'raspi-io';

const simpleled = {
    init: () => {
        const board: Board = new five.Board({
            io: new Raspi
        }); 

        board.on('ready', () => {
            const led: Led = new five.Led(13);

            console.log(led);
            

            led.blink(500);
        });
    }
};

export default simpleled;