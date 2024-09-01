import { combineReducers, configureStore, PayloadAction, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createWrapper } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from '@redux/userSlice';
import userSlice from '@redux/userSlice';


const reducer = (state:any, action: PayloadAction<any>) => {
  return combineReducers({
    user: userSlice
  })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger)
  });

const store = makeStore();

type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;

// export const wrapper = createWrapper<AppStore>(makeStore, {
//   debug: process.env.NODE_ENV === 'development'
// });

export type { AppStore, RootState, AppDispatch, AppThunk };

export default configureStore({
  reducer: {
    user: userReducer
  },
});