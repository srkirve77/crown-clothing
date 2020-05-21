import React from 'react';
import './collection-item.styles.scss'
const CollectionItem = ( {id,name , price, imageUrl} ) => (
    <div className='collection-item'>
        <div className = 'image'
            style = {
                {
                    backgroundImage:`url(${imageUrl})`
                }
            }
        >
        </div>
        <div className = 'collection-footer'>
            <span className = 'name'><h3>{name}</h3></span>
            <span className = 'price'><h3>{price}</h3></span>
        </div> 
    </div>
);
export default CollectionItem;