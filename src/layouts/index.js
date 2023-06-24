// import Header from "../components/Header";
// import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";
// import Wrapper from "./Wrapper";

import Stack from "@mui/material/Stack";

const MainLayout = () => (
  <Stack>
    {/* <Header /> */}
    {/* <Wrapper /> */}
    {/* <Footer /> */}
    <Outlet />
  </Stack>
);

export default MainLayout;
