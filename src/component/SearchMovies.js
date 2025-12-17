import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from '@mui/material';

function SearchMovies({ searchHandler, clearData,onSubmit }) {
  return (


    <FormControl   onSubmit={onSubmit}>
    <Grid container spacing={2}>
      <Grid
        size
        xs={12}
        sx={{ width: "100%", display: "flex", justifyContent: "center", m: 10 }}
      >
        <TextField
          variant="outlined"
          placeholder="Search Movies"
          sx={{ marginRight: "10px", width: "50ch", borderRadius: "5px" }}
          onChange={searchHandler}
        />
        <Button variant="contained" onClick={clearData}>
          Clear
        </Button>
      </Grid>
    </Grid>
    </FormControl>
  );
}

export default SearchMovies;
