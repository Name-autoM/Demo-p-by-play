exports.UserManagement =  class   UserManagement{


    constructor(page){

        this.button_adduser = page.getByRole('button', { name: 'plus เพิ่มผู้ใช้งานใหม่' })
        this.button_clear = page.getByRole('button', { name: 'ล้างข้อมูล' })
        this.button_search = page.getByRole('button', { name: 'ค้นหา' })
        this.button_edit = page.getByRole('row', {}).getByRole('button').first()//ปุ่มแรกของปุ่มแก้ไข
        this.button_delete = page.getByRole('button', { name: 'delete' }).first()
        
        //search
        this.fieldsearch_username = page.locator('id=username')

        //สร้าง user ใหม่
        this.button_confirm = page.getByRole('button', { name: 'ยืนยัน' })
        this.button_cancel = page.getByRole('button', { name: 'ยกเลิก' })
        //add user
        this.textfield_username = page.locator('id=validateOnly_username')
        this.textfield_firstname = page.locator('id=validateOnly_firstName')
        this.textfield_lastname = page.locator('id=validateOnly_lastName')
        this.textfield_email = page.locator('id=validateOnly_email')
        this.dropdownfield_role = page.locator('id=validateOnly_roleId')
        this.textfield_description = page.locator('id=validateOnly_description')
        this.dropdownfield_estatename = page.locator('id=validateOnly_estateId')
        this.dropdownfield_linework = page.locator('id=validateOnly_lineOfWorkId')
        //edit edit
        this.textfield_firstname_edit = page.locator('id=validateOnly_firstName')
        this.textfield_lastname_edit = page.locator('id=validateOnly_lastName')
        this.textfield_email_edit = page.locator('id=validateOnly_email')
        this.dropdownfield_role_edit = page.locator('//*[@id="validateOnly"]/div[1]/div[6]/div/div/div[2]/div/div/div/div/span[2]')
        this.textfield_description_edit = page.locator('id=validateOnly_description')
        this.dropdownfield_estatename_edit = page.locator('//*[@id="validateOnly"]/div[1]/div[9]/div/div/div[2]/div/div/div/div/span[2]')
        this.dropdownfield_linework_edit = page.locator('//*[@id="validateOnly"]/div[1]/div[10]/div/div/div[2]/div/div/div/div/span[2]')

    
    }
    //หน้า search
    async FieldSearch_Username(search_user){
        await this.fieldsearch_username.fill(search_user)
    }



    //add user
    async Textfield_Username(username_um){
        await this.textfield_username.fill(username_um)
    }
    async Textfield_Firstname(firstname_um){
        await this.textfield_firstname.fill(firstname_um)
    }
    async Textfield_Lastname(lastname_um){
        await this.textfield_lastname.fill(lastname_um)
    }
    async Textfield_Email(email_um){
        await this.textfield_email.fill(email_um)
    }
    async Dropdownfield_Role(){
        await this.dropdownfield_role.click()
    }
    async Textfield_Description(dsep_um){
        await this.textfield_description.fill(dsep_um)
    }
    async Dropdownfield_Estatename(){
        await this.dropdownfield_estatename.click()
    }
    async Dropdownfield_Linework(){
        await this.dropdownfield_linework.click()
    }
    
    //edit
    async Edit_Textfield_Firstname(firstname_um){
        await this.textfield_firstname_edit.fill(firstname_um)
    }
    async Edit_Textfield_Lastname(lastname_um){
        await this.textfield_lastname_edit.fill(lastname_um)
    }
    async Edit_Textfield_Email(email_um){
        await this.textfield_email_edit.fill(email_um)
    }
    async Edit_Dropdownfield_Role(){
        await this.dropdownfield_role_edit.click()
    }
    async Edit_Textfield_Description(dsep_um){
        await this.textfield_description_edit.fill(dsep_um)
    }
    async Edit_Dropdownfield_Estatename(){
        await this.dropdownfield_estatename_edit.click()
    }
    async Edit_Dropdownfield_Linework(){
        await this.dropdownfield_linework_edit.click()
    }


    async Create(username_um, firstname_um, lastname_um, email_um, role_um, dsep_um, estate_um, linework_um){
        await this.textfield_username.fill(username_um)
        await this.textfield_firstname.fill(firstname_um)
        await this.textfield_lastname.fill(lastname_um)
        await this.textfield_email.fill(email_um)
        await this.dropdownfield_role.click()
        await this.dropdownlist_role.click(role_um)
        await this.textfield_description.fill(dsep_um)
        await this.dropdownfield_estatename.click()
        await this.dropdownlist_estatename.click(estate_um)
        await this.dropdownfield_linework.click()
        await this.dropdownlist_linework.click(linework_um)
    }


    
    //Button
    async Button_Confirm(){
        await this.button_confirm.click()
    }

    async Button_Cancel(){
        await this.button_cancel.click()
    }

    async Button_Clear(){
        await this.button_clear.click()
    }

    async Button_Search(){
        await this.button_search.click()
    }

    async Button_AddUser(){
        await this.button_adduser.click()
    }

    async Button_EditUser(){
        await this.button_edit.click()
    }

    async Button_DeleteUser(){
        await this.button_delete.click()
    }
} 