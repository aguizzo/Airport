import AppRoutes from './routes/AppRoutes';
import { AppServicesProvider } from './middleware/AppServicesContext';

const App = () => {
   return(
       <AppServicesProvider>
        <AppRoutes />
       </AppServicesProvider>
   )
}

export default App;
