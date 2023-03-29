import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const openapi_get_models_read = createAsyncThunk(
  "openapi_response_get_ListModels/openapi_get_models_read",
  async payload => {
    const response = await apiService.openapi_get_models_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const openapi_response_get_ListModelsSlice = createSlice({
  name: "openapi_response_get_ListModels",
  initialState,
  reducers: {},
  extraReducers: {
    [openapi_get_models_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [openapi_get_models_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [openapi_get_models_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  openapi_get_models_read,
  slice: openapi_response_get_ListModelsSlice
}
