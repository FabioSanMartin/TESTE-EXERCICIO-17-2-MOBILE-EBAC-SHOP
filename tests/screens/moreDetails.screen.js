class productsMoreDetails {

    get #moreDetailsMenu() { return $('id:productDetail_addMoreButton') }

    get #moreDetailShipping() { return $('//android.view.ViewGroup[1]') }

    get #shippingScreen() { return $('android=new UiSelector().text("Weight")') }

    get #shippingScreenLength() { return $('android=new UiSelector().text("Length")') }

    get #shippingScreenWidth() { return $('android=new UiSelector().text("Width")') }

    get #shippingScreenHeight() { return $('android=new UiSelector().text("Height")') }

    get #shippingClass() { return $('id:spinner_edit_text') }

    get #shippingBack() { return $('~Navigate up') }

    get #initialScreen() { return $('android=new UiSelector().text("Jaqueta")')}

    async accessMenu() {
        await this.#moreDetailsMenu.click()
        await this.#moreDetailShipping.click()
    }


    async weightShipping(weight) {
        await this.#shippingScreen.click()
        await this.#shippingScreen.setValue(weight)

    }

    async lengthShipping(length) {
        await this.#shippingScreenLength.click()
        await this.#shippingScreenLength.setValue(length)
    }

    async widththShipping(width) {
        await this.#shippingScreenWidth.click()
        await this.#shippingScreenWidth.setValue(width)
    }

    async heightShipping(height) {
        await this.#shippingScreenHeight.click()
        await this.#shippingScreenHeight.setValue(height)
    }

    async class() {
        await this.#shippingClass.click()
        await this.#shippingBack.click()
        await this.#shippingBack.click()
        
    }

    async initial() {
        return await this.#initialScreen.getText()
        
    }

}

module.exports = new productsMoreDetails() 