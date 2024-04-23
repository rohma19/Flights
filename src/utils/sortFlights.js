const sortFlights = (data) => {
    const organisedFlights = data.flights.sort((a, b) => {
        return (
            new Date(a.departureDate).getTime() -
            new Date(b.departureDate).getTime()
        );
    });
    return organisedFlights;
};
export default sortFlights;
