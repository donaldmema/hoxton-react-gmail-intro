import "./App.css";

import "./styles/Header.css";
import "./styles/LeftNavMenu.css";
import "./styles/EmailContent.css";

import Header from "./components/Header";
import LeftNavMenu from "./components/LeftNavMenu";
import Main from "./components/Main";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header  />
      <LeftNavMenu />
      <Main />
    </div>
  );
}

export default App;
