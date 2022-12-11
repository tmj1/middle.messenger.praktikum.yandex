import { authAPI } from 'api';
import { SignupType, SigninType } from 'types';
import store from 'core/Store';
import { BrowseRouter as router } from 'core';
import { showTooltip, showError } from 'utils';
import { SUCCESS_SIGNUP_MESSAGE, SUCCESS_SIGNIN_MESSAGE } from 'utils/constants';

class AuthService {
  public signup({ email, login, first_name, second_name, phone, password }: SignupType) {
    authAPI
      .signup({ email, login, first_name, second_name, phone, password })
      .then((data) => {
        store.setState(data);
        showTooltip({
          text: SUCCESS_SIGNUP_MESSAGE,
          type: 'success',
        });
        router.go('/messenger');
      })
      .catch((err) => showError(err.responseText));
  }

  public signin({ login, password }: SigninType) {
    authAPI
      .signin({ login, password })
      .then((data) => {
        store.setState(data);
        showTooltip({
          text: SUCCESS_SIGNIN_MESSAGE,
          type: 'success',
        });
        router.go('/messenger');
      })
      .catch((err) => showError(err.responseText));
  }

  public signout() {
    authAPI
      .signout()
      .then((data) => {
        console.log(data); // доработать
      })
      .catch((err) => showError(err.responseText));
  }

  public getInfo() {
    authAPI
      .getInfo()
      .then((userInfo: any) =>
        store.setState({ userInfo: JSON.parse(userInfo.response) })
      )
      .catch((err) => showError(err.responseText));
  }
}

export default new AuthService();
