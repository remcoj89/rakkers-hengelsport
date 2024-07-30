'use client';

import Styles from './button.module.css';
import Link from 'next'

const Button = ({children = "Klik hier", buttonStyle, buttonType}) => {
  return (
      <button
        className={`${Styles.btn} ${Styles[buttonStyle] || 'btnPrimary'}`}
        type={buttonType}>
          {children}
      </button>
  )
}

export default Button;
