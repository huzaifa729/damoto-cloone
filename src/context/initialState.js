import { fetchUser } from "../utilis/fetchLocalStorageData"

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
};