const fetch = require('node-fetch');
const getPeople = require('./script2');

it('calls starwarsApi to get people', () => {
    expect.assertions(2)
    return getPeople(fetch)
        .then(data => {
            expect(data.count).toEqual(87)
            expect(data.results.length).toBeGreaterThan(5)
        })
});
