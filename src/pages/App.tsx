import { useState } from "react";
import Formulario from "../components/Form";
import Lista from "../components/List";
import Cronometro from "../components/Timer";
import style from "./App.module.scss";
import { ITarefa } from "../types/Tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionarTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa} />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
