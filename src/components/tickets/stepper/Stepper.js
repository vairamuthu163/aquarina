import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Input } from '@material-ui/core';
import { useForm } from 'react-hook-form';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function StepperComponent() {

  const {register,handleSubmit,errors} = useForm();

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit = (data) =>{
    alert(" "+data);
  }
  return (
    <Paper className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Stepper activeStep={activeStep} alternativeLabel> 
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
            <StepContent>
              <Typography> 
                <Input 
                  type="text"
                  name="selectMembers" 
                />
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button 
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === 4 - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step> 
          <Step>
            <StepLabel>Select comapamy</StepLabel>
            <StepContent>
              <Typography> 
                <Input 
                  type="text"
                  name="selectMembers" 
                />
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button 
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === 4 - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step> 
          <Step>
            <StepLabel>Select campaign contact</StepLabel>
            <StepContent>
              <Typography> 
                <Input 
                  type="text"
                  name="selectMembers" 
                />
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button 
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === 4 - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step> 
      </Stepper> 
    </Paper>
  );
}