import classNames from "classnames"

interface Props {
  className?: string
  children: any
}

const Container = ({ className, children }: Props) => {
  const defaultWidth = "w-full"
  const classes = className.split(" ")

  // find a class that starts with w-, or min-w
  const widthClass = classes.find(
    (className) => className.startsWith("w-") || className.startsWith("min-w-")
  )

  return (
    <div
      className={classNames(
        "container flex gap-8 p-4 md:p-12 rounded-lg items-center relative z-30",
        !widthClass ? defaultWidth : widthClass,
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
