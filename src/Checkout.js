import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct  from './CheckoutProduct ';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img
             className="checkout__ad"
             src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Microsoft/COOP/17_06_2020/V209073725_IN_PC_Microsoft_COOP_refreshing_Baneers_1500x200_2.jpg"
             alt=""
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shoping Basket is empty</h2>
                    <p>
                        You have no item in your basket. To buy one or more items, click "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shoping Basket</h2>

                    {/* list out all of the checkout products  */}
                    {basket?.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;
