import React, { Component } from "react";
import {
    Container,
    Grid,
    List,
    ListItem,
    Typography
} from "@material-ui/core"

export default class ProfileSetting extends Component {

    categories = [
        "Profile",
        "Messaging",
        "Cars settings",
        "Posts",
        "History",
        "Account"
    ]

    render() {
        return (
            <div style={{padding: "20px 100px"}}>
                <h1 style={{fontWeight: "700"}}>Settings</h1>
                <hr/>
              <Grid container>
                    <Grid xs={2}>
                          <List style={{height: "420px"}}>
                              {
                                  this.categories.map((category) =>
                                      <ListItem button> { category } </ListItem>
                                  )
                              }
                          </List>
                    </Grid>
                    <Grid xs={0.5} style={{borderRight: "1px solid grey", borderLeft: "1px solid grey", width: "20px"}} />
                    <Grid xs={8}>
                        <Container>
                            <h4>Profile settings</h4>
                            <hr/>
                            <Typography>
                                This is the Data for the profile settings
                            </Typography>
                        </Container>
                    </Grid>
              </Grid>
        </div>
    );
  }
}
