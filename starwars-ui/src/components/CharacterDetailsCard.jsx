import React from 'react';
import { Card, CardContent, Link } from '@mui/material';
import { Typography, Box, } from '@mui/material';
import { PropTypes } from 'prop-types';

const CharacterDetailsCard = ({
  character: { name, height, mass, hair_color, skin_color, eye_color, birth_year, films, species,
    vehicles, starships, homeworld, url } }) => {
  return (
    <Box boxShadow={10}>
      <Card
        sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography variant="h6">
            Height: {height}
          </Typography>
          <Typography variant="h6">
            Mass: {mass}
          </Typography>
          <Typography variant="h6">
            Hair Color: {hair_color}
          </Typography>
          <Typography variant="h6">
            Skin Color: {skin_color}
          </Typography>
          <Typography variant="h6">
            Eye Color: {eye_color}
          </Typography>
          <Typography variant="h6">
            Birth Year: {birth_year}
          </Typography>
          <Typography variant="h6">
            {films && (
              <div>Films:
                <ul>
                  {films.map((film, index) => (
                    <li key={index}>
                      <Link href={`${film}`}>
                        {film}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Typography>
          <Typography variant="h6">
            Homeworld: <Link href={`${homeworld}`}>
              {homeworld}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
CharacterDetailsCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    homeworld: PropTypes.string,
  })
}

export default CharacterDetailsCard