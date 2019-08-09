import React, {useState, useEffect, Fragment} from 'react';
import Form from './components/Form';
import Song from './components/Song';
import ArtistInfo from './components/ArtistInfo';
import Error from './components/Error';
import axios from 'axios';

function App() {

  //state
  const [ artist, setArtist ] = useState('');
  const [ lyrics, setLyrics ] = useState([]);
  const [ info, setInfo ] = useState({});
  const [ errorArtist, setErrorArtist ] = useState(false);
  const [ errorLyrics, setErrorLyrics ] = useState(false);


  //query to lyrics api
  const getAPILyrics = async ({artist, song}) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    //update artist
    setArtist(artist);

    //query api
    try {
      const response = await axios(url);

      //store response
      setLyrics(response.data.lyrics);
      setErrorLyrics(false);

    } catch (error) {
      //if not found then set error
      if(error.response.status === 404)
        setErrorLyrics(true);
    }

    
    
  }


  useEffect(
    () => {
      //query to info api
      const getAPIInfo = async () => {
        if(artist){
          const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

          //query api
          const response = await axios(url);
          
          //update state
          if(response.data.artists === null) {
            setErrorArtist(true);
          }
          else {
            setInfo(response.data.artists[0]);
            setErrorArtist(false);
          }
        }
      }

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
            { errorArtist ? 
              <Error 
                message="We have no info about this artist!"
              /> : 
              <ArtistInfo 
                info={info}
              />
            }
          </div>

          <div className="col-md-6">
            { errorLyrics ?
              <Error 
                message="We have no lyrics for this song."
              /> :
              <Song 
                lyrics={lyrics}
              />
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
