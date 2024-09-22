$(document).ready(function () {
    myFunction();  // Call this function when the document is ready
});

function myFunction() {
    console.log("Fetching data...");

    // Fetch data using AJAX
    $.ajax({
        url: 'http://127.0.0.1:5000/fetch_data',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log("Data fetched successfully:", data);

            // Process the data and update the chart
            updateBoxChart(data);
            updateScatterChart(data);
            updateLBPBCharts(data);
        },
        error: function (xhr, status, error) {
            console.error("Error fetching data:", error);
        }
    });
}

function updateBoxChart(data) {
    console.log("Updating chart with data:", data);

    // Extract data for labels and rainfall states
    var labels = data.map(entry => entry.year);
    var rainfallStates = data.map(entry => entry.dec);

    // Create a Box Plot using Plotly Express
    var fig = {
        data: [{
            type: 'box',
            x: labels,
           // y: rainfallStates,
            boxpoints: 'all',
            jitter: 0.3,
            pointpos: -1.8,
            name: 'Rainfall',
            boxmean: 'sd',     // Show standard deviation as a line inside the box
            line: {
                color: 'green',  // Set box plot color
                width: 2         // Set box plot line width
            },
            font: { family: 'Gill Sans MT' },
        }],
        layout: {
            title: 'Box Plot'
        }
    };

    // Update the chart in the 'boxCh' div
    Plotly.newPlot('boxCh', fig);
}

// Refresh the chart every 5 seconds (adjust as needed)
setInterval(myFunction, 5000);




/*scatter chart */

// Assume you have data like: [{"year": 2020, "jan": 50}, {"year": 2021, "jan": 75}, ...]

function updateScatterChart(data) {
    console.log("Updating scatter chart with data:", data);

    // Extract data for labels and rainfall states
    var scatter_x = data.map(entry => entry.year);
    var scatter_y = data.map(entry => entry.jan);

    // Create a Scatter Plot using Plotly Express
    var fig1 = {
        data: [{
            type: 'markers',
            mode: 'markers',
            x: scatter_x,
            y: scatter_y,
            name: 'January Rainfall',
            font: { family: 'Gill Sans MT' },
            marker: {
                color: 'green',  // Set marker color
                size: 8         // Set marker size
            }
        }],
        layout: {
            title: 'Scatter Plot',
            xaxis: {
                title: 'Year'
            },
            yaxis: {
                title: 'January Rainfall'
            }
        }
    };

    // Update the chart in the 'scatter_ch' div
    Plotly.newPlot('scatter_ch', fig1);
}

// Call the function initially
updateScatterChart(initialData);

// Refresh the chart every 5 seconds (adjust as needed)
setInterval(function () {
    // Fetch new data and update the scatter chart
    myFunction();  // Assuming myFunction fetches the latest data
    updateScatterChart(newData);  // Assuming newData is the latest data
}, 5000);









