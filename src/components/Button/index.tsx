import React from "react";
import style from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Botao({ children, ...rest }: Props) {
  return (
    <button className={style.botao} {...rest}>
      {children}
    </button>
  );
}

export default Botao;
