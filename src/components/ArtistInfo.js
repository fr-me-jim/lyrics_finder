import React from 'react';

const ArtistInfo = ({info}) => {

    if(info.length === 0) return null;

    return (  
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight bold">
                Artist's Info
            </div>

            <div className="card-body">
                <img src={info.strArtistThumb} alt="artist_thumbnail"/>
                <p className="card-text">Genre: {info.strGenre}</p>
                <h2 className="card-text text-center">Biography</h2>
                <p className="card-text">{info.strBiographyEn}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}
 
export default ArtistInfo;