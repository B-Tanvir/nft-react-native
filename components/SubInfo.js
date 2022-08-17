import { View, Text, Image } from 'react-native';
import React from 'react';
import { assets, COLORS, FONTS, SIZES } from '../constants';

// NftTitle
export function NftTitle({ title, subTitle, titleSize, subTitleSize }) {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary
      }}>{title}</Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.primary
      }}>{subTitle}</Text>
    </View>
  );
}

// EthPrice
export function EthPrice() {
  return (
    <View>
      <Text>Eth Price</Text>
    </View>
  );
}

// ImgCmp
export function ImgCmp({ imgUrl, index }) {
  return (
    <Image source={imgUrl} resizeMode='contain' style={{
      width: 48,
      height: 48,
      marginLeft: index === 0 ? 0 : -SIZES.font
    }} />
  );
}

// EndDate
export function EndDate() {
  return (
    <View style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 1, maxWidth: '50%',
    }} >
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary,
      }}>Ending in</Text>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary,
      }}>12h 30m</Text>
    </View>
  );
}

// People
export function People() {
  return (
    <View style={{
      flexDirection: 'row'
    }} >
      {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
        <ImgCmp key={`people-${index}`} index={index} imgUrl={imgUrl} />
      ))}
    </View>
  )
}

// SubInfo
export function SubInfo() {
  return (
    <View style={{
      width: "100%", paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge, flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
      <People />
      <EndDate />
    </View>)
}
