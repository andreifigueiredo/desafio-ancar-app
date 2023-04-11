import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Container, Paper, Typography, Button, Box } from '@mui/material';
import { login } from "../../actions/authActions";
import { QUIZZES_ROUTE } from "../../routes/router";
import { cpfMask } from "../../masks/cnpjMask";

const HomePage = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navitageTo = useNavigate();

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await login(cpf, password);
      navitageTo(QUIZZES_ROUTE); 
    } catch (error) {
      console.error('Erro ao realizar login:', error);
    }
    setCpf("");
    setPassword("");
  };

  return (
    <Container
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        component={Box}
        p={4}
        maxWidth="400px"
        width="100%"
        borderRadius="8px"
      >
        <Typography
          variant="h5"
          component="h2"
          align="center"
          style={{ marginBottom: "32px" }}
        >
          Sign in to your Ancar Form account
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                required
                value={cpfMask(cpf)}
                onChange={handleCpfChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default HomePage;
