import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, useColorScheme, View} from 'react-native';

function App(): React.JSX.Element {
  const r = useRef(new Animated.Value(0)).current;
  const animate = useCallback(() => {
    Animated.timing(r, {
      toValue: 1,
      useNativeDriver: true,
      duration: 2000,
    }).start();
  }, [r]);

  useEffect(() => {
    setTimeout(animate, 2000);
  }, [animate]);
  const inputRange = [0, 1];
  const outputRange = ['0deg', '360deg'];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 10,
        borderColor: 'lime',
      }}>
      <Animated.View
        style={{
          transform: [{rotate: r.interpolate({inputRange, outputRange})}],
          backgroundColor: 'red',
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
