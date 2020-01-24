import React from 'react';

const InfoArtista = ({artistaCancion}) => {

    if(Object.keys(artistaCancion).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyES, strFacebook, strTwitter, strLastFMChart} = artistaCancion;
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
                <p className="card-text">Biografia: {strBiographyES}</p>
                <p className="card-text">Genero: {strGenre}</p>

                <p className="card-text">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default InfoArtista;