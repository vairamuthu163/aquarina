import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";
import { Label, Input } from "reactstrap";
import React from "react";
import NavBar from "../navbar/Navbar";
function ContactUs() {
  return (
    <>
      <NavBar navbg={'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8))'} />
      <div style={{ marginTop: "18px", margin: "100px" }}>
        <Card style={{ maxWidth: '700px', margin: "0 auto", padding: "20px 5" }}>
          <CardContent>
            <h2 className="text-center mb-4" style={{fontWeight:'bold'}}>Contact Us</h2>
            <Typography
              gutterBottom
              style={{fontWeight:'bold'}}
              color="textSecondary"
              varient="body2"
              component="p"
              className="text-center mb-3"
            >
              Fill up the form we'll get back to you within 24 hrs
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                  <Label>
                    FirstName<span className="text-danger"> *</span>
                  </Label>
                  <Input
                    label="FirstName"
                    placeholder="Enter First Name"
                    className="mt-2"
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Label>
                    LastName <span className="text-danger"> *</span>
                  </Label>
                  <Input
                  className="mt-2"
                    label="lastName"
                    placeholder="Enter Last Name"
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Label>
                    Email <span className="text-danger"> *</span>
                  </Label>
                  <Input type="email" placeholder=" Enter Email " className="mt-2" required  />
                </Grid>
                <Grid xs={12} item>
                  <Label>
                    Phone <span className="text-danger"> *</span>
                  </Label>
                  <Input
                    label="Phone"
                    placeholder="Enter Phone Number"
                    className="mt-2"
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Label>
                    Message <span className="text-danger"> *</span>
                  </Label>
                  <textarea
                    type="textarea"
                    rows='6'
                    label="Message"
                    placeholder="Type your Message here"
                    className="mt-2 form-control"
                    required
                  />
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mt-2"
                  fullWidth
                >
                  SUBMIT
                </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
export default ContactUs;
