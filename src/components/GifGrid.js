/* Importacion de React, y los hooks useState, useEffect  */
// useEffect sirve para hacer como un tipo de condicion, lo que esta dentro de la funcion solo se ejecutara una sola vez, y en la parte final, dentro de los corchetes es la ecepcion.
import React from 'react'

/* incovamos nuestro primeer custom hooks */
import { useFetchGifs } from '../hooks/useFetchGifs';

/* Importacion del componente GifGridIem su tarea es la siguiente: Es el componente responsable de renderizar la imagen(card) con title, y su url*/
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Cargando</p>}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
