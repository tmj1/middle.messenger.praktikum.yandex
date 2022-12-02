import Block from 'core/Block';
import './inputProfileWrapper.css';
import { InputProfileWrapperProperties } from './types';

export class InputProfileWrapper extends Block {
    static componentName = 'InputProfileWrapper';
    constructor({
                    formName,
                    name,
                    minlength,
                    maxlength,
                    type,
                    value,
                    helperText,
                    onInput,
                    onFocus,
                    onBlur,
                }: InputProfileWrapperProperties) {
        super({
            formName,
            name,
            minlength,
            maxlength,
            type,
            value,
            helperText,
            onInput,
            onFocus,
            onBlur,
        });
    }
    protected getStateFromProperties(Properties: InputProfileWrapperProperties): void {
        this.state = {
            formName: Properties.formName,
            name: Properties.name,
            minlength: Properties.minlength,
            maxlength: Properties.maxlength,
            type: Properties.type,
            value: Properties.value,
            helperText: Properties.helperText,
            onInput: Properties.onInput,
            onFocus: Properties.onFocus,
            onBlur: Properties.onBlur,
        };
    }
    protected render(): string {
        const { name, minlength, maxlength, type, value, helperText } = this.state;
        // language=hbs
        return `
      <li class="input-profile-wrapper">
        <label class="input-profile-wrapper__label">
          {{{InputProfile
            onInput=onInput
            onFocus=onFocus
            onBlur=onBlur
            type="${type}"
            value="${value}"
            name="${name}"
            minlength="${minlength}"
            maxlength="${maxlength}"
          }}}
          <span class="input-profile-wrapper__span">${helperText}</span>
          <span class="input-profile-wrapper__error"></span>
        </label>
      </li>
    `;
    }
}