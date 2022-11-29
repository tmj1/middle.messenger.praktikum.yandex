import Block from './Block';
import Handlebars, { HelperOptions } from 'handlebars';

export interface BlockConstructable<Properties extends Record<string, unknown>> {
    new (Properties: Properties): Block;
    componentName: string;
}

export default function registerComponent<Properties extends any>(
    Component: BlockConstructable<Properties>
) {
    Handlebars.registerHelper(
        Component.componentName,
        function (this: Properties, { hash: { ref, ...hash }, data, fn }: HelperOptions) {
            if (!data.root.children) {
                data.root.children = {};
            }

            if (!data.root.refs) {
                data.root.refs = {};
            }

            const { children, refs } = data.root;

            /**
             * Костыль для того, чтобы передавать переменные
             * внутрь блоков вручную подменяя значение
             */
            (Object.keys(hash) as any).forEach((key: keyof Properties) => {
                if (this[key] && typeof this[key] === 'string') {
                    hash[key] = hash[key].replace(new RegExp(`{{${key}}}`, 'i'), this[key]);
                }
            });

            const component = new Component(hash);

            children[component.id] = component;

            if (ref) {
                refs[ref] = component.getContent();
            }

            const contents = fn ? fn(this) : '';

            return `<div data-id="${component.id}">${contents}</div>`;
        }
    );
}