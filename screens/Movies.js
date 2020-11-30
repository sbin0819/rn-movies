import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { movieApi } from '../api';

export default () => {
  const getData = async () => {
    const [nowPlayingResults, error] = await movieApi.nowPlaying();
    console.log(nowPlayingResults);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Text>Movies</Text>
      <Button title='Movies' />
    </View>
  );
};
