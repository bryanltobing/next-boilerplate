describe("Test scope", () => {
  it("should properly render home page", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Welcome to Next.js!");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
