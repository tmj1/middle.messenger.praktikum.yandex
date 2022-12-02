import Block from '../../core/Block';
import './editAvatar.css';
import { EditAvatarProperties } from './types';
import avatar from '../../image/avatar.svg';

export class EditAvatar extends Block {
    static componentName = 'EditAvatar';
    constructor({ onClick }: EditAvatarProperties) {
        super({ events: { click: onClick } });
    }
    protected render(): string {
        return `
      <div class="edit-avatar">
        <img class="edit-avatar__img" src="${avatar}" alt="Аватар по дефолту" />
        <span class="edit-avatar__span">Аватар</span>
      </div>
    `;
    }
}