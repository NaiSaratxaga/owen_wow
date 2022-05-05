const getApiData = () => {
  return fetch(
    `https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50`
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie) => {
        return {
          id: index,
          poster: movie.poster,
          name: movie.movie,
          quote: movie.full_line,
          year: movie.year,
          audio: movie.audio,
          director: movie.director,
        };
      });
      return dataClean;
    });
};
export default getApiData;
