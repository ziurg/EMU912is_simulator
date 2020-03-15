
var oil_Pscale = d3.scaleThreshold()
    .domain([10.,30.,60.,80.]) //oil_pressure limits
    .range(["#a6190f", "#a2a72d", "#448823", "#a2a72d", "#a6190f"]) //red, orange, green, orange, red
var oil_Tscale = d3.scaleThreshold()
    .domain([10.,30.,60.,80.]) //oil_pressure limits
    .range(["#a6190f", "#a2a72d", "#448823", "#a2a72d", "#a6190f"]) //red, orange, green, orange, red
var EGT_scale = d3.scaleThreshold()
    .domain([10.,30.,60.,80.]) //oil_pressure limits
    .range(["#a6190f", "#a2a72d", "#448823", "#a2a72d", "#a6190f"]) //red, orange, green, orange, red
var CHT_scale = d3.scaleThreshold()
    .domain([10.,30.,60.,80.]) //oil_pressure limits
    .range(["#a6190f", "#a2a72d", "#448823", "#a2a72d", "#a6190f"]) //red, orange, green, orange, red
var throttle_scale = d3.scaleThreshold()
    .domain([10.,30.,60.,80.]) //oil_pressure limits
    .range(["#a6190f", "#a2a72d", "#448823", "#a2a72d", "#a6190f"]) //red, orange, green, orange, red
var fuel_Pscale = d3.scaleThreshold()
    .domain([10.,30.,60.,80.]) //oil_pressure limits
    .range(["#a6190f", "#a2a72d", "#448823", "#a2a72d", "#a6190f"]) //red, orange, green, orange, red
var fuel_Fscale = d3.scaleThreshold()
    .domain([10.,30.,60.,80.]) //oil_pressure limits
    .range(["#a6190f", "#a2a72d", "#448823", "#a2a72d", "#a6190f"]) //red, orange, green, orange, red
var ECV_scale = d3.scaleThreshold()
    .domain([10.,30.,60.,80.]) //oil_pressure limits
    .range(["#a6190f", "#a2a72d", "#448823", "#a2a72d", "#a6190f"]) //red, orange, green, orange, red
var ACV_scale = d3.scaleThreshold()
    .domain([10.,30.,60.,80.]) //oil_pressure limits
    .range(["#a6190f", "#a2a72d", "#448823", "#a2a72d", "#a6190f"]) //red, orange, green, orange, red
/*
    d3.select("span#oil_pressure")
      .style("color",d => color(+d.text()));
*/
$(document).ready(function(){
    $('span#oil_pressure').each(function(){
        $(this).css('color',function (d) {return oil_Pscale(+$(this).text()); });
    });
});
$(document).ready(function(){
    $('span#oil_temp').each(function(){
        $(this).css('color',function (d) {return oil_Tscale(+$(this).text()); });
    });
});
$(document).ready(function(){
    $('span#egt').each(function(){
        $(this).css('color',function (d) {return EGT_scale(+$(this).text()); });
    });
});
$(document).ready(function(){
    $('span#cht').each(function(){
        $(this).css('color',function (d) {return CHT_scale(+$(this).text()); });
    });
});
$(document).ready(function(){
    $('span#throttle').each(function(){
        $(this).css('color',function (d) {return throttle_scale(+parseFloat($(this).text())); });
    });
});
$(document).ready(function(){
    $('span#fuel_pressure').each(function(){
        $(this).css('color',function (d) {return fuel_Pscale(+$(this).text()); });
    });
});
$(document).ready(function(){
    $('span#fuel_flow').each(function(){
        $(this).css('color',function (d) {return fuel_Fscale(+$(this).text()); });
    });
});
$(document).ready(function(){
    $('span#ecv').each(function(){
        $(this).css('color',function (d) {return ECV_scale(+$(this).text()); });
    });
});
$(document).ready(function(){
    $('span#acv').each(function(){
        $(this).css('color',function (d) {return ACV_scale(+$(this).text()); });
    });
});