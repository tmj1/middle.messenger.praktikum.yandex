import Block from 'core/Block';
import './popup.css';
import { PopupProperties } from './types';

export class Popup extends Block {
    static componentName = 'Popup';
    constructor({
                    classesPopup,
                    classesForm,
                    name,
                    title,
                    isDefault,
                    helperText,
                    textBtn,
                    onInput,
                    onFocus,
                    onBlur,
                    onClick,
                }: PopupProperties) {
        super({
            classesPopup,
            classesForm,
            name,
            title,
            isDefault,
            helperText,
            textBtn,
            onInput,
            onFocus,
            onBlur,
            onClick,
        });
    }
    protected getStateFromProperties(Properties: PopupProperties): void {
        this.state = {
            classesPopup: Properties.classesPopup,
            classesForm: Properties.classesForm,
            name: Properties.name,
            title: Properties.title,
            isDefault: Properties.isDefault,
            helperText: Properties.helperText,
            textBtn: Properties.textBtn,
            onClick: Properties.onClick,
            onInput: Properties.onInput,
            onFocus: onfocus,
            onBlur: onblur,
        };
    }

    protected render(): string {
        const { classesPopup, classesForm, name, title, isDefault, helperText, textBtn } =
            this.state;
        // language=hbs
        return `
      <div class="popup ${classesPopup ? classesPopup : ''}">
        <div class="popup__container">
          <h2 class="popup__title">${title}</h2>
          <form class="popup__form ${
            classesForm ? classesForm : ''
        }" name="${name}" novalidate>
            ${
            isDefault
                ? `
                  {{{InputWrapper
                    onInput=onInput
                    onFocus=onFocus
                    onBlur=onBlur
                    type="text"
                    helperText="${helperText}"
                    minlength="5"
                    maxlength="20"
                    name="login"
                  }}}
                  {{{Button
                    onClick=onClick
                    textBtn="${textBtn}"
                    type="submit"
                  }}}
                  `
                : `
                  {{{UploadFile}}}
                  {{{Button
                    textBtn="${textBtn}"
                    type="submit"
                  }}}
                  `
        }
          </form>
        </div>
      </div>
    `;
    }
}