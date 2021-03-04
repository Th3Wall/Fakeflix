import "./inputField.scss"

const InputField = ({ type, placeholder, name, additionalClass }) => {
    return (
        <>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`InputField ${additionalClass ? additionalClass : ""}`}
            />
            {/* {
                true && <p className='InputField__label'>{validationMessage}</p>
            } */}
        </>
    )
}

export default InputField
