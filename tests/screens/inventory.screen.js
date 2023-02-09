class productsInventory {

    get #inventoryMenu() { return $('//android.view.ViewGroup[3]/android.view.ViewGroup') }

    get #inventorySku() { return $('id:edit_text') }

    get #inventoryManageStock() { return $('id:manageStock_switch') }

    get #inventoryQuantity() { return $('//android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText') }

    get #inventoryCheck() { return $('id:product_stock_quantity') }

    get #inventoryExit() { return $('~Navigate up')}


    async inventoryAccess() {
        await this.#inventoryMenu.click()
    }

    async inventorySku(sku) {
        await this.#inventorySku.click()
        await this.#inventorySku.setValue(sku)
        return await this.#inventorySku.hideKeyboard()
    }

    async managerStock() {
        await this.#inventoryManageStock.click()
    }

    async confirmBox() {
        return await this.#inventoryCheck.getText()
    }

    async managerStockQuantity(quantity) {
        await this.#inventoryQuantity.click()
        await this.#inventoryQuantity.setValue(quantity)
        await this.#inventoryQuantity.hideKeyboard()
        await this.#inventoryExit.click()



    }

}

module.exports = new productsInventory()