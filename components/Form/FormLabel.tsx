import styles from "./Form.module.css"

interface Props {
  label: string
  htmlFor: string
  required?: boolean
}

const FormLabel = ({ label, htmlFor, required = false }: Props) => (
  <label className={`form-label ${styles.label}`} htmlFor={htmlFor}>
    {label}{" "}
    {required && (
      <span className="text-red-500 uppercase text-xs">Required</span>
    )}
  </label>
)

export default FormLabel
