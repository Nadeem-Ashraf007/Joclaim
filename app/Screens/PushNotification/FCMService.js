import firebase from "@react-native-firebase/app";
import { Platform, Alert } from "react-native";
import messaging from "@react-native-firebase/messaging";

class FCMService {
  register = (onRegister, onNotification, onOpenNotification) => {
    this.checkPermission(onRegister);
    this.createNotificationListners(
      onRegister,
      onNotification,
      onOpenNotification
    );
  };
  registerAppWithFCM = async () => {
    if (Platform.OS === "ios") {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
  };
  checkPermission = (onRegister) => {
    messaging()
      .hasPermission()
      .then((enabled) => {
        if (enabled) {
          this.getToken(onRegister);
        } else {
          this.requestPermission(onRegister);
        }
      });
  };
  getToken = (onRegister) => {
    messaging()
      .getToken()
      .then((fcmToken) => {
        if (fcmToken) {
          onRegister(fcmToken);
        } else {
          console.log("user does not have device token");
        }
      })
      .catch((error) => {
        console.log("get token rejected", error);
      });
  };

  requestPermission = (onRegister) => {
    messaging()
      .requestPermission()
      .then(() => {
        this.getToken(onRegister);
      })
      .catch((error) => {
        console.log("request permission rejected", error);
      });
  };
  deleteToken = () => {
    messaging()
      .deleteToken()
      .catch((error) => {
        console.log("delete token error", error);
      });
  };

  createNotificationListners = (
    onRegister,
    onNotification,
    onOpenNotification
  ) => {
    messaging().onNotificationOpenedApp((message) => {
      if (message) {
        const notification = message.notification;
        onOpenNotification(notification);
      }
    });

    messaging()
      .getInitialNotification()
      .then((message) => {
        if (message) {
          const notification = message.notification;
          onOpenNotification(notification);
        }
      });

    this.messageListener = messaging().onMessage(async (message) => {
      if (message) {
        let notification = null;
        console.log("message: ", message);
        if (Platform.OS === "ios") {
          notification = message.data.notification;
        } else {
          notification = message.notification;
        }
        onNotification(notification);
      }
    });

    messaging().onTokenRefresh((fcmToken) => {
      console.log("new token refresh", fcmToken);
      onRegister(fcmToken);
    });
  };
  unRegister = () => {
    this.messageListener();
  };
}

export const fcmService = new FCMService();
