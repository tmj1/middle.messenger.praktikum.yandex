import Block from '../../core/Block';
import './error.css';
import { ErrorProperties } from './types';

export class Error extends Block {
    static componentName = 'Error';
    constructor({ title, subtitle }: ErrorProperties) {
        super({ title, subtitle });
    }
    protected getStateFromProperties(Properties: ErrorProperties): void {
        this.state = {
            title: Properties.title,
            subtitle: Properties.subtitle,
        };
    }
    protected render(): string {
        const { title, subtitle } = this.state;
        return `
      <div class="error">
        <h1 class="error__title">${title}</h1>
        <p class="error__subtitle">${subtitle}</p>
        <a class="error__link" href="/">Назад</a>
      </div>
    `;
    }
}