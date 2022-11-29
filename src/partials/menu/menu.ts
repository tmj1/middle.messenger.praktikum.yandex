import Block from 'core/Block';
import './menu.css';
import { MenuProperties } from './types';
import { Popup } from 'utils/classes/Popup';
import { config } from 'utils/constants';
import plus from 'img/plus.svg';
import close from 'img/close.svg';
import photo from 'img/photo.svg';
import file from 'img/file.svg';
import location from 'img/location.svg';

export class Menu extends Block {
    static componentName = 'Menu';
    constructor({ isUser }: MenuProperties) {
        super({ isUser });
    }
    protected getStateFromProperties(Properties: MenuProperties): void {
        this.state = {
            isUser: Properties.isUser,

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
                alt="Иконка плюса"
                classes="menu-button_add-user"
                type="button"
                onClick=handleAddUserPopup
              }}}
            </li>
            <li class="menu__item">
              {{{MenuButton
                text="Удалить пользователя"
                icon="${close}"
                alt="Иконка крестика"
                classes="menu-button_delete-user"
                type="button"
                onClick=handleDeleteUserPopup
              }}}
            </li>
          </ul>
        </nav>
      {{else}}
        <nav class="menu menu__list_element_file">
          <ul class="menu__list">
            <li class="menu__item">
              {{{MenuButton
                text="Фото или Видео"
                icon="${photo}"
                alt="Иконка плюса"
                classes="menu-button_add-photo"
                type="button"
                onClick=handleDeleteUserPopup
              }}}
            </li>
            <li class="menu__item">
              {{{MenuButton
                text="Файл"
                icon="${file}"
                alt="Иконка крестика"
                classes="menu-button_add-file"
                type="button"
                onClick=handleDeleteUserPopup
              }}}
            </li>
            <li class="menu__item">
              {{{MenuButton
                text="Локация"
                icon="${location}"
                alt="Иконка локации"
                classes="menu-button_add-location"
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