import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountInformation from './AccountInformation';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
        <Box >
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Account Info" {...a11yProps(0)} className="text capitalize font-18 font-lato fw-bold py-4"/>
              <Tab label="Save Lists" {...a11yProps(1)} className="text capitalize font-18 font-lato fw-bold" />
              <Tab label="My Order" {...a11yProps(2)} className="text capitalize font-18 font-lato fw-bold" />
              <Tab label="Change Password" {...a11yProps(3)} className="text capitalize font-18 font-lato fw-bold" />
              <Tab label="Change Billing" {...a11yProps(4)} className="text capitalize font-18 font-lato fw-bold" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <AccountInformation/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              save list
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              my order
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              change password
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              change billing
            </TabPanel>
          </SwipeableViews>
        </Box>
  );
}