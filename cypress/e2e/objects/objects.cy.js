//require('cypress-xpath')
class ys {
    clrcookies() {
        cy.clearCookies()
    }

    visit() {
    Cypress.on('uncaught:exception', () => false) // ignore app errors
        cy.fixture('config').then((login) => {
            cy.visit(login.url)
            cy.get('.login___StyledDiv5-sc-1rkvmji-9 > input').type(login.username)
            cy.get('.login___StyledDiv7-sc-1rkvmji-13 > input').type(login.pass)
            cy.contains('Log In').click().wait(2000)
        })
    }
    createpost() {
        cy.get('#create-content-button > img').click()
        cy.get('img[src="/icons/content-creation-icons/CreatePost-black.svg"]').click()
        cy.get('.form-text-area__StyledTextArea-sc-19ozadn-0').type("This is an automated post created by Cypress.")
        cy.get('.pac-target-input').type("New York, NY, USA{enter}")
        cy.get('.styled__StyledUploader-sc-vzh6wd-5').click().wait(2000)
        cy.get('input[type="file"]').attachFile('img.jpg', { force: true }).wait(3000)
        cy.get('.form-button__StyledButton-sc-uyp3s-0').click().wait(1000)
        cy.contains('button', 'Post').click().wait(3000)
        cy.get('img[src="/icons/common/More.svg"]').first().click()
        cy.contains('Delete').click()
        cy.contains('button', 'Confirm').click().wait(3000)
    }
    logout() {
        cy.get('img[src="/icons/menu-icons/Menu.svg"]').click().wait(2000)
        cy.contains('Logout').click()
    }
}

export default ys
