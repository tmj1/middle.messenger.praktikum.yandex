import { Block } from 'core';
import './chatLink.css';
import { ChatLinkProps } from './types';
import rightArrow from 'img/right-arrow.svg';


export class ChatLink extends Block {
  static componentName = 'ChatLink';
  constructor({ onClick }: ChatLinkProps) {
    super({ events: { click: onClick } });
  }
  protected render(): string {
    // language=hbs
    return `
      <Button class="link-profile page-link-profile">
        <span class="link-profile-text">Профиль</span>
        <img class="link-profile-img" src="${rightArrow}" alt="Перейти к профилю пользователя">
      </Button>
    `;
  }
}
