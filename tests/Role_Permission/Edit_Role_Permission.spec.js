const { test, expect } = require("@playwright/test");
import { LoginPage } from '../../pages/login_screen/login'
import { Role_Permission } from '../../pages/Role_permission/role_permission'
import { Menu_Page } from '../../Resources/Menu'


    const username = 'xxxx' ;
    const password = 'xxxx' ;

test("Edit roleandpermission", async ({ page }) => {
    
    const Login = new LoginPage(page)
    const Menu = new Menu_Page(page)
    const Role_permission = new Role_Permission(page)

    const edit_dropdown_per = ('นิคม')
    const edit_description_role = ('ทดสอบสร้างแบบแก้ไข')
    const edit_rolename_th = ('to edit name room')

    
    await Login.gotoLoginPage()
    await Login.login(username , password)
    await Menu.Role_Permission()
    await Role_permission.Button_EditRole()
    await Role_permission.Button_Expand_Raw_data()
    await Role_permission.Button_Expand_Dashboard()
    await Role_permission.Title_Namepermission()
    await Role_permission.Button_EditRole_inrole()
    await Role_permission.Edit_Dropdown_permission()
    await page.getByText(edit_dropdown_per).click();
    await Role_permission.Edit_Textfield_Description(edit_description_role)
    await Role_permission.Edit_Textfield_RolenameTH(edit_rolename_th)
    await Role_permission.Button_Expand_Raw_data()
    await Role_permission.Button_Expand_Dashboard()
    await Role_permission.Title_Setpermission().scrollIntoViewIfNeeded()
    await page.getByRole("button", { name: "บันทึก" }).click();
    });