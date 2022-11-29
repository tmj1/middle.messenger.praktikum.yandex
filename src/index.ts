import { renderDOM, registerComponent } from './core';
import { getCurrentPage } from './routes';
import { components } from './partials';

components.forEach((component) => {
    registerComponent(component);
});

document.addEventListener('DOMContentLoaded', () => {
    renderDOM(getCurrentPage());
});