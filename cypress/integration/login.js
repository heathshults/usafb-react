describe('Login', () => {
  it('Navigate to login page', () => {
    cy.visit('/login');
    cy.get('input#userEmail')
      .click()
      .type('kent.kawahara@verys.com');
    cy.get('input#userPassword')
      .click()
      .type('password123!');
    //   .click('input#userPassword')
    //   .click('div#si-form > div.container:nth-child(3) > form.input-group__form-container:nth-child(1) > div.row.pt-0.pb-0:nth-child(4) > div.col-md-12.pt-0.pb-.text-center:nth-child(1) > button.btn.btn-primary.w-75.mr-auto.ml-auto:nth-child(1)')
    //   .end()
    //     .then(function (result) {
    //       console.log(result)
    //     })
    //     .catch(function (error) {
    //       console.error('Error:', error);
    //     });
  });
});
