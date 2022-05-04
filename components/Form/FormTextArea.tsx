import { forwardRef, LegacyRef } from "react"
import classNames from "classnames"
import FormLabel from "./FormLabel"
import FormHelpText from "./FormHelpText"
import FormValidationMessage from "./FormValidationMessage"

import styles from "./Form.module.css"

interface Props {
  label: string
  name: string
  value: string
  onChange?: any
  placeholder?: string
  helpText?: string
  error?: any
  valid?: boolean
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  autoFocus?: boolean
  [key: string]: any
}

const FormTextArea = (
  {
    label,
    name,
    value,
    onChange,
    placeholder,
    helpText,
    error = false,
    valid = false,
    required = false,
    disabled = false,
    readOnly = false,
    autoFocus = false,
    ...props
  }: Props,
  ref: LegacyRef<HTMLTextAreaElement>
) => (
  <div
    className={classNames(
      "form-thank-you",
      styles.field,
      error && styles.error,
      valid && styles.valid
    )}
  >
    <FormLabel label={label} htmlFor={name} />
    <FormHelpText text={helpText} hide={error} />
    <FormValidationMessage error={error} errorMessage={error?.message} />
    <textarea
      ref={ref}
      id={name}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={classNames(
        styles.input,
        styles.textarea,
        error && styles.error
      )}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
      defaultValue={value}
      {...props}
    />
  </div>
)

export default forwardRef(FormTextArea)
