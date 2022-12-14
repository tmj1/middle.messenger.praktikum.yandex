import { Block } from 'core';
import './menu.css';
import { MenuProps } from './types';
import { config, Popup } from 'utils';
import plus from 'img/plus.svg';
import close from 'img/close.svg';
import photo from 'img/photo.svg';
import file from 'img/file.svg';
import location from 'img/location.svg';
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
        <nav class="menu menu-list-element-user">
          <ul class="menu-list">
            <li class="menu-item">
              {{{MenuButton
                text="Добавить пользователя"
                icon="${plus}"
                alt="Иконка плюса"
                classes="menu-button_add-user"
                type="button"
                onClick=handleAddUserPopup
              }}}
            </li>
            <li class="menu-item">
              {{{MenuButton
                text="Удалить пользователя"
                icon="${close}"
                alt="Иконка крестика"
                classes="menu-button_delete-user"
                type="button"
                onClick=handleDeleteUserPopup
              }}}
            </li>
            <li class="menu-item">
            {{{Button
              onClick=handleRemoveChat
              textBtn="Удалить чат"
              type="button"
              classes="button-el-remove-item"
            }}}
            </li>
          </ul>
        </nav>
      {{else}}
        <nav class="menu menu-list-element-file">
          <ul class="menu-list">
            <li class="menu-item">
              {{{MenuButton
                text="Фото или Видео"
                icon="${photo}"
                alt="Иконка плюса"
                classes="menu-button_add-photo"
                type="button"
              }}}
            </li>
            <li class="menu-item">
              {{{MenuButton
                text="Файл"
                icon="${file}"
                alt="Иконка крестика"
                classes="menu-button_add-file"
                type="button"
              }}}
            </li>
            <li class="menu-item">
              {{{MenuButton
                text="Локация"
                icon="${location}"
                alt="Иконка локации"
                classes="menu-button_add-location"
                type="button"
              }}}
            </li>
          </ul>
        </nav>
      {{/if}}
    `;
  }
}
