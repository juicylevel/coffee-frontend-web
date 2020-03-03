import adaptor from './adaptor';

export default ({
    component: Component,
    ...rest
}) => adaptor(Component)(rest);