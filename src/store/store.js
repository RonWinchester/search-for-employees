import { createStore } from "redux";
import { employeersReducer } from "./employeersReducer";

export const store = createStore(employeersReducer)