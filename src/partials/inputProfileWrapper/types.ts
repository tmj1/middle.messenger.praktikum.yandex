import { InputType } from 'src/partials/inputProfileWrapper/types';

export interface InputProfileWrapperProperties {
    onInput?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    formName: string;
    name: string;
    minlength: string;
    maxlength: string;
    type: InputType;
    value: string;
    helperText: string;
}