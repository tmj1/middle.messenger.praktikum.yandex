import { ButtonType } from 'types';

export interface MenuButtonProperties {
    text: string;
    icon: string;
    alt: string;
    classes?: string;
    type: ButtonType;
    onClick: () => void;
}