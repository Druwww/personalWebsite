import {configureStore} from '@reduxjs/toolkit';

import mainTabReducer from '../reducers/mainTabReducer'

export default configureStore({
    reducer: {
        mainTab : mainTabReducer
    }
});