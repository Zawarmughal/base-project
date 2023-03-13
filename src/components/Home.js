import React, { useState } from "react";
import home from "../assets/home.jfif";
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [input, setInput] = useState("");
  const [submitClicked, setSubmitClicked] = useState(true);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  React.useEffect(() => {
    if (input ) {
      var getData = setTimeout(() => {
        navigate(`/search`);
        // console.log("kaleem");
        dispatch({ type: "SEARCH", action: { query: input, page: 1 } });
      }, 2000);
    }
    return () => clearTimeout(getData);
  }, [input]);
  const styles = {
    paperContainer: {
      // backgroundImage: `url(${posterImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      color: "white",
      minHeight: "400px",
    },
    inputField: {
      mt: "20px",
      width: "90%",
      height: "30px",
      border: 0,
      outline: "none",
      borderRadius: "50px",
    },
    inputField: {
      width: "100%",
      "& .MuiInputBase-root": {
        borderRadius: "50px",
        paddingRight: "0px",
        height: "46px",
        backgroundColor: "white",
      },
    },
  };
  const backGround = {
    backgroundImage: `url(${home})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    height: 400,
    alignItem: "center",
  };
  return (
    <Box
      sx={{
        ...backGround,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          pt: 6,
          pl: 2,
          color: "white",
        }}
      >
        Welcome.
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          pt: 2,
          pl: 2,
        }}
      >
        Millions of movies, TV shows and people to discover. Explore now.
      </Typography>
      <Box mt={5}>
        <TextField
          placeholder="Search for a movie, tv show, people"
          InputLabelProps={{ shrink: false }}
          id="input-with-icon-textfield"
          sx={styles.inputField}
          onChange={(e) => setInput(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment
                className="searchbtn"
                position="start"
                sx={{ height: "46px", marginRight: "0px" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ height: "46px", borderRadius: "50px" }}
                >
                  Search
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};
export default Home;
