import { Box, Button, FormControl, InputBase, InputLabel, MenuItem, Paper, Select, TextField,} from '@mui/material'
import { alpha, styled } from '@mui/material/styles';
import { useState } from 'react';
import Footer from './Footer';
    
// const Inputtxt = styled(InputBase)(({ theme }) => ({
//         marginTop: theme.spacing(3),
//         color: Text.secundary
    
//       }));
const Inputtxt = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      width: "calc(100% - 100px)",
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 13,
      // width: '600px',
      margin:"2px 0 10px 0",
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const Inputselect = styled(Select)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 13,
      width: '600px',
      margin:"2px 0 10px 0",
      padding: '10px 12px',
    },
  }));
  

const Contactus = () => {

    const [travel, setTravel] = useState();

    const handleChange = (e) => {
      setTravel(e.target.value);
    };
  

  return (
    <>
    <Paper
    component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
        width: { xs: '80%',sm:"60%", md: '50%' },
        alignItems:"center",
        justifyContent:"center",
        margin:"auto",
        height:"500px",
        borderRadius:"50px",
        marginTop:"50px"
      }}>
         <FormControl variant="standard" sx={{width: "calc(100% - 100px)"}}>
        <InputLabel htmlFor="Name">
          Name
        </InputLabel>
        <Inputtxt defaultValue="Enter your Name" />
      </FormControl>
      <FormControl variant="standard" sx={{width: "calc(100% - 100px)"}}>
        <InputLabel shrink htmlFor="Name">
          Email
        </InputLabel>
        <Inputtxt defaultValue="Example@gmail.com" />
      </FormControl>
      <FormControl variant="standard" sx={{width: "calc(100% - 100px)"}}>
        <InputLabel shrink htmlFor="Name">
          Phone
        </InputLabel>
        <Inputtxt defaultValue="123456789" />
      </FormControl>
      <FormControl  variant="standard" border="none" sx={{width: "calc(100% - 100px)"}}>
        <InputLabel shrink>
          Wich travel information would you like to recive?
        </InputLabel>
        <Inputselect
           defaultValue="Wich travel information would you like to recive?"
          value={travel}
          label="Wich travel information would you like to recive?"
          onChange={handleChange}
        >
          <MenuItem value={10}>london</MenuItem>
          <MenuItem value={20}>Vienna,Austria</MenuItem>
          <MenuItem value={30}>Brussels,Belgium</MenuItem>
          <MenuItem value={10}>Berlin,Germany</MenuItem>
          <MenuItem value={20}>Full Europe</MenuItem>
          <MenuItem value={30}>Rome,Italy</MenuItem>
        </Inputselect>
      </FormControl>
      <Button variant="contained" sx={{marginTop:"30px",width: "calc(100% - 100px)"}}>Get Free Consultancy</Button>
    </Paper>
    <Footer/>
    </>
  )
}

export default Contactus