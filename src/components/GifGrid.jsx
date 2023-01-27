import React, { Fragment } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images, isLoadig} = useFetchGifs(category);
    

    return (
        <Fragment>
            <h3>{category}</h3>
            {
                isLoadig ? (<h2>Cargando...</h2>) : null
            }
            <div className='card-grid'>
                {
                    images?.map((image) => (
                        <GifItem {...image}/>
                    ))
                }
            </div>
        </Fragment>
    );

}
