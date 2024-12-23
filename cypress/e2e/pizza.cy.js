describe("Pizza Order Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/siparis-formu");
    });
  
    it("allows typing in the name input", () => {
      cy.get('input[name="username"]').type("John Doe");
      cy.get('input[name="username"]').should("have.value", "John Doe");
    });
  
    it("allows selecting multiple ingredients", () => {
      cy.get('input[type="checkbox"]').each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check().should("be.checked");
        }
      });
  
      cy.get('input[type="checkbox"]:checked').should("have.length.at.most", 10);
    });
  
    it("submits the form successfully", () => {
      cy.get('input[name="username"]').type("John Doe");
      cy.get('textarea[name="note"]').type("Please make it extra spicy.");
      cy.get('input[type="checkbox"]').each((checkbox, index) => {
        if (index < 4) cy.wrap(checkbox).check();
      });
  
      cy.intercept("POST", "https://reqres.in/api/pizza").as("postOrder");
      cy.get(".purchase-button").click();
  
      cy.wait("@postOrder").its("response.statusCode").should("eq", 201);
      cy.get("@postOrder").then((interception) => {
        console.log("API Response:", interception.response.body);
      });
    });
  });