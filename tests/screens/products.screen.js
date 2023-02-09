class productsScreen {

    get #productsButton() { return $('~Products') }

    get #productsAdd() { return $('~Add products') }

    get #productsNew() { return $('//android.view.ViewGroup[1]') }

    get #productsImage() { return $('id:textAddImage')}

    get #productsImageGet() { return $('id:textWPMediaLibrary')}

    get #productsImageSelect() { return $('//android.widget.FrameLayout[11]/android.widget.TextView')}

    get #productsImageDone() { return $('id:menu_done')}

    get #productsImageConfirm() { return $('id:productImage')}

    get #productsImageReturn() { return $('~Navigate up')}

    get #productsTitle() {return $('id:editText')}

    get #productsDescribe() {return $('id:textPropertyName')}

    get #productsDescribeText() {return $('id:visualEditor')}

    get #productsDescribeTextReturn() {return $('~Navigate up')}

     
    async getProductsButton() {
        await this.#productsButton.click()
    }

    async addNewProducts() {
        await this.#productsAdd.click()
    }

    async menuNewProduct() {
        await this.#productsNew.click()
    }

    async imageProduct () {
        await this.#productsImage.click()
    }

    async imageProductGet () {
        await this.#productsImageGet.click()
    }

    async imageProductSelect () {
        await this.#productsImageSelect.click()
    }

    async imageProductDone () {
        await this.#productsImageDone.click()
    }

    async imageConfirmRetry() {
        await this.#productsImageConfirm.waitForExist()
        return await this.#productsImageReturn.click()
    }

    async productsTitleEdit(title) {
        await this.#productsTitle.click()
        await this.#productsTitle.setValue(title)
       
    }

    async productsDecribe() {
        await this.#productsDescribe.click()
               
    }

    async productsDecribetext(text) {
        await this.#productsDescribeText.click()
        await this.#productsDescribeText.setValue(text)
        await this.#productsDescribeTextReturn.click()
               
    }

}

module.exports = new productsScreen()