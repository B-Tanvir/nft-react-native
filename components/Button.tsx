import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SHADOWS, SIZES } from '../constants';

export function CircleButton({ imgUrl, handlePress, ...props }) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  );
}
export function TrianButton() {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
}
