import React from 'react';
import './profile.css';

const ShopItems = () => {
  return (
    <div className="shop-items">
      <h2>Shop Items</h2>
      <div className="item-grid">
        <ItemCard
          imageUrl="honey-jar-1.jpg"
          itemName="Honey Jar 1"
          price={8.99}
        />
        <ItemCard
          imageUrl="honey-jar-2.jpg"
          itemName="Honey Jar 2"
          price={8.99}
        />
        <ItemCard
          imageUrl="pastries.jpg"
          itemName="Pastries"
          price={12.99}
        />
        <ItemCard
          imageUrl="ingredient-bag.jpg"
          itemName="Ingredient Bag"
          price={5.99}
        />
        <ItemCard
          imageUrl="honey-bottle.jpg"
          itemName="Honey Bottle"
          price={9.99}
        />
      </div>
      <div className="reviews">
        <h3>Reviews</h3>
        {/* Add review components here */}
      </div>
    </div>
  );
};

const ItemCard = ({ imageUrl, itemName, price }) => {
  return (
    <div className="item-card">
      <img src={imageUrl} alt={itemName} />
      <h4>{itemName}</h4>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default ShopItems;