import { InputType } from 'types';

export interface InputProfileProperties {
    onInput?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    name: string;
    minlength?: string;
    maxlength?: string;
    type: InputType;
    value: string;
}