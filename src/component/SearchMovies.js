import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function SearchMovies({
  searchHandler,
  clearData,
  search,

  type,
  handleTypeChange,
}) {
  //here we can use form & button  are else without form we can use useEffect in apis both methods we can use
  //   <Button variant="contained" type="submit">
  //  submit
  // </Button>

  //HERE IF WE NEED WE CAN USE THIS PREVIOUS AND NEXT BUTTON ALSO
  //{
  /* <Button
            variant="contained"
            onClick={handlePrevious}
            sx={{ mt: 1, ml: 2 }}
          >
           Previous
          </Button> */
  //}

  //{
  /* <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 1, ml: 2 }}
          >
           Next
          </Button> */
  // }

  return (
    // <Box
    //   sx={{
    //     border: "2px solid black",
    //     display: "flex",
    //     justifyContent: "center",
    //     backgroundColor: "orange",
    //     // p: 5,
    //     alignItems: "center",
    //     // my: 9,
    //     borderRadius:"5px",
    //     // maxWidth:600,
    //     mx:"auto"
    //   }}
    // >
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
          // sx={{ width: "100%" }}
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
          // sx={{ height:{md:"100%",xs:"97%"} , width: {md:"80%",xs:"90%"} }}
          // sx={{ height: "45px", ml: 2, marginTop: "5px" }}
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
          // sx={{ height: "35px", ml: 2 }}
          // sx={{ width: {md:"50%",xs:"40%"} }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="movie">Movie</MenuItem>
          <MenuItem value="series">Web Series</MenuItem>
          <MenuItem value="episode">Episode</MenuItem>
        </Select>
      </Grid>
    </Grid>
    // </Box>
  );
}

export default SearchMovies;
