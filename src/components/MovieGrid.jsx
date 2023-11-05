import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

function MovieGrid({ movies }) {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              alt={movie.title}
              height="auto"
              image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            />
            <CardContent>
              <Typography variant="h6">{movie.title}</Typography>
              <Typography variant="body2">
                Rating: {movie.vote_average.toFixed(1)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieGrid;
