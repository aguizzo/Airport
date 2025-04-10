import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppServicesContext } from "../../middleware/AppServicesContext";
import Airport from "Frontend/generated/com/example/application/model/Airport";

const AirportList = () => {
    const [airports, setAirports] = useState<Airport[]>([]);
    const navigate = useNavigate();
    const airportService = useAppServicesContext();

    useEffect(() => {
        const fetchAirports = async () => {
            const data = await airportService.getAllAirports();
            setAirports(data);
        }
        fetchAirports();
     },[]);

    const deleteAirport = async (id: string) => {
        await airportService.deleteAirport(id);
        setAirports(airports.filter(airport => airport.id !== id));
    }

    return(
        <>
        <Typography variant="h1" align="center">
            Airport List
        </Typography>
        <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/airports/new")}
                style={{ marginBottom: "20px" }}
        >
            Create Airport
        </Button>
        <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {airports.map((airport) => (
                  <TableRow key={airport.id}>
                    <TableCell>{airport.name}</TableCell>
                    <TableCell>{airport.code}</TableCell>
                    <TableCell>{airport.city}</TableCell>
                    <TableCell>{airport.country}</TableCell>
                    <TableCell>
                      <Button color="primary" onClick={() => navigate(`/airports/${airport.id}/edit`, { state: { airport }})}>
                        Update
                      </Button>
                      <Button color="secondary" onClick={() => deleteAirport(airport.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default AirportList;