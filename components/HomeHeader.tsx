import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { assets, COLORS, SIZES } from '../constants';
import { assert } from 'console';

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        padding: SIZES.font,
        backgroundColor: COLORS.primary,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 90,
            height: 25,
          }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image source={assets.person01} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{ position: 'absolute', width: 15, height: 15, bottom: 0, right: 0 }}
          />
        </View>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: '100%',
            backgroundColor: COLORS.gray,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
            borderRadius: SIZES.font,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput placeholder="Search NFTs" style={{ flex: 1 }} onChangeText={onSearch} />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
