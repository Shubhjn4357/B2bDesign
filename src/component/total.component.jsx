import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
const TotalComponent=()=>{
  return <Card className="container-fluid">
  <CardHeader className="text-primary" title="Billing Cycle"/>
  <Divider/>
  <CardActionArea>
  <CardContent className="row text-start">
    <span className="col-6 fw-bold">Billing Period From|To</span>
    <span className="col-6">01 Nov 2021 |30 Nov 2021</span>
    <span className="col-6 fw-bold">Bill Due Date</span>
    <span className="col-6">01 jan 2022 |01 jan 2022</span>
    <span className="col-6 fw-bold">Consider Payment To</span>
    <span className="col-6">30 Nov 2021</span>
    <span className="col-6 fw-bold">Consider Meter Reading From|To</span>
    <span className="col-6">01 Nov 2021 |30 Nov 2021</span>
  </CardContent>
  </CardActionArea>
  </Card>
}
export default TotalComponent;