import dom from '../dom.js';
import data from '../data.js';
import sortFlights from '../utils/sortFlights.js';
import createFlight from '../components/createFlight.js';

const loadHandler = () => {
    const sortedData = sortFlights(data.flights);

    sortedData.forEach((flightData) => {
        const flightDom = createFlight(flightData);
        dom.container.append(flightDom);
    });
};

export default loadHandler;
