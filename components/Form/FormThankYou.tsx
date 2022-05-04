import { motion } from "framer-motion"
import { HiOutlineClipboardCheck as defaultIcon } from "react-icons/hi"

const motionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const motionItem = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

interface Props {
  title?: string
  Icon?: React.ComponentType<any>
  children: any
}

const FormThankYou = ({
  title = "Thank You!",
  Icon = defaultIcon,
  children,
}: Props) => (
  <motion.div
    className="form-success flex flex-col items-center justify-center gap-4"
    variants={motionVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
  >
    <motion.div
      className="icon flex flex-col items-center"
      variants={motionItem}
    >
      <Icon className="w-16 h-16" />
    </motion.div>
    <motion.div
      className="title flex flex-col items-center"
      variants={motionItem}
    >
      <h2>{title}</h2>
    </motion.div>
    <motion.div
      className="body flex flex-col items-center gap-2"
      variants={motionItem}
    >
      {children}
    </motion.div>
  </motion.div>
)

export default FormThankYou
