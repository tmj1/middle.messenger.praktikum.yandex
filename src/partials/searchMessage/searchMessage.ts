import Block from 'core/Block';
import './searchMessage.css';
import { searchMessageProperties } from './types';
import search from 'img/search.svg';

export class searchMessage extends Block {
    static componentName = 'searchMessage';
    constructor({ onSearchByChats }: searchMessageProperties) {
        super({ onSearchByChats });
    }
    protected render(): string {
        // language=hbs
        return `
      <form class="search-chat page__search-chat">
        <label class="search-chat__label">
          {{{EnterMessage onInput=onSearchByChats}}}
          <img class="search-chat__img" src="${search}" alt="Поиск по чату" />
        </label>
      </form>
    `;
    }
}