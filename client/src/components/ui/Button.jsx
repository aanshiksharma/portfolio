function Button({
  label,
  icon,
  onClick,
  href,
  download,
  type = "button",
  className = "",
}) {
  const baseClass =
    "rounded-sm px-2 py-1 cursor-pointer transition duration-300 ease-out";

  if (href)
    return (
      <a
        href={href}
        download={download}
        className={`${baseClass} ${className}`}
      >
        {label}
      </a>
    );
  else {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseClass} ${className}`}
      >
        {label}
      </button>
    );
  }

  return;
}

export default Button;
