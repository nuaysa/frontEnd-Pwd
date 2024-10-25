import { Flex } from "@chakra-ui/react";
import DemoDrawer from "./components/ui/MyComp/drawer";
import {Avatar} from "./components/ui/avatar";


function App() {

  return (
    <div>
      <Flex bgColor={'teal'} 
      h={'60px'} 
      justifyContent={'space-between'} 
      alignItems={'center'}
      color={'white'}
      _hover={{bgColor: "pink"}}
      padding={"5px"}> 
        <DemoDrawer />
        <Avatar></Avatar>
      </Flex>

    </div>
  )
}

export default App
