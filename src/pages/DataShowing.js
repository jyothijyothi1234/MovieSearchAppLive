import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { movieSearchId } from "../apis/movieApi";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export function DataShowing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchMovieById = async () => {
      try {
        const data = await movieSearchId(id);
        setMovie(data);
      } catch (error) {
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieById();
  }, [id]);

  //WE CAN USE BUTTON ARE ELSE CARD TO NAVIGATE DIRECTLY
  //In my code both for card and button we can use navigate to go back

  //{
    /* <Grid size xs={12}>

      <Button variant="contained" onClick={()=>navigate(-1)}>
         Goback
        </Button>

      </Grid> */
  //}

  return (
    <Grid container>
      <Grid size xs={12}>
        {loading && <Typography>Loading movie details...</Typography>}
      </Grid>

      <Grid size xs={12}>
        {!loading && !movie && <Typography>Movie not found</Typography>}
      </Grid>

      <Grid size xs={12}>
        <Grid size xs={12} sx={{ margin: "7px 20px" }}>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Goback
          </Button>
        </Grid>

        <Grid size xs={12}>
          {movie && (
            <Card sx={{ maxWidth: 400 }} onClick={() => navigate("/")}>
              <CardMedia
                component="img"
                image={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x400?text=No+Image"
                }
                alt={movie.Title}
              />
              <CardContent>
                <Typography sx={{ fontSize: "20px" }}>{movie.Title}</Typography>
                <Typography>Year: {movie.Year}</Typography>
                <Typography>Genre: {movie.Genre}</Typography>
                <Typography>IMDB Rating: {movie.imdbRating}</Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
