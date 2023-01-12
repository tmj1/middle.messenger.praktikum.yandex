import { Block } from 'core';
import './searchChat.css';
import { SearchChatProps } from './types';
import search from 'img/search.svg';
import { config, Popup } from 'utils';

export class SearchChat extends Block {
  static componentName = 'SearchChat';

  constructor({ ...rest }: SearchChatProps) {
    super({ ...rest });
  }

  protected getStateFromProps() {
    this.state = {
      handleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        new Popup(
          config.popupAddChatSelector,
          config.addChatBtnSelector,
          config.isOpenPopupSelector,
          config
        ).handleOpenPopup();
      },
    };
  }

  protected render(): string {
    // language=hbs
    return `
      <form class="search-chat page-search-chat">
        <label class="search-chat-label">
          {{{InputChat onInput=onSearchByChats}}}
          <img class="search-chat-img" src="${search}" alt="Поиск по чату" />
        </label>
        {{{Button
          onClick=handleSubmitForm
          type="button"
          classes="search-chat-btn"
        }}}
      </form>
    `;
  }
}
