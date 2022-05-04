interface Props {
  children: any
}

const FormRow = ({ children }: Props) => (
  <div className="form-row flex flex-col lg:flex-row w-full gap-4">
    {children}
  </div>
)

export default FormRow
