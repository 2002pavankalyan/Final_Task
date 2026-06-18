import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const handleChange = (e) => {
    const value = e.target.value;

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        defaultValue={searchParams.get("search") || ""}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;