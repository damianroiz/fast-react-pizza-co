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
      />
    </form>
  );
}

export default SearchOder;
