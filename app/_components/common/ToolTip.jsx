function ToolTip({ children, text, className }) {
  return (
    <div className={`relative group cursor-default ${className}`}>
      {children}
      <div
        className={`
              group-hover:opacity-100 opacity-0 pointer-events-none
              absolute left-1/2 -translate-x-1/2 -top-9 py-2
              px-3 rounded-lg whitespace-nowrap shadow bg-surface
              text-secondary text-sm font-semibold
              transition ease-out duration-200
            `}
      >
        {text || "Tooltip Text"}
      </div>
    </div>
  );
}

export default ToolTip;
