import { ButtonType } from '../../utils/types/types';

export interface ButtonProperties {
    onClick: () => void;
    type: ButtonType;
    classes?: string;
    textBtn: string;
}