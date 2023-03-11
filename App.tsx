/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useMemo, useRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['20%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView style={{height: '100%'}}>
      <ScrollView>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
          <View style={{height: 100}}>
            <Text>Something {i}</Text>
          </View>
        ))}
        <Text>Something {1}</Text>
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text style={{color: 'black'}}>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
    height: 200,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
