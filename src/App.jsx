
import {InteractiveWelcome } from "./form";
import Login from "./Input";
import FocusableInput from "./Ref";
import StrictModeComponent from "./Strictmode";
import UncontrollLogin from "./Uncontrolledform";


function App() {

  return(
    <>
    {/* <InteractiveWelcome/>
    <Login/>
    <UncontrollLogin/> */}

    <FocusableInput/>
    <StrictModeComponent/>
    </>
  )
  
}

export default App;