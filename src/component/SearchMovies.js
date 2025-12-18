import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function SearchMovies({
  searchHandler,
  clearData,
  handlerSearch,
  search,
  handlePrevious,
  handleNext,
  type,
  handleTypeChange
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
    // <form   onSubmit={handlerSearch}>

    <Grid container spacing={2}>
      <Grid size xs={12} sx={{ width: "100%" }}>
        <Grid size xs={12} sx={{ mt: 10 }}>
          <TextField
            variant="outlined"
            placeholder="Search Movies"
            sx={{ marginRight: "10px", width: "50ch", borderRadius: "5px" }}
            onChange={searchHandler}
            value={search}
          />
          <Button variant="contained" onClick={clearData} sx={{  ml: 2,mr:5 }}>
            Clear
          </Button>


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
    </Grid>

    // </form>
  );
}

export default SearchMovies;
