import Block from 'core/Block';
import './inputWrapper.css';
import { InputWrapperProperties } from './types';

export class InputWrapper extends Block {
    static componentName = 'InputWrapper';
    constructor({
                    name,
                    type,
                    helperText,
                    minlength,
                    maxlength,
                    classes,
                    onInput,
                    onFocus,
                    onBlur,
                }: InputWrapperProperties) {
        super({
            name,
            type,
            helperText,
            minlength,
            maxlength,
            classes,
            onFocus,
            onBlur,
            events: { input: onInput },
        });
    }
    protected getStateFromProperties(Properties: InputWrapperProperties): void {
        this.state = {
            name: Properties.name,
            classes: Properties.classes,
            type: Properties.type,
            minlength: Properties.minlength,
            maxlength: Properties.maxlength,
            helperText: Properties.helperText,
            onFocus: Properties.onFocus,
            onBlur: Properties.onBlur,
        };
    }
    protected render(): string {
        const { name, classes, type, minlength, maxlength, helperText } = this.state;
        // language=hbs
        return `
      <fieldset class="input ${classes ? classes : ''}">
        <label class="input__label">
          {{{Input
            onInput=handleClearError
            onFocus=onFocus
            onBlur=onBlur
            type="${type}"
            minlength="${minlength}"
            maxlength="${maxlength}"
            name="${name}"
          }}}
          <span class="input__text">${helperText}</span>
        </label>
        <p class="input__helper-text"></p>
      </fieldset>
    `;
    }
}