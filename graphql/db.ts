export const people = [
  {
    id: 1,
    name: 'Holquew',
    age: 18,
    gender: 'female',
  },
  {
    id: 2,
    name: 'Noha',
    age: 18,
    gender: 'male',
  },
  {
    id: 3,
    name: 'Raya',
    age: 3,
    gender: 'female',
  },
  {
    id:4,
    name: 'Tarra',
    age: 4,
    gender: 'female',
  },
  {
    id: 5,
    name: 'Yoonjin',
    age: 25,
    gender: 'female',
  },
  {
    id: 6,
    name: 'Yoonjong',
    age: 27,
    gender: 'male',
  },
];

export let movies = [
  {
    id: 1, 
    name: "Movie 1",
    score: 3.5
  },
  {
    id: 2, 
    name: "Movie 2",
    score: 5
  },
  {
    id: 3, 
    name: "Movie 3",
    score: 2
  },
  {
    id: 4, 
    name: "Movie 4",
    score: 4.5
  },
]

export const getMovies = () => movies;

export const getById = (id: number) => {
  const filteredMovies = movies.filter((movie) => id === movie.id);
  return filteredMovies[0];
}
export const deleteMovie = (id: number) => {
  const cleanedMovies = movies.filter((movie) => id !== movie.id); 
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true; 
  } else {
    return false; 
  }
}
