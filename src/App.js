import React, {useState, useEffect, Fragment} from 'react';
import Form from './components/Form';
import Song from './components/Song';
import axios from 'axios';

function App() {

  //state
  const [ artist, setArtirst ] = useState();
  const [ lyrics, setLyrics ] = useState([]);
  const [ info, setInfo ] = useState({});


  //query to api
  const getApiLyrics = async ({artist, song}) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    //query api
    const response = await axios(url);

    //store response
    setLyrics(response.data.lyrics);
  }

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
