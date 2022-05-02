import classNames from "classnames"
import { motion } from "framer-motion"

interface Props {
  className?: string
  children: any
}

import styles from "./Header.module.css"

const HeaderBody = ({ className, children }: Props) => {
  return (
    <motion.h1
      className={classNames(styles.title, className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.h1>
  )
}

export default HeaderBody
