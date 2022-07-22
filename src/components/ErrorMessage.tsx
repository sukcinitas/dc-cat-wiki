import React from "react";

import "../sass/ErrorMessage.scss";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => (
  <p className="error-message">{children}</p>
);

export default ErrorMessage;
