import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { TrianButton, CircleButton } from './Button';
import { NftTitle, SubInfo } from './SubInfo';

export default function NFTCard({ data }) {
  const navigator = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: '100%',
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
            borderTopLeftRadius: SIZES.font,
            borderBottomLeftRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: '100%', padding: SIZES.font }}>
        <NftTitle title={data.name} subTitle={data.creator} titleSize={SIZES.large} subTitleSize={SIZES.small} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
