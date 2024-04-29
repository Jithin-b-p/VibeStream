import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between w-full mt-4 mb-10 sm:flex-row">
        <h2 className="text-3xl font-bold text-white ">Home</h2>
        <select
          onChange={() => {}}
          value=""
          className="p-3 mt-5 text-sm text-gray-300 bg-black rounded-lg outline-none sm:mt-0"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-start gap-8 sm:justify-start">
        {[1, 2, 3, 4, 5].map((song, i) => {
          return <SongCard key={song.key} song={song} i={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
