import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Step,
  Stepper,
  StepConnector,
  StepLabel,
  StepIconProps,
  Theme,
  withStyles
} from '@material-ui/core';
import Check from '@material-ui/icons/Check';
import bg from '../../images/wizard-bg.jpg';
import Contacts from './components/Contacts';
import Address from './components/Address';
import Categories from './components/Categories';
import Success from './components/Success';
import {
  initialState as initialUserState,
  addContacts,
  addAddress,
  addCategories,
  resetUser,
} from './userSlice';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: "#bc8044",
    },
  },
  completed: {
    '& $line': {
      borderColor: '#bc8044',
    },
  },
  line: {
    borderColor: '#d5d5db',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#9d9da3',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#bc8044',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#bc8044',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props: StepIconProps) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: `url(${bg}) no-repeat`,
      backgroundSize: 'cover',
      borderRadius: '1rem',
    },
    stepper: {
      borderRadius: '1rem',
    },
    inputs: {
      width: '40%',
      margin: 'auto',
    },
    button: {
      margin: theme.spacing(2.5),
      width: '7rem',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

function getSteps() {
  return ['CONTACTS', 'ADDRESS', 'CATEGORIES', 'SUCCESS'];
}

export default function Wizard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [contacts, setContacts] = useState(initialUserState.contacts);
  const [address, setAddress] = useState(initialUserState.address);
  const [categories, setCategories] = useState(initialUserState.categories);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);
  const steps = getSteps();
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Contacts contacts={contacts} setContacts={setContacts} nextButtonEnabled={nextButtonEnabled} enableNextButton={setNextButtonEnabled}/>;
      case 1:
        return <Address address={address} setAddress={setAddress}/>;
      case 2:
        return <Categories categories={categories} setCategories={setCategories}/>;
      default:
        return 'Unknown step';
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    switch (activeStep) {
      case 0:
        dispatch(addContacts(contacts));
        break;
      case 1:
        dispatch(addAddress(address));
        break;
      case 2:
        dispatch(addCategories(categories));
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    dispatch(resetUser());
    setActiveStep(0);
    setContacts(initialUserState.contacts);
    setAddress(initialUserState.address);
    setCategories(initialUserState.categories);
  };

  return (
    <div className={classes.root}>
      <Stepper className={classes.stepper} alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.inputs}>
        {activeStep === steps.length - 1 ? (
          <div>
            <Success/>
            <Box textAlign="center">
              <Button
                onClick={handleReset}
                className={classes.button}
                variant="contained"
                color="primary"
              >
                New user
              </Button>
            </Box>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <Box textAlign="center">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
                variant="outlined"
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                disabled={!nextButtonEnabled}
              >
                {activeStep === steps.length - 2 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}
