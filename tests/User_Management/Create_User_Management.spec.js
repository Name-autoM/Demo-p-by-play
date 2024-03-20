const { test, expect } = require("@playwright/test");
import { LoginPage } from '../../pages/login_screen/login'
import { Menu_Page } from '../../Resources/Menu'
import { UserManagement } from '../../pages/user_management/user_management'



  //input data for login
  const username = 'xxx' 
  const password = 'xxx'  



  //input new data for create user managment
  const add_user = 'New user PW'
  const add_firstname = 'DDL'
  const add_lastname = 'SMM'
  const add_email = 'testgo9@yopmail.com'
  const add_role = ('ผบ.ธ')
  const add_description = 'to text for PW'
  const add_estate = ('นิคมอุตสาหกรรม เอส อ่างทอง')
  const add_linework = ('สายงานบริหาร')




test("Flow Create New User Management ", async ({ page }) => {

    const Login = new LoginPage(page)
    const Menu = new Menu_Page(page)
    const ScreenUserManage = new UserManagement(page)
    
    
    await Login.gotoLoginPage()
    await Login.login(username , password)
    await Menu.User_Management()
    await ScreenUserManage.Button_AddUser()
    await ScreenUserManage.Textfield_Username(add_user)
    await ScreenUserManage.Textfield_Firstname(add_firstname)
    await ScreenUserManage.Textfield_Lastname(add_lastname)
    await ScreenUserManage.Textfield_Email(add_email)
    await ScreenUserManage.Dropdownfield_Role()
    await page.getByText(add_role).click()
    await ScreenUserManage.Textfield_Description(add_description)
    await ScreenUserManage.Dropdownfield_Estatename()
    await page.getByTitle(add_estate).locator('div').click()
    await ScreenUserManage.Dropdownfield_Linework()
    await page.getByText(add_linework).click()
    
    
  
  
  });