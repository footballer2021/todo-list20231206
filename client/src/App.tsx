import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { TodoProvider } from "./context/TodoProvider";

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Router/>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
