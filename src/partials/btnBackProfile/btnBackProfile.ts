import left_arrow from '../../image/left-arrow.svg';
import './btnBackProfile.css';
import Block from '../../core/Block';
import { BtnBackProfileProperties } from './types';

export class BtnBackProfile extends Block {
    static componentName = 'BtnBackProfile';
    constructor({ href }: BtnBackProfileProperties) {
        super({ href });
    }
    protected getStateFromProperties(Properties: BtnBackProfileProperties): void {
        this.state = {
            href: Properties.href,
        };
    }
    protected render(): string {
        // language=hbs
        return `
      <li class="profile-btn">
        <a href="${this.state.href}" class="profile-btn__link" aria-label="Вернуться назад">
          <div class="profile-btn__wrap">
            <img class="profile__icon" src="${left_arrow}"  alt="Назад"/>
          </div>
        </a>
      </li>
    `;
    }
}