import dynamic from "next/dynamic"
import classNames from "classnames"

const FormButton = dynamic(() => import("../Form/FormButton"))
const FormColumn = dynamic(() => import("../Form/FormColumn"))
const FormInput = dynamic(() => import("../Form/FormInput"))
const FormRow = dynamic(() => import("../Form/FormRow"))
const FormStatus = dynamic(() => import("../Form/FormStatus"))
const FormTextArea = dynamic(() => import("../Form/FormTextArea"))
const FormThankYou = dynamic(() => import("../Form/FormThankYou"))

import styles from "./Form.module.css"

interface Props {
  className?: string
  children: any
  onSubmit: any
  [key: string]: any
}

const Form = ({ className, children, onSubmit, ...props }: Props) => {
  return (
    <form
      className={classNames(styles.form, className)}
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </form>
  )
}

Form.Button = FormButton
Form.Column = FormColumn
Form.Input = FormInput
Form.Row = FormRow
Form.Status = FormStatus
Form.TextArea = FormTextArea
Form.ThankYou = FormThankYou

export default Form
