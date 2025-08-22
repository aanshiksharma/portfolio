import {
  Download,
  Envelope,
  ExclamationCircle,
  Github,
  Linkedin,
  Link45deg,
  FileEarmarkArrowDown,
} from "react-bootstrap-icons";

export const Icon = ({ icon, iconSize }) => {
  switch (icon) {
    case "download":
      return <Download size={iconSize} />;
    case "mail":
      return <Envelope size={iconSize} />;
    case "linkedin":
      return <Linkedin size={iconSize} />;
    case "github":
      return <Github size={iconSize} />;
    case "link45deg":
      return <Link45deg size={iconSize} />;
    case "fileearmarkarrowdown":
      return <FileEarmarkArrowDown size={iconSize} />;
    default:
      return <ExclamationCircle size={iconSize} />;
  }
};

function Button({
  label,
  icon,
  iconSize,
  onClick,
  href,
  download,
  type = "button",
  className = "",
}) {
  const baseClass =
    "rounded-sm px-2 py-1 flex items-center justify-center gap-2 cursor-pointer transition duration-300 ease-out";

  if (href)
    return (
      <a
        href={href}
        download={download}
        className={`${baseClass} ${className}`}
      >
        {icon && <Icon icon={icon} iconSize={iconSize} />}
        <p>{label}</p>
      </a>
    );
  else {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseClass} ${className}`}
      >
        {icon && <Icon icon={icon} iconSize={iconSize} />}
        <p>{label}</p>
      </button>
    );
  }
}

export default Button;