function updateLBPBCharts(data) {
    console.log("Updating charts with data:", data);

    // Extract data for labels and rainfall states
    var years = data.map(entry => entry.year);
    var janRainfall = data.map(entry => entry.jan);
    var febRainfall = data.map(entry => entry.feb);
    var marRainfall = data.map(entry => entry.mar);
    var aprRainfall = data.map(entry => entry.apr);
    var mayRainfall = data.map(entry => entry.may);
    var junRainfall = data.map(entry => entry.jun);
    var julRainfall = data.map(entry => entry.jul);
    var augRainfall = data.map(entry => entry.aug);
    var sepRainfall = data.map(entry => entry.sep);
    var octRainfall = data.map(entry => entry.oct);
    var novRainfall = data.map(entry => entry.nov);
    var decRainfall = data.map(entry => entry.dec);

    // Create a Line Chart using Plotly Express
    var lineChart = {
        x: years,
        y: janRainfall,
        type: 'scatter',
        mode: 'lines+markers',
        font: { family: 'Gill Sans MT' },
        name: 'January Rainfall',
        line: { color: 'green', width: 2 },
        marker: { color: 'blue', size: 8 }
    };
    var lineChartLayout = {
        title: 'Line Chart',
        xaxis: { title: 'Year' },
        yaxis: { title: 'January Rainfall' },
    };

    // Create a Pie Chart using Plotly Express
    var pieChart = {
        labels: years,
        values: julRainfall,
        type: 'pie',
        font: { family: 'Gill Sans MT' },
        name: 'July Rainfall',
        hovertemplate: '%{label}:<br> (Jul) %{value} <br> %{percent}',
        hole: 0.4,
        hoverinfo: 'label+value+percent',
        textinfo: 'none',  // Set textinfo to 'none' to completely remove overlaying text
   
    };
    var pieChartLayout = {
        title: 'Pie Chart',
   
    };

    // Create a Donut Chart using Plotly Express
    var donutChart = {
        labels: years,
        values: augRainfall,
        type: 'pie',
        font: { family: 'Gill Sans MT' },
        name: 'Aug Rainfall',
        hovertemplate: '%{label}:<br> (Jul) %{value} <br> %{percent}',
        hoverinfo: 'label+value+percent',
        textinfo: 'none',  // Set textinfo to 'none' to completely remove overlaying text
   
    };
    var donutChartLayout = {
        title: 'Donut Chart',
        showlegend: true,
        xaxis: {
            showgrid: false,
            showline: false,
            zeroline: false,
            showticklabels: false
        },
        yaxis: {
            showgrid: false,
            showline: false,
            zeroline: false,
            showticklabels: false
        }
    };

    // Create a Bar Chart using Plotly Express
    var barChart = {
        x: years,
        y: febRainfall,
        type: 'bar',
        name: 'February Rainfall',
        font: { family: 'Gill Sans MT' },
        marker: { color: 'orange' }
    };
    var barChartLayout = {
        title: 'Bar Chart',
        xaxis: { title: 'Year' },
        yaxis: { title: 'February Rainfall' },
    };

    // Create a Bubble Chart using Plotly Express
    var bubbleChart = {
        x: years,
        y: marRainfall,
        mode: 'markers',
        name: 'March Rainfall',
        font: { family: 'Gill Sans MT' },
        marker: {
            size: marRainfall.map(value => value * 0.5), // Increase the size factor as needed
            sizemode: 'diameter', // Set to 'diameter' to control size directly as diameter
            color: 'rgba(255, 0, 0, 0.6)', // Adjust bubble color as needed
        },
    };
    var bubbleChartLayout = {
        title: 'Bubble Chart',
        xaxis: { title: 'Year' },
        yaxis: { title: 'March Rainfall' },
    };

    // Create a Horizontal Bar Chart using Plotly Express
    var horizontalBarChart = {
        x: aprRainfall,
        y: years,
        type: 'bar',
        orientation: 'h',
        name: 'April Rainfall',
        font: { family: 'Gill Sans MT' },
        marker: { color: 'palegreen' }
    };
    var horizontalBarChartLayout = {
        title: 'Horizontal Bar Chart',
        xaxis: { title: 'April Rainfall' },
        yaxis: { title: 'Year' },
    };

    // Create a Double-Sided Horizontal Bar Chart using Plotly Express
    var doubleSidedBarChart = {
        x: [...mayRainfall, ...junRainfall.map(value => -value)],
        y: [...years, ...years],
        type: 'bar',
        orientation: 'h',
        text: [...mayRainfall.map(value => '+' + value), ...junRainfall.map(value => '-' + value)],
        textposition: 'inside',
        name: 'May and June Rainfall',
        font: { family: 'Gill Sans MT' },
        marker: {
            color: 'orange',
        },
    };
    var doubleSidedBarChartLayout = {
        title: 'Double-Sided Horizontal Chart',
        xaxis: { title: 'May and June Rainfall' },
        yaxis: { title: 'Year' },
    };

    // Create an Error Bar Chart using Plotly Express
    var errorBarChart = {
        x: years,
        y: sepRainfall,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'September Rainfall with Error Bars',
        line: { color: 'red', width: 2 },
        marker: { color: 'yellow', size: 8 },
        font: { family: 'Gill Sans MT' },
        error_y: {
            type: 'data',
            array: janRainfall.map(value => Math.random() * 10),
            visible: true,
            color: 'red'
        }
    };
    var errorBarChartLayout = {
        title: 'Error Bar Chart',
        xaxis: { title: 'Year' },
        yaxis: { title: 'September Rainfall' },
    };

    // Create a Histogram using Plotly Express
    var histogram = {
        x: octRainfall,
        type: 'histogram',
        name: 'October Rainfall Distribution',
        marker: { color: 'purple' },
        hovertemplate: '%{x}: (Oct)<br> %{y} (Frequency)',
        font: { family: 'Gill Sans MT' },
    };
    var histogramLayout = {
        title: 'Histogram',
        xaxis: { title: 'October Rainfall' },
        yaxis: { title: 'Frequency' },
    };

    // Create a Distplot using Plotly Express
    var distplot = {
        x: novRainfall,
        type: 'histogram',
        name: 'November Rainfall Distribution',
        marker: { color: 'purple' },
        hovertemplate: '%{x}: (Nov)<br> %{y} (Frequency)',
        font: { family: 'Gill Sans MT' },
    };
    var distplotLayout = {
        title: 'Distplot',
        xaxis: { title: 'November Rainfall' },
        yaxis: { title: 'Frequency' },
    };

    // Create a 2D Histogram using Plotly Express
    var histogram2d = {
        x: years,
        y: decRainfall,
        type: 'histogram2d',
        colorscale: 'Viridis',
        colorbar: { title: 'Frequency' },
        hovertemplate: '%{x}:<br> (Dec) %{y}',
        font: { family: 'Gill Sans MT' },
    };
    var histogram2dLayout = {
        title: '2D Histogram',
        xaxis: { title: 'November Rainfall' },
        yaxis: { title: 'December Rainfall' },
    };

    
    // Create a Contour Plot using Plotly Express
var contourPlot = {
    x: years,
    y: janRainfall,
    z: febRainfall,
    type: 'contour',
    colorscale: 'Viridis',
    colorbar: { title: 'Rainfall' },
    hovertemplate: '%{x}:<br> (Jan) %{y},<br>  (Feb) %{z}',
    hoverlabel: {
        bgcolor: 'black',
        bordercolor: 'white',
        font: { family: 'Gill Sans MT', size: 12, color: 'white' },
        align: 'left',
    },
};
var contourPlotLayout = {
    title: 'Contour Plot',
    xaxis: { title: 'Year' },
    yaxis: { title: 'January Rainfall' },
    zaxis: { title: 'February Rainfall' },
};

// Create a Time Series Plot using Plotly Express
var timeSeriesPlot = {
    x: years,
    y: marRainfall,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'March Rainfall',
    line: { color: 'green', width: 2 },
    marker: { color: 'blue', size: 8 },
    hovertemplate: '%{x}:<br> (Mar) %{y}',
    font: { family: 'Gill Sans MT' },
};
var timeSeriesPlotLayout = {
    title: 'Time Series Plot',
    xaxis: { title: 'Year' },
    yaxis: { title: 'March Rainfall' },
};

// Create a Candlestick Chart using Plotly Express
var candlestickChart = {
    x: years,
    open: janRainfall,
    high: febRainfall,
    low: marRainfall,
    close: aprRainfall,
    type: 'candlestick',
    hoverinfo: 'text',
    font: { family: 'Gill Sans MT' },
    hovertext: years.map((year, i) => `x: ${years[i]}, <br> Open: ${janRainfall[i]} (Jan),<br> High: ${febRainfall[i]} (Feb),<br> Low: ${marRainfall[i]} (Mar),<br> Close: ${aprRainfall[i]} (Apr)`),
};
var candlestickChartLayout = {
    title: 'Candlestick Chart',
    xaxis: { title: 'Year' },
    yaxis: { title: 'Jan Feb Mar apr Rainfall' },
};

// Create a Waterfall Chart using Plotly Express
var waterfallChart = {
    x: years,
    y: mayRainfall,
    type: 'waterfall',
    name: 'May Rainfall',
    hovertemplate: '%{x}:<br> (May) %{y}',
    font: { family: 'Gill Sans MT' },
};
var waterfallChartLayout = {
    title: 'Waterfall Chart',
    xaxis: { title: 'Year' },
    yaxis: { title: 'May Rainfall' },
};

// Create a Funnel Chart using Plotly Express
var funnelChart = {
    x: years,
    y: junRainfall,
    type: 'funnel',
    name: 'June Rainfall',
    hovertemplate: '%{x}:<br> (Jun) %{y}',
    font: { family: 'Gill Sans MT' },
};
var funnelChartLayout = {
    title: 'Funnel Chart',
};

// Create an OHLC Chart using Plotly Express
var ohlcChart = {
    x: years,
    open: janRainfall,
    high: febRainfall,
    low: marRainfall,
    close: aprRainfall,
    font: { family: 'Gill Sans MT' },
    type: 'ohlc',
    hoverinfo: 'text',
    hovertext: years.map((year, i) => `x: ${years[i]}, <br> Open: ${janRainfall[i]} (Jan),<br> High: ${febRainfall[i]} (Feb),<br> Low: ${marRainfall[i]} (Mar),<br> Close: ${aprRainfall[i]} (Apr)`),

};
var ohlcChartLayout = {
    title: 'OHLC Chart',
    xaxis: { title: 'Year' },
    yaxis: { title: 'Rainfall' },
};

  
    

    // Update the charts in their respective divs with the corresponding layouts
    Plotly.newPlot('lineChart', [lineChart], lineChartLayout);
    Plotly.newPlot('pieChart', [pieChart], pieChartLayout);
    Plotly.newPlot('barChart', [barChart], barChartLayout);
    Plotly.newPlot('bubbleChart', [bubbleChart], bubbleChartLayout);
    Plotly.newPlot('horizontalBarChart', [horizontalBarChart], horizontalBarChartLayout);
    Plotly.newPlot('doubleSidedBarChart', [doubleSidedBarChart], doubleSidedBarChartLayout);
    Plotly.newPlot('donutChart', [donutChart], donutChartLayout);
    Plotly.newPlot('errorBarChart', [errorBarChart], errorBarChartLayout);
    Plotly.newPlot('histogram', [histogram], histogramLayout);
    Plotly.newPlot('distplot', [distplot], distplotLayout);
    Plotly.newPlot('histogram2d', [histogram2d], histogram2dLayout);
    Plotly.newPlot('contourPlot', [contourPlot], contourPlotLayout);
    Plotly.newPlot('timeSeriesPlot', [timeSeriesPlot], timeSeriesPlotLayout);
    Plotly.newPlot('candlestickChart', [candlestickChart], candlestickChartLayout);
    Plotly.newPlot('waterfallChart', [waterfallChart], waterfallChartLayout);
    Plotly.newPlot('funnelChart', [funnelChart], funnelChartLayout);
    Plotly.newPlot('ohlcChart', [ohlcChart], ohlcChartLayout);
}

// Call the function initially with some initial data
updateLBPBCharts(initialData);

// Refresh the charts every 5 seconds (adjust as needed)
setInterval(function () {
    // Fetch new data and update the charts
    myFunction();  // Assuming myFunction fetches the latest data
    updateCharts(newData);  // Assuming newData is the latest data
}, 5000);
