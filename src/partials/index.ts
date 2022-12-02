import { BlockConstructable } from '../core';
import Avatar from './avatar';
import EditAvatar from './editAvatar';
import BtnBackProfile from './btnBackProfile';
import BtnProfile from './btnProfile';
import Button from './button';
import Error from './error';
import Input from './input';
import InputWrapper from './inputWrapper';
import InputProfileWrapper from './inputProfileWrapper';
import SearchMessage from './searchMessage';
import ListMessage from './listMessage';
import mobileMenu from './mobileMenu';
import ChatMessage from './chatMessage';
import Message from './message';
import EnterMessage from './enterMessage';
import Menu from './menu';
import MenuButton from './menuButton';
import Popup from './popup';
import UploadFile from './UploadFile';
import InputProfile from './inputProfile';

export const components: BlockConstructable<any>[] = [
    Input,
    InputWrapper,
    Button,
    Error,
    BtnBackProfile,
    EditAvatar,
    InputProfileWrapper,
    BtnProfile,
    searchMessage,
    ListMessage,
    Avatar,
    mobileMenu,
    ChatMessage,
    Message,
    EnterMessage,
    Menu,
    MenuButton,
    Popup,
    UploadFile,
    InputProfile,
];