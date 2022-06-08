import AppbarComponent from "./component/appbar.component";
import FormComponent from "./component/form.component";
import TotalComponent from "./component/total.component";
import SubmitBarComponent from "./component/SubmitBar.component";
import {useReducer,createContext} from "react";
import {Reducer,initialState} from "./reducer/index"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import './App.css';
export const Statecontext=createContext(initialState);
export const Dispatchcontext=createContext(initialState);
function App() {
  const [state,dispatch] =useReducer(Reducer,initialState)
  
  return (
    <div className="App">
    <Statecontext.Provider value={state} >
    <Dispatchcontext.Provider value={dispatch} >
      <AppbarComponent></AppbarComponent>
      <div className="container-fluid mt-5 py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <FormComponent></FormComponent>
          </div>
          <div className="col-12 col-md-6">
            <TotalComponent></TotalComponent>
          </div>
        </div>
        <SubmitBarComponent/>
      </div>
    </Dispatchcontext.Provider>
   </Statecontext.Provider>

    </div>
  );
}

export default App;
