const config = {
  inputSelector: 'input-text-field',
  inputPasswordSelector: "input[type='password']",
  inputErrorSelector: 'input-text-error',
  inputHelperTextSelector: 'input-helper-text',
  isShowHelperTextSelector: 'input-helper-text-show',
  btnSubmitFormSelector: 'button',
  isDisableBtnSubmitSelector: 'button-disable',
  labelTextSelector: 'input-text',
  isValuelabelTextSelector: 'input-text-is-value',
  messagesSelector: 'list-item',
  contentDefaultSelector: 'chat-column-default',
  contentDialogSelector: 'chat-column-dialog',
  popupAddUserSelector: 'popup_add-user',
  popupDeleteUserSelector: 'popup_delete-user',
  popupChangeAvatarSelector: 'popup_change-avatar',
  popupAddChatSelector: 'popup_add-chat',
  isActiveChatSelector: 'list-item-is-active',
  hiddenChatSelector: 'chat-column-is-hidden',
  burgerMenuSelector: 'burger-menu',
  isActiveBurgerMenuSelector: 'burger-menu-active',
  isOpenPopupSelector: 'popup-opened',
  popoverSelector: 'popover',
  btnAttachSelector: 'chat-footer-btn-attach',
  isShowPopoverSelector: 'popover_is-show',
  menuItemSelector: 'menu-item',
  popup–°ontainerSelector: 'popup-container',
  editAvatarSelector: 'edit-avatar',
  editAvatarTextSelector: 'edit-avatar-span',
  menuListElementUserSelector: 'menu-list-element-user',
  menuListElementFileSelector: 'menu-list-element-file',
  menuClassSelector: 'menu',
  isShowMenuSelector: 'menu-is-show',
  menuBtnSelector: 'menu-button',
  searchInputByChatsSelector: 'input-chat',
  imgFromSearchInputByChatsSelector: 'search-chat-img',
  inputProfileSelector: 'input-profile',
  menuBtnAddUserSelector: 'menu-btn_add-user',
  menuBtnDeleteUserSelector: 'menu-btn_delete-user',
  inputProfileHelperTextSelector: 'input-profile-wrapper-error',
  isShowInputProfileHelperTextSelector: 'input-profile-wrapper-error-is-show',
  addChatBtnSelector: 'search-chat-btn',
  usersSelector: 'users',
  userItemSelector: 'user-item',
  userItemWrapperSelector: 'user-item-wrapper',
  userItemAvatarSelector: 'user-item-avatar',
  userItemLoginSelector: 'user-item-text-login',
  userItemTextEmailSelector: 'user-item-text-email',
  userItemBtnSelector: 'user-item-btn',
  tooltipSelector: 'tooltip',
  tooltipIsSuccessSelector: 'tooltip-is-success',
  tooltipIsErrorSelector: 'tooltip-is-error',
  chatFooterInputSelector: 'chat-footer-input',
};

const DAYS = ['–ü–Ĺ', '–í—ā', '–°—Ä', '–ß—ā', '–ü—ā', '–°–Ī', '–í—Ā'];
const MONTH = [
  '—Ź–Ĺ–≤–į—Ä—Ź',
  '—Ą–Ķ–≤—Ä–į–Ľ—Ź',
  '–ľ–į—Ä—ā–į',
  '–į–Ņ—Ä–Ķ–Ľ—Ź',
  '–ľ–į—Ź',
  '–ł—é–Ĺ—Ź',
  '–ł—é–Ľ—Ź',
  '–į–≤–≥—É—Ā—ā–į',
  '—Ā–Ķ–Ĺ—ā–Ķ–Ī—Ä—Ź',
  '–ĺ–ļ—ā—Ź–Ī—Ä—Ź',
  '–Ĺ–ĺ—Ź–Ī—Ä—Ź',
  '–ī–Ķ–ļ–į–Ī—Ä—Ź',
];

const PATHNAMES = {
  SIGNIN_PATH: '/',
  MESSENGER_PATH: '/messenger',
  SIGNUP_PATH: '/sign-up',
  SETTINGS_PATH: '/settings',
  EDIT_SETTINGS_PATH: '/edit-settings',
  EDIT_PASSWORD_PATH: '/edit-password',
  PATH_NOT_FOUND: '/path-not-found',
};

const REGEXP_FOR_NAME_AND_LASTNAME = /^[A-Z | –ź-–Į | -]/;
const REGEXP_FOR_PHONE = /^((\+7|7|8)+([0-9]){10})$/;
const REGEXP_REPLACE_PATHNAME = /\/\d+/;

const BASE_URL = 'https://ya-praktikum.tech/api/v2';
const BASE_URL_RESOURCES = 'https://ya-praktikum.tech/api/v2/resources';
const BASE_URL_WSS = 'wss://ya-praktikum.tech/ws/chats';
const BASE_HEADERS = { 'Content-Type': 'application/json' };

