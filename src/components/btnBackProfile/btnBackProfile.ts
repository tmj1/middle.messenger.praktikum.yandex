import { Block } from 'core';
import './btnBackProfile.css';
import { BtnBackProfileProps } from './types';
import left_arrow from 'img/left-arrow.svg';


export class BtnBackProfile extends Block {
  static componentName = 'BtnBackProfile';
  constructor({ onClick }: BtnBackProfileProps) {
    super({ events: { click: onClick } });
  }

  protected render(): string {
    // language=hbs
    return `
      <li class="profile-btn">
        <Button class="profile-btn-link" aria-label="Вернуться назад">
          <div class="profile-btn-wrap">
            <img
              class="profile-icon"
              src="${left_arrow}"
              alt="Иконка вернуться назад"
            />
          </div>
        </Button>
      </li>
    `;
  }
}
