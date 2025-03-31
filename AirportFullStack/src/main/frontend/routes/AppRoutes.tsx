import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../pages/Home";
import Airports from "../pages/Airports";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/airports" element={<Airports />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;