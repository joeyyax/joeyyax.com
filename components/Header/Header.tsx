import classNames from "classnames"
import Section from "components/Section/Section"

import HeaderTitle from "./HeaderTitle"
import HeaderBody from "./HeaderBody"

import styles from "./Header.module.css"

interface Props {
  id?: string
  name?: string
  overlap?: boolean
  className?: string
  children: any
}

const Header = ({ id, name, overlap = false, className, children }: Props) => {
  return (
    <Section
      key={id || name}
      id={id}
      className={classNames(
        name,
        "bg-slate-100 dark:bg-black dark:bg-opacity-30",
        styles.section,
        overlap && styles.overlap,
        className
      )}
      animationVariants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          transition: {
            type: "tween",
            staggerChildren: 1,
          },
        },
      }}
    >
      <Section.Container
        stack={true}
        gap="sm"
        className={classNames(styles.container)}
      >
        {children}
      </Section.Container>
    </Section>
  )
}

Header.Title = HeaderTitle
Header.Body = HeaderBody

export default Header
