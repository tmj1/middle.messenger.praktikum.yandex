import Block from 'core/Block';
import './UploadFile.css';

export class UploadFile extends Block {
    static componentName = 'UploadFile';
    protected render(): string {
        // language=hbs
        return `
      <label class="input-file">
        <input class="input-file__input" type="file" />
        <span class="input-file__span">Выбрать файл на компьютере</span>
      </label>
    `;
    }
}