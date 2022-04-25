import PropTypes from "prop-types"
import classNames from "classnames"

const Container = ({ className, columns, children }) => {
  const defaultWidth = "w-full"
  const classes = className.split(" ")

  // find a class that starts with w-, or min-w
  const widthClass = classes.find(
    (className) => className.startsWith("w-") || className.startsWith("min-w-")
  )

  return (
    <div
      className={classNames(
        "container flex gap-8 p-4 md:p-12 xl:p-16 rounded-lg items-center",
        !widthClass ? defaultWidth : widthClass,
        className
      )}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Container.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Container
