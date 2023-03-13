import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import footer from "../assets/footer.png";
import { Bolt } from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#002244", mb: 0, width: "100%" }}>
        <Container maxWidth="xl">
          <Grid container sx={{ pt: 1, pb: 9 }}>
            <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
            <Grid
              sx={{ margin: "10px", color: "white", pt: 5 }}
            >
              <img style={{ height: 100 }} src={footer} /><br />
              <Button sx={{ mt: "10px" }} variant="contained">Contained</Button>
            </Grid>
            <Grid item sx={{ margin: "10px", color: "white", pt: 10 }}></Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={1.5}
              sx={{ color: "white", pt: 10 }}
            >
              <Typography variant="h6" sx={{ pb: 1, fontWeight: "bold" }}>
                The Basic
              </Typography>
              <Typography variant="subtitle1">About TMDB</Typography>
              <Typography variant="subtitle1">Contact Us</Typography>
              <Typography variant="subtitle1">Support Forums</Typography>
              <Typography variant="subtitle1">API</Typography>
              <Typography variant="subtitle1">System Status</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={1.8}
              sx={{ color: "white", pt: 10, fontSize: 5 }}
            >
              <Typography variant="h6" sx={{ pb: 1, fontWeight: "bold" }}>
                GET INVOLVED
              </Typography>
              <Typography variant="subtitle1">Contribution Bible</Typography>
              <Typography variant="subtitle1">Add New Movie</Typography>
              <Typography variant="subtitle1">Add New TV Show</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4.5}
              lg={1.5}
              sx={{ color: "white", pt: 10, fontSize: 5 }}
            >
              <Typography variant="h6" sx={{ pb: 1, fontWeight: "bold" }}>
                COMMUNITY
              </Typography>
              <Typography variant="subtitle1">Guidelines</Typography>
              <Typography variant="subtitle1">Discussions</Typography>
              <Typography variant="subtitle1">Leaderboard</Typography>
              <Typography variant="subtitle1">Twitter</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={1.5}
              sx={{ color: "white", pt: 10, fontWeight: "bold" }}
            >
              <Typography variant="h6" sx={{ pb: 1, fontWeight: "bold" }}>
                LEGAL
              </Typography>
              <Typography variant="subtitle1">Terms of Use</Typography>
              <Typography variant="subtitle1">API Terms of Use</Typography>
              <Typography variant="subtitle1">Privacy Policy</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Footer
