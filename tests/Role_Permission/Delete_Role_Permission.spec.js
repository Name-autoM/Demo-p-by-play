const { test, expect } = require("@playwright/test");
import { LoginPage } from '../../pages/login_screen/login'
import { Role_Permission } from '../../pages/Role_permission/role_permission';
import { Menu_Page } from '../../Resources/Menu'


    const username = 'xxxx' ;
    const password = 'xxxx' ;



test("Delete roleandpermission", async ({ page }) => {
        
    const Login = new LoginPage(page)
    const Menu = new Menu_Page(page)
    const Role_permission = new Role_Permission(page)

    const searchrole = ('ผบ.ธ')
    
    await Login.gotoLoginPage()
    await Login.login(username , password)
    await Menu.Role_Permission()
    await Role_permission.Search_rolename(searchrole)
    await Role_permission.Button_Search()
    await Role_permission.Button_DeleteRole()
    await Role_permission.Button_Cancel()
            
    });