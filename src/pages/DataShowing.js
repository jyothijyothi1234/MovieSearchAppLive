import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { movieSearchId } from "../apis/movieApi";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export function DataShowing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: { xs: 2, md: 4 },
        backgroundColor: "#f5f5f5",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={() => navigate(-1)}
            sx={{ mb: 2 }}
          >
            Go Back
          </Button>
        </Grid>

        {loading && (
          <Grid item xs={12}>
            <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
              Loading movie details...
            </Typography>
          </Grid>
        )}

        {!loading && !movie && (
          <Grid item xs={12}>
            <Typography
              sx={{ textAlign: "center", fontSize: "20px", color: "red" }}
            >
              Movie not found
            </Typography>
          </Grid>
        )}

        {movie && (
          <Grid item xs={12} sm={10} md={6}>
            <Card>
              <CardMedia
                component="img"
                image={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x400?text=No+Image"
                }
                alt={movie.Title}
                sx={{ maxHeight: 600, objectFit: "contain" }}
              />
              <CardContent>
                <Typography
                  sx={{ fontSize: "24px", fontWeight: "bold", mb: 2 }}
                >
                  {movie.Title}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <strong>Year:</strong> {movie.Year}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <strong>Genre:</strong> {movie.Genre}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <strong>IMDB Rating:</strong> {movie.imdbRating}
                </Typography>
                {movie.Plot && (
                  <Typography sx={{ mt: 2 }}>
                    <strong>Plot:</strong> {movie.Plot}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}