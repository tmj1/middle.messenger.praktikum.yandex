import { Input } from '../utils/classes/Input';
import { Popup } from '../utils/classes/Popup';
import { config } from '../utils//constants';

interface SubmitFormProperties {
    disableBtn: () => void;
    addErrors: () => void;
    stateForm: boolean;
    inputSelector: string;
    formSelector: string;
    isValidField?: boolean | undefined;
}

export const handleSubmitForm = ({
                                     stateForm,
                                     inputSelector,
                                     formSelector,
                                     disableBtn,
                                     addErrors,
                                     isValidField = undefined,
                                 }: SubmitFormProperties) => {
    if (stateForm && isValidField === undefined) {
        const form = document.querySelector(`.${formSelector}`);
        if (form) {
            const inputs = form.querySelectorAll(`.${inputSelector}`);
            let dataForm = {};
            inputs?.forEach((input) => {
                const inputElement = input as HTMLInputElement;
                dataForm = { ...dataForm, [inputElement.name]: inputElement.value };
            });
            console.log(dataForm);
            Popup.handleClosePopup(config.isOpenPopupSelector);
        }
    } else {
        disableBtn();
        addErrors();
    }
};

export const checkOnValueInput = (evt: Event) => {
    evt.target && new Input(config, evt.target).checkOnValueInput();
};