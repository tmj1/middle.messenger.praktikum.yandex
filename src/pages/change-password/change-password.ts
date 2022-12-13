import { Block, STORE_EVENTS, store, BrowseRouter as router } from 'core';
import 'styles/profile.css';
import { Popup, FormValidator } from 'utils/classes';
import { config, EDIT_PASSWORD_FORM } from 'utils/constants';
import { handleSubmitForm } from 'utils';
import { authService, profileService } from 'services';
import { UserPasswordType } from 'types';

const editPasswordFormValidator = new FormValidator(
  config,
  EDIT_PASSWORD_FORM,
  config.inputProfileSelector,
  config.btnSubmitFormSelector,
  config.inputProfileHelperTextSelector,
  config.isShowInputProfileHelperTextSelector
);

export class ChangePasswordPage extends Block {
  constructor(...args: any) {
    super(...args);

    authService.getInfo();

    store.on(STORE_EVENTS.UPDATE, () => {
      this.setProps(store.getState());
    });
  }
  protected getStateFromProps() {
    this.state = {
      handleEditAvatar: () => {
        new Popup(
          config.popupChangeAvatarSelector,
          config.editAvatarSelector,
          config.isOpenPopupSelector,
          config
        ).handleOpenPopup();
      },
      handleChangeInput: () => {
        editPasswordFormValidator.clearError();
        editPasswordFormValidator.toggleBtnState();
      },
      handleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: editPasswordFormValidator.checkStateForm(),
          inputSelector: config.inputProfileSelector,
          formSelector: EDIT_PASSWORD_FORM,
          disableBtn: editPasswordFormValidator.disableBtn,
          addErrors: editPasswordFormValidator.addErrorsForInput,
        });

        if (dataForm) {
          const { newPassword, oldPassword, repeatPassword } =
            dataForm as UserPasswordType;
          profileService.changeUserPassword({
            newPassword,
            oldPassword,
          } as UserPasswordType);
        }
      },
      handleValidateInput: (evt: Event) => {
        editPasswordformValidator.handleFieldValidation(evt);
      },
      handleBackBtn: () => router.back(),
    };
  }
  render() {
    const { userInfo = [] } = this.props;
    const { avatar, display_name } = userInfo;
    // language=hbs
    return `
      <div class="profile">
        <ul class="profile__wrapper">
          {{{BtnBackProfile onClick=handleBackBtn}}}
          <li class="profile__column">
            <form
              class="profile__form profile__form_el_change-password-form"
              novalidate
            >
                {{{EditAvatar avatar="${avatar}" onClick=handleEditAvatar}}}
                <p class="profile__user-name">${display_name ? display_name : ''}</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Старый пароль"
                  value="1234578"
                  minlength="8"
                  maxlength="40"
                  name="oldPassword"
                  formName="profile__form_el_change-password-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Повторите новый пароль"
                  value="12345678"
                  minlength="8"
                  maxlength="40"
                  name="repeatPassword"
                  formName="profile__form_el_change-password-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Повторите новый пароль"
                  value="12341234" minlength="8"
                  maxlength="40"
                  name="repeatPassword"
                  formName="profile__form_el_change-password-form"
                }}}
                {{{Button
                  onClick=handleSubmitForm
                  textBtn="Сохранить"
                  classes="button_page_change-password"
                  type="submit"
                }}}
              </ul>
            </form>
          </li>
        </ul>
        {{{Popup
          title="Загрузить файл"
          textBtn="Изменить"
          classesPopup="popup_change-avatar"
          isDefault=false
        }}}
      </div>
    `;
  }
}
