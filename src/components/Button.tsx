import React from 'react';

import '../sass/Button.scss';

const Button = ({ children, cb }: { children: React.ReactNode, cb: () => void }) => (
  <button onClick={cb} className="btn">{children}
    <span className="material-icons btn__icon">arrow_right_alt</span>
  </button>
);

export default Button;