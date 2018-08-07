"use strict";

import chai from 'chai';
import chaiAsPromised from "chai-as-promised";

import { ZivaCareClient } from '../index';

const expect = chai.expect;
const should = chai.should();
chai.use(chaiAsPromised);

chai.Assertion.addProperty('uppercase', function() {
    let obj = this._obj;
    new chai.Assertion(obj).to.be.a('string');

    this.assert(
        obj === obj.toUpperCase() // adapt as needed
        , 'expected #{this} to be all uppercase'    // error message when fail for normal
        , 'expected #{this} to not be all uppercase'  // error message when fail for negated
    );
});

chai.Assertion.addProperty('lowercase', function() {
    let obj = this._obj;
    new chai.Assertion(obj).to.be.a('string');

    this.assert(
        obj === obj.toLowerCase() // adapt as needed
        , 'expected #{this} to be all lowercase'    // error message when fail for normal
        , 'expected #{this} to not be all lowercase'  // error message when fail for negated
    );
});

describe('ZivaCareClient Connect', () => {

    let zivacare = new ZivaCareClient('OWZkNDMzMDZhNGQ2YzJmNWY3NzQ4Nzk0MzY4YjgyNGQ4MDExODZhZWMzYjJjY2I5NjFjYTlkODZiNWVhMDAxYQ');

    describe('Method tests', () => {

        it('Check prettify method should be uppercase', () => {
            return expect(zivacare.prettifyMethod('post')).to.be.uppercase;
        });

        it('Check prettify method should be lowercase', () => {
            return expect(zivacare.prettifyEndpoint('BODY')).to.be.lowercase;
        });

        it('The request method should be accepted', () => {
            return expect(zivacare.checkMethod('POST')).to.be.true;
        });

        it('Set options should return an object', () => {
            return expect(zivacare.setRequestOptions('POST', 'body')).to.be.an('object');
        });

        it('Get endpoint url should be a string with dot', () => {
            return expect(zivacare.getEndpointUrl('body.left_lower_leg')).to.be.a('string');
        });

        it('Get endpoint url should be a string with slash', () => {
            return expect(zivacare.getEndpointUrl('body/left_lower_leg')).to.be.a('string');
        });

        it('Request method returns a promise with params', () => {
            return expect(zivacare.request('body', 'GET')).to.be.a('promise');
        });

        it('Request method returns a promise without params', () => {
            return zivacare.request().should.be.rejectedWith(Error);
        });

    });

});
