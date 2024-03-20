  exports.LoginPage =  class   LoginPage{


        



        constructor(page){

            this.page = page
            this.username_textbox = page.getByLabel("ชื่อผู้ใช้ระบบ")
            this.password_textbox = page.getByLabel("รหัสผ่าน")
            this.login_button = page.getByRole("button", { name: "ยืนยัน" })
            this.iconmenu_Profile = page.locator('#root').getByRole('img', { name: 'logo', exact: true })
            this.logout_button = page.getByRole("menuitem", { name: "ออกจากระบบ ออกจากระบบ" }).locator("div")

            
        }

        async   gotoLoginPage(){
            await this.page.goto("https://sit-datamkt.ieat.go.th")
        }

        async  login(username, password){
            await this.username_textbox.fill(username)
            await this.password_textbox.fill(password)
            await this.login_button.click()
        }
        
        async   logoutbutton(){
            await this.iconmenu_Profile.click()
            await this.logout_button.click()
        }
    }