/// <reference types="cypress"/>

describe('Update Request', () => {

    it('Update an existing post via the /posts api', () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/2",
            body: {
                title: `Change PUT title`,
                author: "change PUT notknow"
            }
        }).then(respons => {
            expect(respons.status).to.eql(200)
        })
    });
})