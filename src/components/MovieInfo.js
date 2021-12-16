import { useState, useEffect } from "react";

const MovieInfo = (props) => {
  const { selectedMovieData } = props.selectedMovieData;
  const [singleMovieData, setSingleMovieData] = useState(null);

  const fetchMovie = async (selectedMovieData) => {
    const resp = await fetch(
      `https://www.omdbapi.com/?i=${selectedMovieData}&apikey=7a213967`
    );
    const data = await resp.json();
    setSingleMovieData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchMovie(selectedMovieData);
  }, [selectedMovieData]);
  return <div>fd</div>;
};
export default MovieInfo;
