const config = {
  inputSelector: 'input-text-field',
  inputPasswordSelector: "input[type='password']",
  inputErrorSelector: 'input-text-error',
  inputHelperTextSelector: 'input-helper-text',
  isShowHelperTextSelector: 'input-helper-text-show',
  btnSubmitFormSelector: 'button',
  isDisableBtnSubmitSelector: 'button-disable',
  labelTextSelector: 'input-text',
  isValueLabelTextSelector: 'input-text-is-value',
  messagesSelector: 'list-item',
  contentDefaultSelector: 'chat-column-default',
  contentDialogSelector: 'chat-column-dialog',
  popupAddUserSelector: 'popup-add-user',
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
  isShowPopoverSelector: 'popover-is-show',
  menuItemSelector: 'menu-item',
  popupContainerSelector: 'popup-container',
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
  menuBtnAddUserSelector: 'menu-btn-add-user',
  menuBtnDeleteUserSelector: 'menu-btn-delete-user',
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

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const MONTH = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентебря',
  'октября',
  'ноября',
  'декабря',
];

const PATHNAMES = {
  SIGNIN_PATH: '/',
  SIGNUP_PATH: '/sign-up',
  MESSAGER_PATH: '/messenger',
  SETTINGS_PATH: '/settings',
  EDIT_SETTINGS_PATH: '/edit-settings',
  EDIT_PASSWORD_PATH: '/edit-password',
  PATH_NOT_FOUND: '/path-not-found',
};

const ACTIONS_WEBSOCKET = {
  OPEN: 'open',
  CLOSE: 'close',
  MESSAGE: 'message',
  ERROR: 'error',
};

const TYPES_MESSAGE_WEBSOCKET = {
  PING: 'ping',
  PONG: 'pong',
  MESSAGE: 'message',
  GET_OLD: 'get old',
};

const MESSAGES = {
  SUCCESS_SIGNUP_MESSAGE: 'Вы успешно зарегистрировались!',
  SUCCESS_SIGNIN_MESSAGE: 'Вы успешно вошли в приложение!',
  SUCCESS_CREATE_MESSAGE: 'Создан чат!',
  SUCCESS_CHANGE_AVATAR_MESSAGE: 'Аватар изменен!',
  SUCCESS_CHANGE_USER_INFO_MESSAGE: 'Информация пользователя изменена!',
  SUCCESS_REMOVE_CHAT_MESSAGE: 'Чат удален!',
  SUCCESS_ADD_USER_TO_CHAT_MESSAGE: 'Пользователь добавлен в чат!',
  SUCCESS_REMOVE_USER_FROM_CHAT: 'Пользователь удален из чата!',
  CONNECTION_PROBLEMS: 'Проблемы с подключением',
  IS_NOT_MATCHED_PASSWORD_MESSAGE: 'Пароли не совпадают!',
  CUSTOM_ERROR_FOR_NAME_AND_LASTNAME:
    'Имя / Фамилия должны начинаться с загловной буквы или с "-"',
  CUSTOM_ERROR_FOR_PHONE_FILED: 'Не корректный формат',
};

const REGEXP = {
  FIRST_SYMBOL_UPPERCASE: /^[A-Z | А-Я | -]/,
  PHONE: /^((\+7|7|8)+([0-9]){10})$/,
};

const URLS = {
  BASE: 'https://ya-praktikum.tech/api/v2',
  RESOURCES: 'https://ya-praktikum.tech/api/v2/resources',
  WSS: 'wss://ya-praktikum.tech/ws/chats',
};

const HEADERS = { CT_APPLICATION_JSON: { 'Content-Type': 'application/json' } };

const DATA_ATTRIBUTE = {
  CHAT_ID: 'data-chat-id',
  USER_ID: 'data-user-id',
};

const FORM_ELEMENTS = {
  ADD_CHAT_FORM: 'popup-form_add-chat',
  ADD_USER_FORM: 'popup-form_add-user',
  DELETE_USER_FORM: 'popup-form_delete-user',
  EDIT_PASSWORD_FORM: 'profile-form_el_edit-password-form',
  EDIT_PROFILE_FORM: 'profile-form_el_edit-form',
  AUTH_FORM: 'auth',
  USER_NAME_FIELD: 'first_name',
  LAST_NAME_USER_FIELD: 'second_name',
  PHONE_USER_FIELD: 'phone',
};

const lOCALSTORAGE = {
  IS_SIGNIN: 'isSignin',
};

export {
  config,
  PATHNAMES,
  DAYS,
  MONTH,
  ACTIONS_WEBSOCKET,
  TYPES_MESSAGE_WEBSOCKET,
  MESSAGES,
  REGEXP,
  URLS,
  HEADERS,
  DATA_ATTRIBUTE,
  FORM_ELEMENTS,
  lOCALSTORAGE,
};
