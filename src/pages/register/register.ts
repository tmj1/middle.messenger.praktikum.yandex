import Block from '../../core/Block';
import { AuthService } from '../../utils/AuthService';
import { RegisterType } from '../../utils/types/types';
import 'styles/auth.css';
import { FormValidator } from '../../utils/classes';
import { config, AUTH_FORM } from '../utils/constants';
import { handleSubmitForm, checkOnValueInput } from '../../utils';

const registerFormValidator = new FormValidator(
    config,
    AUTH_FORM,
    config.inputSelector,
    config.btnSubmitFormSelector,
    config.inputHelperTextSelector,
    config.isShowHelperTextSelector
);

export class registerPage extends Block {
    protected getStateFromProps() {
        this.state = {
            handleChangeInput: (evt: Event) => {
                checkOnValueInput(evt);
                registerFormValidator.clearError();
                registerFormValidator.toggleBtnState();
            },
            handleSubmitForm: (evt: Event) => {
                evt.preventDefault();
                const isValidField = registerFormValidator.isValidFieldWithCustomRules();
                const dataForm = handleSubmitForm({
                    stateForm: registerFormValidator.checkStateForm(),
                    inputSelector: config.inputSelector,
                    formSelector: AUTH_FORM,
                    disableBtn: registerFormValidator.disableBtn,
                    addErrors: registerFormValidator.addErrorsForInput,
                    isValidField: registerFormValidator.isValidFieldWithCustomRules(),
                });
                dataForm && authService.signup(dataForm as RegisterType);
            },
            handleValidateInput: (evt: Event) => {
                registerFormValidator.handleFieldValidation(evt);
            },
        };
    }
    render() {
        // language=hbs
        return `
      <div class="page">
        <main class="page__form">
          <form class="auth" name="register" novalidate>
            <h1 class="auth__title">Регистрация</h1>
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="email"
              helperText="Email"
              name="email"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="text"
              helperText="Логин"
              minlength="3"
              maxlength="20"
              name="login"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="text"
              helperText="Имя"
              minlength="1"
              maxlength="50"
              name="first_name"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="text"
              helperText="Фамилия"
              minlength="1"
              maxlength="50"
              name="second_name"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="tel"
              helperText="Телефон"
              minlength="10"
              maxlength="15"
              name="phone"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="password"
              helperText="Пароль"
              minlength="8"
              maxlength="40"
              name="password"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="password"
              helperText="Пароль (ещё раз)"
              minlength="8"
              maxlength="40"
              classes="input_is-auth"
              name="repeatPassword"
            }}}
            {{{Button
              onClick=hendleSubmitForm
              textBtn="Зарегистрироваться"
              type="submit"
              classes="button_is-auth"
            }}}
            <a class="auth__link" href="/">Войти</a>
          </form>
        </main>
      </div>
    `;
    }
}