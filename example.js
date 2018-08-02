import Zivacare from '.';

let zivacare = new Zivacare("OWZkNDMzMDZhNGQ2YzJmNWY3NzQ4Nzk0MzY4YjgyNGQ4MDExODZhZWMzYjJjY2I5NjFjYTlkODZiNWVhMDAxYQ");

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