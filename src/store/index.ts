import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '@/commpoents/test/counter/counterSlice';

export const index = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
