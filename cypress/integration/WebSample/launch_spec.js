require('cypress-xpath')
const ZAPI = require('zephyr_api');
//import * as ZAPI from '../../support/zephyr-util';
//import * as loginPage from '../../support/login.po';

global.__ZAPIcreds = ["ZjJiYWIwNWUtNGY4ZC0zNTk1LThjODctYzJhYzhmODQ5N2FlIDVlZTg3YWFjMDg1NmQwMGFjMzUwNTRkYiBVU0VSX0RFRkFVTFRfTkFNRQ", "Mg4JRXHGDqq1nJvDKtFxAAbl54tdFyynSumovcadxdU","mohds4"];


describe('Launch Application', () => {
  it('Login Page loads successfully', () => {
    cy.visit('https://demo.applitools.com/gridHackathonV1.html')
	//var promise = ZAPI.createNewTestStep(1, "blah blah", 'allow me to verify', '10002', '10000');
	//var promise = ZAPI.getTestSteps('10003', '10000');
	
	//ZAPI.getCycleIdFromCycleName('10000', '10000', 'CycleUnderVer1').then(result => { console.log(result.id); } );
	ZAPI.getTestSteps('10003', '10000').then(result => { console.log(result); } );
  })
})