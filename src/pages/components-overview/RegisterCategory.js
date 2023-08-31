import React from 'react'
import { TextField, Button, Grid } from '@mui/material';

const RegisterCategory = () => {
  return (
    <Paper elevation={3} style={{padding: 10, margin: 'auto'}}>
      <Grid container direction="column" spacing={2} sx={{ maxWidth: '500px', margin: '0 auto' }}>
        <Grid item xs={6}>
          <TextField label="ID" type="number" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Descrição" sx={{ width: '100%' }} />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" sx={{ width: '100%' }}>
            Registrar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default RegisterCategory;
