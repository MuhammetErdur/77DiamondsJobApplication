class ProductDetails{
    constructor() {
        // Define the rows and columns of the table
        this.rows = ['cotton', 'linen', 'silk', 'wool'];
        this.columns = ['wh', 'ye', 'gr', 'red', 'or'];
    }

    // Method that provides access to a specific cell
    getCell(i, j) {
        const row = i + 1;  // XPath indexing is 1-based
        const column = j + 1;  // XPath indexing is 1-based
        const selector = `//tr[${row}]/th[${column}]`;
        return cy.xpath(selector);
    }

    // Method to click the "Add" button in a specific cell
    clickAddButtonInCell(i, j) {
        this.getCell(i, j)
            .find('button.add')  // Find the "Add" button
            .click();  // Click it
    }

    // Method to get the name of the image file loaded in a specific cell
    getImageNameInCell(i, j) {
        return this.getCell(i, j)
            .find('img')  // Find the image element
            .invoke('attr', 'src')  // Get the "src" attribute
            .then(src => {
                // Extract the file name (last part of the src)
                const filename = src.split('/').pop();
                return filename;
            });
    }

    deleteImage(i, j, imageName) {
        this.getCell(i, j)
            .find(`img[src$="${imageName}.png"]`)  // Find the image with the specific name
            .parent()  // Go to the parent element (the icon)
            .find('button.remove')  // Find the "Remove" button within the icon
            .click();  // Click it
        cy.wait(1000);  // Wait for the image to be removed
    }
}

export default ProductDetails;
