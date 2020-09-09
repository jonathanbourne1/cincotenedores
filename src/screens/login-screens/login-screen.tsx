import React, {FC} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

const LoginScreen: FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

export default LoginScreen;
