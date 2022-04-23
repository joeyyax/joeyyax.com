import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import CycleString from "./CycleString"
import react from "react"

const Cycle = ({ speed, className, children }) => {
  const wrapper = useRef()
  const [active, setActive] = useState(0)

  useEffect(() => {
    // count spans in title
    const items = wrapper.current.querySelectorAll("[data-cycle-item]")

    const timeout = setTimeout(() => {
      // start over if we reach the end
      if (active === items.length) {
        return setActive(0)
      }

      setActive((i) => i + 1)
    }, speed)

    return () => clearTimeout(timeout)
  }, [active])

  // get each child element and add active prop

  const childrenWithActiveState = React.Children.map(children, (child, i) => {
    if (!child.props.id) return child

    return React.cloneElement(child, {
      ...child.props,
      isActive: active === child.props.id,
    })
  })

  return (
    <span ref={wrapper} className={className}>
      {childrenWithActiveState}
    </span>
  )
}

Cycle.String = CycleString

Cycle.propTypes = {
  speed: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Cycle.defaultProps = {
  speed: 1500,
  className: undefined,
  children: undefined,
}

export default Cycle
