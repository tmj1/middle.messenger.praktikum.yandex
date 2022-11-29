import { ButtonType } from 'types';

export interface ButtonProperties {
    onClick: () => void;
    type: ButtonType;
    classes?: string;
    textBtn: string;
}