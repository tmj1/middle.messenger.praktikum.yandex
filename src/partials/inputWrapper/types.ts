import { InputType } from 'types';

export interface InputWrapperProperties {
    onInput?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    name: string;
    type: InputType;
    helperText: string;
    minlength?: number;
    maxlength?: number;
    classes?: string;
}