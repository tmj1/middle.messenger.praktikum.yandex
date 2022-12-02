import Block from 'core/Block';
import './ListMessage.css';
import { ListMessageProperties } from './types';
import { ChatType } from 'types';

export class ListMessage extends Block {
    static componentName = 'ListMessage';
    constructor({
                    userName,
                    lastMessage,
                    time,
                    countNotReadMessage,
                    srcAvatar,
                    onClick,
                }: ChatType & ListMessageProperties) {
        super({
            userName,
            lastMessage,
            time,
            countNotReadMessage,
            srcAvatar,
            events: { click: onClick },
        });
    }
    protected getStateFromProperties(Properties: ChatType): void {
        this.state = {
            userName: Properties.userName,
            lastMessage: Properties.lastMessage,
            time: Properties.time,
            countNotReadMessage: Properties.countNotReadMessage,
            srcAvatar: Properties.srcAvatar,
        };
    }
    protected render(): string {
        const { userName, lastMessage, time, countNotReadMessage, srcAvatar } = this.state;
        // language=hbs
        return `
      <li class="list-item">
        <div class="list-item__container">
          {{{Avatar srcAvatar="${srcAvatar}" userName="${userName}"}}}
          <div class="list-item__inner">
            <p class="list-item__user-name">${userName}</p>
            <p class="list-item__message">{{#unless ${countNotReadMessage}}}<span class="list-item__message list-item__message_bold">Вы:</span>{{/unless}}${lastMessage}</p>
          </div>
          <div class="list-item__wrap">
            <time class="list-item__time">${time}</time>
            <p class="list-item__count-message {{#if ${countNotReadMessage}}}list-item__count-message_is-show{{/if}}">${countNotReadMessage}</p>
          </div>
        </div>
      </li>
    `;
    }
}