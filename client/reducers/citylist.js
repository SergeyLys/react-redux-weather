let initialState = {
    initialCity: '',
    currentCity: null,
    cityInfo: null,
    cities: ['Kiev'],
    coord: {
        lat: '',
        lon: ''
    }
};

export default function citylist (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return Object.assign({},state,{
                initialCity: state.cities[0],
                cityInfo: action.payload,
                currentCity: action.payload.name,
                coord: {
                    lat: action.payload.coord.lat,
                    lon: action.payload.coord.lon
                }
            });

        case 'ADD_CITY':
            return Object.assign({},state,{
                cities: [...state.cities, action.payload]
            });

        case 'CHANGE_LOCATION':
            console.log(action.payload);
            return Object.assign({},state,{
                coord: {
                    lat: action.payload.lat,
                    lon: action.payload.lon
                }
            });

        case 'REMOVE_CITY':
            let index = state.cities.indexOf(action.payload);

            if (index > -1) {
                state.cities.splice(index, 1);
            }

            return Object.assign({},state,{
                cities: [...state.cities]
            });

        default:
            return state;
    }
}