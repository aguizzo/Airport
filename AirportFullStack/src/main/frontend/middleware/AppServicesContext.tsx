import React, { createContext, useContext } from "react";
import { airportService, AirportServiceType } from "./airportService";

const AppServicesContext = createContext<AirportServiceType | undefined>(undefined);

export function useAppServicesContext() {
    const context = useContext(AppServicesContext);
    if (!context) {
        throw new Error("useAppServicesContext must be used within a AppServicesProvider");
    }
    return context;
};


export const AppServicesProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
        return (
            <AppServicesContext.Provider value={ airportService }>
              {children}
            </AppServicesContext.Provider>
        )
    }