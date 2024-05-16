import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search oder #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400 text-sm sm:w-64 sm:focus:w-72 sm:w-64 transition-all duration-300 focus-ring focus-ring-yellow-500 sm:w-64 focus:ring-opacity-50"
      />
    </form>
  );
}

export default SearchOder;
