let initialState = ['Kiev', 'Kharkiv'];

export default function citylist (state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];

        case 'REMOVE_ITEM':
            let index = state.indexOf(action.payload);

            if (index > -1) {
                state.splice(index, 1);
            }

            return [...state];

        default: return [...state];
    }
}