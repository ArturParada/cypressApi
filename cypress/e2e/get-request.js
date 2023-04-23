/// <reference types="cypress"/>

describe('"Get Request', () => {
    let result
    it('Validate status code of the /post api', () => {
        result = cy.request("http://localhost:3000/posts")
        result.its("status").should("equal", 200)
    });
});