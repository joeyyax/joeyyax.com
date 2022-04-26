import dynamic from "next/dynamic"
import classNames from "classnames"

const Container = dynamic(() => import("./Container"))

type ElementTypes = "header" | "section" | "aside" | "div" | "footer"

interface Props {
  el?: ElementTypes
  name?: string
  className?: string
  children: any
}

const Section = ({ el = "section", name, className, children }: Props) => {
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

export default Section
