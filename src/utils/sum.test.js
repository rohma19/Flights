import sortFlights from './sortFlights.js';

describe('sortFlights function', () => {
  it('should sort flights by departure date in ascending order', () => {
    const unsortedFlights = [
      { flightNumber: 'ABC123', departureDate: '2024-04-25T12:00:00' },
      { flightNumber: 'XYZ456', departureDate: '2024-04-24T08:30:00' },
      { flightNumber: 'DEF789', departureDate: '2024-04-26T15:45:00' },
    ];

    const expectedSortedFlights = [
      { flightNumber: 'XYZ456', departureDate: '2024-04-24T08:30:00' },
      { flightNumber: 'ABC123', departureDate: '2024-04-25T12:00:00' },
      { flightNumber: 'DEF789', departureDate: '2024-04-26T15:45:00' },
    ];

    const sortedFlights = sortFlights(unsortedFlights);

    expect(sortedFlights).toEqual(expectedSortedFlights);
  });

  it('should return an empty array when input is empty', () => {
    const unsortedFlights = [];
    const sortedFlights = sortFlights(unsortedFlights);

    expect(sortedFlights).toEqual([]);
  });

  it('should return the same array when input has only one flight', () => {
    const unsortedFlights = [{ flightNumber: 'ABC123', departureDate: '2024-04-25T12:00:00' }];
    const sortedFlights = sortFlights(unsortedFlights);

    expect(sortedFlights).toEqual(unsortedFlights);
  });
});
