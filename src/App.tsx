
import { Fragment } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { GlobalStyle } from "./styles/global";
export function App() {
  return (
    <Fragment>
      <Header />
      <Dashboard/>
    
      <GlobalStyle/>
    </Fragment>
  
  );
}


