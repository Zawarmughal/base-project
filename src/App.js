import "./App.css";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import PopularMovie from "./pages/PopularMovie";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";
import NowPlayingMovie from "./pages/NowPlayingMovie";
import UpComingMovie from "./pages/UpComingMovie";
import TopRatedMovie from "./pages/TopRatedMovie";
import PopularPeople from "./pages/PopularPeople";
import PopularMovieDetailPage from "./pages/PopularMovieDetailPage";
import PopularTvShowCard from "./components/PopularTvShowCard";
import TvShowDetail from "./components/TvShowDetail";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Dashboard />} />
          <Route path="/popular" element={<PopularMovie />} />
          <Route path="/popular/:id" element={<PopularMovieDetailPage />} />
          <Route path="/nowplaying" element={<NowPlayingMovie />} />
          <Route path="/upcomming" element={<UpComingMovie />} />
          <Route path="/toprated" element={<TopRatedMovie />} />
          <Route path="/populartvshow" element={<PopularTvShowCard />} />
          <Route path="/populartvshow/:id" element={<TvShowDetail />} />
          <Route path="/popularpeople" element={<PopularPeople />} />
          <Route path="/search" element={<SearchPage/>} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
