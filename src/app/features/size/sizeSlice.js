import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  splitSize: '50%',
  simulation1Size: '50%',
  simulation2Size: '50%',
};

const appSlice = createSlice({
  name: 'size',
  initialState,
  reducers: {
    setSplitSize: (state, action) => {
      state.splitSize = action.payload;
    },
    setSimulation1Size: (state, action) => {
      state.simulation1Size = action.payload;
    },
    setSimulation2Size: (state, action) => {
      state.simulation2Size = action.payload;
    },
  },
});

export const { setSplitSize, setSimulation1Size, setSimulation2Size } = appSlice.actions;
export default appSlice.reducer;