import Block from '../../core/Block';

export class ServerErrorPage extends Block {
    render() {
        // language=hbs
        return `
      <div class="page">
        {{{Error
          title="500"
          subtitle="Мы уже исправляем"
        }}}
      </div>
    `;
    }
}