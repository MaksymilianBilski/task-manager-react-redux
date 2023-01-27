const Button = ({ selected, children, type = 'button', ...otherProps }) => {
  return (
    <button selected={selected} type={type} {...otherProps}>
      {children}
    </button>
  );
};

export { Button };
