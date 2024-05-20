import {theme} from "../src/components/theme"
import { ThemeProvider} from '@mui/material/styles';
import Navbar from './components/header/Navbar';
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack, createTheme } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Customerscard from "./components/Customerscard";
import DrawerAppBar from "./components/DrawerAppBar";

 const App = () => {
  const[mode,setMode]=useState("light")
const darkTheme = createTheme({
  palette:{
    mode:mode
  }
})
  return (
  <>

<ThemeProvider theme={darkTheme}> 
<Box bgcolor={"background.default"} color={"text.primary"}>
{/* <Sidebar setMode={setMode} mode={mode}/> */}
{/* <Navbar setMode={setMode} mode={mode}/> */}
<DrawerAppBar setMode={setMode} mode={mode}/>
{/* <Main/> */}
</Box>
 </ThemeProvider>
    </>
  )
}
export default App
