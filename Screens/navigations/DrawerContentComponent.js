import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
// @ts-ignore
import UserAvatar from '@muhzi/react-native-user-avatar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export function DrawerContentComponent(props) {
  //   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [userImage, setUserImage] = useState(null);
  const logoutDrawerItem = () => {
    return (
      <DrawerItem
        labelStyle={{fontSize: 18, fontWeight: 'normal'}}
        icon={({color, size}) => (
          <Icon name="exit-to-app" color={color} size={size} />
        )}
        label="Sign Out"
        onPress={() => {}}
      />
    );
  };
  const changePasswordDrawerItem = () => {
    return (
      <DrawerItem
        labelStyle={{fontSize: 18, fontWeight: 'normal'}}
        icon={({color, size}) => (
          <Icon name="key-variant" color={color} size={size} />
        )}
        label="Change Password"
        onPress={() => props.navigation.navigate('changePassword')}
      />
    );
  };
  const profileDrawerItem = () => {
    return (
      <DrawerItem
        labelStyle={{fontSize: 18, fontWeight: 'normal'}}
        icon={({color, size}) => <Icon name="face" color={color} size={size} />}
        label="Profile"
        onPress={() => props.navigation.navigate('profile')}
      />
    );
  };
  const homeDrawerItem = () => {
    return (
      <DrawerItem
        labelStyle={{fontSize: 18, fontWeight: 'normal'}}
        icon={({color, size}) => <Icon name="home" color={color} size={size} />}
        label="Home"
        onPress={() => props.navigation.navigate('main')}
      />
    );
  };
  //   const loginDrawerItem = () => {
  //     return (
  //       <DrawerItem
  //         labelStyle={{fontSize: 18, fontWeight: 'normal'}}
  //         icon={({color, size}) => <Icon name="lock" color={color} size={size} />}
  //         label="Login"
  //         onPress={() => props.navigation.navigate('auth')}
  //       />
  //     );
  //   };
  //   const signUpDrawerItem = () => {
  //     return (
  //       <DrawerItem
  //         labelStyle={{fontSize: 18, fontWeight: 'normal'}}
  //         icon={({color, size}) => (
  //           <Icon name="account-plus" color={color} size={size} />
  //         )}
  //         label="Signup"
  //         onPress={() => props.navigation.navigate('signup')}
  //       />
  //     );
  //   };
  //   const forgotPasswordDrawerItem = () => {
  //     return (
  //       <DrawerItem
  //         labelStyle={{fontSize: 18, fontWeight: 'normal'}}
  //         labelStyle={{fontSize: 18}}
  //         icon={({color, size}) => <Icon name="key" color={color} size={size} />}
  //         label="Forgot Password?"
  //         onPress={() => props.navigation.navigate('auth')}
  //       />
  //     );
  //   };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <UserAvatar size={50} textColor="#fff" userName={name} />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <Title style={[styles.title, {height: 25}]}>Nadeem</Title>
                <Caption style={[styles.caption, {flex: 1}]}>
                  Namedeem@gmail.com
                </Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            {homeDrawerItem()}
          </Drawer.Section>
          <Drawer.Section>{profileDrawerItem()}</Drawer.Section>
          <Drawer.Section>{changePasswordDrawerItem()}</Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        {logoutDrawerItem()}
      </Drawer.Section>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 17,
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
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
