import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchedAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchedAPI();

    }, [setFetchedCountries]);




    return (
        <FormControl className={styles.fromControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((Country, i) => <option key={i} value={Country}>{Country}</option>)}
            </NativeSelect>
        </FormControl >
    )
}

export default CountryPicker;