import React, {useState} from "react";
import youtubeKEY from "./api/youtubeKEY"

import { Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "./components";
import youtube from "./api/youtube";

const API_KEY = youtubeKEY;

const App = () => {
  const [videos, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  

 const handleSubmit = async searchTerm => {
    const res = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: API_KEY,
        q: searchTerm
      }
    });
    setVideo(res.data.items);
    setSelectedVideo(res.data.items[0]);
  };

 const onVideoSelect = video => {
      setSelectedVideo(video)
   
  };

    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  
};
export default App;
