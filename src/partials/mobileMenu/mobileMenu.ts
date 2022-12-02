import './mobileMenu.css';
import Block from '../../core/Block';
import { mobileMenuProperties } from './types';

export class mobileMenu extends Block {
    static componentName = 'mobileMenu';
    constructor({ onClick }: mobileMenuProperties) {
        super({ events: { click: onClick } });
    }
    protected render(): string {
        return `
      <button class="mobile-menu" aria-label="Кнопка меню">
        <svg
          class="mobile-menu__btn-icon"
          width="3"
          height="16"
          viewBox="0 0 3 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1.5" cy="2" r="1.5"></circle>
          <circle cx="1.5" cy="8" r="1.5"></circle>
          <circle cx="1.5" cy="14" r="1.5"></circle>
        </svg>
      </button>
    `;
    }
}