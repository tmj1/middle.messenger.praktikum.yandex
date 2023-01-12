import { Block } from 'core';
import './inputFile.css';

export class InputFile extends Block {
  static componentName = 'InputFile';

  protected render(): string {
    // language=hbs
    return `
      <label class="input-file">
        <input class="input-file-input" type="file" name="avatar" accept="image/*" />
        <span class="input-file-span">Выбрать файл</span>
      </label>
    `;
  }
}
