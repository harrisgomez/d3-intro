const DUMMY_DATA = [
    { id: 'd1', value: 4, region: 'USA'},
    { id: 'd2', value: 6, region: 'China'},
    { id: 'd3', value: 9, region: 'India'},
    { id: 'd4', value: 5, region: 'Philippines'}
];

// d3.select('div')                    // grabs div
//     .selectAll('p')                 // selects all <p> nodes within <div>
//     .data(DUMMY_DATA)               // data to be used
//     .enter()                        // returns all the data points
//     .append('p')                    // renders <p> nodes for every data point
//     .text(data => data.region);     // inserts the text/data

const container = d3.select('div')
    .classed('container', true)         // 2nd argument determines whether it should be added in or not
    .style('border', '1px solid red');  // inline style

container.selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('div')
    .classed('bar', true)               // adds the 'bar' class to the newly rendered divs
    .style('width', '50px')
    .style('height', data => (data.value *15) + 'px');