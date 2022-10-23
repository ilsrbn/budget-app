import Toolbar from "./components/Header/Toolbar";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
const Section = styled.section`
  min-height: 100vh;
  margin-top: 48px;
`
function App() {
  return (
    <div className="App">
      <Toolbar />
      <Section>
        <Outlet />
      </Section>
    </div>
  )
}

export default App
