import { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    onSearch(trimmedValue);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <button className="search-button" type="submit" aria-label="Search">
        Search
      </button>

      <input
        className="search-bar"
        type="text"
        placeholder="Enter keywords..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </form>
  );
};

export default SearchBar;
