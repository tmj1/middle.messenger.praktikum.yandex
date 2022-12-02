import Block from 'core/Block';
import './input.css';
import { InputProperties } from './types';

export class Input extends Block {
    static componentName = 'Input';
    constructor({
                    name,
                    type,
                    minlength,
                    maxlength,
                    onInput,
                    onFocus,
                    onBlur,
                }: InputProperties) {
        super({
            name,
            type,
            minlength,
            maxlength,
            events: { input: onInput, focus: onFocus, blur: onBlur },
        });
    }
    protected getStateFromProperties(Properties: InputProperties): void {
        this.state = {
            name: Properties.name,
            type: Properties.type,
            minlength: Properties.minlength,
            maxlength: Properties.maxlength,
        };
    }
    protected render(): string {
        const { name, type, minlength, maxlength } = this.state;
        // language=hbs
        return `
      <input
        class="input__text-field"
        type=${type}
        minlength=${minlength}
        maxlength=${maxlength}
        required
        name="${name}"
      />
    `;
    }
}