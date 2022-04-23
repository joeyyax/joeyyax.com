import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import CycleString from "./CycleString"
import react from "react"

const Cycle = ({ startAt, speed, className, children }) => {
  const wrapper = useRef()
  const [active, setActive] = useState(startAt)

  useEffect(() => {
    // count spans in title
    const items = wrapper.current.querySelectorAll("[data-cycle-item]")

    const timeout = setTimeout(() => {
      // start over if we reach the end
      if (active === items.length) {
        return setActive(startAt)
      }

      setActive((i) => i + 1)
    }, speed)

    return () => clearTimeout(timeout)
  }, [active, startAt, speed])

  // get each child element and add active prop

  const childrenWithActiveState = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      ...child.props,
      isActive: active === i,
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
