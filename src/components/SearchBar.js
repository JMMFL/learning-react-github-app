import { useState } from "react";

export default function SearchBar({ value, onSearch }) {
  const [input, setInput] = useState(value);

  return (
    <>
      <label htmlFor="Search">Search User</label>
      <input
        name="Search"
        value={input}
        type="text"
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={() => onSearch(input)}>Go</button>
    </>
  );
}
