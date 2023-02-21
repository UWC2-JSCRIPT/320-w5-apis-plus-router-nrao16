import React from 'react';
import { Box, Grid } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import CharacterDetailsCard from '../components/CharacterDetailsCard';
import StarwarsAppBar from '../components/StarwarsAppBar';

export async function loader({ params }) {
    const url = new URL(`${process.env.REACT_APP_SWAPI_BASE_URL}/${params.peopleId}`);
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

const CharacterDetailsPage =
    () => {
        const apiData = useLoaderData();
        return (
            <>
                <Box>
                    <StarwarsAppBar title={apiData?.name} />
                </Box>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} >
                        <CharacterDetailsCard character={apiData} />
                    </Grid>
                </Grid>
            </>
        )
    }

export default CharacterDetailsPage

