import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NFTCard, FocusedStatusBar, HomeHeader } from '../components';
import { COLORS, NFTData } from '../constants';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<HomeHeader />}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          <View />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    zIndex: 0,
  },
});
