describe('template spec', () => {
  it('Login & Logout', () => {
    cy.visit('https://dev.yourspeak.com/hub')
    cy.get('.login___StyledDiv5-sc-1rkvmji-9 > input').type('emch31')
    cy.get('.login___StyledDiv7-sc-1rkvmji-13 > input').type('12345678')
    cy.get('.form-button__StyledButton-sc-uyp3s-0').click().wait(6000)
    cy.get('.main-app-header___StyledDiv7-sc-yazxwz-24').click().wait(2000)
    cy.contains('Logout').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  })

  // function generateNewUsername() {
  //   let text = "";
  //   let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  //   for(let i = 0; i < 5; i++)
  //   text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  //   return text;
  //   }

  // it('Sign Up', () => {
  //   cy.visit('https://dev.yourspeak.com/hub')
  //   {const generatedUsername = generateNewUsername()
  //     cy.get('.auth-header__StyledClose-sc-sxgrdn-0').click()
  //     cy.get('#beta_code').type(generatedUsername)
  //     cy.get('#firstName').type('fname')
  //     cy.get('#lastName').type('lname')
  //     cy.get('#email').type(generatedUsername + '@example.com')
  //     cy.get('#username').type(generatedUsername)
  //     cy.get('#phone').type('12345678910')
  //     cy.get('#password').type('12345678')
  //     cy.get('#confirm').type('12345678')
  //     cy.get('[name="gender"]').select('Male')
  //     cy.get('#tos').click()
  //     cy.get('[name="month"]').select('January')
  //     cy.get('[name="day"]').select('1')
  //     cy.get('[name="year"]').select('1999')
  //     cy.get('.form-button__StyledButton-sc-uyp3s-0').click()
  //     cy.get('.login___StyledDiv5-sc-1rkvmji-9 > input').type(generatedUsername)
  //     cy.get('.login___StyledDiv7-sc-1rkvmji-13 > input').type('12345678')
  //     cy.get('.form-button__StyledButton-sc-uyp3s-0').click().wait(6000)
  //   }
  // })

  it('Create Post', () => {
    cy.visit('https://dev.yourspeak.com/hub')
    cy.get('.login___StyledDiv5-sc-1rkvmji-9 > input').type('emch31')
    cy.get('.login___StyledDiv7-sc-1rkvmji-13 > input').type('12345678')
    cy.get('.form-button__StyledButton-sc-uyp3s-0').click().wait(6000)
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    //create a new post
    cy.get('#create-content-button > img').click()
    cy.get(':nth-child(1) > a > .styled__NavItem-sc-1x62eu3-0 > .create-content-module___StyledH-sc-1l24a1u-4').click()
    cy.get('.form-text-area__StyledTextArea-sc-19ozadn-0').type("This is an automated post created by Cypress.")
    cy.get('.pac-target-input').type("New York, NY, USA{enter}")
    cy.get('.styled__StyledUploader-sc-vzh6wd-5').click().wait(2000)
    cy.get('input[type="file"]').attachFile('img.jpg', { force: true }).wait(10000)
    cy.get('.form-button__StyledButton-sc-uyp3s-0').click()
    cy.get('.preview-modal___StyledMain-sc-290qiy-3 > .secondary-header-layout__StyledHeaderContainer-sc-11b3s55-0 > .form-button__StyledButton-sc-uyp3s-0').click()
  })
  
})