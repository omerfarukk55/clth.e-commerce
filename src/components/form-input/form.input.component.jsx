import {Group,FormInputLabel,Input} from './form.input.styles';

const FormInput = ({label, ...otherProps})=>{
    return(
        <Group>
        <Input {...otherProps}/>
        { label && (
        <FormInputLabel shrink={otherProps.value.length} >{label}</FormInputLabel>)}
        </Group>
    );
    //label daki ve senbolünün sebebi label varsa çalışması için 
};
export default FormInput;