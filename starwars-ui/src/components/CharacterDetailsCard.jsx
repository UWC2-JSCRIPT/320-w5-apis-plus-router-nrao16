import React from 'react';
import { Button, Card, CardHeader, CardActions, CardContent, CardMedia, Link } from '@mui/material';
import { Typography, Box, Rating, Avatar, Tooltip } from '@mui/material';

const CharacterDetailsCard = ({ character,
  character: { name, homeworld, url } }) => {
  return (
    <Box>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardHeader
          title={`${name}`}
        />

        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
          <Link href={`${homeworld}`} color="inherit">
            Homeworld
          </Link>
        </CardContent>
      </Card>
    </Box>
  )
}

export default CharacterDetailsCard