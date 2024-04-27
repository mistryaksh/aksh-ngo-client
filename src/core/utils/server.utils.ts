import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const UserReduxSetup = fetchBaseQuery({
     baseUrl: "https://aksh-ngo-backend.onrender.com/api/1.0",
});
