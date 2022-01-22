import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        themeId: 1
    },
    reducers: {
        changeTheme: (state, action) => {
            state.themeId = action.payload
        }
    }
})



export default settingsSlice.reducer;

export const { changeTheme } = settingsSlice.actions;