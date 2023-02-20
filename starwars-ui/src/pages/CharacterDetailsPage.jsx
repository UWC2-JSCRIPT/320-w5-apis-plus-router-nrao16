import React from 'react';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import CharacterDetailsCard from '../components/CharacterDetailsCard';

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
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4} >
                    <CharacterDetailsCard character={apiData} />
                </Grid>
            </Grid>
        )
    }

export default CharacterDetailsPage

