import Block from 'core/Block';
import './menu.css';
import { MenuProps } from './types';
import { Popup } from 'utils/classes/Popup';
import { config } from 'utils/constants';
import plus from 'img/plus.svg';
import close from 'img/close.svg';
import photo from 'img/photo.svg';
import file from 'img/file.svg';
import { chatService } from 'services';

export class Menu extends Block {
  static componentName = 'Menu';
  constructor({ isUser, chatItemId }: MenuProps) {
    super({ isUser, chatItemId });
  }
  protected getStateFromProps(props: MenuProps): void {
    this.state = {
      isUser: props.isUser,
      chatItemId: props.chatItemId,

      handleAddUserPopup: () => {
        new Popup(
          config.popupAddUserSelector,
          config.menuBtnAddUserSelector,
          config.isOpenPopupSelector,
          config
        ).handleOpenPopup();
      },
      handleDeleteUserPopup: () => {
        new Popup(
          config.popupDeleteUserSelector,
          config.menuBtnDeleteUserSelector,
          config.isOpenPopupSelector,
          config
        ).handleOpenPopup();
      },
      handleRemoveChat: () => {
        chatService.removeChatById({ chatId: this.state.chatItemId });
        Popup.handleClosePopup(config.isShowMenuSelector);
      },
    };
  }

  protected render(): string {
    // language=hbs
    return `
      {{#if ${this.state.isUser}}}
        <nav class="menu menu__list_element_user">
          <ul class="menu__list">
            <li class="menu__item">
              {{{MenuButton
                text="Добавить пользователя"
                icon="${plus}"
                alt="Иконка добавить"
                classes="menu-button_add-user"
                type="button"
                onClick=handleAddUserPopup
              }}}
            </li>
            <li class="menu__item">
              {{{MenuButton
                text="Удалить пользователя"
                icon="${close}"
                alt="Иконка закрыть"
                classes="menu-button_delete-user"
                type="button"
                onClick=handleDeleteUserPopup
              }}}
            </li>
              <li class="menu__item">
                  {{{Button
                          onClick=handleRemoveChat
                          textBtn="Удалить чат"
                          type="button"
                          classes="button_el_remove-item"
                  }}}
              </li>
          </ul>
        </nav>
      {{else}}
        <nav class="menu menu__list_element_file">
          <ul class="menu__list">
            <li class="menu__item">
              {{{MenuButton
                text="Добавить фото или видео"
                icon="${photo}"
                alt="Иконка добавить"
                classes="menu-button_add-photo"
                type="button"
                onClick=handleDeleteUserPopup
              }}}
            </li>
            <li class="menu__item">
              {{{MenuButton
                text="Добавить файл"
                icon="${file}"
                alt="Иконка закрыть"
                classes="menu-button_add-file"
                type="button"
                onClick=handleDeleteUserPopup
              }}}
            </li>
          </ul>
        </nav>
      {{/if}}
    `;
  }
}
