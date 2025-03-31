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
        <>
        <Typography variant="h1" align="center">
            Airport List
        </Typography>
        <Button
                variant="contained"
                color="primary"
                onClick={() => console.log("create")}
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
                      <Button color="primary" onClick={() => console.log("update")}>
                        Update
                      </Button>
                      <Button color="secondary" onClick={() => console.log("delete")}>
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