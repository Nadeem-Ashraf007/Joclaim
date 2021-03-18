fetch(GLOBAL.global_api_url + 'token', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body:
    'UserName=' +
    this.state.emailPhone +
    '&Password=' +
    this.state.password +
    '&grant_type=password' +
    '&mobileNotificationToken=' +
    GLOBAL.notification_Token +
    '&MobileTypeID=' +
    GLOBAL.MobileTypeID +
    '&AppVersion=' +
    VersionInfo.buildVersion,
})
  .then((response) => response.json())
  .then((responseJson) => {
    debugger;
    if (responseJson.error === undefined) {
      console.log('login response: ' + JSON.stringify(responseJson));
      GLOBAL.global_RoleID = responseJson.RoleID;
      if (responseJson.RoleID === '6') {
        debugger;
        if (responseJson.StatusID === '2') {
          //  this.storeToken(responseJson.access_token,responseJson.SupplierID,responseJson.Email,responseJson.UserId).then(r => console.log('then of storeToken:'+r));
          this.storeToken(
            responseJson.access_token,
            responseJson.SupplierID,
            responseJson.Email,
            responseJson.UserId,
            responseJson.RoleID,
            responseJson.CompanyID,
            responseJson.EmployeeID,
            responseJson.ICWorkshopID,
          ).then((r) => console.log('then of storeToken:' + r));

          this.getCommonData(responseJson.UserId);
          (GLOBAL.global_supplier_email = responseJson.Email),
            (GLOBAL.global_userID = responseJson.UserId);
          GLOBAL.token_supplierID = responseJson.SupplierID;
          GLOBAL.token_accessToken = responseJson.access_token;
          GLOBAL.global_RoleID = responseJson.RoleID;
          (GLOBAL.global_CompanyID = responseJson.CompanyID),
            (GLOBAL.global_EmployeeID = responseJson.EmployeeID),
            (GLOBAL.global_ICWorkshopID = responseJson.ICWorkshopID),
            this.props.route.params.setIsLoggedin(true);
          // this.setState({isLoading:false});
        } else {
          Toast.show(stringsoflanguages.ACCOUNT_NOT_APPROVED, Toast.SHORT, [
            'UIAlertController',
          ]);
          this.setState({isLoading: false});
        }
      } else if (responseJson.RoleID === '11') {
        this.storeToken(
          responseJson.access_token,
          responseJson.SupplierID,
          responseJson.Email,
          responseJson.UserId,
          responseJson.RoleID,
          responseJson.CompanyID,
          responseJson.EmployeeID,
          responseJson.ICWorkshopID,
        ).then((r) => console.log('then of storeToken:' + r));
        this.getCommonData(responseJson.UserId);
        (GLOBAL.global_supplier_email = responseJson.Email),
          (GLOBAL.global_userID = responseJson.UserId);
        GLOBAL.token_supplierID = responseJson.SupplierID;
        GLOBAL.token_accessToken = responseJson.access_token;
        GLOBAL.global_RoleID = responseJson.RoleID;
        (GLOBAL.global_CompanyID = responseJson.CompanyID),
          (GLOBAL.global_EmployeeID = responseJson.EmployeeID),
          (GLOBAL.global_ICWorkshopID = responseJson.ICWorkshopID),
          this.props.route.params.setIsLoggedin(true);
        this.setState({isLoading: false});
      } else {
        Toast.show(stringsoflanguages.EMAIL_NOT_REGISTERED, Toast.SHORT, [
          'UIAlertController',
        ]);
        //alert('This email is not registered as a Supplier')
        this.setState({isLoading: false});
      }
    } else {
      this.setState({isLoading: false});
      Toast.show(
        stringsoflanguages.TOAST_INVALID_LOGIN_CREDENTIAL,
        Toast.SHORT,
        ['UIAlertController'],
      );
    }
  })
  .catch((error) => {
    debugger;
    /*  alert('Something went wrong,Please try again');
        alert('login Error: '+error);*/
    this.setState({isLoading: false});
  });
