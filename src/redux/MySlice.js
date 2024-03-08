import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    data : [],
    selectedData: {
            id: 0,
            name: "No Data Available",
            status: "No Data Available",
            species: "No Data Available",
            type: "No Data Available",
            gender: "",
            origin: {
                name: "",
                url: "No Data Available"
            },
            location: {
                name: "",
                url: "No Data Available"
            },
            image: "",
            episode: [
            ],
            url: "",
            created: ""
    },
    singleData:[]
}

const slice = createSlice({
    name: "mydata",
    initialState: INITIAL_STATE, 
    reducers: {
        setData: ( state, {payload}) => {
            state.data = payload
        },
        setSelectedData:(state, {payload}) =>{
            state.selectedData = payload
        },
        setSingleData:(state, {payload}) => {
            state.singleData = payload
        }
    }
});
export const { setData, setSelectedData, setSingleData } = slice.actions

export default slice.reducer;
