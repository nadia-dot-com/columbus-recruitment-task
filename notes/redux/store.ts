import { createStore } from "redux";
import { rootReducer } from "./reducers/storeReducer";

export type RootState = ReturnType<typeof rootReducer>;

export const shopStore = createStore(rootReducer);
