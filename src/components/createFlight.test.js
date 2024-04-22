/**
 * @jest-environment jsdom
 */

import createFlight from './createFlight.js';

describe('Test flight component', () => {
    const actual = createFlight({
        id: 1,
        name: 'VQ-903',
        plane: 'ATR725',
        departureDate: '2023-08-05 13:45:00',
        origin: 'DAC',
        arrivalDate: '2023-08-05 14:40:00',
        destination: 'CGP',
        stops: 0,
    });

    test('expect nodeName -> DIV', () => {
        expect(actual.nodeName).toEqual('DIV');
    });

    test('expect children count -> 7', () => {
        expect(actual.childElementCount).toEqual(7);
    });
});
