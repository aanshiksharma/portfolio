import {
  Download,
  Envelope,
  ExclamationCircle,
  Github,
  Linkedin,
  Link45deg,
  FileEarmarkArrowDown,
  BoxArrowUpRight,
  Telephone,
  Whatsapp,
  X,
  Square,
  Dash,
  CCircle,
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
    case "telephone":
      return <Telephone size={iconSize} />;
    case "whatsapp":
      return <Whatsapp size={iconSize} />;
    case "x":
      return <X size={iconSize} />;
    case "dash":
      return <Dash size={iconSize} />;
    case "square":
      return <Square size={iconSize} />;
    case "copyright":
      return <CCircle size={iconSize} />;
    case "fileearmarkarrowdown":
      return <FileEarmarkArrowDown size={iconSize} />;
    case "boxArrowUpRight":
      return <BoxArrowUpRight size={iconSize} />;
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
