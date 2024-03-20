const { test, expect } = require("@playwright/test");
import { LoginPage } from '../../pages/login_screen/login'
import { Menu_Page } from '../../Resources/Menu'
import { UserManagement } from '../../pages/user_management/user_management'



  //input data for login
  const username = 'xxx' 
  const password = 'xxx'  



test("Delete user", async ({ page }) => {

    const Login = new LoginPage(page)
    const Menu = new Menu_Page(page)
    const ScreenUserManage = new UserManagement(page)
  
    await Login.gotoLoginPage()
    await Login.login(username , password)
    await Menu.User_Management()
    await ScreenUserManage.FieldSearch_Username('test12')
    await ScreenUserManage.Button_Search()
    await ScreenUserManage.Button_DeleteUser()
    await ScreenUserManage.Button_Cancel()

  });
