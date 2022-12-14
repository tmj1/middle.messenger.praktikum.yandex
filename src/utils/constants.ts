const config = {
  inputSelector: 'input__text-field',
  inputPasswordSelector: "input[type='password']",
  inputErrorSelector: 'input__text_error',
  inputHelperTextSelector: 'input__helper-text',
  isShowHelperTextSelector: 'input__helper-text_show',
  btnSubmitFormSelector: 'button',
  isDisableBtnSubmitSelector: 'button_disable',
  labelTextSelector: 'input__text',
  isValueLabelTextSelector: 'input__text_isValue',
  messagesSelector: 'list-item',
  contentDefaultSelector: 'chat__column-default',
  contentDialogSelector: 'chat__column-dialog',
  popupAddUserSelector: 'popup_add-user',
  popupDeleteUserSelector: 'popup_delete-user',
  popupChangeAvatarSelector: 'popup_change-avatar',
  isActiveChatSelector: 'chat_is-active',
  hiddenChatSelector: 'chat__column_is-hidden',
  settingsMenuSelector: 'settings-menu',
  isActiveSettingsMenuSelector: 'settings-menu_active',
  isOpenPopupSelector: 'popup_opened',
  popoverSelector: 'popover',
  popupAddChatSelector: 'popup_add-chat',
  btnAttachSelector: 'chat-message__btn-attach',
  isShowPopoverSelector: 'popover_is-show',
  menuItemSelector: 'menu__item',
  popupContainerSelector: 'popup__container',
  editAvatarSelector: 'edit-avatar',
  editAvatarTextSelector: 'edit-avatar__span',
  menuListElementUserSelector: 'menu__list_element_user',
  menuListElementFileSelector: 'menu__list_element_file',
  menuClassSelector: 'menu',
  isShowMenuSelector: 'menu_is-show',
  menuBtnSelector: 'menu-button',
  searchInputByChatsSelector: 'input-chat',
  imgFromSearchInputByChatsSelector: 'search-chat__img',
  inputProfileSelector: 'input-profile',
  menuBtnAddUserSelector: 'menu__btn_add-user',
  menuBtnDeleteUserSelector: 'menu__btn_delete-user',
  inputProfileHelperTextSelector: 'input-profile-wrapper__error',
  isShowInputProfileHelperTextSelector: 'input-profile-wrapper__error_is-show',
  addChatBtnSelector: 'search-chat__btn',
  popupListSelector: 'popup__list',
  popupItemSelector: 'popup__item',
  popupWrapperSelector: 'popup__wrapper',
  popupAvatarSelector: 'popup__avatar',
  popupTextLoginSelector: 'popup__text-login',
  popupTextEmailSelector: 'popup__text-email',
  popupBtnSelector: 'popup__btn',
  tooltipSelector: 'tooltip',
  tooltipIsSuccessSelector: 'tooltip_is-success',
  tooltipIsErrorSelector: 'tooltip_is-error',
};

const REGEXP_FOR_NAME_AND_LASTNAME = /^[A-Z | А-Я | -]/;
const REGEXP_FOR_PHONE = /^((\+7|7|8)+([0-9]){10})$/;
const REGEXP_REPLACE_PATHNAME = /\/\d+/;
const REGEXP_REPLACE_ID = /[a-z/]+/i;
const BASE_URL = 'https://ya-praktikum.tech/api/v2';
const BASE_URL_RESOURCES = 'https://ya-praktikum.tech/api/v2/resources';
const BASE_HEADERS = { 'Content-Type': 'application/json' };
const ADD_USER_FORM = 'popup__form_add-user';
const DELETE_USER_FORM = 'popup__form_delete-user';
const ADD_CHAT_FORM = 'popup__form_add-chat';
const SIGNUP_PATH = '/sign-up';
const SIGNIN_FORM = 'signin';
const SIGNIN_PATH = '/';
const SIGNUP_FORM = 'signup';
const SETTINGS_PATH = '/settings';
const EDIT_SETTINGS_PATH = 'edit-settings';
const EDIT_PASSWORD_PATH = 'change-password';
const DATA_ATTRIBUTE_CHAT_ID = 'data-chat-id';
const EDIT_PASSWORD_FORM = 'profile__form_el_change-password-form';
const EDIT_PROFILE_FORM = 'profile__form_el_edit-form';
const AUTH_FORM = 'auth';
const USER_NAME_FIELD = 'first_name';
const LAST_NAME_USER_FIELD = 'second_name';
const PHONE_USER_FIELD = 'phone';
const CUSTOM_ERROR_FOR_NAME_AND_LASTNAME =
  'Имя / Фамилия должны начинаться с загловной буквы или с "-"';
const CUSTOM_ERROR_FOR_PHONE_FILED = 'Некорректный формат';
const SUCCESS_SIGNUP_MESSAGE = 'Успешная регистрация';
const SUCCESS_SIGNIN_MESSAGE = 'Успешный вход в приложение';
const SUCCESS_CREATE_MESSAGE = 'Чат создан';
const SUCCESS_CHANGE_AVATAR_MESSAGE = 'Аватар изменен';
const SUCCESS_CHANGE_USER_INFO_MESSAGE = 'Информация пользователя изменена';
const SUCCESS_REMOVE_CHAT_MESSAGE = 'Чат удален';
const TAG_NAME_UL = 'ul';
const TAG_NAME_LI = 'li';
const TAG_NAME_DIV = 'div';
const TAG_NAME_IMG = 'img';
const TAG_NAME_P = 'p';
const TAG_NAME_BUTTON = 'button';

export { config, ADD_USER_FORM, ADD_CHAT_FORM, DELETE_USER_FORM, SIGNIN_PATH, SIGNUP_PATH, DATA_ATTRIBUTE_CHAT_ID,
  SETTINGS_PATH, EDIT_SETTINGS_PATH, EDIT_PASSWORD_PATH, SIGNIN_FORM, SIGNUP_FORM, EDIT_PASSWORD_FORM, EDIT_PROFILE_FORM, AUTH_FORM, USER_NAME_FIELD, LAST_NAME_USER_FIELD, PHONE_USER_FIELD, CUSTOM_ERROR_FOR_NAME_AND_LASTNAME, CUSTOM_ERROR_FOR_PHONE_FILED, REGEXP_FOR_NAME_AND_LASTNAME, REGEXP_FOR_PHONE, REGEXP_REPLACE_PATHNAME, SUCCESS_REMOVE_CHAT_MESSAGE,
  REGEXP_REPLACE_ID, BASE_URL, BASE_HEADERS, SUCCESS_SIGNUP_MESSAGE, SUCCESS_SIGNIN_MESSAGE, SUCCESS_CREATE_MESSAGE, SUCCESS_CHANGE_AVATAR_MESSAGE, BASE_URL_RESOURCES, SUCCESS_CHANGE_USER_INFO_MESSAGE,   TAG_NAME_UL,
  TAG_NAME_LI,
  TAG_NAME_DIV,
  TAG_NAME_IMG,
  TAG_NAME_P,
  TAG_NAME_BUTTON,};
