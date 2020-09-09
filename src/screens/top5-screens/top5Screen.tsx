import React, {FC} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

const Top5Screen: FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text>top 5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default Top5Screen;
