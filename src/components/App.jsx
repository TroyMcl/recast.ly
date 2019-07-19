import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  // when title from videoListEntry is clicked ->
  // update this.state.currentVideo
  selectVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* <div><h5><em>search</em> view goes here</h5></div> */}
            <Search/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
            <VideoList videos={this.state.videos} selectVideo={this.selectVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// is this working?