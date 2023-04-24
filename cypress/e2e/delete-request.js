/// <reference types="cypress"/>

describe('UELETE Request', () => {

    it('dELETEpost via the /posts api', () => {
        cy.request({
            method: "delete",
            url: "http://localhost:3000/posts/18",
        }).then(respons => {
            expect(respons.status).to.eql(200)
        })
    });
})