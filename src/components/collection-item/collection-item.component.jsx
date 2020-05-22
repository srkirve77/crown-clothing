import React from 'react';
import CustomButton from '../custome-button/custom-button.component'
import './collection-item.styles.scss'
import {connect } from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'
const CollectionItem = ( {item,addItem} ) => {
 const {id,name,price,imageUrl} = item;
 return  ( <div className='collection-item'>
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
        <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
    </div>)
};
const mapDispatchToProps=dispatch => ({
    addItem :item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);