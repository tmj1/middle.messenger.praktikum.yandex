import { ProfileApi } from 'api';
import {
  showTooltip,
  showError,
  SUCCESS_CHANGE_AVATAR_MESSAGE,
  SUCCESS_CHANGE_USER_INFO_MESSAGE,
} from 'utils';
import { store } from 'core';
import {
  UserInfoDTO,
  UserPasswordType,
  SearchUserByLoginType,
  STORE_EVENTS,
} from 'types';


class ProfileService {
  public changeAvatar(avatar: FormData) {
    ProfileApi
      .changeAvatar(avatar)
      .then(({ response }: any) => {
        store.setState({ userInfo: JSON.parse(response) });
        showTooltip({
          text: SUCCESS_CHANGE_AVATAR_MESSAGE,
          type: 'success',
        });
      })
      .catch(showError);
  }
  public changeUserInfo(userInfo: UserInfoDTO) {
    ProfileApi
      .changeUserInfo(userInfo)
      .then(({ response }: any) => {
        store.setState({ userInfo: JSON.parse(response) });
        showTooltip({
          text: SUCCESS_CHANGE_USER_INFO_MESSAGE,
          type: 'success',
        });
      })
      .catch(showError);
  }
  public changeUserPassword(userPassword: UserPasswordType) {
    ProfileApi
      .changeUserPassword(userPassword)
      .then(() =>
        showTooltip({
          text: SUCCESS_CHANGE_USER_INFO_MESSAGE,
          type: 'success',
        })
      )
      .catch(showError);
  }

  public searchUserByLogin({ login }: SearchUserByLoginType) {
    return ProfileApi
      .searchUserByLogin({ login })
      .then(({ response }: any) =>
        store.setState({ users: response }, STORE_EVENTS.ADD_USERS)
      )
      .catch(showError);
  }
}

export default new ProfileService();
