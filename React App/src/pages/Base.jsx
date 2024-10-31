import Header from "../components/Header/Header";
import BarraTarefas from "../components/BarraTarefas/BarraTarefas";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
      {props.children}
    </div>
    <BarraTarefas />
  </>
)

export default Base;