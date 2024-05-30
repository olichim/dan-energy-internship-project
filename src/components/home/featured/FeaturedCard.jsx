import React, { useState } from "react";
import { featured } from "../../data/Data";
const FeaturedCard = () => {
  const [showNewCard, setShowNewCard] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleItemClick = (index) => {
    setCurrentItem(featured[index]);
    setShowNewCard(true);
  };

  const handleClose = () => {
    setShowNewCard(false);
  };
<style>



  
</style>

  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <button onClick={() => handleItemClick(index)} className="my-button">
              <img src={items.cover} alt='' />
              <span>Click me!</span>
            </button>
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
      {showNewCard && (
        <div
          className="new-card-component"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          }}
        
        > <button onClick={handleClose} className="close-button">
        &times;
      </button>
          <p>{currentItem.description}</p>
          
        </div>
      )}
    </>
  );
};

export default FeaturedCard;
