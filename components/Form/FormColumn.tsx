import classNames from "classnames"

interface Props {
  className?: string
  children: any
}

const FormColumn = ({ className, children }: Props) => (
  <div className={classNames("flex w-full", className)}>{children}</div>
)

export default FormColumn
