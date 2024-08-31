import React, { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

function SearchComponent({ debValue }) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    debValue.setDebValue(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="">
      <input
        className="border"
        type="text"
        placeholder="Qidirish..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchComponent;
