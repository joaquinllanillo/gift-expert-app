import React, { Fragment, useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dr. House']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)){
            return;
        }
        
        setCategories([newCategory, ...categories]);
    };

    return (
        <Fragment>
            <h1>GiftExpertApp</h1>
            <AddCategory 
                onNewCategory={(event) => onAddCategory(event)}
            />
            {
                categories.map(category => {
                    return (
                        <GifGrid key={category} category={category}/>
                    );
                })
            }
        </Fragment>
    );
}
    