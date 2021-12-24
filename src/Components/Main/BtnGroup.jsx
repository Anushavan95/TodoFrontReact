import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

export default function BtnGroup(props) {
  const { handleImportantClick, delListItem } = props;
  return (
    <Box className="div">
      <Button
        onClick={delListItem}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button variant="outlined" color="error" onClick={handleImportantClick}>
        Important
      </Button>
    </Box>
  );
}
