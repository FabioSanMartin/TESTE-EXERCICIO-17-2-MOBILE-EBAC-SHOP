class productsInventory {

    get #inventoryMenu() { return $('//android.view.ViewGroup[3]/android.view.ViewGroup')}

    get #inventorySku() { return $('id:edit_text')}

    get #inventoryManageStock() { return $('id:manageStock_switch')}

    get #inventoryQuantity() { return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')}

    get #inventory() { return $('id:spinner_edit_text')}

    get #inventoryBackOrders() { return $('//android.widget.CheckedTextView[3]')}

    get #inventoryLimit() { return $('id:soldIndividually_switch')}

    get #inventoryBack() { return $('id:Navigate up')}


    async inventoryAccess() {
        await this.#inventoryMenu.click()
    }

    async inventorySku(sku) {
        await this.#inventorySku.click()
        await this.#inventorySku.setValue(sku)
    }

async managerStock(quantity) {
    await this.#inventoryManageStock.click()
    await this.#inventoryQuantity.click()
    await this.#inventoryQuantity.setValue(quantity)
    await this.#inventory.click()
    await this.#inventoryBackOrders.click()
    await this.#inventoryLimit.click()
    await this.#inventoryBack.click()
    



}


}

module.exports = new productsInventory()