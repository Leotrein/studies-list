import { ITarefa } from "../../types/Tarefa";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
  // tipando uma função
}

function Lista({ tarefas, selecionarTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionarTarefa={selecionarTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
