import React from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export default function Success() {
  return (
    <Box textAlign="center">
      <Typography variant="h3" color="primary" paragraph>Success!</Typography>
      <Typography>Your account was successfully registered.</Typography>
      <Typography>Please wait for account approval.</Typography>
      <Typography paragraph>It can take up to 24 hours.</Typography>
      <Typography variant="body2">Have questions?</Typography>
      <Typography variant="body2" paragraph>Contact info@site.com</Typography>
    </Box>
  )
}
