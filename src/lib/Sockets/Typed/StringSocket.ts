import Socket from '../Socket';
import { SocketValueType } from '../SocketValueType';

export default class StringSocket extends Socket {
  constructor(
    name: string,
    value: string = '',
  ) {
    super(name, SocketValueType.String, value);
  }
}
