import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import {useContext} from "react";
import {Statecontext,Dispatchcontext} from "../App"
const FormComponent=()=>{
  const State=useContext(Statecontext)
  const Dispatch=useContext(Dispatchcontext)
 
  const StyledButton=styled(Button)({
    background:'transparent',
    border:'1px solid #00ccff',
    fontSize:'1.2rem',
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
  })
  const handleform=(e)=>{

    Dispatch({name:e.target.name,payload:e.target.value})
  }
  const Submit=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    
  }
  return <Box className="d-center flex-column">
  <Stack direction="row" spacing={2}>
    <StyledButton>
      Unit Mapped
      <Typography>2/725</Typography>
    </StyledButton>
    <StyledButton>
      Active Charges
      <Typography>7/7</Typography>
    </StyledButton>
    <StyledButton>
      Reading
      <Typography>-/2</Typography>
    </StyledButton>
  </Stack>
  
  <form onSubmit={Submit} className="container-fluid mt-3">
  <div className="row">
    <div className="mb-3 col-6">
    <label htmlFor="cycle" className="form-label d-flex justify-content-between">
    <span>
      Billing Cycle <span className="text-danger">*</span>
    </span>
    <Stack direction="row" spacing={1}>
        <AddchartRoundedIcon color='#00ccff'/>
        <AddCircleOutlineRoundedIcon color='#018aac'/>
    </Stack>
    </label>
    <select name="BillCycle" placeholder="Jan21 B2C|B2" value={State.BillCycle} onChange={handleform} className="form-select" id="cycle" aria-describedby="Billing Cycle">
        <option value="Nov21 B2C|B2C">Nov21 B2C|B2C</option>
        <option value="Mar20 B2C|B2C">Mar20 B2C|B2C</option>
        <option value="June30 B2C|B2C">June30 B2C|B2C</option>
        <option value="Aug21 B2C|B2C">Aug21 B2C|B2C</option>
    </select>
    <div id="cycle" className="form-text text-success">Billing Cycle is Active ☑️</div>
  </div>
    <div className="mb-3 col-6">
    <label htmlFor="cluster" className="form-label d-flex justify-content-between">
    <span>
      Cluster
    </span>
    </label>
    <select name="Cluster" placeholder="Amn" value={State.Cluster} onChange={handleform} className="form-select" id="cluster" aria-describedby="Cluster">
        <option value="AMN">AMN</option>
        <option value="MTB">MTB</option>
        <option value="UAC">UAC</option>
        <option value="IND">IND</option>
    </select>
  </div>
 </div>
  <div className="row">
    
    <div className="mb-3 col-6">
    <label htmlFor="tower" className="form-label d-flex justify-content-between">
    <span>
      Tower
    </span>
    </label>
    <select name="Tower" placeholder="Select Tower" value={State.Tower} onChange={handleform} className="form-select" id="tower" aria-describedby="Tower">
        <option value="ASIA">ASIA</option>
        <option value="SINGAPORE">SINGAPORE</option>
        <option value="JAPAN">JAPAN</option>
        <option value="INDIA">INDIA</option>
    </select>
  </div>
    <div className="mb-3 col-6">
    <label htmlFor="unit" className="form-label d-flex justify-content-between">
    <span>
      Unit
    </span>
    </label>
    <select name="Unit" placeholder="AMN0020905 - Lokendra Kumar Sharma" value={State.Unit} onChange={handleform} className="form-select" id="unit" aria-describedby="Unit">
        <option value="AMN0020905 - Lokendra Kumar Sharma">AMN0020905 - Lokendra Kumar Sharma</option>
        <option value="MTB0010349 - Abhijit Singh">MTB0010349 - Abhijit Singh</option>
        <option value="UAC0070815 - David Roy">UAC0070815 - David Roy</option>
        <option value="IND0010712 - Suresh Kumar">IND0010712 - Suresh Kumar</option>
    </select>
  </div>
 </div>
 <input type="text" name="remark" value={State.remark} onChange={handleform} placeholder="Remark" className="form-control"/>
<div className="d-flex">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label ms-1" htmlFor="flexCheckChecked">
      Provisional Bill <HelpRoundedIcon/>
  </label>
</div>
  </form>
  
  </Box>
}
export default FormComponent;