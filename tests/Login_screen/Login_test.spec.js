const { test, expect } = require("@playwright/test");
// const path = require("path");


import { LoginPage } from '../../pages/login_screen/login'

  const username = 'xxxx' ;
  const password = 'xxxx' ;


test("Login screen success", async ({ page }) => {

  const Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login(username , password)

});


test("Login screen and logout", async ({ page }) => {

  const Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login(username , password)
  await Login.logoutbutton()

});

