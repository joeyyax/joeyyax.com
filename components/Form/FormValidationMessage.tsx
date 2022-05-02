import classNames from "classnames"
import { motion } from "framer-motion"
import { MdCheck as CheckIcon } from "react-icons/md"

interface Props {
  valid?: boolean
  error: boolean
  errorMessage: string
}

import styles from "./Form.module.css"

const FormValidationMessage = ({
  valid = false,
  error = false,
  errorMessage,
}: Props) => {
  if (!valid && !error) return
  if (valid) return

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classNames(
        styles.validationMessage,
        error && styles.error,
        valid && styles.valid
      )}
    >
      {error && errorMessage}
      {/* {valid && <CheckIcon />} */}
    </motion.span>
  )
}

export default FormValidationMessage
