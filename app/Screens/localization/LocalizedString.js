import React from 'react';
import LocalizedStrings from 'react-native-localization';
// export const DEFAULT_LANGUAGE = 'ar';

// import en from './en.js';
// import ar from './ar.js';

const Strings = new LocalizedStrings({
  ar: {
    loginbutton: 'دخول',
    signoutbutton: 'خروج',
    forgetpassword: 'نسيت كلمة المرور ؟',
    sendemail: 'ارسل بريد الكتروني',
    emailphone: 'البريد الإلكتروني',
    Password: ' كلمة المرور',
    //Bottem Tabs
    request: 'طلب',
    history: 'التاريخ',
    accidents: 'الحوادث',
    //Screentabs
    orderplaced: 'الطلبات المقدمة',
    delivered: 'استلام',
    paid: 'مدفوع ',
    cancelled: 'ألغيت',
    closed: 'مغلق',
    deleted: 'تم الحذف',
    open: 'افتح',
    Toastemail: 'بريد إلكتروني خاطئ',
    Toastpassword: 'كلمة المرور غير صحيحة',
    cancel: 'حذف',
    areyousure: 'هل ترغب بالخروج؟هل أنت واثق؟',
    wanttologout: 'هل ترغب بالخروج؟',
    confirm: 'صدق',
    //drawer
    home: 'بيت',
    userprofile: '',
  },
  en: {
    loginbutton: 'Login',
    signoutbutton: 'Signout',
    forgetpassword: 'Forget Password?',
    sendemail: 'Send Email',
    emailphone: 'Email/Phone',
    Password: 'Password',
    //Bottem Tabs
    request: 'Request',
    history: 'History',
    accidents: 'Accidents',
    //Screentabs
    orderplaced: 'Order Placed',
    delivered: 'Delivered',
    paid: 'Paid',
    cancelled: 'Cancelled',
    closed: 'Closed',
    deleted: 'Deleted',
    open: 'Open',
    Toastemail: 'invalid email',
    Toastpassword: 'Password is not Correct',
    cancel: 'Cancel',
    areyousure: 'Are you sure? Do you want to logout?',
    wanttologout: 'Do you want to logout?',
    confirm: 'Confirm',
    home: 'Home',
    userprofile: '',
  },
});

export default Strings;
