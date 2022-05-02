interface Props {
  loading: boolean
  errors: any
}

const FormStatus = ({ loading = false, errors = false }: Props) => {
  const hasErrors = Object.keys(errors).length > 0

  return (
    <div className="flex gap-4">
      {loading && <span className="text-sm text-gray-600">Loading...</span>}
      {hasErrors && (
        <span className="text-sm text-red-600">
          Please fix errors before submitting
        </span>
      )}
    </div>
  )
}

export default FormStatus
