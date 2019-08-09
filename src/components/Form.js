import React, {useState} from 'react';


const Form = ({getAPILyrics}) => {

    //state
    const [ search, setSearch ] = useState({
        artist : '',
        song : ''
    });

    //update state
    const handleChange = e =>{
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    //api call on form's submit
    const handleSubmit = e => {
        e.preventDefault();

        getAPILyrics(search);
    }
 
    return ( 
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form 
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
                    onSubmit={handleSubmit} 
                   >
                      <fieldset>
                          <legend className="text-center">Song's Lyrics Finder</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artist</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artist" 
                                        placeholder="Artist's Name" 
                                        onChange={handleChange}
                                        value={search.artist}
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Song</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="song" 
                                        placeholder="Song's Name" 
                                        onChange={handleChange}
                                        value={search.song}
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Search</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    );
}
 
export default Form;