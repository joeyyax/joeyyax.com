import { forwardRef, LegacyRef } from "react"
import classNames from "classnames"
import FormLabel from "./FormLabel"
import FormHelpText from "./FormHelpText"
import FormValidationMessage from "./FormValidationMessage"
import styles from "./Form.module.css"

interface Props {
  type?: "text" | "email" | "password"
  name: string
  value?: string
  onChange?: any
  onBlur?: any
  placeholder?: string
  label: string
  helpText?: string
  error: any
  valid: boolean
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  autoFocus?: boolean
  autoComplete?: boolean
  [key: string]: any
}

const FormInput = (
  {
    label,
    type = "text",
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    helpText,
    error = false,
    valid = false,
    required = false,
    disabled = false,
    readOnly = false,
    autoFocus = false,
    autoComplete = true,
    ...props
  }: Props,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <div
      className={classNames(
        styles.field,
        error && styles.error,
        valid && styles.valid
      )}
    >
      <FormLabel label={label} htmlFor={name} />
      <FormHelpText text={helpText} hide={error} />
      <FormValidationMessage
        valid={valid}
        error={error}
        errorMessage={error?.message}
      />
      <input
        ref={ref}
        type={type}
        id={name}
        name={name}
        // defaultValue={value}
        // value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={classNames(styles.input)}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        autoFocus={autoFocus}
        autoComplete={autoComplete ? "on" : "off"}
        aria-invalid={error ? "true" : "false"}
        {...props}
      />
    </div>
  )
}

export default forwardRef(FormInput)
