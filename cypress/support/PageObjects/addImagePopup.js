export class PopUp {

    // Image loading method
    uploadImage(filename) {
        cy.get('input[type=file]').then((input) => {
            cy.fixture(filename).then((fileContent) => {
                const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/png');
                const list = new DataTransfer();
                list.items.add(new File([blob], filename, { type: 'image/png' }));
                const myFileList = list.files;
                input[0].files = myFileList;
                input[0].dispatchEvent(new Event('change', { bubbles: true }));
            });
        });
    }
}

export default PopUp;