import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchMovies({
  searchHandler,
  clearData,
  handlerSearch,
  search,
  handlePrevious,
  handleNext,
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
          <Button variant="contained" onClick={clearData} sx={{ mt: 1, ml: 2 }}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Grid>

    // </form>
  );
}

export default SearchMovies;
