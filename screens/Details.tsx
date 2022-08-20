import React from 'react';
import { FlatList, StatusBar, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CircleButton, DetailsBid, DetailsDesc, FocusedStatusBar, RectButton } from '../components';
import { SubInfo } from '../components/SubInfo';
import { SHADOWS, SIZES, assets } from '../constants';

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ height: 370, width: '100%' }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
      <CircleButton imgUrl={assets.heart} right={15} top={StatusBar.currentHeight + 10} />
    </View>
  );
};

export default function Details({ route, navigation }) {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 2555, 0.5)',
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontsize={SIZES.large} {...SHADOWS} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={(item) => <DetailsBid bid={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}
