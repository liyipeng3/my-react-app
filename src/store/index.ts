import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '@/components/test/counter/counterSlice';
import userReducer from "@/store/user";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
});

export type StoreDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
