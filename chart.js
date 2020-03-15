var Chart = function(opts) {
    
    // load in arguments from config object
    this.data = opts.data;
    this.element = opts.element;
    
    // create the chart
    this.draw();
}

Chart.prototype.draw = function() {
    
    // define width, height and margin
    this.width = this.element.offsetWidth;
    this.height = this.width / 2;
    this.margin = {
        top: 20,
        right: 75,
        bottom: 45,
        left: 50
    };
    
    // set up parent element and SVG
    this.element.innerHTML = '';
    var svg = d3.select(this.element).append('svg');
    svg.attr('width',  this.width);
    svg.attr('height', this.height);

    // we'll actually be appending to a <g> element
    this.plot = svg.append('g')
        .attr('transform','translate('+this.margin.left+','+this.margin.top+')');
    
    // create the other stuff
    this.createScales();
    this.addAxes();
    this.addLine();

}

Chart.prototype.createScales = function(){
    
    // shorthand to save typing later
    var m = this.margin;
    
    // calculate max and min for data
    var xExtent = d3.extent(this.data,function(d,i) {
        return d[0];
    });
    var yExtent = d3.extent(this.data,function(d,i) {
        return d[1];
    });
    
    // force zero baseline if all data points are positive
    if (yExtent[0] > 0) { yExtent[0] = 0; };
    
    this.xScale = d3.time.scale()
        .range([0, this.width-m.right])
        .domain(xExtent);

    this.yScale = d3.scale.linear()
        .range([this.height-(m.top+m.bottom), 0])
        .domain(yExtent);
}

Chart.prototype.addAxes = function(){
    var m = this.margin;

    // create and append axis elements
    // this is all pretty straightforward D3 stuff
    var xAxis = d3.svg.axis()
        .scale(this.xScale)
        .orient("bottom")
        .ticks(d3.time.month, 1);
    
    var yAxis = d3.svg.axis()
        .scale(this.yScale)
        .orient("left")
        .tickFormat(d3.format("d"));
    
    this.plot.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (this.height-(m.top+m.bottom)) + ")")
        .call(xAxis);
    
    this.plot.append("g")
        .attr("class", "y axis")
        .call(yAxis)
}

Chart.prototype.addLine = function(){
    // need to load `this` into `_this`...
    var _this = this;
    var line = d3.svg.line()
        .x(function(d) {
            // ... so we can access it here
            return _this.xScale(d[0]);
        })
        .y(function(d) {
            return _this.yScale(d[1]);
        });    
    this.plot.append('path')
        // use data stored in `this`
        .datum(this.data)
        .classed('line',true)
        .attr('d',line)
        // set stroke to specified color, or default to red
        .style('stroke', this.lineColor || 'red');
}

// the following are "public methods"
// which can be used by code outside of this file

Chart.prototype.setColor = function(newColor) {

    this.plot.select('.line')
        .style('stroke',newColor);
        
    // store for use when redrawing
    this.lineColor = newColor;
}

Chart.prototype.setData = function(newData) {
    this.data = newData;
    
    // full redraw needed
    this.draw();
}