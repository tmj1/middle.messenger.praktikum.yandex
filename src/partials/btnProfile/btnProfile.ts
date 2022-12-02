import Block from 'core/Block';
import './btnProfile.css';
import { BtnProfileProperties } from './types';

export class BtnProfile extends Block {
    static componentName = 'BtnProfile';
    constructor({ text, classes, href }: BtnProfileProperties) {
        super({ text, classes, href });
    }
    protected getStateFromProperties(Properties: BtnProfileProperties): void {
        this.state = {
            text: Properties.text,
            classes: Properties.classes,
            href: Properties.href,
        };
    }
    protected render(): string {
        const { text, classes, href } = this.state;
        // language=hbs
        return `
      <li class="btn-profile">
        <a class="btn-profile__link ${classes ? classes : ''}" href="${href}">
          ${text}
        </a>
      </li>
    `;
    }
}