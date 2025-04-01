import { BrowserRouter, Routes, Route } from "react-router";
import Sidebar from "../layout/Sidebar";
import Home from "../pages/Home";
import Airports from "../pages/Airports";
import AirportForm from "../components/airport/AirportForm";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flex: 1, padding: "20px" }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/airports" element={<Airports />} />
                        <Route path="/airports/new" element={<AirportForm />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;