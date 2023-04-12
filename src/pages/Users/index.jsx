import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Container, Paper, Typography, Button, Box, Alert } from '@mui/material';
import { signUp } from "../../actions/authActions";
import { HOME_ROUTE } from "../../routes/router";
import { cpfMask } from "../../masks/cnpjMask";

const CreateUserPage = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navitageTo = useNavigate();

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await signUp(name, cpf, password);
      navitageTo(HOME_ROUTE); 
    } catch (error) {
      console.error('Erro ao realizar signUp:', error.message);
      setError(error.message);
    }
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
          {error && 
            <Grid item xs={12}>
              <Alert severity="error" onClose={() => setError(null)}>
                {error}
              </Alert>
            </Grid>
          }
          <Grid item xs={12}>
              <TextField
                id="name"
                label="Nome"
                variant="outlined"
                fullWidth
                required
                onChange={handleNameChange}
              />
            </Grid>
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
            Criar Usuário
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateUserPage;
