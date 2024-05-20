import { Box, Container, Paper, Stack, Typography } from "@mui/material"
import Baner from "./Baner"
import styled from "@emotion/styled"
import Banner from "../../public/images/img1.jpg"
import Rightbar from "./Rightbar"
import Customers from "./Customers"
import About from "./About"
import Contactus from "./Contactus"
import Footer from "./Footer"
import Grid from '@mui/material/Unstable_Grid2';
import Home from "../components/Home/Home"
const Boxbanner = styled(Container)(({ theme }) => ({
  borderRadius:"50px",
  alignItems:"center",
  justifyContent:"center",
  margin:"auto",
  position:"relative",
  color: "white",
  opacity:"1",
  backgroundImage:`url(${Banner})`,
  marginTop:"40px",
  backgroundSize: "cover",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center center",
  marginBottom:"130px",
  height:"530px",
}));

const Feed = () => {
  return (
   <>
    <Boxbanner>
      <Grid container>
  <Grid xs={12} md={8} lg={9} >
    
    <Baner/>
    
  </Grid>
  <Grid md={4} lg={3}  sx={{ marginTop:{md:"50px",lg:"40px"},marginRight:{md:"0px"},
            display: { xs: 'none', md: 'block' }
          }}>
    
    {/* marginTop:{md:"100px",lg:"0px"},
  // marginRight:{md:"100px",lg:"0px"} */}
  <Rightbar />
     
  </Grid>
  
  </Grid>
  
      
    
   
    {/* <Rightbar/> */}
    
    
    </Boxbanner>
    {/* <Home/>
    <Customers/>
    <About/>
    <Contactus/> */}
    <Footer/>
    </>
  )
}

export default Feed