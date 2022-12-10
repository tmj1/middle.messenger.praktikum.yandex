import { SignupType, SigninType } from 'types';
import EventBus from './EventBus';

export enum STORE_EVENTS {
  UPDATE = 'update', // change
}

class Store<T> extends EventBus {
  state: T | null;

  constructor(initialData: T | null = null) {
    super();
    this.state = initialData;
  }

  getState() {
    return this.state;
  }
  setState(newData: any) {
    if (typeof newData.response === 'object') {
      this.state = { ...this.state, ...JSON.parse(newData.response) };
    }
    this.emit(STORE_EVENTS.UPDATE);
  }
}

export const signupStore: Store<SignupType> = new Store();
export const signinStore: Store<SigninType> = new Store();
