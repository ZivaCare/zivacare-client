# Ziva Care Client

An npm module that provides an easy way to make GET/POST requests to the Ziva Care API.

## Install

You can either use `npm` or `yarn` to install the package.

```
npm i zivacare-connect
```

or

```
yarn add zivacare-connect
```

## Usage
This module is ES6 compatible and returns a promise when making a request. You can use the following snippet as an example.

```
import zivacare from 'zivacare-connect';

let zivacare = new Zivacare(YOUR_ACCESS_TOKEN);

zivacare.request('body', 'GET').then(returnedData => {
    console.dir(returnedData);
}, error => {
    console.dir(error);
});

let data = {
  "source": "fitbit",
  "record_time": "2014-09-16T15:52:01+0000",
  "value": "90",
  "unit": "bpm"
};

zivacare.request('human.respiration_rate', 'POST', data).then(returnedData => {
    console.dir(returnedData);
}, error => {
    console.dir(error);
});

```

## Development

## License

MIT License

Copyright (c) 2018 SC Ropardo SRL

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.