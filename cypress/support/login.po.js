//export const username = () =>  cy.xpath('//input[@id="username"]');
//export function username() {return cy.xpath('//input[@id="username"]');}
export function username() {return   cy.get('#username');}
export function password() {return cy.get('#password');}
export function signIn() {return cy.xpath('//button[text()="Sign in"]');}
export function specificReportsInRow_Lnk(index, reportName) {return cy.xpath('//tr[contains(@class,"detail-row mat")]//td)['+index+']//a[contains(text(),"'+reportName+'")]');}
