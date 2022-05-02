import { motion } from "framer-motion"

interface Props {
  text: string
  hide: boolean
}

import styles from "./Form.module.css"

const FormHelpText = ({ text, hide = false }: Props) => {
  if (!text) return
  if (hide) return

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.helpText}
    >
      {text}
    </motion.span>
  )
}

export default FormHelpText
