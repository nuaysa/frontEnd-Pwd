import {useState, createContext} from "react"
// import ContextComp from "./components/context"
// import ReducerComp from "./components/reducer"
import CallbackComp from "./components/callBack"

export const UserContext = createContext<string>("")

function App () {
  const [user] = useState<string>("Asdi")
  return (
  <div>
    <UserContext.Provider value={user}>
    {/* <ContextComp/> */}
    {/* <ReducerComp/> */}
    <CallbackComp/>
    </UserContext.Provider>
  </div>
  )  
}

export default App
