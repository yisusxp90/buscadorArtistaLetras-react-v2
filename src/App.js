import React, {Fragment, useState, useEffect} from 'react';
import Formulario from "./components/Formulario";
import axios from 'axios';
import Cancion from "./components/Cancion";
import InfoArtista from "./components/InfoArtista";

function App() {

  const [busquedaLetra, guardarBusquedaLetra] = useState({});

  const [letra, guardarLetra] = useState('');

  const [artistaCancion, guardarArtistaCancion] = useState('');

  useEffect(() => {
      if(Object.keys(busquedaLetra).length === 0) { return;}
      const consultarAPILetra = async () => {
        const {artista, cancion} = busquedaLetra;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const urlArtista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
        // se ejecutan las dos llamadas simultaneas
        const [getLetra, getInformacionArtista] = await Promise.all([
            axios.get(url),
            axios.get(urlArtista)
        ]);
        guardarLetra(getLetra.data.lyrics);
        guardarArtistaCancion(getInformacionArtista.data.artists[0]);
        // guardarLetra(resultado.data.lyrics);


      };
      consultarAPILetra();
  }, [busquedaLetra]);

  return (
    <Fragment>
        <Formulario
            guardarBusquedaLetra={guardarBusquedaLetra}
        />

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <InfoArtista artistaCancion={artistaCancion}/>
                </div>
                <div className="col-md-6">
                    <Cancion letra={letra}/>
                </div>
            </div>
        </div>
    </Fragment>
  );
}

export default App;
