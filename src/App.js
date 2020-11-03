import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

const App = () => {
  // Categoría
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  // Llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=b4b1932abcaa48a1b239a64fc42cf970`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setNoticias(resultado.articles);
    }
    consultarAPI();
  }, [categoria]);

  return(
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario setCategoria={setCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;