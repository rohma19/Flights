const sortFlights = (flights) => {
  const sortedFlights = flights.sort(
      (a, b) =>
          new Date(a.departureDate).getTime() -
          new Date(b.departureDate).getTime(),
  );

  return sortedFlights;
};

export default sortFlights;
