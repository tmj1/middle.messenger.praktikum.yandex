import Block from '../../core/Block';
export class NotFoundPage extends Block {
    render() {
        // language=hbs
        return `
      <div class="page">
        {{{Error
          title="404"
          subtitle="Такой страницы не существует"
        }}}
      </div>
    `;
    }
}