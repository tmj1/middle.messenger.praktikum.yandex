import Block from 'core/Block';
import 'styles/auth.css';
import { FormValidator } from 'utils/classes';
import { config, AUTH_FORM } from 'utils/constants';
import { handleSubmitForm, checkOnValueInput } from 'utils';
import { authService } from 'services';
import { SigninType } from 'types';
import { signinStore, STORE_EVENTS } from 'core';

const signinFormValidator = new FormValidator(
  config,
  AUTH_FORM,
  config.inputSelector,
  config.btnSubmitFormSelector,
  config.inputHelperTextSelector,
  config.isShowHelperTextSelector
);

export class SigninPage extends Block {
  constructor() {
    super();

    signinStore.on(STORE_EVENTS.UPDATE, () => {
      this.setProps(signinStore.getState());
    });
  }
  protected getStateFromProps() {
    this.state = {
      handleChangeInput: (evt: Event) => {
        checkOnValueInput(evt);
        signinFormValidator.clearError();
        signinFormValidator.toggleBtnState();
      },
      handleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: signinFormValidator.checkStateForm(),
          inputSelector: config.inputSelector,
          formSelector: AUTH_FORM,
          disableBtn: signinFormValidator.disableBtn,
          addErrors: signinFormValidator.addErrorsForInput,
        });

        dataForm && authService.signin(dataForm as SigninType);
      },
      //handleValidateInput: (evt: Event) => signinFormValidator.handleFieldValidation(evt),
    };
  }
  render() {
    // language=hbs
    return `
      <div class="page">
        <main class="page__form">
          <form class="auth" name="signin" novalidate>
            <h1 class="auth__title">Вход</h1>
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
              type="password"
              helperText="Пароль"
              minlength="8"
              maxlength="40"
              classes="input_is-auth"
              name="password"
            }}}
            {{{Button
              onClick=handleSubmitForm
              textBtn="Авторизоваться"
              type="submit"
              classes="button_is-auth"
            }}}
            <a class="auth__link" href="/sign-up">Создать профиль</a>
            <a class="auth__link" href="/chat">Чат</a>
            <a class="auth__link" href="/profile">Профиль</a>
            <a class="auth__link" href="/not-found">404</a>
            <a class="auth__link" href="/server-error">5**</a>
          </form>
        </main>
      </div>
    `;
  }
}

