import React, { lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { MUIThemeProvider } from "../components/theme/ThemeProvider";
import  CssBaseline  from "@mui/material/CssBaseline";
import { credits } from "../utils/credits";

import { Home } from "../pages/Home";

const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
    credits();

    return (
      <MUIThemeProvider>
        <CssBaseline />
        <Router>
          <HelmetMeta />
          <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="*" element={PageNotFound} />
          </Routes>
        </Router>
      </MUIThemeProvider>
    );
};
