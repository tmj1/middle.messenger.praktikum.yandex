import Block from '../../core/Block';
import './avatar.css';
import { AvatarProperties } from './types';

export class Avatar extends Block {
    static componentName = 'Avatar';
    constructor({ srcAvatar, userName }: AvatarProperties) {
        super({ srcAvatar, userName });
    }
    protected getStateFromProperties(Properties: AvatarProperties): void {
        this.state = {
            userName: Properties.userName,
            srcAvatar: Properties.srcAvatar,
        };
    }
    protected render(): string {
        const { userName, srcAvatar } = this.state;
        // language=hbs
        return `
      <img
        class="avatar"
        src="${srcAvatar}"
        alt="Аватар пользователя ${userName}"
      />
    `;
    }
}