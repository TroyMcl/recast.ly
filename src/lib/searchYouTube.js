var searchYouTube = (options, callback) => {
  $.get(`https://www.googleapis.com/youtube/v3/search`, {
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    part: 'snippet',
    videoEmbeddable: true
  })
  .done(function (data) {
    console.log(data);
    callback(data.items);
  })
};

export default searchYouTube;

