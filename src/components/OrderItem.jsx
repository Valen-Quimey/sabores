import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItem = ({ item}) => {
  return (
    <View>
      <Text>  {new Date(item.createdAt).toLocaleString()} </Text>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({})