import { configureStore } from "@reduxjs/toolkit";
import todofeature from "../reduxFeature/todofeature";

export const store = configureStore({
    reducer :todofeature
})