import Zivacare from '.';

let zivacare = new Zivacare("M2Q4MzlkNjg0OTQyYmZmMjM4NDQ1Y2E3NGY0MjZjNzFjNTQ3ZWY4ZDIwMmJmYzk4NmIxNWFjYWRjMzNmODc0OQ");

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