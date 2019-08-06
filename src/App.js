import React from "react";

import { Grid } from "@material-ui/core";

import {SearchBar, VideoList, VideoDetail} from "./components";
import youtube from "./api/youtube";


class App extends React.Component{
    state = {videos:[],
    selectedVideo:null}
        componentDidMount(){
            this.handleSubmit("Youtube");
        }
    handleSubmit = async (searchTerm) =>{
        const res = await youtube.get('search',{
        params:{
            part:"snippet",
            maxResults:5,
            key: "AIzaSyAKgJEEbyT_c3iPZ9dziJwTWyVniPAkbmY",
            q:searchTerm
        }});
    this.setState({videos: res.data.items, selectedVideo:res.data.items[0]})    
    }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video})
    }
render(){
    const {selectedVideo, videos} = this.state;
  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
          <SearchBar onFormSubmit={this.handleSubmit}/>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
              </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
};
}
export default App;
