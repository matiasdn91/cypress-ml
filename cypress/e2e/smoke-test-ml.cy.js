describe('Smoke Test - Mercado Libre', function () {
    beforeEach(function () {
        cy.visit('https://www.mercadolibre.com.ar/');
    });

    it('Validar página de inicio', () => {
        cy.get('[aria-hidden="false"] > a > img').should('be.visible');
    });

    it('Validar barra de búsqueda', () => {
        cy.get('#nav-search-input').type('iPhone');
        cy.get('.nav-icon-search').click();
        cy.contains('iPhone');
    });

    it('Validar elegir categoría', () => {
        cy.get('#nav-search-input').type('iPhone');
        cy.get('.nav-icon-search').click();
        cy.get(':nth-child(4) > ul > :nth-child(5) > .ui-search-link > .ui-search-filter-name').click();
    });
})