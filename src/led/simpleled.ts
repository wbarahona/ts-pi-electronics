import five, { Board, Led } from 'johnny-five';
import {RaspiIO as Raspi} from 'raspi-io';
import pin from '../pins';

const simpleled = {
  init: () => {
    const board: Board = new five.Board({
        io: new Raspi
    }); 

    board.on('ready', () => {
      const led: Led = new five.Led(pin(11));

      led.blink(200);
    });
  }
};

export default simpleled;