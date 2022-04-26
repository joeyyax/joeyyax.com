import PropTypes from "prop-types"
import dynamic from "next/dynamic"
import classNames from "classnames"

const Container = dynamic(() => import("./Container"))

const Section = ({ el, name, className, children }) => {
  const ElementType = el

  return (
    <ElementType
      data-name={name}
      id={name}
      className={classNames(
        name,
        "flex justify-center w-full lg:px-4 px-2",
        className
      )}
    >
      {children}
    </ElementType>
  )
}

Section.Container = Container

Section.propTypes = {
  el: PropTypes.oneOf(["header", "section", "aside", "div", "footer"]),
  name: PropTypes.string,
  className: PropTypes.any,
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  el: "section",
  name: undefined,
  className: undefined,
  children: undefined,
}

export default Section
