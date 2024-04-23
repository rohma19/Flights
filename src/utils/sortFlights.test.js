import sortFlights from "./sortFlights.js";;

describe('sort flight departure date', () => {
    test(' sort 2 flights ', () => {
        const actual = sortFlights({
            flights: [
                {
                    id: 2,
                    name: 'VQ-906',
                    plane: 'A320',
                    departureDate: '2023-08-20 09:00:00',
                    origin: 'SFO',
                    arrivalDate: '2023-08-20 12:15:00',
                    destination: 'JFK',
                    stops: 0,
                },
                {
                    id: 1,
                    name: 'VQ-903',
                    plane: 'ATR725',
                    departureDate: '2023-08-05 13:45:00',
                    origin: 'DAC',
                    arrivalDate: '2023-08-05 14:40:00',
                    destination: 'CGP',
                    stops: 0,
                },
            ]
        });
        expect(actual).toEqual([
            {
                id: 1,
                name: 'VQ-903',
                plane: 'ATR725',
                departureDate: '2023-08-05 13:45:00',
                origin: 'DAC',
                arrivalDate: '2023-08-05 14:40:00',
                destination: 'CGP',
                stops: 0,
            },
            {
                id: 2,
                name: 'VQ-906',
                plane: 'A320',
                departureDate: '2023-08-20 09:00:00',
                origin: 'SFO',
                arrivalDate: '2023-08-20 12:15:00',
                destination: 'JFK',
                stops: 0,
            },
        ]);
    });
});
