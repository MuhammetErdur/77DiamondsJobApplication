class ProductTable{

    productMapping = {
        'Funny': 1,
        'Junior': 2,
        'Starwars': 3
    };

    elements = {
        imageCount: (product) => cy.xpath(`//tr[${this.productMapping[product]}]/td[4]`),
        editImage: (product) => cy.xpath(`//a[@href='/product-detail/${this.productMapping[product]}']`),
    }

    clickEditImage(product) {
        this.elements.editImage(product).click({force: true});
        cy.wait(1000);
    }

    getImageCount(product) {
        return this.elements.imageCount(product).invoke('text');
    }

    verifyUpload(product) {
        let initialCount;

        // Get the initial image count
        this.getImageCount(product).then((count) => {
            initialCount = parseInt(count);
        });

        // After the upload process, get the new image count and verify it
        this.getImageCount(product).then((count) => {
            const newCount = parseInt(count);
            expect(newCount).to.equal(initialCount + 1);
        });
    }

    verifyRemove(product) {
        let initialCount;

        // Get the initial image count
        this.getImageCount(product).then((count) => {
            initialCount = parseInt(count);
        });

        // After the removal process, get the new image count and verify it
        this.getImageCount(product).then((count) => {
            const newCount = parseInt(count);
            expect(newCount).to.equal(initialCount - 1);
        });
    }        
}

export default ProductTable;