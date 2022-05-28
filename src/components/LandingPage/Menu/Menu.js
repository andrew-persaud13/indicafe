import React from 'react';
import Typed from 'react-typed';
import image1 from '../../../assets/add-images/breakfast-thali.jpeg';
import image2 from '../../../assets/add-images/italian-cobmo-meal.jpeg';
import image3 from '../../../assets/add-images/enchilladas.jpeg';

import './Menu.css';

const Menu = () => {
  const renderMenu = () => {
    return (
      <section>
        <Typed
          className='typed'
          strings={[
            'Our Daily Specials',
            'Burgers',
            'Sandwiches',
            'Soup',
            'Pizza',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div className='container'>
          <a href='/browse'>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
              <div
                className='card'
                style={{
                  width: '192px',
                }}
              >
                <img src={image1} className='card-img-top' alt='Dish 1' />
                <div className='card-body text-muted'>
                  <h5 className='card-title'>Breakfast Thali</h5>
                  <p className='card-text'>
                    Very tasty cultural breakfast from South India
                  </p>
                </div>
              </div>
              <div
                className='card'
                style={{
                  width: '192px',
                }}
              >
                <img src={image2} className='card-img-top' alt='Dish 1' />
                <div className='card-body text-muted'>
                  <h5 className='card-title'>Italian Combo Meal</h5>
                  <p className='card-text'>Assortment of italiana cuisines</p>
                </div>
              </div>
              <div
                className='card'
                style={{
                  width: '192px',
                }}
              >
                <img src={image3} className='card-img-top' alt='Dish 1' />
                <div className='card-body text-muted'>
                  <h5 className='card-title'>Mexican Food Deluxe</h5>
                  <p className='card-text'>Mexican Delights</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
  };

  return <>{renderMenu()}</>;
};

export default Menu;
