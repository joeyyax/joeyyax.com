import classNames from "classnames"
import Section from "components/Section/Section"

import styles from "./Header.module.css"

interface Props {
  id?: string
  name?: string
  className?: string
  children: any
}

const Header = ({ id, name, className, children }: Props) => {
  return (
    <Section
      key={id || name}
      id={id}
      className={classNames(
        name,
        "flex justify-center w-full",
        "bg-slate-100 dark:bg-slate-800",
        styles.section,
        className
      )}
    >
      <Section.Container
        className={classNames("flex-col items-start", styles.container)}
      >
        {children}
      </Section.Container>
    </Section>
  )
}

export default Header
