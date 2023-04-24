/// <reference types="cypress"/>

describe('"POST Request', () => {
    let titleOfPost = []
    let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1)
    it('Create a new post via /posts api', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                title: `${randomTitle}`,
                author: "notknow"
            }
        }).then(respons => {
            expect(respons.status).to.eql(201)
        })
    });

    it('Validate title of latest post', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            body.forEach(item => {
                titleOfPost.push(item["title"])
            });
        }).then(() => {
            let latestPost = titleOfPost[titleOfPost.length - 1]
            expect(latestPost).to.eq(`${randomTitle}`)
        })

    });
})