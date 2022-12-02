import Block from 'core/Block';
import './inputProfile.css';
import { InputProfileProperties } from './types';

export class InputProfile extends Block {
    static componentName = 'InputProfile';
    constructor({
                    name,
                    minlength,
                    maxlength,
                    type,
                    value,
                    onInput,
                    onFocus,
                    onBlur,
                }: InputProfileProperties) {
        super({
            name,
            minlength,
            maxlength,
            type,
            value,
            events: { input: onInput, focus: onFocus, blur: onBlur },
        });
    }
    protected getStateFromProperties(Properties: InputProfileProperties): void {
        this.state = {
            name: Properties.name,
            minlength: Properties.minlength,
            maxlength: Properties.maxlength,
            type: Properties.type,
            value: Properties.value,
        };
    }
    protected render(): string {
        const { name, minlength, maxlength, type, value } = this.state;
        // language=hbs
        return `
      <input class="input-profile"
        type="${type}"
        value="${value}"
        name="${name}"
        minlength="${minlength}"
        maxlength="${maxlength}"
        required
      />
    `;
    }
}