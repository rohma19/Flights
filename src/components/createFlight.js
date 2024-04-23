const createFlight = (flight) => {
    const flightDom = document.createElement('div');
    flightDom.className = 'flight-title';

    const name = document.createElement('div');
    name.className = 'name';
    name.innerText = flight.name;

    const plane = document.createElement('div');
    plane.className = 'plane';
    plane.innerText = flight.plane;

    const departureDate = document.createElement('div');
    departureDate.className = 'departureDate';
    departureDate.innerText = flight.departureDate;

    const origin = document.createElement('div');
    origin.className = 'origin';
    origin.innerText = flight.origin;

    const arrivalDate = document.createElement('div');
    arrivalDate.className = 'arrivalDate';
    arrivalDate.innerText = flight.arrivalDate;

    const destination = document.createElement('div');
    destination.className = 'destination';
    destination.innerText = flight.destination;

    const stops = document.createElement('div');
    stops.className = 'stops';
    stops.innerText = flight.stops;

    flightDom.append(
        name,
        plane,
        departureDate,
        origin,
        arrivalDate,
        destination,
        stops,
    );

    return flightDom;
};

export default createFlight;
