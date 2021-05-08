import React from 'react';
import {SafeAreaView, View, StyleSheet, Image, Alert} from 'react-native';
import colors from '../Constants/colors';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  toggleDrawer,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../Constants/context';

import {Global} from '../Constants/Global';
import Strings from '../localization/LocalizedString';

const CustomSidebarMenu = (props) => {
  const [changeView, setChangeView] = React.useState(Global.changeView);
  const paperTheme = useTheme();
  const {toggleTheme} = React.useContext(AuthContext);
  // const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  // const toggleTheme = () => {
  //   setIsDarkTheme(!isDarkTheme);
  // };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={require('../images/profile.jpg')}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <View>
          <View>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="home" color={colors.TITLE} size={size} />
                )}
                label={Strings.home}
                onPress={() => props.navigation.navigate('Request')}
              />

              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="person" color={colors.TITLE} size={size} />
                )}
                label="User Profile"
                onPress={() => props.navigation.navigate('UserProfile')}
              />
              {/* 
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="settings-outline" color={color} size={size} />
                )}
                label="Setting"
                onPress={() => props.navigation.navigate('Request')}
              />

              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="home" color={color} size={size} />
                )}
                label="Support"
                onPress={() => props.navigation.navigate('Request')}
              /> */}
            </Drawer.Section>
            {/* <Drawer.Section title="Preferences">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}>
                <View style={styles.preference}>
                  <Text>Dark theme</Text>
                  <View pointerEvents="none">
                    <Switch value={paperTheme.dark} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section> */}
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawersection}>
        <DrawerItem
          label={Strings.signoutbutton}
          icon={({color, size}) => (
            <Icon name="log-out-outline" color={colors.secondary} size={size} />
          )}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              Strings.cancel,
              Strings.areyousure,

              [
                {
                  text: Strings.cancel,
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: Strings.confirm,
                  onPress: () => {
                    AsyncStorage.clear();
                    {
                      props.navigation.replace('Auth');
                    }
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  Paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawersection: {
    marginTop: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    // borderRadius: 100 / 2,
    // alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;

{
  /* <DrawerItemList {...props} />
<DrawerItem
  label="Home"
  onPress={() => props.navigation.navigate('Demands')}
/>
<DrawerItem
  label="Profile"
  onPress={() => props.navigation.navigate('Profile')}
/> */
}
