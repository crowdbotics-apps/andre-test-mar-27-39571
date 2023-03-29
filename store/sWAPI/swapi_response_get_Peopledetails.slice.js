import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const swapi_get_people_read = createAsyncThunk("swapi_response_get_Peopledetails/swapi_get_people_read", async payload => {
  const response = await apiService.swapi_get_people_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const swapi_response_get_PeopledetailsSlice = createSlice({
  name: "swapi_response_get_Peopledetails",
  initialState,
  reducers: {},
  extraReducers: {
    [swapi_get_people_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [swapi_get_people_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [swapi_get_people_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  swapi_get_people_read,
  slice: swapi_response_get_PeopledetailsSlice
};