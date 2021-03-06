import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Pizza',
    imgPath:
    'https://midias.agazeta.com.br/2021/01/28/710x388/pizzas-doces-e-salgadas-da-rede-de-pizzarias-carioca-forneria-original-inaugurada-em-vila-velha-408952.jpg',
      
  },
  {
    label: 'Pizza',
    imgPath:
      'https://viacafegardenshopping.com.br/wp-content/uploads/2019/07/shutterstock_225746563-1.jpg',
  },
  {
    label: 'Batata',
    imgPath:
      'https://i.pinimg.com/originals/42/c4/de/42c4de55be608455a7f55cde3336763e.jpg',
  },
  {
    label: 'Hamburguer',
    imgPath:
      'https://encontrefacilcomprebem.com.br/wp-content/uploads/2020/11/Lanches-15-6.jpg',
  },
  {
    label: 'hamburguer',
    imgPath:
      'https://ae01.alicdn.com/kf/H4550be94ccc742bcb98a474017f7037cu.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 2000,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    height: '100%',

  },
  img: {
    height: "33rem",
    display: 'flex',
    
    maxWidth: 2000,
    overflow: 'hidden',
    width: '100%',
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  


  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <title>Pizza</title>
      <AutoPlaySwipeableViews 
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </div>
  );
}

export default Header;