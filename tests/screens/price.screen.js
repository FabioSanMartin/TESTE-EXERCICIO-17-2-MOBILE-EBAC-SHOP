class productsPrice {

    get #productsAddPrice() { return $('//android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView') }

    get #productsRegularPrice() { return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText') }

    get #productsSalePrice() { return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText') }

    get #productsTaxStatus() { return $('//android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText') }

    get #productsTaxSelect() { return $('//android.widget.CheckedTextView[1]') }

    get #productsTaxReturn() { return $('//android.widget.FrameLayout') }

    get #productsTaxClass() { return $('android=new UiSelector().text("Taxas padrões")') }

    get #productsTaxStatusType() { return $('//android.widget.CheckedTextView[3]') }

    get #productsPriceReturn() { return $('~Navigate up') }



    async enterPrice() {
        await this.#productsAddPrice.click()
    }

    async regularPrice(regular) {
        await this.#productsRegularPrice.click()
        await this.#productsRegularPrice.clearValue()
        await this.#productsRegularPrice.setValue(regular)
    }

    async enterSalePrice(sale) {
        await this.#productsSalePrice.click()
        await this.#productsSalePrice.clearValue()
        await this.#productsSalePrice.setValue(sale)
    }

    async productsTax() {
        await this.#productsTaxStatus.click()
        await this.#productsTaxSelect.click()
        await this.#productsTaxReturn.click()
        await this.#productsTaxReturn.hideKeyboard()
        await this.#productsTaxClass.click()
        await this.#productsTaxStatusType.click()
        await this.#productsPriceReturn.click()

    }

}

module.exports = new productsPrice()