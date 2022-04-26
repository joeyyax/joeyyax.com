import React, { useRef, useEffect, useState } from "react"
import CycleString from "./CycleString"

interface Props {
  startAt?: number
  speed?: number
  className?: string
  children: any
}

const Cycle = ({ startAt, speed = 1500, className, children }: Props) => {
  const wrapper = useRef(null)
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

export default Cycle
