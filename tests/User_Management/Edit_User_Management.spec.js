const { test, expect } = require("@playwright/test");
import { LoginPage } from '../../pages/login_screen/login'
import { Menu_Page } from '../../Resources/Menu'
import { UserManagement } from '../../pages/user_management/user_management'



  //input data for login
  const username = 'xxxx' 
  const password = 'xxxx'  


 //input data for edit user managment
 const edit_firstname = 'DDL'
 const edit_lastname = 'SMM'
 const edit_email = 'testgo9@yopmail.com'
 const edit_role = ('Manager')
 const edit_description = 'to text for edit test for PW'
 const edit_estate = ('นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)')
 const edit_linework = ('สายงานยุทธศาสตร์')



test("Edit Fot User Management", async ({ page }) => {

    const Login = new LoginPage(page)
    const Menu = new Menu_Page(page)
    const ScreenUserManage = new UserManagement(page)
  
    await Login.gotoLoginPage()
    await Login.login(username , password)
    await Menu.User_Management()
    await ScreenUserManage.Button_EditUser()
    await ScreenUserManage.Edit_Textfield_Firstname(edit_firstname)
    await ScreenUserManage.Edit_Textfield_Lastname(edit_lastname)
    await ScreenUserManage.Edit_Textfield_Email(edit_email)
    await ScreenUserManage.Edit_Dropdownfield_Role()
    await page.getByText(edit_role).click();
    await ScreenUserManage.Edit_Textfield_Description(edit_description)
    await ScreenUserManage.Edit_Dropdownfield_Estatename()
    await page.getByText(edit_estate).click();
    await ScreenUserManage.Edit_Dropdownfield_Linework()
    await page.getByText(edit_linework).click();
    await page.getByRole('button', { name: 'ยืนยัน' }).click();

});