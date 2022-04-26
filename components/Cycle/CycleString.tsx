import classNames from "classnames"

interface Props {
  id: number | string
  isActive?: boolean
  base: string
  active: string
  inactive: string
  error?: string
  children: any
}

const CycleString = ({
  id,
  isActive = false,
  base,
  active,
  inactive,
  error,
  children,
}: Props) => {
  return (
    <span
      data-cycle-id={id}
      data-cycle-item="true"
      className={classNames(
        base,
        !isActive && inactive,
        isActive && "active",
        isActive && active
      )}
    >
      {children}
    </span>
  )
}

export default CycleString
