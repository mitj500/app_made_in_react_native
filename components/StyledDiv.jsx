import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StyledDiv = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>there is a lot of things to make</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#718096', // slate-400
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderWidth: 4,
    borderColor: '#3182CE', // blue-600
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    textAlign: 'center',
  },
});

export default StyledDiv;
