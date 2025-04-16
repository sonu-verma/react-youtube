import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSidebarOpen: false,
    },
    reducers: {
        toggleSiderbar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }

});

export const { toggleSiderbar } = appSlice.actions;
export default appSlice.reducer;