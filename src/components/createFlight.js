const createFlight = (flightData) => {
    // container
    const flight = document.createElement('div');
    flight.classList.add('flight');

    // name
    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = flightData.name;

    // plane
    const plane = document.createElement('div');
    plane.classList.add('plane');
    plane.innerText = flightData.plane;

    // departureDate
    const departureDate = document.createElement('div');
    departureDate.classList.add('departureDate');
    departureDate.innerText = flightData.departureDate;

    // origin
    const origin = document.createElement('div');
    origin.classList.add('origin');
    origin.innerText = flightData.origin;

    // arrivalDate
    const arrivalDate = document.createElement('div');
    arrivalDate.classList.add('arrivalDate');
    arrivalDate.innerText = flightData.arrivalDate;

    // destination
    const destination = document.createElement('div');
    destination.classList.add('destination');
    destination.innerText = flightData.destination;
    // stops
    const stops = document.createElement('div');
    stops.classList.add('stops');
    stops.innerText = flightData.stops;

    flight.append(
        name,
        plane,
        departureDate,
        origin,
        arrivalDate,
        destination,
        stops,
    );

    return flight;
};

export default createFlight;
