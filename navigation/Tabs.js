import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Movies from '../screens/Movies';
import TV from '../screens/TV';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Platform } from 'react-native';

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || 'Movies';

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const title = getFocusedRouteNameFromRoute(route);
    navigation.setOptions({
      title,
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          // let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          if (route.name === 'Movies') {
            iconName = 'ios-film';
          } else if (route.name === 'TV') {
            iconName = 'ios-tv';
          } else if (route.name === 'Search') {
            iconName = 'ios-search';
          } else if (route.name === 'Favs') {
            iconName = 'ios-heart';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'white' : 'grey'}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'black',
          borderTopColor: 'black',
        },
      }}
    >
      <Tabs.Screen name='Movies' component={Movies} />
      <Tabs.Screen name='TV' component={TV} />
      <Tabs.Screen name='Search' component={Search} />
      <Tabs.Screen name='Favs' component={Favs} />
    </Tabs.Navigator>
  );
};
