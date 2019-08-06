import React, { useState } from "react";

import { Paper, TextField } from "@material-ui/core";

const SearchBar = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = event => {
    setSearchTerm(searchTerm);

    const { onFormSubmit } = props;
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Videotitel suchen..."
          onChange={handleChange}
        />
      </form>
    </Paper>
  );
};

export default SearchBar;
