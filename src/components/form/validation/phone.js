const PHONE_REG_EXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/i;

export default value => (
    value && !PHONE_REG_EXP.test(value)
        ? 'Некорректный номер телефона'
        : undefined
);