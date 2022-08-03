import { MessageType } from './enum/MessageType';
import moment from 'vue-moment';

import { IContact } from './Contact';

interface IConversation {
  id?: number;
  name: string;
  time: moment.MomentInput;
  contact: IContact;
  messages: IMessage[];
  collateralFile: ICollateralFile;
}

interface IMessage {
  id?:number;
  type: MessageType;
  message: String;
  time: moment.MomentInput;
}

interface ICollateralFile {}

export { IConversation, IMessage, ICollateralFile };
