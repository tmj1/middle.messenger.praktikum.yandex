import { HTTPTransport } from 'utils/classes';
import { URLS, HEADERS } from 'utils/constants';

describe('utils/HTTPTransport', () => {
  const http = new HTTPTransport();

  describe('auth', () => {
    it('should return error by return user info', async () => {
      await http.get(`${URLS.BASE}/auth/user`, {}).catch((err) => {
        const textError = JSON.parse(err.responseText).reason;
        expect(textError).toEqual('Cookie is not valid');
      });
    });

    it('should return OK by login', async () => {
      await http
        .post(`${URLS.BASE}/auth/signin`, {
          headers: HEADERS.CT_APPLICATION_JSON,
          data: { login: 'tmj2', password: 'password' },
        })
        .then((data: any) => expect(data.responseText).toEqual('OK'));
    });

    it('should return error by login', async () => {
      await http
        .post(`${URLS.BASE}/auth/signin`, {
          headers: HEADERS.CT_APPLICATION_JSON,
          data: { login: 'tmj5', password: 'parola77' },
        })
        .catch((err) => {
          const textError = JSON.parse(err.responseText).reason;
          expect(textError).toEqual('User already in system');
        });
    });

    it('should return user info', async () => {
      await http.get(`${URLS.BASE}/auth/user`, {}).then((userInfo: any) => {
        const user = {
          id: 70384,
          first_name: 'Tatiana',
          second_name: 'Miteva',
          display_name: null,
          login: 'tmj2',
          avatar:
            null,
          email: 'tmj2@mail.ru',
          phone: '81234567890',
        };

        expect(JSON.parse(userInfo.responseText)).toMatchObject(user);
      });
    });
  });
});
