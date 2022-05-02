import classNames from "classnames"
import { motion } from "framer-motion"

interface Props {
  className?: string
  children: any
}

import styles from "./Header.module.css"

const HeaderBody = ({ className, children }: Props) => {
  return (
    <motion.div
      className={classNames(styles.body, className)}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 0.7, transition: { delay: 0.15 } }}
    >
      {children}
    </motion.div>
  )
}

export default HeaderBody
