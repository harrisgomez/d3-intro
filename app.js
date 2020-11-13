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

// -----

// d3 with <div> container
// const container = d3.select('div')
//     .classed('container', true)         // 2nd argument determines whether it should be added in or not

// container.selectAll('.bar')
//     .data(DUMMY_DATA)
//     .enter()
//     .append('div')
//     .classed('bar', true)               // adds the 'bar' class to the newly rendered divs
//     .style('width', '50px')
//     .style('height', data => (data.value *15) + 'px');

// -----

// Functions for calculating positions on the X and Y axis
// (requires 'd3-scale' module installed)
const xScale = d3.scaleBand()   // Data appears to best fit an Ordinal scale (same width bars)
    .domain(DUMMY_DATA.map(dataPoint => dataPoint.region))  // lets scaling fn know how many data points we're working with in total
    .rangeRound([0, 250])       // To and From values denoting how much space is available (width of container)
    .padding(0.1)               // % padding between bars

const yScale = d3.scaleLinear()
    .domain([0, 10])            // Sets the upper/lower limits of Y-axis, letting d3 know the range of values it will be dealing with. In this case, 9 is the highest value in the data, so 10 will allow it some room
    .range([200, 0])            // height of container

// d3 with <svg> container
const container = d3.select('svg')
    .classed('container', true)         // 2nd argument determines whether it should be added in or not

const bars = container.selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')                                     // div -> rect
    .classed('bar', true)                               // adds the 'bar' class to the newly rendered divs
    .attr('width', xScale.bandwidth())                  // style -> attr. Values automatically treated as 'px'. Can dynamically render values returned by d3-scale fns
    .attr('height', data => 200 - yScale(data.value))   // need to deduct actual container height since d3 starts plotting from the top-left corner
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value))

setTimeout(() => {
    bars.data(DUMMY_DATA.slice(0, 2)).exit().remove();
}, 2000);