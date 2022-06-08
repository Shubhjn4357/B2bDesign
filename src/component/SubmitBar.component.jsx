import Stack from "@mui/material/Stack";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import {useContext} from "react";
import {Statecontext} from "../App"
  
const SubmitBarComponent=()=>{
  const State=useContext(Statecontext)
  const submit=()=>{
    console.log(State)
  }
  return <div className="d-flex justify-content-between">
  <Stack direction="row" className="btn btn-group" role="group">
    <button onClick={submit} className="btn btn-small btn btn-danger" style={{width:"10rem"}}><DeleteRoundedIcon/> Generate</button>
    <button className="btn btn-small btn btn-primary"><RemoveRedEyeRoundedIcon/> Preview</button>
    <button className="btn btn-small btn btn-primary"><RemoveRedEyeRoundedIcon/> Print</button>
  </Stack>
  <Stack direction="row" className="btn btn-group" role="group">
        <button className="btn btn-small btn btn-primary"><EmailRoundedIcon/></button>
        <button className="btn btn-small btn btn-outline-primary"><RemoveRedEyeRoundedIcon/></button>
        <button className="btn btn-small btn btn-outline-primary"><PrintRoundedIcon/></button>
        <button className="btn btn-small btn btn-primary"><SmsRoundedIcon/> SMS</button>
        <button className="btn btn-small btn btn-outline-primary"><RemoveRedEyeRoundedIcon/></button>
  </Stack>
  </div>
}
export default SubmitBarComponent;