import React from 'react';
import { AppBar, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

const StarwarsAppBar = ({title}) => {
    return (
        <AppBar position='static' elevation={0}>
            <Typography variant="h3" align='center' color="palegoldenrod">
                {title}
            </Typography>
        </AppBar>
    )
}

StarwarsAppBar.propTypes = {
   title: PropTypes.string,
  }

  
export default StarwarsAppBar