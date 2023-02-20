import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import PropTypes from 'prop-types';
import CharacterCard from '../components/CharacterCard';

export async function loader() {
    const url = new URL(`${process.env.REACT_APP_SWAPI_BASE_URL}`);
    return fetch(url.href)
      .then(response => response.json())
      .catch((error) => {
        console.error(error);
        return new Response(null, {
          status: 500,
          statusText: 'Internal Server Error',
        });
      });
  }

export default function CharactersPage() {
    const [characters, setCharacters] = useState([]);
    const apiData = useLoaderData();
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        //console.debug(apiData);
        if (apiData?.results) {
            let newCharactersList = [];
            apiData?.results?.map((character) =>
                newCharactersList.push(character)
            )
            setCharacters(newCharactersList);
        } else {
            console.error(`API error - ${apiData}`)
            setHasError(true);
        }

    }, [])

    if (hasError) {
        return <p>Error!</p>
    }

    const CharactersList = () => {
        let characterListGrid = characters.map((character) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={character.name}>
                    <CharacterCard
                        character={character}
                    />
                </Grid>
            )
        });
        return characterListGrid;
    }
    return (
        <Grid container spacing={4}>
            <CharactersList />
        </Grid>
    )
}

// CharactersPage.propTypes = {
//     username: PropTypes.string.isRequired
// }