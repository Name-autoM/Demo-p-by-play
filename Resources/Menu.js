exports.Menu_Page =  class   Menu_Page {

    
    constructor(page){
    
        //เมนูหลัก
        this.menu_main = page.getByRole('menuitem', { name: 'หน้าหลัก หน้าหลัก' }).locator('div')
        //เมนูคลังข้อมูล
        this.menu_Data_Warehouse = page.getByRole('menuitem', { name: 'คลังข้อมูล คลังข้อมูล' })
        this.menu_Customers_Currents = page.getByText('ข้อมูลลูกค้าปัจจุบัน')
        this.menu_Customers_Future = page.getByText('ข้อมูลลูกค้าอนาคต')
        this.menu_Data_Stakeholder = page.getByText('ข้อมูลผู้มีส่วนได้ส่วนเสีย')
        this.menu_Touch_Point = page.getByText('ข้อมูล Touch Point')
        //เมนูนำเข้าข้อมูล
        this.menu_raw_data = page.getByRole('menuitem', { name: 'นำเข้าข้อมูล นำเข้าข้อมูล' }).locator('div')
        //เมนูการจัดการผู้ใช้งาน
        this.iconSetting = page.getByRole('img', { name: 'การจัดการผู้ใช้งาน' })
        this.menu_user_management = page.getByRole('menuitem', { name: 'การจัดการผู้ใช้งาน', exact: true }).locator('div')
        this.menu_role_permission = page.getByRole('menuitem', { name: 'การจัดการบทบาทและสิทธิ์การเข้าถึง', exact: true }).locator('div')
    
        
    }

    async   Main(){
        await this.menu_main.click()
    }

    // Data_Warehouse
    async   Data_Customers_Currents(){
        await this.menu_Data_Warehouse.click()
        await this.menu_Customers_Currents.click()
    }

    async   Data_Customers_Future(){
        await this.menu_Data_Warehouse.click()
        await this.menu_Customers_Future.click()
    }

    async   Data_Stakeholder(){
        await this.menu_Data_Warehouse.click()
        await this.menu_Data_Stakeholder.click()
    }

    async   Data_Touch_Point(){
        await this.menu_Data_Warehouse.click()
        await this.menu_Touch_Point.click()
    }

    async   Raw_Data(){
        await this.menu_raw_data.click()
    }

    async   User_Management(){
        await this.iconSetting.hover()
        await this.menu_user_management.click()
    }

    async   Role_Permission(){
        await this.iconSetting.hover()
        await this.menu_role_permission.click()
    }

    }