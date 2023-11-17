import "./form.input.styles.scss";

const FormInput = ({label, ...otherProps})=>{
    return(
        <div className="group">
        <input className="form-input" {...otherProps}/>
        { label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
        </div>
    );
    //label daki ve senbolünün sebebi label varsa çalışması için 
};
export default FormInput;