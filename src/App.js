import React from 'react';

// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import conronaImage from './images/lolhai.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {

        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
        //fetch the Data
        //Set the state
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={conronaImage} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div >
        )
    }
}

export default App;