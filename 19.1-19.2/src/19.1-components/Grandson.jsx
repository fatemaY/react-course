import React, { useContext } from 'react'
import { GiftsContext } from '../GiftContext';

export const Grandson = () => {
    const { gifts } = useContext(GiftsContext);

  return (
    <div>
      <h4>Grandson</h4>
      <p>Gifts: {gifts.join(', ')}</p>
    </div>
  )
}
