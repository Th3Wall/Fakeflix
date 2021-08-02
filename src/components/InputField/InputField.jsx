import "./inputField.scss"

const InputField = ({
    type,
    placeholder,
    name,
    additionalClass,
    validationMessage,
    validation,
    errors,
    disabled
}) => {
    return (
        <>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`InputField
                    ${errors?.[name] && "Input--error"}
                    ${additionalClass && additionalClass}
                `}
                ref={validation}
                disabled={disabled}
            />
            {errors?.[name] && (
                <p className="InputField__label">{validationMessage}</p>
            )}
        </>
    )
}

export default InputField
