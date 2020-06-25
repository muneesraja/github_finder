import React from "react";

const SearchField = ({ handleChange }) => {
  return (
    <div className="d-flex justify-content-center mt-2">
      <input
        type="text"
        placeholder="Enter user to search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchField;