const ADD_CHAT_FORM = 'popup-form_add-chat';
const ADD_USER_FORM = 'popup-form_add-user';
const DELETE_USER_FORM = 'popup-form_delete-user';
const SIGNIN_FORM = 'signin';
const SIGNUP_FORM = 'signup';
const EDIT_PASSWORD_FORM = 'profile-form_el_edit-password-form';
const EDIT_PROFILE_FORM = 'profile-form_el_edit-form';
const AUTH_FORM = 'auth';
const USER_NAME_FIELD = 'first_name';
const LAST_NAME_USER_FIELD = 'second_name';
const PHONE_USER_FIELD = 'phone';
const CUSTOM_ERROR_FOR_NAME_AND_LASTNAME =
  '–ė–ľ—Ź / –§–į–ľ–ł–Ľ–ł—Ź –ī–ĺ–Ľ–∂–Ĺ—č –Ĺ–į—á–ł–Ĺ–į—ā—Ć—Ā—Ź —Ā –∑–į–≥–Ľ–ĺ–≤–Ĺ–ĺ–Ļ –Ī—É–ļ–≤—č –ł–Ľ–ł —Ā "-"';
const CUSTOM_ERROR_FOR_PHONE_FILED = '–Ě–Ķ –ļ–ĺ—Ä—Ä–Ķ–ļ—ā–Ĺ—č–Ļ —Ą–ĺ—Ä–ľ–į—ā';
const SUCCESS_SIGNUP_MESSAGE = '–£—Ā–Ņ–Ķ—ą–Ĺ–į—Ź —Ä–Ķ–≥–ł—Ā—ā—Ä–į—Ü–ł—Ź';
const SUCCESS_SIGNIN_MESSAGE = '–£—Ā–Ņ–Ķ—ą–Ĺ—č–Ļ –≤—Ö–ĺ–ī –≤ –Ņ—Ä–ł–Ľ–ĺ–∂–Ķ–Ĺ–ł–Ķ';
const SUCCESS_CREATE_MESSAGE = '–ß–į—ā —Ā–ĺ–∑–ī–į–Ĺ';
const SUCCESS_CHANGE_AVATAR_MESSAGE = '–ź–≤–į—ā–į—Ä –ł–∑–ľ–Ķ–Ĺ–Ķ–Ĺ';
const SUCCESS_CHANGE_USER_INFO_MESSAGE = '–ė–Ĺ—Ą–ĺ—Ä–ľ–į—Ü–ł—Ź –Ņ–ĺ–Ľ—Ć–∑–ĺ–≤–į—ā–Ķ–Ľ—Ź –ł–∑–ľ–Ķ–Ĺ–Ķ–Ĺ–į';
const SUCCESS_REMOVE_CHAT_MESSAGE = '–ß–į—ā —É–ī–į–Ľ–Ķ–Ĺ';
const SUCCESS_ADD_USER_TO_CHAT_MESSAGE = '–ü–ĺ–Ľ—Ć–∑–ĺ–≤–į—ā–Ķ–Ľ—Ć –ī–ĺ–Ī–į–≤–Ľ–Ķ–Ĺ –≤ —á–į—ā';
const SUCCESS_REMOVE_USER_FROM_CHAT = '–ü–ĺ–Ľ—Ć–∑–ĺ–≤–į—ā–Ķ–Ľ—Ć —É–ī–į–Ľ–Ķ–Ĺ –ł–∑ —á–į—ā–į';
const DATA_ATTRIBUTE_CHAT_ID = 'data-chat-id';
const DATA_ATTRIBUTE_USER_ID = 'data-user-id';
const CONNECTION_PROBLEMS = '–ü—Ä–ĺ–Ī–Ľ–Ķ–ľ—č —Ā –Ņ–ĺ–ī–ļ–Ľ—é—á–Ķ–Ĺ–ł–Ķ–ľ';
const IS_NOT_MATCHED_PASSWORD_MESSAGE = '–ü–į—Ä–ĺ–Ľ–ł –Ĺ–Ķ —Ā–ĺ–≤–Ņ–į–ī–į—é—ā';

export {
  config,
  ADD_CHAT_FORM,
  ADD_USER_FORM,
  DELETE_USER_FORM,
  SIGNIN_FORM,
  SIGNUP_FORM,
  EDIT_PASSWORD_FORM,
  EDIT_PROFILE_FORM,
  AUTH_FORM,
  USER_NAME_FIELD,
  LAST_NAME_USER_FIELD,
  PHONE_USER_FIELD,
  CUSTOM_ERROR_FOR_NAME_AND_LASTNAME,
  CUSTOM_ERROR_FOR_PHONE_FILED,
  REGEXP_FOR_NAME_AND_LASTNAME,
  REGEXP_FOR_PHONE,
  REGEXP_REPLACE_PATHNAME,
  BASE_URL,
  BASE_URL_RESOURCES,
  BASE_HEADERS,
  SUCCESS_SIGNUP_MESSAGE,
  SUCCESS_SIGNIN_MESSAGE,
  SUCCESS_CREATE_MESSAGE,
  SUCCESS_CHANGE_AVATAR_MESSAGE,
  SUCCESS_CHANGE_USER_INFO_MESSAGE,
  SUCCESS_REMOVE_CHAT_MESSAGE,
  SUCCESS_ADD_USER_TO_CHAT_MESSAGE,
  SUCCESS_REMOVE_USER_FROM_CHAT,
  PATHNAMES,
  BASE_URL_WSS,
  DATA_ATTRIBUTE_CHAT_ID,
  DATA_ATTRIBUTE_USER_ID,
  CONNECTION_PROBLEMS,
  IS_NOT_MATCHED_PASSWORD_MESSAGE,
  DAYS,
  MONTH,
};
