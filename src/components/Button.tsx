import React from "react";

import "../sass/Button.scss";

const Button = ({
  children,
  cb,
  type = "button",
  withIcon = false,
  classes = [],
}: {
  children: React.ReactNode;
  cb?: () => void;
  type?: "button" | "submit";
  withIcon?: boolean;
  classes?: string[];
}) => (
  <button
    onClick={cb}
    className={`${["btn", ...classes].join(" ")}`}
    type={type}
  >
    {children}
    {withIcon && (
      <span className="material-icons btn__icon">arrow_right_alt</span>
    )}
  </button>
);

export default Button;
