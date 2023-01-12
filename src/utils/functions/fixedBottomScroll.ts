import { config } from 'utils';

export function fixedBottomScroll() {
  const chat = document.querySelector(`.${config.contentDialogSelector}`);

  if (chat) {
    chat.scrollTop = chat.scrollHeight;
  }
}
