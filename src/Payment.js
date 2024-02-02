import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'

function Payment() {
    const [{basket, user}, dispatch] = useStateValue()

    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()

    /* maintaining states */
    const [succeeded, setSucceeded] = React.useState(false)
    const [processing, setProcessing] = React.useState("")
    const [error, setError] = React.useState(null)
    const [disabled, setDisabled] = React.useState(true)
    const [clientSecret, setClientSecret] = React.useState(true)

    // React.useEffect(() => {
    //     const getClientSecret = async () => {
            // const total = (getBasketTotal(basket) * 100).toFixed(2)
            // const response = await axios({
            //     method: 'post',
            //     url: `/payments/create`,
            //     data: {
            //         total: total
            //     }
            // })
            // setClientSecret(response.data.clientSecret)
    //     }

    //     getClientSecret()
    // }, [basket])
    
    // console.log(clientSecret)
    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     setProcessing(true)

    //     const payload = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: elements.getElement(CardElement)
    //         }
    //     }).then(({paymentIntent}) => {
    //         //paymentIntent = payment confirm response

    //         setSucceeded(true)
    //         setError(null)
    //         setProcessing(false)
    //         navigate('/' , {replace: true})
    //     })
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
    
        try {
            // Fetch client secret when the user submits the form
            const total = (getBasketTotal(basket) * 100).toFixed(0)
            const response = await axios({
                method: 'post',
                url: `/payments/create`,
                data: {
                    total: total
                }
            })
            setClientSecret(response.data.clientSecret)
    
            // Initiate payment with Stripe
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            });
    
            // Handle payment response
            if (payload.paymentIntent) {
                setSucceeded(true);
                setError(null);
                setProcessing(false);
                navigate('/', { replace: true });
            } else {
                setError('Payment fail');
                setProcessing(false);
            }
        } catch (error) {
            setError('Payment failed');
            setProcessing(false);
            console.error('Error processing payment:', error);
        }
    };

    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                )
            </h1>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
                
            </div>
            
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className='payment__priceContainer'>
                            <CurrencyFormat 
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment