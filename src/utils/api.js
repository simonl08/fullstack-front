export const trendingMovies = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${page}`
    );
    console.log(data)
    setMovies(data.results);
    setMaxPages(data.total_pages);
  };