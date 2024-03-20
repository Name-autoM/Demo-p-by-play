const { test, expect } = require("@playwright/test");
import { LoginPage } from '../../pages/login_screen/login'
import { Role_Permission } from '../../pages/Role_permission/role_permission';
import { Menu_Page } from '../../Resources/Menu'


    const username = 'xxxx' ;
    const password = 'xxxx' ;


test("Create new roleandpermission", async ({ page }) => {
    
    const Login = new LoginPage(page)
    const Menu = new Menu_Page(page)
    const Role_permission = new Role_Permission(page)
    
    const dropdown_per = ('นิคม')
    const description_role = ('ทดสอบสร้าง')
    const rolename_th = ('new roly')

    await Login.gotoLoginPage()
    await Login.login(username , password)
    await Menu.Role_Permission()
    await Role_permission.Button_AddRole()
    await Role_permission.Dropdown_permission()
    await page.getByText(dropdown_per).click();
    await Role_permission.Textfield_Description(description_role)
    await Role_permission.Textfield_RolenameTH(rolename_th)
    await Role_permission.Button_Expand_Raw_data()
    await Role_permission.Button_Expand_Dashboard()
    await Role_permission.Title_Setpermission()
    await page.getByRole("button", { name: "บันทึก" }).click();
});