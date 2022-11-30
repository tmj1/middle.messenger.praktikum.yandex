import { components } from './partials';
import { registerComponent, Router as router} from './core/Router';
import { getScreenComponent } from './utils/viewList';
import { ViewsScreens } from './utils/types/types';

components.forEach((component) => {
    registerComponent(component);
});

document.addEventListener('DOMContentLoaded', () => {

    router
        .use('/', getScreenComponent( ViewsScreens.Signin))
        .use('/sign-up', getScreenComponent( ViewsScreens.Signup))
        .use('/messenger', getScreenComponent( ViewsScreens.Messenger))
        .use('/settings', getScreenComponent( ViewsScreens.Profile))
        .use('/edit-settings', getScreenComponent( ViewsScreens.ChangeProfle))
        .use('/edit-password', getScreenComponent( ViewsScreens.ChangePassword))
        .start();
});