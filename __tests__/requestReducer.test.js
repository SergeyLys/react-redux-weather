import request from '../src/reducers/cities';

describe('Request Reducer', () => {
    it('has a default state', () => {
        expect(request(undefined, {type: 'unexpected'})).toEqual({
            cities: [],
            forecast: {},
            coord: {
                lat: '',
                lon: ''
            }
        });
    });

    it('can handle GET_WEATHER', () => {
        expect(request(undefined, {
            type: 'GET_WEATHER',
            payload: {
                cities: [],
                cityInfo: {},
                coord: {}
            }
        })).toEqual({
            cities: [],
            cityInfo: {
                cities: [],
                cityInfo: {},
                coord: {}
            },
            coord: {},
            forecast: {}
        });
    });
});