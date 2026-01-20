import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function SearchMovies({
  searchHandler,
  clearData,
  search,

  type,
  handleTypeChange,
}) {
  

  return (
   
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography
          variant="h4"
          sx={{
            // fontSize: { xs: "30px", md: "40px" },
            textAlign: "center",
          }}
        >
          Search Movies
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <TextField
          variant="outlined"
          placeholder="Search Movies"
          onChange={searchHandler}
          value={search}
          sx={{
            width: { xs: "60%", md: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Grid>

      <Grid size={{ xs: 6, md: 4 }}>
        <Button
          variant="contained"
          onClick={clearData}
        >
          Clear
        </Button>
      </Grid>

      <Grid
        size={{ xs: 12, md: 8 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Filter Data :</Typography>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleTypeChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="movie">Movie</MenuItem>
          <MenuItem value="series">Web Series</MenuItem>
          <MenuItem value="episode">Episode</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
}

export default SearchMovies;
