import { AirportEndpointService } from 'Frontend/generated/endpoints';
import AirportDto from "Frontend/generated/com/example/application/model/AirportDto";
import Airport from "Frontend/generated/com/example/application/model/Airport";

export const airportService = {
    getAllAirports: async () => {
        try {
            const response = await AirportEndpointService.findAll();
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    createAirport: async (airport: AirportDto) => {
        try {
            const response = await AirportEndpointService.save(airport);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    updateAirport: async (airport: AirportDto, id: string) => {
        try {
            const response = await AirportEndpointService.update(airport, id);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    deleteAirport: async (id: string) => {
        try {
            const response = await AirportEndpointService.deleteById(id);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
 }

 export interface AirportServiceType {
    getAllAirports: () => Promise<Airport[]>;
    createAirport: (airport: AirportDto) => Promise<AirportDto>;
    updateAirport: (airport: AirportDto, id: string) => Promise<AirportDto>;
    deleteAirport: (id: string) => Promise<void>;
 }
