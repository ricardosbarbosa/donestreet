import axios from "axios";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { UseRequestProvider } from "@ahooksjs/use-request";
import { Jobs } from "./pages/Jobs";


function App() {
  return (
    <UseRequestProvider value={{
      requestMethod: (param)=> axios(param),
    }}>
      <BrowserRouter>
        <Switch>
          <Route path="/jobs/:id?">
            <Jobs />
          </Route>
          <Redirect to="/jobs"/>
        </Switch>
      </BrowserRouter>
    </UseRequestProvider>
  );
}

export default App;
