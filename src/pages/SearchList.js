import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { movieSearch } from "../apis/movieApi";
import SearchMovies from "../component/SearchMovies";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

export function SearchList() {
  const [searchShow, setSearchShow] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handlerPage1 = () => {
    setPage(1);
  };

  const handlerPage2 = () => {
    setPage(2);
  };

  const handlerPage3 = () => {
    setPage(3);
  };

  const handlerPage4 = () => {
    setPage(4);
  };

  const handlerPage5 = () => {
    setPage(5);
  };

  const handlerPage6 = () => {
    setPage(6);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const clearData = () => {
    setSearch("");
    setSearchShow([]);
  };

  // If we are using form then this method is correct for that with out use effect
  // const handlerSearch = async (e) => {
  //   e.preventDefault();

  useEffect(() => {
    const handlerSearch = async () => {
      if (!search.trim()) {
        setSearchShow([]);
      }

      setLoading(true);
      try {
        //HERE IN THIS CODE I HAVE MENTION BELOW "movie" BECAUSE IN API U HAVE PASSED THE TYPE THERE BASED ON THAT IT WILL FETCH DATA
        // const dataSearch = await movieSearch(search, "movie", 1);

        const dataSearch = await movieSearch(search, page);

        const searchData = dataSearch?.Search || [];

        setSearchShow(searchData);
      } catch (error) {
        setSearchShow([]);
      } finally {
        setLoading(false);
      }
    };

    const clear = setTimeout(() => {
      handlerSearch();
    }, 500);

    return () => clearTimeout(clear);
  }, [search, page]);

  //Here in this code i have used the container because that cards are coming linely if we use that container know those are coming in side by side    etc:1)Page layout → Grid container

  // 2)Row of cards → Grid container

  // 3)Each card → Grid item

  // <Grid container spacing={2} sx={{ m: 15 }}>
  // {searchShow.map((item) => (

  return (
    <Grid
      container
      sx={{
        backgroundColor: "ButtonShadow",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid size xs={12}>
        <Grid size xs={12}>
          {loading && (
            <Typography sx={{ fontSize: "20px", textAlign: "center", p: 5 }}>
              Loading!!!!....
            </Typography>
          )}
        </Grid>

        <Grid size xs={12}>
          {!loading && searchShow.length === 0 && search && (
            <Typography
              sx={{ fontSize: "20px", textAlign: "center", p: 5, color: "red" }}
            >
              No movies found
            </Typography>
          )}
        </Grid>

        <Grid size xs={12}>
          <SearchMovies
            searchHandler={searchHandler}
            clearData={clearData}
            search={search}
            handleNext={handleNext}
            page={page}
            handlePrevious={handlePrevious}
            handlerPage1={handlerPage1}
            handlerPage2={handlerPage2}
            handlerPage3={handlerPage3}
            handlerPage4={handlerPage4}
            handlerPage5={handlerPage5}
            handlerPage6={handlerPage6}
            // here this we need to use if we are using form method means
            // handlerSearch={handlerSearch}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ m: 15 }}>
        {searchShow.map((item) => (
          <Grid size xs={12} key={item.imdbID} image={item.Poster}>
            <NavLink
              to={`/movie/${item.imdbID}`}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: 345, p: 4, backgroundColor: "ButtonFace" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={
                      item.Poster !== "N/A"
                        ? item.Poster
                        : "https://via.placeholder.com/300x400?text=No+Image"
                    }
                    alt={item.Title}
                    sx={{
                      height: 400,
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography
                      style={{
                        fontSize: "20px",
                        textAlign: "center",
                        color: "blue",
                      }}
                    >
                      {item.Title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </NavLink>
          </Grid>
        ))}
      </Grid>

      <Grid size xs={12} sx={{ mt: 10 }}>
        <Button
          variant="contained"
          onClick={() => handlerPage1()}
          sx={{ mt: 1, ml: 2 }}
        >
          1
        </Button>

        <Button
          variant="contained"
          onClick={() => handlerPage2()}
          sx={{ mt: 1, ml: 2 }}
        >
          2
        </Button>
        <Button
          variant="contained"
          onClick={() => handlerPage3()}
          sx={{ mt: 1, ml: 2 }}
        >
          3
        </Button>

        <Button
          variant="contained"
          onClick={() => handlerPage4()}
          sx={{ mt: 1, ml: 2 }}
        >
          4
        </Button>

        <Button
          variant="contained"
          onClick={() => handlerPage5()}
          sx={{ mt: 1, ml: 2 }}
        >
          5
        </Button>

        <Button
          variant="contained"
          onClick={() => handlerPage6()}
          sx={{ mt: 1, ml: 2 }}
        >
          6
        </Button>

        <Button
          variant="contained"
          onClick={handlePrevious}
          sx={{ mt: 1, ml: 2 }}
        >
          Previous
        </Button>

        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, ml: 2 }}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
