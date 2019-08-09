import React, {useState, useEffect, Fragment} from 'react';
import Form from './components/Form';
import Song from './components/Song';
import ArtistInfo from './components/ArtistInfo';
import axios from 'axios';

function App() {

  //state
  const [ artist, setArtist ] = useState('');
  const [ lyrics, setLyrics ] = useState([]);
  const [ info, setInfo ] = useState({});
  const [ error, setError ] = useState(false);


  //query to lyrics api
  const getAPILyrics = async ({artist, song}) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    //update artist
    setArtist(artist);

    //query api
    const response = await axios(url);

    //store response
    setLyrics(response.data.lyrics);
    
  }

  //query to info api
  const getAPIInfo = async () => {
    if(artist){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      //query api
      const response = await axios(url);
      console.log(response);
      
      //update state
      setInfo(response.data.artists[0]);
    }
  }

  useEffect(
    () => {
      getAPIInfo();
    }, [artist]
  );

  return (
    <Fragment>
      <Form 
        getAPILyrics={getAPILyrics}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ArtistInfo 
              info={info}
            />
          </div>

          <div className="col-md-6">
            <Song 
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
