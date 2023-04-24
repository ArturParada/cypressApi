/// <reference types="cypress"/>

describe('"Get Request', () => {
    let result
    it('Validate status code of the /post api', () => {
        result = cy.request("http://localhost:3000/posts")
        result.its("status").should("equal", 200)
    });
    it('Validate /posts api contains the correct keys and values', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"  //w jakim formacie chcemy otrzymac dane
            }
        }).then((response) => {
            let body = JSON.parse(JSON.stringify(response.body)) // JSON.stringify zamienia na JSON , a JSON.parse zamienia na obiekt js 
            cy.log(body)

            expect(body[0]).has.property("title", "Example Json Server")
            expect(body[0]).has.property("author", "Arczi")

            body.forEach(item => {
                expect(item).to.have.all.keys("id", "title", "author")
                cy.log("Author:" + item["author"] + "& Title:" + item["title"])
            });
        })
    });
});