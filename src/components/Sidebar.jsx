import { AccountBox, Article, Diversity3, GroupAdd, Home, ModeNight, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2}
    sx={{ display:{
        xs:"none", sm:"block"} }}
    >
      <Box position={'fixed'}>
        <Switch onChange={e=>setMode(mode==="light" ? "dark" : "light")}/>
      </Box>
    </Box>
  )
}

export default Sidebar