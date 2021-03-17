import React from 'react';
import {react} from 'react-redux';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.component.styles.scss';

const CollectionItem = ({item, addItem }) => {
  const { name, price, imageUrl} = item; 
  return(
<div className='collection-item'>
  <div 
    className='image'
    style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
  
  <div className='collection-footer'>
  <span className='name'>{name}</span>
  <span className='price'>{price}$</span>
  
  </div>
  <CustomButton inverted onClick={()=> addItem(item)} >Add to cart</CustomButton>
</div>
)};

//Every time we dispath/call "addItem" function, function will recieve item as property
//pass it into "addItem" wich gives us back object witch type is "addItem" and
//payload is "item" that got passed in, then we will dispath that obj into store
//and it will go through redux flow
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
//not passing any state to props so we pass null as value
export default connect(null, mapDispatchToProps)(CollectionItem);