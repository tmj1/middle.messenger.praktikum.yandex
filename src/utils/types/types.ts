import { Block } from '../../core';
type props = Record<string, any>;
enum ViewsScreens {
    Signin = 'signin',
    Signup = 'register',
    Messenger = 'messenger',
    Profile = 'settings',
    ChangeProfle = 'change-settings',
    ChangePassword = 'change-password',
}

enum InputType {
    'text',
    'email',
    'password',
    'tel',
    'number',
}

enum ButtonType {
    'button',
    'submit',
}

type ChatType = {
    userName: string;
    lastMessage: string;
    time: string;
    countNotReadMessage: number;
    srcAvatar: string;
};

interface RegisterType {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    phone: string;
    password: string;
}

interface MessageProps {
    owner: boolean;
    text?: string;
    time: string;
    srcImg?: string;
    isRead?: boolean;
}

interface BlockClass<P> extends Function {
    new (props: P): Block<P>;
    componentName?: string;
}

export { InputType, ButtonType, ChatType, MessageProps, BlockClass, ViewsScreens, RegisterType, props };