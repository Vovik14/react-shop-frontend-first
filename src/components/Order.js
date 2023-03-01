import React, { Component } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} alt='no items img'/>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price} $</b>
        <FaTrashAlt className='delete-icons' onClick={()=>{this.props.onDelete(this.props.item.id)}}/>
      </div>
    )
  }
}

export default Order