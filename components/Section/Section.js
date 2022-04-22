import PropTypes from "prop-types"
import dynamic from "next/dynamic"
import classNames from "classnames"

const Container = dynamic(() => import("./Container"))

const Section = ({ type, name, className, children }) => {
  const DynamicType = type

  return (
    <DynamicType
      data-name={name}
      id={name}
      className={classNames(
        name,
        "flex justify-center w-full lg:px-4",
        className
      )}
    >
      {children}
    </DynamicType>
  )
}

Section.Container = Container

Section.propTypes = {
  type: PropTypes.oneOf(["header", "section", "aside", "div", "footer"]),
  name: PropTypes.string,
  className: PropTypes.any,
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  type: "section",
  name: undefined,
  className: undefined,
  children: undefined,
}

export default Section
