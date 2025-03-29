import { Container, Typography, Box } from "@mui/material";
const App = () => {
   return(
      <div>
         <Container maxWidth="md">
               <Box
                 sx={{
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                   height: "100vh",
                 }}
               >
                 <Typography variant="h1" align="center">
                   Welcome to Airport FullStack Project!
                 </Typography>
               </Box>
             </Container>
      </div>
   )
}

export default App;
