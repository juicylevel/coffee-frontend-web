import { createElement } from 'react';
import InputMask from 'react-input-mask';
import TextField from '@material-ui/core/TextField';

const PHONE_MASK = '+7 (999) 999-99-99';

const PhoneInputMask = ({ 
    inputRef, 
    ...rest 
}) => (
    createElement(InputMask, {
        ref: ref => inputRef(ref ? ref.inputElement : null),
        mask: PHONE_MASK,
        maskChar: null,
        ...rest
    })
);

export default props => (
    createElement(TextField, {
        InputProps: {
            inputComponent: PhoneInputMask, 
        },
        inputProps: {
            inputMode: 'tel',
        },
        ...props
    })
);