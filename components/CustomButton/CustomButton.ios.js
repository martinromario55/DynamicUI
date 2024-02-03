import { Pressable, Text } from 'react-native'
import React from 'react'

export default function CustomButton({ onPress, title }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'lightblue',
        padding: 10,
      }}
    >
      <Text style={{ color: 'purple', fontSize: 18 }}>{title}</Text>
    </Pressable>
  )
}
