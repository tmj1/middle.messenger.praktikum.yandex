import { Block, store, BrowseRouter as router } from 'core';
import 'styles/profile.css';
import { Popup, FormValidator } from 'utils/classes';
import { config, FORM_ELEMENTS, MESSAGES } from 'utils/constants';
import { handleSubmitForm, showTooltip, checkIsLoginIn } from 'utils';
import { authService, profileService } from 'services';
import { UserPasswordType, StoreEvents } from 'types';

const editPassowordFormValidator = new FormValidator(
  config,
  FORM_ELEMENTS.EDIT_PASSWORD_FORM,
  config.inputProfileSelector,
  config.btnSubmitFormSelector,
  config.inputProfileHelperTextSelector,
  config.isShowInputProfileHelperTextSelector
);

export class EditPasswordPage extends Block {
  constructor(...args: any) {
    super(...args);

    authService.getInfo();

    store.on(StoreEvents.UPDATE, () => {
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
        editPassowordFormValidator.clearError();
        editPassowordFormValidator.toggleBtnState();
      },
      handleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: editPassowordFormValidator.checkStateForm(),
          inputSelector: config.inputProfileSelector,
          formSelector: FORM_ELEMENTS.EDIT_PASSWORD_FORM,
          disableBtn: editPassowordFormValidator.disableBtn,
          addErrors: editPassowordFormValidator.addErrorsForInput,
        });

        if (dataForm) {
          const { oldPassword, newPassword, repeatPassword } =
            dataForm as UserPasswordType;

          newPassword !== repeatPassword
            ? showTooltip({
              text: MESSAGES.IS_NOT_MATCHED_PASSWORD_MESSAGE,
              type: 'error',
            })
            : profileService.changeUserPassword({
              newPassword,
              oldPassword,
            } as UserPasswordType);
        }
      },
      handleValidateInput: (evt: Event) => {
        editPassowordFormValidator.handleFieldValidation(evt);
      },
      handleBackBtn: () => router.back(),
    };
  }
  render() {
    checkIsLoginIn();

    const { userInfo = [] } = this.props;
    const { avatar, display_name } = userInfo;

    // language=hbs
    return `
      <div class="profile">
        <ul class="profile-wrapper">
        {{{BtnBackProfile onClick=handleBackBtn}}}
          <li class="profile-column">
            <form
              class="profile-form profile-form-el-edit-password-form"
              novalidate
            >
              {{{EditAvatar avatar="${avatar}" onClick=handleEditAvatar}}}
              <p class="profile-user-name">${display_name ? display_name : ''}</p>
              <ul class="profile-list">
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Старый пароль"
                  value=""
                  minlength="8"
                  maxlength="40"
                  name="oldPassword"
                  formName="profile-form-el-edit-password-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Новый пароль"
                  value=""
                  minlength="8"
                  maxlength="40"
                  name="newPassword"
                  formName="profile-form-el-edit-password-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Повторите новый пароль"
                  value="" minlength="8"
                  maxlength="40"
                  name="repeatPassword"
                  formName="profile-form_el-edit-password-form"
                }}}
                {{{Button
                  onClick=handleSubmitForm
                  textBtn="Сохранить"
                  classes="button-page-edit-password"
                  type="submit"
                }}}
              </ul>
            </form>
          </li>
        </ul>
        {{{Popup
          title="Загрузите файл"
          textBtn="Поменять"
          classesPopup="popup-change-avatar"
          isDefault=false
        }}}
      </div>
    `;
  }
}
