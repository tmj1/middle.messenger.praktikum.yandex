import Block from 'core/Block';
import './message.css';
import { MessageProperties } from 'types';

export class Message extends Block {
    static componentName = 'Message';
    constructor({ owner, text, time, srcImg, isRead }: MessageProperties) {
        super({ owner, text, time, srcImg, isRead });
    }
    protected getStateFromProperties(Properties: MessageProperties): void {
        this.state = {
            owner: Properties.owner,
            text: Properties.text,
            time: Properties.time,
            srcImg: Properties.srcImg,
            isRead: Properties.isRead,
        };
    }
    protected render(): string {
        const { owner, text, time, srcImg, isRead } = this.state;
        const classesForTitle = `${
            !owner ? 'message_is-not-owner' : srcImg ? 'message_is-img' : ''
        }`;
        const classesForText = `${owner ? 'message__text_is-me' : 'message__text_is-friend'}`;
        const classesForTime = `${
            isRead ? 'message__time_is-not-read' : 'message__time_is-read'
        }`;
        // language=hbs
        return `
      <li class="message ${classesForTitle}">
        {{#if ${text.length > 0}}}
          <p class="message__text ${classesForText}">
            ${text}
            ${
            owner
                ? `<time class="message__time">${time}</time>`
                : `<time class="message__time ${classesForTime}">${time}</time>`
        }
          </p>
        {{/if}}
        {{#if ${srcImg.length > 0}}}
          <img class="message__img" src=${srcImg} alt="Прикрепленное фото пользователем" />
          ${
            owner
                ? `<time class="message__time message__time_is-img">${time}</time>`
                : `<time class="message__time ${classesForTime}">${time}</time>`
        }
        {{/if}}
      </li>
    `;
    }
}