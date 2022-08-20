import { View, Text } from 'react-native';
import React from 'react';
import { EthPrice, NftTitle } from './SubInfo';
import { COLORS, SIZES } from '../constants';

export default function DetailsDesc({ data }) {
  return (
    <View>
      <Text>{data.title}</Text>
      <NftTitle title={data.title} subTitle={data.subTitle} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} />
      <EthPrice price={data.price} />
    </View>
  );
}
