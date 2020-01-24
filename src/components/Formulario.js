import React, {useState} from 'react';

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    };

    const {artista, cancion} = busqueda;

    const [error, guardarError] = useState(false);

    const buscarInformacion = e => {
        e.preventDefault();
        if(artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarBusquedaLetra(busqueda);
        guardarBusqueda({
            artista: '',
            cancion: ''
        });
    };


    return (
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    <form className="col card text-white bg-transparent mb-5 pt-5 pb-2" onSubmit={buscarInformacion}>
                        <fieldset>
                            <legend className="text-center">
                                Buscador Letras Canciones
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="forn-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="forn-group">
                                        <label>Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Cancion"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right mt-2"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;