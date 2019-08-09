import React, {useState, useEffect, Fragment} from 'react';
import Form from './components/Form';
import Song from './components/Song';
import axios from 'axios';

function App() {

  //state
  const [ artist, setArtist ] = useState();
  const [ lyrics, setLyrics ] = useState([]);
  const [ info, setInfo ] = useState({});


  //query to lyrics api
  const getApiLyrics = async ({artist, song}) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    //query api
    const response = await axios(url);

    //store response
    setLyrics(response.data.lyrics);
    setArtist(artist);
  }

  //query to info api
  const getApiInfo = async () => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

    //query api
    const response = await axios(url);
    
    //update state
    setInfo(response.data.artist[0]);
  }

  useEffect(
    () => {
      getApiInfo();
    }, [artist]
  );

  return (
    <Fragment>
      <Form 
        getApiLyrics={getApiLyrics}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

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
