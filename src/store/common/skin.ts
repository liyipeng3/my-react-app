import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/store';

export interface skinState {
    name: 'light' | 'dark';
}

const initialState: skinState = {
    name: 'light',
};

export const skinSlice = createSlice({
    name: 'skin',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<skinState>) => {
            state.name = action.payload.name;
        },
    },
});

export const {setTheme} = skinSlice.actions;

export const selectSkin = (state: RootState) => state.skin;

export default skinSlice.reducer;
