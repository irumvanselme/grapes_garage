import React from "react";
import {
    Card,
    Typography,
    TextField,
    FormLabel,
    MenuItem,
    Select,
    makeStyles, Button
} from "@material-ui/core";

import { Add, Star, Image } from "@material-ui/icons"

const userStyles = makeStyles((theme)=>({
    card: {
        padding: '20px 40px',
        borderTop: "4px solid lightgreen",
        marginRight: "20px"
    },
    addIcon:{
        backgroundColor: "black",
        color: 'white',
        borderRadius: "50%",
        marginRight: "10px"
    },
    realForm:{
        marginTop: "40px",
        padding: "0px 100px"
    },
    requiredIcon:{
        fontSize: "15px",
        color: "red",
        marginRight: "10px"
    },
    select:{
        width: "100%"
    }
}))

const MyLabel = (name)=> {
    const classes = userStyles();
    return (
        <FormLabel className={classes.label}>
            <Star className={classes.requiredIcon}/>
            { name }
        </FormLabel>
    )
}

export default function NewRepairCar() {
  const classes = userStyles();

  return (
      <Card className={classes.card}>
          <h3>
              <Add className={classes.addIcon}/>
              <span>Add New Repair Car</span>
          </h3>
          <form className={classes.realForm}>
              <div>
                  <div>
                      { MyLabel("Customer names ") }
                  </div>
                  <Select value={0} variant={"outlined"} className={classes.select} label="Forexample: NSHIMIYE Emmy">
                      <MenuItem value={0}>TWIZEYIMANA Jacques</MenuItem>
                      <MenuItem value={1}>TWIZEYIMANA Jacques</MenuItem>
                      <MenuItem value={2}>IRAKIZA Divin</MenuItem>
                      <MenuItem value={3}>DUSHIMIMANA Sammuel</MenuItem>
                      <MenuItem value={4}>IRUMVA HABUMUGISHA Anselme</MenuItem>
                      <MenuItem value={5}>NSHIMIYE Emmy</MenuItem>
                  </Select>
              </div>

              <div style={{marginTop: "30px"}}>
                  <div>
                      { MyLabel("Car names ") }
                  </div>
                  <TextField
                      variant="outlined"
                      style={{margin: "0px"}}
                      fullWidth
                      placeholder="For example:  Ferrali Testarosa"
                      margin="normal"
                  />
              </div>

              <div style={{marginTop: "30px"}}>
                  <div>
                      { MyLabel("Car Brand name ") }
                  </div>
                  <TextField
                      variant="outlined"
                      style={{margin: "0px"}}
                      fullWidth
                      placeholder="For example:  BMW, TOYOTA, .."
                      margin="normal"
                  />
              </div>
              <div>
                  <div>
                      { MyLabel("Customer names ") }
                  </div>
                  <Select value={0} variant={"outlined"} className={classes.select} label="Forexample: NSHIMIYE Emmy">
                      <MenuItem value={0}>TWIZEYIMANA Jacques</MenuItem>
                      <MenuItem value={1}>TWIZEYIMANA Jacques</MenuItem>
                      <MenuItem value={2}>IRAKIZA Divin</MenuItem>
                      <MenuItem value={3}>DUSHIMIMANA Sammuel</MenuItem>
                      <MenuItem value={4}>IRUMVA HABUMUGISHA Anselme</MenuItem>
                      <MenuItem value={5}>NSHIMIYE Emmy</MenuItem>
                  </Select>
              </div>

              <div style={{marginTop: "30px"}}>
                  <div>
                      { MyLabel("Car names ") }
                  </div>
                  <TextField
                      variant="outlined"
                      style={{margin: "0px"}}
                      fullWidth
                      placeholder="For example:  Ferrali Testarosa"
                      margin="normal"
                  />
              </div>

              <div style={{marginTop: "30px"}}>
                  <div>
                      { MyLabel("Car Brand name ") }
                  </div>
                  <TextField
                      variant="outlined"
                      style={{margin: "0px"}}
                      fullWidth
                      placeholder="For example:  BMW, TOYOTA, .."
                      margin="normal"
                  />
              </div>
              <div>
                  <div>
                      { MyLabel("Customer names ") }
                  </div>
                  <Select value={0} variant={"outlined"} className={classes.select} label="Forexample: NSHIMIYE Emmy">
                      <MenuItem value={0}>TWIZEYIMANA Jacques</MenuItem>
                      <MenuItem value={1}>TWIZEYIMANA Jacques</MenuItem>
                      <MenuItem value={2}>IRAKIZA Divin</MenuItem>
                      <MenuItem value={3}>DUSHIMIMANA Sammuel</MenuItem>
                      <MenuItem value={4}>IRUMVA HABUMUGISHA Anselme</MenuItem>
                      <MenuItem value={5}>NSHIMIYE Emmy</MenuItem>
                  </Select>
              </div>

              <div style={{marginTop: "30px"}}>
                  <div>
                      { MyLabel("Car names ") }
                  </div>
                  <TextField
                      variant="outlined"
                      style={{margin: "0px"}}
                      fullWidth
                      placeholder="For example:  Ferrali Testarosa"
                      margin="normal"
                  />
              </div>

              <div style={{marginTop: "30px"}}>
                  <div>
                      { MyLabel("Car Brand name ") }
                  </div>
                  <TextField
                      variant="outlined"
                      style={{margin: "0px"}}
                      fullWidth
                      placeholder="For example:  BMW, TOYOTA, .."
                      margin="normal"
                  />
              </div>
              <Card style={{width: "80px", textAlign: "center", marginTop: "20px", height: "80px"}} outlined>
                  <h1>
                      <Image/>
                  </h1>
              </Card>
              <Button size="large" color="red" style={{backgroundColor: "blue", color: "white", padding: "10px 50px", marginTop: "50px"}}>UPLOAD AN IMAGE</Button>

              <Typography style={{textAlign: "center"}}>
                  <Button size="large" color="red" style={{backgroundColor: "lightgreen", color: "white", padding: "10px 50px", marginTop: "50px"}}>SAVE CHANGES</Button>
              </Typography>
          </form>
      </Card>
  );
}
