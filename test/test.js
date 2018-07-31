"use strict";

import chai from 'chai';
import chaiAsPromised from "chai-as-promised";

import { Zivacare } from '../index';

const expect = chai.expect;
chai.use(chaiAsPromised);

chai.Assertion.addProperty('uppercase', () => {
    let obj = this._obj;
    new chai.Assertion(obj).to.be.a('string');

    this.assert(
        obj === obj.toUpperCase() // adapt as needed
        , 'expected #{this} to be all uppercase'    // error message when fail for normal
        , 'expected #{this} to not be all uppercase'  // error message when fail for negated
    );
});

chai.Assertion.addProperty('lowercase', () => {
    let obj = this._obj;
    new chai.Assertion(obj).to.be.a('string');

    this.assert(
        obj === obj.toLowerCase() // adapt as needed
        , 'expected #{this} to be all lowercase'    // error message when fail for normal
        , 'expected #{this} to not be all lowercase'  // error message when fail for negated
    );
});

describe('Zivacare Connect', () => {

    let zivacare = new Zivacare('M2Q4MzlkNjg0OTQyYmZmMjM4NDQ1Y2E3NGY0MjZjNzFjNTQ3ZWY4ZDIwMmJmYzk4NmIxNWFjYWRjMzNmODc0OQ');

    describe('Method tests', () => {

        it('Check prettify method should be uppercase', () => {
            return expect(zivacare.prettifyMethod('post')).to.be.uppercase;
        });

        it('Check prettify method should be lowercase', () => {
            return expect(zivacare.prettifyEndpoint('BODY')).to.be.lowercase;
        });

        // it();

        // it();

        // it();

        it('Request method returns a promise', () => {
            return expect(zivacare.request('body', 'GET')).to.be.a('promise');
        });

        // it();

    });

    // describe('Request test', () => {

    //     it();

    // });

});