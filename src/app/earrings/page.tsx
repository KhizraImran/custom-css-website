import React from 'react'

const Earrings = () => {
const  earringData =[
{id: 1, name: 'Chandbali Earrings', price: 4000 , description: ' Graceful Traditional Elegance', image: '/img1.png' },    
{id: 2, name: ' Golden Pearls Hoop', price: 5000 , description: 'Lustrous Pearl Sophistication', image: '/img2.jpg' },   
{id: 3, name: 'Silver Jhumka', price: 3000 , description: ' Timeless Ethnic Charm', image: '/img3.jpeg' },
{id: 4, name: 'Long Party Earrings', price: 6000 , description: 'Glamorous Statement Accessory', image: '/img4.jpg' },
{id: 5, name: 'Golden Kundan Ethnic Jhumkas', price: 8000 , description: 'Glamorous Statement Accessory', image: '/img5.jpg' },
{id: 6, name: 'Silver-Plated Jhumkas', price: 2000 , description: ' Elegant Vintage Touch', image: '/img6.jpg' },    
];
return(
    <div>
        <div className='earrings'>
            {earringData.map((earrings) =>(
                <div key={earrings.id} className='earrings-card'>
                    <img src={earrings.image} alt={earrings.name} />
                    <h3>{earrings.name}</h3>
                    <p>{earrings.description}</p>
                    <div className='price'>${earrings.price}</div>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    </div>
);
};

export default Earrings
