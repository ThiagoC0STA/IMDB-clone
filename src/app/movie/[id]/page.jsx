import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return await res.json();
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full mt-10">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="Movie poster"
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spiner.svg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>

          <div className="text-lg mb-3 ">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
            <p></p>
          </div>

          <div className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </div>

          <div className="mb-3 flex items-center">
            <span className="font-semibold mr-2">Rating:</span>
            {movie.vote_count}
            <AiFillStar className="text-amber-600 ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
