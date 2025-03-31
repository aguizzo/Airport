import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

import { AirportService } from 'Frontend/generated/endpoints';
import Airport from "Frontend/generated/com/example/application/model/Airport";

const AirportList = () => {
    const [airports, setAirports] = useState<Airport[]>([]);

    useEffect(() => {
        const fetchAirports = async () => {
            const data = await AirportService.findAll();
            setAirports(data);
        }
        fetchAirports();
     },[]);

    return(
        <Typography variant="h1" align="center">
           Number of Airports: {airports.length}
        </Typography>
    )
}

export default AirportList;