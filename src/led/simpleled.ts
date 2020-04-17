import five, { Board, Led } from 'johnny-five';
import RaspiLib from 'raspi-io';

const { RaspiIO } = RaspiLib;

const simpleled = {
    init: () => {

        console.log(1);
        const board: Board = new five.Board({
            io: new RaspiIO
        });


        board.on('ready', () => {
            const led: Led = new five.Led(13);

            led.blink();
        });
    }
};

export default simpleled;