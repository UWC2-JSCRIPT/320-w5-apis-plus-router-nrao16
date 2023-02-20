import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent, Link as MUILink } from '@mui/material';
import { Box } from '@mui/material';

const CharacterCard = ({
  character: { name, homeworld, url } }) => {
  const urlSplitArray = url?.split('/');
  const peopleId = urlSplitArray[urlSplitArray.length - 2];
  return (
    <Box>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardHeader title=
          {<Link to={`/details/${peopleId}`}>{name}</Link>}
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
          <MUILink href={`${homeworld}`} color="inherit">
            Homeworld
          </MUILink>
        </CardContent>
      </Card>
    </Box>
  )
}

export default CharacterCard