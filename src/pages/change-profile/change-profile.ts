import Block from '../../core/Block';
import 'styles/profile.css';
import { Popup } from '../../utils/classes';
import { FormValidator } from '../../utils/classes';
import { config, EDIT_PROFILE_FORM } from '../../utils/constants';
import { handleSubmitForm } from '../../utils';
import dataProfile from '../../data/profile.json';

const changeProfileFormValidator = new FormValidator(
    config,
    EDIT_PROFILE_FORM,
    config.inputProfileSelector,
    config.btnSubmitFormSelector,
    config.inputProfileHelperTextSelector,
    config.isShowInputProfileHelperTextSelector
);

const { email, login, name, lastName, chatName, phone } = dataProfile.payload;

export class EditProfilePage extends Block {
    protected getStateFromProps() {
        this.state = {
            handleEditAvatar: () => {
                new Popup(
                    config.popupChangeAvatarSelector,
                    config.editAvatarSelector,
                    config.isOpenPopupSelecot,
                    config
                ).handleOpenPopup();
            },
            handleChangeInput: () => {
                changeProfileFormValidator.clearError();
                changeProfileFormValidator.toggleBtnState();
            },
            handleSubmitForm: (evt: Event) => {
                evt.preventDefault();
                const isValidField = changeProfileFormValidator.isValidFieldWithCustomRules();
                handleSubmitForm({
                    stateForm: changeProfileFormValidator.checkStateForm(),
                    inputSelector: config.inputProfileSelector,
                    formSelector: EDIT_PROFILE_FORM,
                    disableBtn: changeProfileFormValidator.disableBtn,
                    addErrors: changeProfileFormValidator.addErrorsForInput,
                    isValidField,
                });
            },
            handleValidateInput: (evt: Event) =>
                changeProfileFormValidator.handleFieldValidation(evt),
        };
    }
    render() {
        // language=hbs
        return `
      <div class="profile">
        <ul class="profile__wrapper">
          {{{BtnBackProfile href="/profile"}}}
          <li class="profile__column">
            <form
              class="profile__form profile__form_el_edit-form"
              novalidate
            >
              {{{EditAvatar onClick=handleEditAvatar}}}
              <p class="profile__user-name">Максим</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="email"
                  helperText="Email"
                  value="${email}"
                  name="email"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="Логин"
                  value="${login}"
                  minlength="3"
                  maxlength="20"
                  name="login"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="Имя"
                  value="${name}"
                  minlength="1"
                  maxlength="50"
                  name="name"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="Фамилия"
                  value="${lastName}"
                  minlength="1"
                  maxlength="50"
                  name="lastName"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="tel"
                  helperText="Телефон"
                  value="${phone}"
                  minlength="10"
                  maxlength="15"
                  name="phone"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="Имя в чате"
                  value="${chatName}"
                  minlength="1"
                  maxlength="50"
                  name="chatName"
                  formName="profile__form_el_edit-form"
                }}}
                {{{Button
                  onClick=hendleSubmitForm
                  textBtn="Сохранить"
                  classes="button_page_edit-profile"
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