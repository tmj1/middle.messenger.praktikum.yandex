import { Block, store, BrowseRouter as router } from 'core';
import 'styles/profile.css';
import { Popup, FormValidator } from 'utils/classes';
import { config, FORM_ELEMENTS } from 'utils/constants';
import { handleSubmitForm, checkIsLoginIn } from 'utils';
import { authService, profileService } from 'services';
import { UserInfoDTO, UserInfoType, StoreEvents } from 'types';

const editProfileformValidator = new FormValidator(
  config,
  FORM_ELEMENTS.EDIT_PROFILE_FORM,
  config.inputProfileSelector,
  config.btnSubmitFormSelector,
  config.inputProfileHelperTextSelector,
  config.isShowInputProfileHelperTextSelector
);

export class EditProfilePage extends Block {
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
        editProfileformValidator.clearError();
        editProfileformValidator.toggleBtnState();
      },
      handleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: editProfileformValidator.checkStateForm(),
          inputSelector: config.inputProfileSelector,
          formSelector: FORM_ELEMENTS.EDIT_PROFILE_FORM,
          disableBtn: editProfileformValidator.disableBtn,
          addErrors: editProfileformValidator.addErrorsForInput,
          isValidField: editProfileformValidator.isValidFieldWithCustomRules(),
        });

        if (dataForm) {
          const { chatName, email, lastName, login, name, phone } =
            dataForm as UserInfoType;

          dataForm &&
          profileService.changeUserInfo({
            first_name: name,
            second_name: lastName,
            display_name: chatName,
            login,
            email,
            phone,
          } as UserInfoDTO);
        }
      },
      handleValidateInput: (evt: Event) =>
        editProfileformValidator.handleFieldValidation(evt),
      handleBackBtn: () => router.back(),
    };
  }
  render() {
    checkIsLoginIn();

    const { userInfo = [] } = this.props;
    const { avatar, display_name, email, first_name, login, phone, second_name } =
      userInfo;

    // language=hbs
    return `
      <div class="profile">
        <ul class="profile-wrapper">
          {{{BtnBackProfile onClick=handleBackBtn}}}
          <li class="profile-column">
            <form
              class="profile-form profile-form-el-edit-form"
              novalidate
            >
            {{{EditAvatar avatar="${avatar}" onClick=handleEditAvatar}}}
              <p class="profile-user-name">${display_name ? display_name : ''}</p>
              <ul class="profile-list">
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="email"
                  helperText="Почта"
                  value="${email ? email : ''}"
                  name="email"
                  formName="profile-form-el-edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="Логин"
                  value="${login ? login : ''}"
                  minlength="3"
                  maxlength="20"
                  name="login"
                  formName="profile-form-el-edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="Имя"
                  value="${first_name ? first_name : ''}"
                  minlength="1"
                  maxlength="50"
                  name="name"
                  formName="profile-form-el-edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="Фамилия"
                  value="${second_name ? second_name : ''}"
                  minlength="1"
                  maxlength="50"
                  name="lastName"
                  formName="profile-form-el-edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="tel"
                  helperText="Телефон"
                  value="${phone ? phone : ''}"
                  minlength="10"
                  maxlength="15"
                  name="phone"
                  formName="profile-form-el-edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="Имя в чате"
                  value="${display_name ? display_name : ''}"
                  minlength="1"
                  maxlength="50"
                  name="chatName"
                  formName="profile-form-el-edit-form"
                }}}
                {{{Button
                  onClick=handleSubmitForm
                  textBtn="Сохранить"
                  classes="button-page-edit-profile"
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
