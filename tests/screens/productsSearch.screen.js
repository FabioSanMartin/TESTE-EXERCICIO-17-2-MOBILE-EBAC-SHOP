class productsSearch {

    get #goToConfirm() { return $('id:menu_done') }

    get #back() { return $('~Navigate up') }

    get #goToConfirm1() { return $('android=new UiSelector().text("Products")') }

    get #searchButton() { return $('id:menu_search') }

    get #typeSearch() { return $('id:search_src_text') }

    get #click() { return $('id:linearLayout') }

    get #finalConfirm() { return $('id:textPropertyValue') }

    async confirm() {
        await this.#goToConfirm.click()
        await this.#back.click()
    }

    async goTo() {
        await this.#searchButton.click()

    }

    async toConfirm() {
        return await this.#goToConfirm1.getText()
    }

    async searchProducts(iten) {
        await this.#typeSearch.click()
        await this.#typeSearch.setValue(iten)
        await this.#typeSearch.hideKeyboard()
    }



    async confirmProduct() {
        await this.#click.click()
    }

    async final() {
        await this.#finalConfirm.waitForExist()
        
    }



}

module.exports = new productsSearch()