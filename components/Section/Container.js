import PropTypes from "prop-types";
import classNames from "classnames";

const Container = ({ className, columns, children }) => {
  return (
    <div
      className={classNames(
        "container flex w-full gap-8 p-4 lg:p-16 rounded-lg items-center",
        className
      )}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: undefined,
  children: undefined,
};

export default Container;
