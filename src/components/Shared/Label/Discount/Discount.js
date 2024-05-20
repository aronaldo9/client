import classNames from "classnames";

export function Discount(props) {
  const { children, className } = props;
  return (
    <span
      className={classNames(
        "font-bold",
        "bg-red-500",
        "text-white",
        "absolute",
        "rounded-tl-lg",
        "rounded-tr-lg",
        "rounded-bl-lg",
        "px-2",
        "py-1",
        "mt-1",
        "z-20",
        "text-xs",
        className
      )}
    >
      {children}
    </span>
  );
}

// import classNames from "classnames";

// export function Discount(props) {
//   const { children, className } = props;
//   return (
//     <span
//       className={classNames(styles.labelDiscount, { [className]: className })}
//     >
//       {children}
//     </span>
//   );
// }
