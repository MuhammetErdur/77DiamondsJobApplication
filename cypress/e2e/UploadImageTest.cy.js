import ProductTable from '.support/ProductTable/';
import ProductDetails from '.support/ProductDetails/';
import PopUp from '.addImagePopup';

describe("Uploading/Removing Image functuonalities", () => {

    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it("Should be able to upload an image", () => {
        productTable.clickEditImage('Funny');  //Click EditImage button for Funny t-shirt
        ProductDetails.clickAddButtonInCell(2, 3);  //Click Add button for adding new Image
        PopUp.uploadImage(image.png); //Click upload button for uploading new Image
        productTable.verifyUpload('Funny');  //Verify if Image count has increased in the Main Page

    });

    it("Should be able to delete an image", () => {
        
        productTable.clickEditImage('Funny'); //Click
        productDetails.deleteImage(3,4,image.png);
        productTable.verifyRemove('Funny'); //Delete
        productTable.verifyUpload('Funny'); //Verify if Image count has increased in the Main Page
    })

})
