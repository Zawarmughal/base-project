import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo.png";
import { NavLink, useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const pages = ["Movies", "TV Shows", "People", "More"];
const movies = [
  { id: "1", link: "popular", movie: "Popular" },
  { id: "2", link: "nowplaying", movie: "Now Playing" },
  { id: "3", link: "upcomming", movie: "Upcomming" },
  { id: "4", link: "toprated", movie: "Top Rated" },
];
const tvShows = [{ id: "1", link: "populartvshow", tvShow: "Popular" }];
const people = [{ id: "1", link: "popularpeople", people: "Popular People" }];

const NavBar = () => {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUser1, setAnchorElUser1] = React.useState(null);
  const [anchorElUser2, setAnchorElUser2] = React.useState(null);

  const [currentValue, setCurrentValue] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenUserMenu1 = (event) => {
    setAnchorElUser1(event.currentTarget);
  };
  const handleOpenUserMenu2 = (event) => {
    setAnchorElUser2(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };
  const handleCloseUserMenu1 = (event) => {
    // console.log(event.currentTarget.innerText);
    setAnchorElUser1(null);
  };
  const handleCloseUserMenu2 = () => {
    setAnchorElUser2(null);
  };

  return (
    <AppBar sx={{ bgcolor: "#002244" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img style={{ height: 20 }} src={logo} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img style={{ height: 20 }} src={logo} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* Movie */}

            <Button
              onClick={handleOpenUserMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Movies
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {movies.map((movie) => (
                <NavLink
                  key={movie.id}
                  style={{ color: "black", textDecoration: "none" }}
                  to={`/${movie.link}`}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{movie.movie}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>

           {/* TV Show */}

            <Button
              onClick={handleOpenUserMenu1}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              TV Shows
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser1}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser1)}
              onClose={handleCloseUserMenu1}
            >
              {tvShows.map((tvShow) => (
                <NavLink
                  key={tvShow.id}
                  to={`/${tvShow.link}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleCloseUserMenu1}>
                    <Typography textAlign="center">{tvShow.tvShow}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>

          {/* People */}

            <Button
              onClick={handleOpenUserMenu2}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              People
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser2}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser2)}
              onClose={handleCloseUserMenu2}
            >
              {people.map((people) => (
                <NavLink
                  key={people.id}
                  to={`/${people.link}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleCloseUserMenu2}>
                    <Typography textAlign="center">{people.people}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
