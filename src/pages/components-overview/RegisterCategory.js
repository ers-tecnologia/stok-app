import React from 'react'
import { TextField, Button, Grid } from '@mui/material';

const RegisterCategory = () => {
  return (
    <Grid container direction="column" spacing={2} sx={{ maxWidth: '500px', margin: '0 auto' }}>
      <Grid item>
        <TextField label="ID" type="number" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Descrição" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" sx={{ width: '100%' }}>
          Registrar
        </Button>
      </Grid>
    </Grid>
  )
}

export default RegisterCategory
