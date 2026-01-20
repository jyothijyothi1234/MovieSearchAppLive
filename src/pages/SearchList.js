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
import Box from "@mui/material/Box";



export function SearchList() {


  const [searchShow, setSearchShow] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("all");





  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setPage(1);
  };


  const clearData = () => {
    setSearch("");
    setSearchShow([]);
    setPage(1);
  };


  useEffect(() => {
    const handlerSearch = async () => {
      if (!search.trim()) {
        setSearchShow([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
       

        const dataSearch = await movieSearch(search, page, type);

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
  }, [search, page, type]);



  return (

<Box  sx={{border:"2px solid black"}}>

<Box>

{loading && (
          <Typography  variant="h4" sx={{  textAlign: "center" }}>
            Loading!!!!....
          </Typography>
        )}

{!loading && searchShow.length === 0 && search && (
          <Typography   variant="h4"
            sx={{
              textAlign: "center",
              color: "red",
              // mt: 2,
            }}>

No movies found
          </Typography>
)}
</Box>






<Grid container spacing={4}>

  <Grid size={{ xs: 12 }}>
    <SearchMovies
      searchHandler={searchHandler}
      clearData={clearData}
      search={search}
      handleTypeChange={handleTypeChange}
      type={type}
    />
  </Grid>

  <Grid size={{ xs: 12 }}>

  <Grid container spacing={3}>
    {searchShow.map((item) => (
      <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.imdbID}>

        <NavLink to={`/movie/${item.imdbID}`} style={{ textDecoration: "none" }}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image={
                  item.Poster !== "N/A"
                    ? item.Poster
                    : "https://via.placeholder.com/300x400?text=No+Image"
                }

              
              />
              <CardContent>
                <Typography textAlign="center" color="blue">
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


</Grid>




<Box      sx={{
    display: "flex",
    gap: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    p: 2
  }}>
<Button variant="contained" size="small" onClick={() => setPage(1)}>1</Button>
<Button variant="contained" size="small" onClick={() => setPage(2)}>2</Button>
<Button variant="contained" size="small" onClick={() => setPage(3)}>3</Button>
<Button variant="contained" size="small" onClick={() => setPage(4)}>4</Button>
<Button onClick={handlePrevious}>Previous</Button>
    <Button onClick={handleNext}>Next</Button>


</Box>



</Box>

  )


}
