import { Block } from 'core';
import './listItem.css';
import { ListItemProps } from './types';
import { ChatType } from 'types';
import { getDate, DAYS, DATA_ATTRIBUTE } from 'utils';

export class ListItem extends Block {
  static componentName = 'ListItem';

  constructor({ onClick, ...rest }: ChatType & ListItemProps) {
    super({
      events: { click: onClick },
      ...rest,
    });
  }

  protected getStateFromProps(props: ChatType & ListItemProps): void {
    this.state = {
      id: props.id,
      userName: props.userName,
      lastMessage: props.lastMessage,
      time: props.time,
      countNotReadMessage: props.countNotReadMessage,
      srcAvatar: props.srcAvatar,
      isOwnerLastMessage: props.isOwnerLastMessage,
    };
  }

  protected render(): string {
    const {
      id,
      userName,
      lastMessage,
      time,
      countNotReadMessage,
      srcAvatar,
      isOwnerLastMessage,
    } = this.state;

    const date = getDate(time);

    const lastMessageText =
      isOwnerLastMessage === 'true'
        ? `<span class="list-item-message list-item-message-bold">Вы:</span>${lastMessage}`
        : lastMessage;

    // language=hbs
    return `
      <li class="list-item" ${DATA_ATTRIBUTE.CHAT_ID}="${id}">
        <div class="list-item-container">
          ${
      srcAvatar
        ? '<div class="list-item-plug-avatar"></div>'
        : `{{{Avatar srcAvatar="${srcAvatar}" userName="${userName}"}}}`
    }
          <div class="list-item-inner">
            <p class="list-item-user-name">${userName}</p>
            <p class="list-item-message">
              ${lastMessage !== 'null' ? lastMessageText : ''}
            </p>
          </div>
          <div class="list-item-wrap">
            <time class="list-item-time">${
      time !== 'null' ? DAYS[date.day - 1] : ''
    }</time>
            <p class="list-item-count-message {{#if ${countNotReadMessage}}}list-item-count-message-is-show{{/if}}">${countNotReadMessage}</p>
          </div>
        </div>
      </li>
    `;
  }
}
