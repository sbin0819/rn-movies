import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import TV from '../screens/TV';
import Search from '../screens/Search';
import Favs from '../screens/Favs';

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || 'Movies';

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const title = getHeaderName(route);
    navigation.setOptions({
      title,
    });
  }, [route]);
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Movies' component={Movies} />
      <Tabs.Screen name='TV' component={TV} />
      <Tabs.Screen name='Search' component={Search} />
      <Tabs.Screen name='Favs' component={Favs} />
    </Tabs.Navigator>
  );
};
