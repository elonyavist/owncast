import { setup } from '../../support/setup.js';
setup();

describe(`Online read-only chat embed`, () => {
	it('Can visit the page', () => {
		cy.visit('http://localhost:8080/embed/chat/readwrite');
	});

	// it('Chat should be visible', () => {
	// 	cy.get('#chat-container').should('be.visible');
	// });
});
