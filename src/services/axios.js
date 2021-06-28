import React from "react";
// import React, { useContext } from "react";
import axios from "axios";
// import AuthContext from "~/context/auth.context";

function Interceptor() {
  // const { handleExpire } = useContext(AuthContext);

  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      // handleExpire(error.response.data.cod);
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      // handleExpire(error.response.data.cod);
      return Promise.reject(error);
    }
  );

  return <React.Fragment />;
}

export default Interceptor;
