
const API_KEY = process.env.REACT_APP_MOVIES_DB_KEY


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchFantacyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTopTvShows:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSearchMovie:`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&language=en-US&page=1&include_adult=false&`
    // fetchTVcridets : `/tv/${5}/credits?api_key=&${API_KEY}language=en-US`
};

 
export default requests;
