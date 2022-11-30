import { BlockClass } from './types/types';
import { ViewsScreens } from './types/types';
import Signin from '../pages/signin';
import Signup from '../pages/register';
import Profile from '../pages/profile';
import Messenger from '../pages/chat';
import ChangeProfile from '../pages/change-profile';
import ChangePassword from '../pages/change-password';

const map: Record<ViewsScreens, BlockClass<any>> = {
    [ViewsScreens.Signin]: Signin,
    [ViewsScreens.Signup]: Signup,
    [ViewsScreens.Profile]: Profile,
    [ViewsScreens.Messenger]: Messenger,
    [ViewsScreens.ChangeProfle]: ChangeProfile,
    [ViewsScreens.ChangePassword]: ChangePassword,
};
const getScreenComponent = (screen: ViewsScreens): BlockClass<any> => {
    return map[screen];
};
export { ViewsScreens, getScreenComponent };