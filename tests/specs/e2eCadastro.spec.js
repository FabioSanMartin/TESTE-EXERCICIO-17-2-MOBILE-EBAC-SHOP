const homeScreen = require("../screens/home.screen")
const loginScreen = require("../screens/login.screen")
const myStoreScreen = require("../screens/myStore.screen")
const productsScreen = require("../screens/products.screen")
const productsPrice = require('../screens/price.screen')
const productsInventory = require('../screens/inventory.screen')
const productsMoreDetails = require('../screens/moreDetails.screen')
const productsSearch = require('../screens/productsSearch.screen')



let url = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let title = 'Jaqueta'
let text = 'Jaqueta Amarela Feminina'
let regular = '159,90'
let sale = '129,00'
let sku = 'ebac test 1234'
let quantity = '90'
let weight = '3'
let length = '80'
let width = '60'
let height = '40'
let iten = 'Jaqueta'
let screen = 'Products'

describe('Access Admin Panel and Register a New Product', () => {
    it('should login with valid credentials', async () => {

        await homeScreen.goToLogin()
        await $('android.widget.EditText').setValue(url)
        await loginScreen.continue()
        await loginScreen.continueWithStoreCre()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)
        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
        await productsScreen.getProductsButton()
        await productsScreen.addNewProducts()
        await productsScreen.menuNewProduct()
        await productsScreen.imageProduct()
        await productsScreen.imageProductGet()
        await productsScreen.imageProductSelect()
        await productsScreen.imageProductDone()
        await productsScreen.imageConfirmRetry()
        await productsScreen.productsTitleEdit(title)
        await productsScreen.productsDecribe()
        await productsScreen.productsDecribetext(text)
        await productsPrice.enterPrice()
        await productsPrice.regularPrice(regular)
        await productsPrice.enterSalePrice(sale)
        await productsPrice.productsTax()
        await productsInventory.inventoryAccess()
        await productsInventory.inventorySku(sku)
        await productsInventory.managerStock()
        await productsInventory.confirmBox(0)
        await productsInventory.managerStockQuantity(quantity)
        await productsMoreDetails.accessMenu()
        await productsMoreDetails.weightShipping(weight)
        await productsMoreDetails.lengthShipping(length)
        await productsMoreDetails.widththShipping(width)
        await productsMoreDetails.heightShipping(height)
        await productsMoreDetails.class()
        expect(await productsMoreDetails.initial()).toEqual(iten)
        await productsSearch.confirm()
        await productsSearch.goTo()
        expect(await productsSearch.toConfirm()).toEqual(screen)
        await productsSearch.searchProducts(iten)
        await productsSearch.confirmProduct()
        expect(await productsSearch.final()).toEqual()











    })
})