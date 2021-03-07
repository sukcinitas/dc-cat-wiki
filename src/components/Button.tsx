import React from 'react';

import '../sass/Button.scss';

const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="btn">{children}<span className="material-icons btn__icon">arrow_right_alt</span></button>
);

export default Button;