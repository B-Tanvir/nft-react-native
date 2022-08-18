import { Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';

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
export function RectButton({ minWidth, fontsize, handlePress, ...props }) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontsize,
          color: COLORS.white,
          textAlign: 'center',
        }}
      >
        Place a number
      </Text>
    </TouchableOpacity>
  );
}
