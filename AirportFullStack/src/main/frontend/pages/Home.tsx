import { Container, Typography, Box } from "@mui/material";
const Home = () => {
    return (
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
    )
}

export default Home;