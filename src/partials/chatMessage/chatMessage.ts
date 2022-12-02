import Block from 'core/Block';
import './ChatMessage.css';
import { ChatMessageProperties } from './types';
import attach_btn from 'img/attach-btn.svg';
import send_btn from 'img/send-btn.svg';

export class ChatMessage extends Block {
    static componentName = 'ChatMessage';
    constructor({ onClick }: ChatMessageProperties) {
        super({ events: { click: onClick } });
    }
    protected render(): string {
        // language=hbs
        return `
      <div class="chat-footer">
        <form class="chat-footer__form">
          <button class="chat-footer__btn-attach" type="button" aria-label="Прирепить файл">
            <img
              class="chat-footer__icon-attach"
              src="${attach_btn}"
              alt="Иконка прирепить файл"
            />
          </button>
          <input class="chat-footer__input" type="text" placeholder="Поиск" required />
          <button class="chat-footer__btn-send" type="submit" aria-label="Отправить сообщение">
            <img
              class="chat-footer__icon-send"
              src="${send_btn}"
              alt="Иконка отправить сообщение"
            />
          </button>
        </form>
      </div>
    `;
    }
}