import React, {FC} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

const SearchScreen: FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default SearchScreen;
