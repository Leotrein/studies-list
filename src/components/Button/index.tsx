import React from "react";
import style from "./Button.module.scss";

interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

class Botao extends React.Component<BotaoProps> {
  render() {
    const { children, ...rest } = this.props;
    return (
      <button className={style.botao} {...rest}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
