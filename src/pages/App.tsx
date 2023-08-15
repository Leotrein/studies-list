import Formulario from "../components/Form";
import Lista from "../components/List";
import Cronometro from "../components/Timer";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
