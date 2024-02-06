import React from 'react'
import './Orders.css'
import { db } from './firebase'
import { doc, query, onSnapshot, collection,orderBy } from 'firebase/firestore'
import { useStateValue } from './StateProvider'
import Order from './Order'


function Orders() {
    const [orders, setOrders] = React.useState([])
    const [{basket, user}, dispatch] = useStateValue()

    React.useEffect(() => {
      if(user){
        const ref = doc(db,'users',user.uid)

        const queryRef = collection(ref, 'orders')

        const orderedOrders = query(queryRef, orderBy('created', 'desc'))
        onSnapshot(orderedOrders, snapshot => {
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      } else {
        setOrders([])
      }
    },[user])
    
  return (
    <div className='orders'>
        <h1>Your Orders</h1>

        <div className='orders__order'>
          {orders?.map(order => (
            <Order order={order} />
          ))}
        </div>
    </div>
  )
}

export default Orders