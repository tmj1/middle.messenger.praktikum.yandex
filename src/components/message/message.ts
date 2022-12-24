import { Block } from 'core';
import './message.css';
import { MessageProps } from 'types';
import { MessageType } from './types';
import { getDate, MONTH } from 'utils';


export class Message extends Block {
  static componentName = 'Message';
  constructor({
    owner,
    content,
    time,
    isRead,
    isFirstUniqMessage,
  }: MessageProps & MessageType) {
    super({ owner, content, time, isRead, isFirstUniqMessage });
  }
  protected getStateFromProps(props: MessageProps & MessageType): void {
    this.state = {
      owner: props.owner,
      content: props.content,
      time: props.time,
      isRead: props.isRead,
      isFirstUniqMessage: props.isFirstUniqMessage,
    };
  }
  protected render(): string {
    const { owner, content, time, srcImg, isRead, isFirstUniqMessage } = this.state;

    const date = getDate(time);

    const classesForTitle = `${
      !owner ? 'message-is-not-owner' : srcImg ? 'message-is-img' : ''
    }`;
    const classesForText = `${owner ? 'message-text-is-me' : 'message-text-is-friend'}`;
    const classesForTime = `${
      isRead ? 'message-time-is-read' : 'message-time-is-not-read'
    }`;
    // language=hbs
    return `
      <li class="message ${classesForTitle}">
        ${
          isFirstUniqMessage
            ? `<p class="chat-text-date">${date.day} ${MONTH[date.month]}</p>`
            : ''
        }
        <p class="message-text ${classesForText}">
          ${content}
          ${
            owner
              ? `<time class="message-time">${date.hour}:${date.minute}</time>`
              : `<time class="message-time ${classesForTime}">${date.hour}:${date.minute}</time>`
          }
        </p>
      </li>
    `;
  }
}
