const { test, expect } = require("@playwright/test");
import { LoginPage } from '../../pages/login_screen/login'
import { Role_Permission } from '../../pages/Role_permission/role_permission';
import { Menu_Page } from '../../Resources/Menu'


    const username = 'xxxx' ;
    const password = 'xxxx' ;


test.only("Search screen role", async ({ page }) => {

    const Login = new LoginPage(page)
    const Menu = new Menu_Page(page)
    const Role_permission = new Role_Permission(page)
    
    await Login.gotoLoginPage()
    await Login.login(username , password)
    await Menu.Role_Permission()

    const search_rolename = ('นิคม')
    const search_permission = ('นิคม')

    
    await Role_permission.Search_rolename(search_rolename)
    await Role_permission.Search_dropdown_permission()
    await page.getByTitle(search_permission).locator('div').click();
    await Role_permission.Button_Search()
    await Role_permission.Button_Clear()
});