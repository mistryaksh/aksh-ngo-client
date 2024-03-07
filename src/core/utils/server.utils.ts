import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const UserReduxSetup = fetchBaseQuery({
     baseUrl: "https://ngo-backend-3e3w.onrender.com/api/1.0",
});
