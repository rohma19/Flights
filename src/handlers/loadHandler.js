import dom from '../dom.js';
import data from '../data.js';
import sortFlights from '../utils/sortFlights.js';
import createFlight from '../components/createFlight.js';

const loadHandler = () => {
    const organisedFlights = sortFlights(data);
    organisedFlights.forEach((flight) => {
        const flightDom = createFlight(flight);
        dom.parent.appendChild(flightDom);
    });
};

export default loadHandler;
