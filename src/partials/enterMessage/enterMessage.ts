import Block from '../../core/Block';
import './EnterMessage.css';
import { EnterMessageProperties } from './types';

export class EnterMessage extends Block {
    static componentName = 'EnterMessage';
    constructor({ onInput, placeholder = 'Поиск' }: EnterMessageProperties) {
        super({ placeholder, events: { input: onInput } });
    }
    protected getStateFromProperties(Properties: EnterMessageProperties): void {
        this.state = {
            placeholder: Properties.placeholder,
        };
    }
    protected render(): string {
        return `<input class="enter-message" type="text" placeholder="${this.state.placeholder}" />`;
    }
}