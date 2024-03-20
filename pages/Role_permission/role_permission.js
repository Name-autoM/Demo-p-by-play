exports.Role_Permission =  class   Role_Permission{


    constructor(page){

        //search
        this.fieldsearch_rolename = page.locator('id=search_roleName')
        this.fielddropdown_permission = page.locator('id=search_permissionId')


        //add role
        this.dropdown_permission = page.locator('id=permission')
        this.textfield_description = page.locator('id=description')
        this.textfield_rolenameth = page.locator('id=roleNameTh')


        //button
        this.button_search = page.getByRole('button', {name: 'ค้นหา'})
        this.button_clear = page.getByRole('button', {name: 'ล้าง'})
        this.button_addrole = page.getByRole('button', { name: 'เพิ่มสิทธิ์' })
        this.button_save = page.getByRole("button", { name: "บันทึก" })
        this.button_delete = page.getByRole('button', { name: 'delete' }).first()//ปุ่มแรก
        this.button_cancel = page.getByRole('button', {name: 'ยกเลิก'})
        this.button_editinrole = page.getByRole('button', { name: 'แก้ไข' })
        this.button_edit = page.getByRole('row', {}).getByRole('button').first()
        //button expand
        this.expand_checkbox_application = page.getByRole('button', { name: 'caret-right กรอกผ่าน' })
        this.expand_checkbox_raw_data = page.getByRole('button', { name: 'caret-right นำเข้าข้อมูล Raw' })
        this.expand_checkbox_dashboard = page.getByRole('button', { name: 'caret-right Dashboard' })
        
        //title
        
        this.title_setpermission  = page.getByRole('heading', { name: 'กำหนดสิทธ์', exact: true })
        this.title_namepermission  = page.getByRole('heading', { name: 'ชื่อสิทธ์', exact: true })
    

        //edit
        this.edit_dropdown_permission = page.locator('//*[@id="root"]/div/div/main/div/div/form/div/div[2]/div[2]/div/div[1]/div/div/div[2]/div/div/div/div/span[2]')
        this.edit_textfield_description = page.locator('id=description')
        this.edit_textfield_rolenameth = page.locator('id=roleNameTh')

    }

    //search
    async Search_rolename(searchrole){
        await this.fieldsearch_rolename.fill(searchrole)
    }

    async Search_dropdown_permission(){
        await this.fielddropdown_permission.click()
    }

    //title
    async Title_Setpermission(){
        await this.title_setpermission.scrollIntoViewIfNeeded()
    }

    async Title_Namepermission(){
        await this.title_namepermission.scrollIntoViewIfNeeded()
    }


    //add role
    async Dropdown_permission(){
        await this.dropdown_permission.click()
    }

    async Textfield_Description(description){
        await this.textfield_description.fill(description)
    }

    async Textfield_RolenameTH(rolenameth){
        await this.textfield_rolenameth.fill(rolenameth)
    }


    //edit
    async Edit_Dropdown_permission(){
        await this.edit_dropdown_permission.click()
    }

    async Edit_Textfield_Description(edit_description){
        await this.edit_textfield_description.fill(edit_description)
    }

    async Edit_Textfield_RolenameTH(edit_rolenameth){
        await this.edit_textfield_rolenameth.fill(edit_rolenameth)
    }



    //Button
    async Button_Save(){
        await this.button_save.click()
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

    async Button_AddRole(){
        await this.button_addrole.click()
    }

    async Button_EditRole(){
        await this.button_edit.click()
    }

    async Button_EditRole_inrole(){
        await this.button_editinrole.click()
    }

    async Button_DeleteRole(){
        await this.button_delete.click()
    }


    //Button expand
    async Button_Expand_Application(){
        await this.expand_checkbox_application.click()
    }

    async Button_Expand_Raw_data(){
        await this.expand_checkbox_raw_data.click()
    }

    async Button_Expand_Dashboard(){
        await this.expand_checkbox_dashboard.click()
    }


}