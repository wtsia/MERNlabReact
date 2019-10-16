import React, { Component } from 'react';
import './podcast.css';
import { Link } from 'react-router-dom';
import test from './list.json';

const term = encodeURIComponent('freakonomics');
const result = fetch(
  `https://itunes.apple.com/search?media=podcast&term=${term}`
);

class Podcast extends Component {
  render() {
    let list = test.map(item => {
      return (
        <div>
          {/* <h1>{item.name}</h1> */}
          <p>
            <Link to={`/${item.name}`}>{item.name}</Link> 
          </p>
          <audio controls>
            <source src={item.url} type="audio/mp3"></source>
          </audio>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}

export default Podcast;







// API DATA FORMAT
// {
//   "resultCount":2,
//   "results": [
//  {"wrapperType":"track", "kind":"podcast", "artistId":1233903520, "collectionId":354668519, "trackId":354668519, "artistName":"​Dubner Productions and Stitcher", "collectionName":"Freakonomics Radio", "trackName":"Freakonomics Radio", "collectionCensoredName":"Freakonomics Radio", "trackCensoredName":"Freakonomics Radio", "artistViewUrl":"https://podcasts.apple.com/us/artist/stitcher/1233903520?uo=4", "collectionViewUrl":"https://podcasts.apple.com/us/podcast/freakonomics-radio/id354668519?uo=4", "feedUrl":"https://rss.art19.com/freakonomics-radio", "trackViewUrl":"https://podcasts.apple.com/us/podcast/freakonomics-radio/id354668519?uo=4", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/34/42/11/344211a6-1df9-09d6-a3ab-15bde9a0e0b5/mza_7973678737825870159.jpeg/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/34/42/11/344211a6-1df9-09d6-a3ab-15bde9a0e0b5/mza_7973678737825870159.jpeg/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/34/42/11/344211a6-1df9-09d6-a3ab-15bde9a0e0b5/mza_7973678737825870159.jpeg/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2019-10-10T03:00:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":12, "country":"USA", "currency":"USD", "primaryGenreName":"Documentary", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/34/42/11/344211a6-1df9-09d6-a3ab-15bde9a0e0b5/mza_7973678737825870159.jpeg/600x600bb.jpg", "genreIds":["1543", "26", "1324"], "genres":["Documentary", "Podcasts", "Society & Culture"]},
//  {"wrapperType":"track", "kind":"podcast", "collectionId":1374027962, "trackId":1374027962,
//  "artistName":"Brad Johnson & Grayson Morris | Real Estate Investing | Private Equity | Planet Money | Cash Flow Investing | Bigger Pockets | Anti Jim Cramer | Freakonomics", "collectionName":"The Alternative Investor", "trackName":"The Alternative Investor", "collectionCensoredName":"The Alternative Investor", "trackCensoredName":"The Alternative Investor", "collectionViewUrl":"https://podcasts.apple.com/us/podcast/the-alternative-investor/id1374027962?uo=4", "feedUrl":"https://feed.pippa.io/public/shows/5aad9a49e932f49b6bf95c66", "trackViewUrl":"https://podcasts.apple.com/us/podcast/the-alternative-investor/id1374027962?uo=4", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/ec/81/ea/ec81eaee-2359-a981-73ba-c2130da8e69d/mza_3273312914381399880.jpeg/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/ec/81/ea/ec81eaee-2359-a981-73ba-c2130da8e69d/mza_3273312914381399880.jpeg/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/ec/81/ea/ec81eaee-2359-a981-73ba-c2130da8e69d/mza_3273312914381399880.jpeg/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2019-06-20T08:00:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":50, "country":"USA", "currency":"USD", "primaryGenreName":"Investing", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/ec/81/ea/ec81eaee-2359-a981-73ba-c2130da8e69d/mza_3273312914381399880.jpeg/600x600bb.jpg", "genreIds":["1412", "26", "1321"], "genres":["Investing", "Podcasts", "Business"]}]
//  }
