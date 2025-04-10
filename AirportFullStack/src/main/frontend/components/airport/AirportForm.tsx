import { useState } from "react";
import { useNavigate, useParams, useLocation } from 'react-router';
import {
  Paper,
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Box,
  CircularProgress,
} from '@mui/material'


import { AirportService } from 'Frontend/generated/endpoints';
import Airport from "Frontend/generated/com/example/application/model/Airport";
import AirportDto from "Frontend/generated/com/example/application/model/AirportDto";

const AirportForm = () => {
    const { id } = useParams();
    const { airport } = useLocation().state || {};
    const isEdit = id !== undefined;
    const initFormData = () => {
        if (airport) {
            const { name, code, city, country } = airport;
            return {
                name: name,
                code: code,
                city :city,
                country:country
            };
        } else {
            return {
                    name: "",
                    code: "",
                    city: "",
                    country: "",
            };
        }
    }
    const [formData, setFormData] = useState<AirportDto>(initFormData);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isEdit) {
            try {
                const response = await AirportService.save(formData);
                navigate('/airports');
            } catch (error) {
                console.error(error);
            }
        }
        else {
            try{
                const response = await AirportService.update(formData, id);
                navigate('/airports');
            }
            catch(error){
                console.error(error);
            }
        }
    };

    return (
       <Paper style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
           <Typography variant="h4" align="center" gutterBottom>
               Create Airport
           </Typography>
           <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
            />
            <Container>
                  <Box display="flex" justifyContent="center" gap={2}>
                    <Button type ="submit" variant="contained" color="primary">Create Airport</Button>
                    <Button variant="contained" color="warning" onClick={() => navigate('/airports')}>Cancel</Button>
                  </Box>
            </Container>
           </form>
       </Paper>
    );
}

export default AirportForm