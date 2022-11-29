import { InputType } from 'types';

export interface InputProperties {
    onInput?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    name: string;
    type: InputType;
    minlength?: string;
    maxlength?: string;
}