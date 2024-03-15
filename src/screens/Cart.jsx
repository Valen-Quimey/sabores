import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allCartItems from '../data/cart.json'
import CartItem from '../components/CartItem'

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    
    
    useEffect(()=>{ 
        setCartItems(allCartItems)
    }, [])

  return (
    <View>
      <FlatList
      data= {cartItems}
      keyExtractor={(cartItem)=> cartItem.id}
      renderItem={({item})=><CartItem item={item}/>}/>
      
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})