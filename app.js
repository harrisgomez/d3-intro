const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA'},
    { id: 'd2', value: 20, region: 'China'},
    { id: 'd3', value: 30, region: 'India'},
    { id: 'd4', value: 40, region: 'Philippines'},
    { id: 'd5', value: 50, region: 'Moscow'},
]

// d3.select('div')                    // grabs div
//     .selectAll('p')                 // selects all <p> nodes within <div>
//     .data(DUMMY_DATA)               // data to be used
//     .enter()                        // returns all the missing elements to which the data is bound
//     .append('p')                    // appends those missing <p> nodes
//     .text(data => data.region);     // inserts the text/data

d3.select('div')
    .classed('container', true)         // 2nd argument determines whether it should be added in or not
    .style('border', '1px solid red')   // inline style