import Block from 'core/Block';
import './menuButton.css';
import { MenuButtonProperties } from './types';

export class MenuButton extends Block {
    static componentName = 'MenuButton';
    constructor({ text, icon, alt, classes, type, onClick }: MenuButtonProperties) {
        super({ text, icon, alt, classes, type, events: { click: onClick } });
    }
    protected getStateFromProperties(Properties: MenuButtonProperties): void {
        this.state = {
            text: Properties.text,
            icon: Properties.icon,
            alt: Properties.alt,
            classes: Properties.classes,
            type: Properties.type,
        };
    }
    protected render(): string {
        const { text, icon, alt, classes, type } = this.state;
        // language=hbs
        return `
      <button class="menu-button ${classes}" type="${type}">
        <img class="menu-button__icon" src="${icon}" alt="${alt}" />
        ${text}
      </button>
    `;
    }
}