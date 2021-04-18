import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    margin: 15,
    height: 0,
    
         
  },
});

function Icons() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="white"
        textColor="primary"
        color="white"
        aria-label="icon tabs example"
        margintop= '5'
      >
        <Tab icon={<InstagramIcon />} aria-label="instagram" />
        <Tab icon={<WhatsAppIcon />} aria-label="whatsApp" />
        <Tab icon={<EmailIcon />} aria-label="email" />
      </Tabs>
    </Paper>
  );
}

export default Icons;