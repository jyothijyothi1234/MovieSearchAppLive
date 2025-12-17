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

export function SearchList() {
  const [searchShow, setSearchShow] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const clearData = () => {
    setSearch("");
    setSearchShow([]);
  };

  useEffect(() => {
   

    const handlerSearch = async (e) => {


      e.preventDefault();
      
      if (!search.trim()) {
        setSearchShow([]);
      }

      setLoading(true);
      try {
        //HERE IN THIS CODE I HAVE MENTION BELOW "movie" BECAUSE IN API U HAVE PASSED THE TYPE THERE BASED ON THAT IT WILL FETCH DATA
        // const dataSearch = await movieSearch(search, "movie", 1);

        const dataSearch = await movieSearch(search);

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
  }, [search]);

  return (
    <Grid container spacing={2} sx={{ backgroundColor: "ButtonFace", p: 10 }}>
      <Grid size xs={12} sx={{ backgroundColor: "greenyellow" }}>
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
        />
      </Grid>

      <Grid size xs={12} sx={{ m: 15 }}>
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
    </Grid>
  );
}
