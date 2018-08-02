"use strict";

import request from "request";

/**
 * The main class that provides connectivity to the Zivacare API
 *
 * @class Zivacare
 */
export class Zivacare {

    /**
     * Creates an instance of Zivacare.
     * @param {String} accessToken
     * @memberof Zivacare
     */
    constructor(accessToken) {

        this.baseUrl = "https://api.zivacare.com/api/v2/";
        this.accessToken = accessToken;

    }

    /**
     * The main request method that provides an easy to way to make a
     * request to the Zivacare API.
     *
     * @param {String} endpoint Checkout a list of all the endpoints here https://docs.zivacare.com/documentation/api-reference-all/
     * @param {String} method Accepted methods are GET, POST
     * @param {Object} [data=null] By default null, if not null it should be an Object
     * @returns {Promise} Resolves into a promise
     * @memberof Zivacare
     */
    request(endpoint, method, data = null) {

        return new Promise((resolve, reject) => {

            if (endpoint && method && this.checkMethod(method)) {

                endpoint = this.prettifyEndpoint(endpoint);
                method = this.prettifyMethod(method);

                let options = this.setRequestOptions(method, endpoint, data);

                request(options, (error, response, body) => {
                    if (error) reject(error);

                    resolve(body);
                });

            } else {
                throw new Error("You need to provide an endpoint and an accepted method");
            }

        });

    }

    /**
     * Method to get the request options
     *
     * @param {String} method The method that requires the request options
     * @returns {Object} Returns an object with all the request options baed on request method
     * @memberof Zivacare
     */
    setRequestOptions(method, endpoint, data) {

        let options = {
            method: method,
            url: this.getEndpointUrl(endpoint),
            qs: {
                access_token: this.accessToken
            },
            headers: {
                'Cache-Control': 'no-cache'
            }
        };

        if (method === 'GET' && data) {

            let extra = '';

            if (data.length === 1) {

                extra = data[0];

            } else if (data.length === 2) {

                extra = data.join('/');

            }

            options.url = `${this.getEndpointUrl(endpoint)}/${extra}`;

        }

        if (method === 'POST' && data) {

            options.headers = {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json'
            };
            options.body = data;
            options.json = true;

        }

        return options;

    }

    /**
     * Return the URL for an enpoint
     *
     * @param {String} endpoint
     * @returns {String} The interpolated URL
     * @memberof Zivacare
     */
    getEndpointUrl(endpoint) {

        return `${this.baseUrl}${endpoint}`;

    }

    /**
     * Check if the request method is allowed
     *
     * @param {String} method
     * @returns {Boolean} If the method is allowed or not
     * @memberof Zivacare
     */
    checkMethod(method) {

        method = this.prettifyMethod(method);

        let allowedMethods = ['GET', 'POST'];

        return allowedMethods.includes(method);

    }

    /**
     * Prettifies the method name
     *
     * @param {String} method
     * @returns The method into an uppercase string
     * @memberof Zivacare
     */
    prettifyMethod(method) {

        return method.toUpperCase();

    }

    /**
     * Prettifies the endpoint name
     *
     * @param {String} endpoint
     * @returns The endpoint into a lowercase string
     * @memberof Zivacare
     */
    prettifyEndpoint(endpoint) {

        endpoint = endpoint.toLowerCase();

        if (endpoint.includes('.')) {
            endpoint = endpoint.split('.').join('/');
        }

        return endpoint;

    }

}