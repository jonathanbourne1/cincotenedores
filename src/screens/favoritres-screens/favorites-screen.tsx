import React, {FC} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

const FavoritesScreen: FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default FavoritesScreen;
