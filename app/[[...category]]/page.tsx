import MainContainer from "@/container/MainContainer";
import { getCategories,
  getCategoryMovies,
  getPopularMovies,
  getTopRatedMovies} from "@/services/index"

async function Home({params}: {params: {category: string[]}}) {
  const [{results: topRatedMovies}, {results: popularMovies}, { genres: categories}] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);

  if(params.category?.length>0){
    var selectedCategory = await getCategoryMovies(Number(params.category[0]))
  }

  return (
   <MainContainer topRatedMovies={topRatedMovies}
   popularMovies={popularMovies}
   categories={categories}
   selectedCategory={{ 
    id: params.category?.[0] ?? "",
    movies: selectedCategory ? selectedCategory.results?.slice(0, 13) : [] }} />
  );

}
export default Home