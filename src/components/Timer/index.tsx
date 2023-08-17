import style from "./Timer.module.scss";
import Botao from "../Button";
import Relogio from "./Watch";
import { ITarefa } from "../../types/Tarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../util/time";

interface Props {
  selecionado?: ITarefa;
  finalizarTarefa: () => void;
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado?.tempo));
    }
  }, [selecionado]);

  function regressiva(tempo: number = 0) {
    setTimeout(() => {
      if (tempo > 0) {
        setTempo(tempo - 1);
        return regressiva(tempo - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao
        onClick={() => {
          regressiva(tempo);
        }}
      >
        Começar!
      </Botao>
    </div>
  );
}
