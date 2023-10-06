import { useEffect , useState } from "react";
import MovieCard from "./components/MovieCard";

import "./App.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=fe738b5f";

// const movie = {
//   Title: "Batman",
//   Year: "1989",
//   imdbID: "tt0096895",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
// };

function App() {
  const [movies, setMovies] = useState ([]);
  const [searchTerm, setSearchTerm] = useState ('');


  const searchMovies = async (title) => {

    // Send a GET request to the specified API URL with the 'title' as a query parameter
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();   // Parse the response body as JSON

    // Update the 'movies' state variable with the 'Search' property from the JSON data
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("monty");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    searchMovies(searchTerm); // Call searchMovies with the current searchTerm
  };

  return (
    <div className="App">
      <h1> Movies </h1>

      <form className="search" onSubmit={handleSearch}>
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-secondary">
          Search
        </button>
      </form>

{ 
movies?.length > 0 
? (
 <div className="container">
{movies.map((movie) =>  
  <MovieCard movie={movie}/> 
  )}
</div>
) : 

(
  <div className = "empty">
<h2> No movies found </h2>

  </div>
)

}


     
    </div>
  );
}

export default App;
