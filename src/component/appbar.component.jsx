import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
const AppbarComponent=()=>{
  const active=true;
  return <AppBar position="fixed" sx={{background:"transparent"}}>
  <Toolbar className="d-flex justify-content-between">
      <Stack spacing={1} direction="row">
        <Button variant="outlined"> <ArrowBackRoundedIcon/> Back</Button>
        <Button sx={active?{background:"#00ccff",color:"#ffffff"}:""}> B2C</Button>
        <Button> B2B Tax</Button>
        <Button> B2B Supply</Button>
      </Stack>
      <Button>Bill Documentation</Button>
  </Toolbar>
  </AppBar>
}
export default AppbarComponent;