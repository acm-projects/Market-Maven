import React from 'react';
import './profile.css';

function Profile() {
  // REPLACE THE EMPTY STRING IN ITEMS FOR IMAGE PATH TO THE PATH OF THE ACTUAL IMAGE
  const items = [
    {
      imagePath: '',
      name: 'item name',
      price: 'XX.XX',
    },
  ];

  return (
    <div className='w-screen h-screen flex text-[#472836]'>
      <div className='w-[439px] h-screen bg-dhanush-image flex flex-col items-center text-white'>
        <div className='w-full h-20' />
        <div className='border border-white rounded-3xl w-60 h-60 overflow-hidden'>
          {/* INSERT IMAGE FOR USER PROFILE HERE */}
        </div>
        <div className='w-full h-11' />
        <div className='flex items-center gap-3'>
          <div className='border w-16 h-px border-white' />
          <h1 className=' text-2xl text-[#472836]'>USER NAME</h1>
          <div className='border w-16 h-px border-white' />
        </div>
        <div className='w-full h-14' />
        <h2 className='text-2xl text-[#472836]'>Edit Profile</h2>
        <div className='w-full h-6' />
        <div className='border w-64 h-px border-white' />
        <div className='w-full h-6' />
        <h2 className='text-2xl text-[#472836]'>Reviews</h2>
        <div className='w-full h-6' />
        <div className='border w-64 h-px border-white' />
        <div className='w-full h-6' />
        <h2 className='text-2xl text-[#472836]'>Cart</h2>
        <div className='w-full h-6' />
        <div className='border w-64 h-px border-white' />
        <div className='w-full h-6' />
        <h2 className='text-2xl text-[#472836]'>Shopping History</h2>
        <div className='w-full h-6' />

        <div className='w-full h-14' />
        <h2 className='text-2xl text-[#472836]'>Contact Info</h2>
        <div className='w-full h-6' />
        <div className='border w-64 h-px border-white' />
        <div className='w-full h-6' />
        <h2 className='text-2xl text-[#472836]'>Message Vendor</h2>
        <div className='w-full h-6' />
        <div className='flex items-center gap-3'>
          <div className='border w-16 h-px border-white' />
          <h1 className=' text-2xl text-[#472836]'>OR</h1>
          <div className='border w-16 h-px border-white' />
        </div>
        <div className='w-full h-6' />
        <h2 className='text-xl text-[#472836]'>Email: useremail@email.com</h2>
        <div className='w-full h-6' />
      </div>
      <div className='w-full h-screen flex p-12'>
      <div className='w-1/2'>
          {/* <div className='w-full h-12' /> */}
          <hr className='border-[#472836]' />
          <div className='w-full h-5' />
          <h2 className='text-2xl'>Shop Items</h2>
          <div className='w-full h-4' />
          <div className='flex flex-wrap gap-5'>
            {items.map((item) => (
              <div key={Math.random()} className='w-32 h-72 flex-grow'>
                {<div className='w-72 h-60 border rounded-3xl' />}
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
          <hr className='border-[#472836] my-8' />
          <h2 className='text-2xl'>Reviews</h2>
        </div>
      </div>
      <div className="h-full w-full">
      <div className='w-full h-6' />
      <div className='w-full h-6' />
      <div className='w-full h-6' />
      <div className='w-full h-6' />
      <div className='w-full h-6' />
      <div className='w-full h-6' />
      
        <h1 className='text-2xl text-[#472836]'>Create New Product</h1>
        <form className='flex flex-col m-4 gap-1'>
          <div>
          <label>Product Name: </label>
          <input type='text' className='' />
          </div>
          
          <div>
          <label>Product Price: </label>
          <input type='number' className='' />
          
          </div>
          <button type='submit' className='border border-white' >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;

// const ShopItems = () => {
//   return (
//     <div className="shop-items">
//       <h2>Shop Items</h2>
//       <div className="item-grid">
//         <ItemCard
//           imageUrl="honey-jar-1.jpg"
//           itemName="Honey Jar 1"
//           price={8.99}
//         />
//         <ItemCard
//           imageUrl="honey-jar-2.jpg"
//           itemName="Honey Jar 2"
//           price={8.99}
//         />
//         <ItemCard
//           imageUrl="pastries.jpg"
//           itemName="Pastries"
//           price={12.99}
//         />
//         <ItemCard
//           imageUrl="ingredient-bag.jpg"
//           itemName="Ingredient Bag"
//           price={5.99}
//         />
//         <ItemCard
//           imageUrl="honey-bottle.jpg"
//           itemName="Honey Bottle"
//           price={9.99}
//         />
//       </div>
//       <div className="reviews">
//         <h3>Reviews</h3>
//         {/* Add review components here */}
//       </div>
//     </div>
//   );
// };

// const ItemCard = ({ imageUrl, itemName, price }) => {
//   return (
//     <div className="item-card">
//       <img src={imageUrl} alt={itemName} />
//       <h4>{itemName}</h4>
//       <p>${price.toFixed(2)}</p>
//     </div>
//   );
// };

// export default ShopItems;
