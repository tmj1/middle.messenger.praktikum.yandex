import { BlockClass } from 'types';
import Signin from 'pages/signin';
import Signup from 'pages/signup';
import Profile from 'pages/profile';
import { Screens } from '../types/types';
import Messenger from 'pages/chat';
import ChangeProfile from 'pages/change-profile';
import ChangePassword from 'pages/change-password';

const map: Record<Screens, BlockClass<any>> = {
  [Screens.Signin]: Signin,
  [Screens.Signup]: Signup,
  [Screens.Profile]: Profile,
  [Screens.Messenger]: Messenger,
  [Screens.ChangeProfle]: ChangeProfile,
  [Screens.ChangePassword]: ChangePassword,
};

const getScreenComponent = (screen: Screens): BlockClass<any> => {
  return map[screen];
};

export { Screens, getScreenComponent };
