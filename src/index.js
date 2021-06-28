import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ptBR } from "date-fns/locale";
import Interceptor from "~/services/axios";
import Router from "./router";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1abc9c",
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
      {/* <Interceptor> */}
      <Router />
      {/* </Interceptor> */}
    </MuiPickersUtilsProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
