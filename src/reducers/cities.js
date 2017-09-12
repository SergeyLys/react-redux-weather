const initialState = {
    cities: [],
    forecast: {},
    coord: {
        lat: '',
        lon: ''
    }
};

export default function cities(state=initialState, action={}) {
    switch (action.type) {
        case 'GET_WEATHER':
            return {
                ...state,
                cityInfo: action.payload,
                coord: action.payload.coord
            };

        case 'GET_WEATHER_FORECAST':
            return {
                ...state,
                forecast: action.payload
            };

        case 'ADD_CITY':
            return {
                ...state,
                cities: [...state.cities, action.payload]
            };

        case 'CHANGE_LOCATION':
            console.log(action.payload);
            return {
                ...state,
                coord: {
                    lat: action.payload.lat,
                    lon: action.payload.lon
                }
            };

        case 'REMOVE_CITY':
            const index = state.cities.indexOf(action.payload);

            if (index > -1) {
                state.cities.splice(index, 1);
            }

            return {
                ...state,
                cities: [...state.cities]
            };

        default:
            return state;
    }
}