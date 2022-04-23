import PropTypes from "prop-types"
import classNames from "classnames"

const CycleString = ({
  id,
  isActive,
  base,
  active,
  inactive,
  error,
  children,
}) => {
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

CycleString.propTypes = {
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  base: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  inactive: PropTypes.string.isRequired,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
}

CycleString.defaultProps = {
  id: undefined,
  isActive: false,
  base: undefined,
  active: undefined,
  inactive: undefined,
  error: undefined,
  children: undefined,
}

export default CycleString
