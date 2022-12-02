import './button.css';
import Block from '../../core/Block';
import { ButtonProperties } from './types';

export class Button extends Block {
    static componentName = 'Button';
    constructor({ textBtn, type, classes, onClick }: ButtonProperties) {
        super({ textBtn, type, classes, events: { click: onClick } });
    }
    protected getStateFromProperties(Properties: ButtonProperties): void {
        this.state = {
            textBtn: Properties.textBtn,
            type: Properties.type,
            classes: Properties.classes,
        };
    }
    protected render(): string {
        const { textBtn, type, classes } = this.state;
        // language=hbs
        return `<Button class="button ${
            classes ? classes : ''
        }" type="${type}">${textBtn}</Button>`;
    }
}