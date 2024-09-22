$(document).ready(function () {
    myfunction();  // Call this function when the document is ready
});

function myfunction() {
    console.log("Fetching data...");

    // First AJAX request
    $.ajax({
        url: 'http://127.0.0.1:5000/chartjs.html',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log("Data fetched successfully:", data);

          
            updateBarChart(data);
            updatedoughChart(data);
            updatepieChart(data);
            updatepolarArea(data);
            updateRadar(data);
            updateScatter(data);
            updateMixed(data);
            updateBubbleChart(data);
            updateHorizontalBarChart(data);
            updateAllChart(data);

        
    
        },
     
    });
}













/************************************** ***********************************************************************/

var myLineChart;
var myBarChart;

window.listOfData = [];

window.listOfyear = [];
window.listOfjan = [];
window.listOffeb = [];
window.listOfmar = [];
window.listOfapr = [];
window.listOfmay= [];
window.listOfjun = [];
window.listOfjul = [];
window.listOfaug= [];
window.listOfsep = [];
window.listOfoct = [];
window.listOfnov= [];
window.listOfdec = [];
window.listOfann = [];
window.selectedyear = null;
window.selectedjan = null;
window.selectedfeb = null;
window.selectedmar = null;
window.selectedapr = null;
window.selectedmay = null;
window.selectedjun = null;
window.selectedjul = null;
window.selectedaug = null;
window.selectedsep = null;
window.selectedoct = null;
window.selectednov = null;
window.selecteddec = null;
window.selected = null;





/*bar chart */
function updateBarChart(data) {
    console.log("Updating chart with data:", data);

    var labels_bar = data.map(entry => entry.year);
    var rainfallen = data.map(entry => entry.jan);

    var ctx = document.getElementById("cj1").getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels_bar,
            datasets: [{
                label: "January Rainfall",
                backgroundColor: [
                    'rgb(255, 144, 188, 0.2)',
                    'rgb(217, 237, 191, 0.6)',
                    'rgb(255, 192, 217, 0.2)',
                    'rgb(138, 205, 215, 0.2)',
                    'rgb(161, 238, 189, 0.2)',
                    'rgb(243, 182, 100, 0.2)',
                    'rgb(245, 238, 230, 0.8)',
                    'rgb(225, 199, 143, 0.2)',
                    'rgb(243, 182, 100, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 144, 188, 1)',
                    'rgb(217, 237, 191, 1)',
                    'rgb(255, 192, 217, 1)',
                    'rgb(138, 205, 215, 1)',
                    'rgb(161, 238, 189, 1)',
                    'rgb(243, 182, 100, 1)',
                    'rgb(245, 238, 230, 1)',
                    'rgb(225, 199, 143, 1)',
                    'rgb(243, 182, 100, 1)'
                ],
                borderWidth: 1,
                data: rainfallen,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            legend: { display: false },
            title: {
                display: false,
                text: 'Rain fall'
            }
        }
    });
}






/* doughnut chart*/

function updatedoughChart(data) {
    console.log("Updating chart with data:", data);

    var labels_feb = data.map(entry => entry.year);
    var rainfallen = data.map(entry => entry.feb);

    var ctp = document.getElementById("cj2").getContext('2d');
    var myDoughChart = new Chart(ctp, {
        type: 'doughnut',
        data: {
            labels: labels_feb,
            datasets: [{
                label: "FEb Rainfalls",
                backgroundColor: [
                    'rgb(255, 144, 188, 0.2)',
                    'rgb(217, 237, 191, 0.6)',
                    'rgb(255, 192, 217, 0.2)',
                    'rgb(138, 205, 215, 0.2)',
                    'rgb(161, 238, 189, 0.2)',
                    'rgb(243, 182, 100, 0.2)',
                    'rgb(245, 238, 230, 0.8)',
                    'rgb(225, 199, 143, 0.2)',
                    'rgb(243, 182, 100, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 144, 188, 1)',
                    'rgb(217, 237, 191, 1)',
                    'rgb(255, 192, 217, 1)',
                    'rgb(138, 205, 215, 1)',
                    'rgb(161, 238, 189, 1)',
                    'rgb(243, 182, 100, 1)',
                    'rgb(245, 238, 230, 1)',
                    'rgb(225, 199, 143, 1)',
                    'rgb(243, 182, 100, 1)'
                ],
                borderWidth: 1,
                data: rainfallen,
                
            }]
        },
        options: {
        
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            aspectRatio: 1.3, // Adjust this value to control the size of the chart
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Rainfall Chart'
            }
        }
    });
}



/*Pie Chart */
function updatepieChart(data) {
    console.log("Updating chart with data:", data);

    var labels_pie = data.map(entry => entry.year);
    var rainfallen = data.map(entry => entry.mar);

    var cth = document.getElementById("cj5").getContext('2d');
    var myPieChart = new Chart(cth, {
        type: 'pie',
        data: {
            labels: labels_pie,
            datasets: [{
                label: "March Rainfall",
                axis: 'y',
                backgroundColor: [
                    'rgb(255, 144, 188, 0.2)',
                    'rgb(217, 237, 191, 0.6)',
                    'rgb(255, 192, 217, 0.2)',
                    'rgb(138, 205, 215, 0.2)',
                    'rgb(161, 238, 189, 0.2)',
                    'rgb(243, 182, 100, 0.2)',
                    'rgb(245, 238, 230, 0.8)',
                    'rgb(225, 199, 143, 0.2)',
                    'rgb(243, 182, 100, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 144, 188, 1)',
                    'rgb(217, 237, 191, 1)',
                    'rgb(255, 192, 217, 1)',
                    'rgb(138, 205, 215, 1)',
                    'rgb(161, 238, 189, 1)',
                    'rgb(243, 182, 100, 1)',
                    'rgb(245, 238, 230, 1)',
                    'rgb(225, 199, 143, 1)',
                    'rgb(243, 182, 100, 1)'
                ],
                borderWidth: 1,
                data: rainfallen,
            }]
        },
        options: {

            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            aspectRatio: 1.1, // Adjust this value to control the size of the chart
            maintainAspectRatio: true,
            title: {
                display: false,
                text: 'Rainfall Chart'
            }
        }
    });
}






/*polarArea chart */
function updatepolarArea(data) {
    console.log("Updating chart with data:", data);

    var labels_pol = data.map(entry => entry.year);
    var fallen = data.map(entry => entry.apr);

    var ctpp = document.getElementById("cj4").getContext('2d');
    var mypolarArea = new Chart(ctpp, {
        type: 'polarArea',
        data: {
            labels: labels_pol,
            datasets: [{
                label: "April Rainfall",
                backgroundColor: [
                    'rgb(255, 144, 188, 0.2)',
                    'rgb(217, 237, 191, 0.6)',
                    'rgb(255, 192, 217, 0.2)',
                    'rgb(138, 205, 215, 0.2)',
                    'rgb(161, 238, 189, 0.2)',
                    'rgb(243, 182, 100, 0.2)',
                    'rgb(245, 238, 230, 0.8)',
                    'rgb(225, 199, 143, 0.2)',
                    'rgb(243, 182, 100, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 144, 188, 1)',
                    'rgb(217, 237, 191, 1)',
                    'rgb(255, 192, 217, 1)',
                    'rgb(138, 205, 215, 1)',
                    'rgb(161, 238, 189, 1)',
                    'rgb(243, 182, 100, 1)',
                    'rgb(245, 238, 230, 1)',
                    'rgb(225, 199, 143, 1)',
                    'rgb(243, 182, 100, 1)'
                ],
                borderWidth: 1,
                data: fallen,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            aspectRatio: 1.3, // Adjust this value to control the size of the chart
            maintainAspectRatio: true,
            title: {
                display: false,
                text: 'Rainfall Chart'
            }
        }
    });
}





/* radar chart */
function updateRadar(data) {
    console.log("Updating chart with data:", data);

    var labels_r = data.map(entry => entry.year);
    var fallenz = data.map(entry => entry.may);
    var fallen = data.map(entry => entry.jun);

 
    var ctr = document.getElementById("cj3").getContext('2d');
    var myradar = new Chart(ctr, {
        type: 'radar',
        data: {
            labels: labels_r,
            datasets: [{
                label: "May Rainfall",
                backgroundColor: [
                    'red',
                ],
                borderColor: [
                    'rgb(243, 182, 100, 1)'
                ],
                borderWidth: 1,
                data: fallenz,
            }, {
                label: 'June 2nd', // Fixed typo in the label
                fill: true,
                backgroundColor: 'rgba(255, 242, 0,1.0)',
                borderColor: 'rgba(255, 56, 56,1.0)',
                borderWidth: 1,
                data: fallen,
            }]
        },
        options: {
            scales: {
   
                y: {
                    beginAtZero: true,
                
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            },
            aspectRatio: 1.2, // Adjust this value to control the size of the chart
            maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Rainfall Chart',
                    fontSize: 2 // Set the font size for the legend

            }
        }
    });
}






/* Scatter chart */
function updateScatter(data) {
    console.log("Updating chart with data:", data);

    var labels_s = data.map(entry => entry.year);
    var fallen = data.map(entry => entry.jul);
    
    var cta = document.getElementById("cj6").getContext('2d');
    var myScatter = new Chart(cta, {
        type: 'scatter',
        data: {
            labels: labels_s,
            datasets: [{
                label: "July Rainfall",
                data: labels_s.map((year, index) => ({ x: year, y: fallen[index] })),
                pointRadius: 4,
                backgroundColor: 'rgba(255, 144, 188, 0.2)',
                borderColor: 'rgb(255, 144, 188, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    ticks: { min: Math.min(...labels_s), max: Math.max(...labels_s) }
                }],
                yAxes: [{
                    ticks: { min: Math.min(...fallen), max: Math.max(...fallen) }
                }],
            },
            legend: { display: false },
            title: {
                display: true,
                text: 'Rainfall Chart'
            }
        }
    });
}





/* Mixed Chart Types */
function updateMixed(data) {
    console.log("Updating chart with data:", data);

    var labels = data.map(entry => entry.year);
    var fallen = data.map(entry => entry.aug);
    var sep = data.map(entry => entry.sep);

    var ctm = document.getElementById("cj7").getContext('2d');
    var myMix = new Chart(ctm, {
        type: 'bar', // Set the default chart type to 'bar'
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Rainfall August ",
                    backgroundColor: [
                        'rgba(255, 144, 188, 0.2)',
                        'rgba(217, 237, 191, 0.6)',
                        'rgba(255, 192, 217, 0.2)',
                        'rgba(138, 205, 215, 0.2)',
                        'rgba(161, 238, 189, 0.2)',
                        'rgba(243, 182, 100, 0.2)',
                        'rgba(245, 238, 230, 0.8)',
                        'rgba(225, 199, 143, 0.2)',
                        'rgba(243, 182, 100, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 144, 188, 1)',
                        'rgb(217, 237, 191, 1)',
                        'rgb(255, 192, 217, 1)',
                        'rgb(138, 205, 215, 1)',
                        'rgb(161, 238, 189, 1)',
                        'rgb(243, 182, 100, 1)',
                        'rgb(245, 238, 230, 1)',
                        'rgb(225, 199, 143, 1)',
                        'rgb(243, 182, 100, 1)'
                    ],
                    borderWidth: 1,
                    data: fallen,
                },
                {
                    label: "Rainfall September",
                    type: 'line',
                    backgroundColor: 'red',
                    borderColor: 'rgb(161, 238, 189, 1)',
                    data: sep,
                    labels: labels,
                    fill: false, // Do not fill area under the line
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            legend: { display: false },
            title: {
                display: false,
                text: 'Rainfall Chart'
            }
        }
    });
}


/* Bubble chart */
function updateBubbleChart(data) {
    console.log("Updating chart with data:", data);

    var labels_b = data.map(entry => entry.year);
    var fallen = data.map(entry => entry.oct);

    var cta = document.getElementById("cj8").getContext('2d');
    var myBubbleChart = new Chart(cta, {
        type: 'bubble',
        data: {
            labels: labels_b,
            datasets: [{
                label: "October Rainfall",
                data: labels_b.map((year, index) => ({ x: year, y: fallen[index], r: 8 })), // Adjust the 'r' value as needed
                backgroundColor: 'rgba(255, 144, 188, 0.2)',
                borderColor: 'rgb(255, 144, 188, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    ticks: { min: Math.min(...labels_b), max: Math.max(...labels_b) }
                },
                y: {
                    ticks: { min: Math.min(...fallen), max: Math.max(...fallen) }
                },
            },
            legend: { display: false },
            title: {
                display: false,
                text: 'Rainfall Chart'
            }
        }
    });
}





/* Horizontal Bar chart */
function updateHorizontalBarChart(data) {
    console.log("Updating chart with data:", data);

    var labels_ba = data.map(entry => entry.year);
    var rainfallen = data.map(entry => entry.nov);

    var cth = document.getElementById("cj1").getContext('2d');
    var myHorizontalBarChart = new Chart(cth, {
        type: 'bar',
        data: {
            labels: labels_ba,
            datasets: [{
                label: "November Rainfall",
                backgroundColor: [
                    'rgb(255, 144, 188, 0.2)',
                    'rgb(217, 237, 191, 0.6)',
                    'rgb(255, 192, 217, 0.2)',
                    'rgb(138, 205, 215, 0.2)',
                    'rgb(161, 238, 189, 0.2)',
                    'rgb(243, 182, 100, 0.2)',
                    'rgb(245, 238, 230, 0.8)',
                    'rgb(225, 199, 143, 0.2)',
                    'rgb(243, 182, 100, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 144, 188, 1)',
                    'rgb(217, 237, 191, 1)',
                    'rgb(255, 192, 217, 1)',
                    'rgb(138, 205, 215, 1)',
                    'rgb(161, 238, 189, 1)',
                    'rgb(243, 182, 100, 1)',
                    'rgb(245, 238, 230, 1)',
                    'rgb(225, 199, 143, 1)',
                    'rgb(243, 182, 100, 1)'
                ],
                borderWidth: 1,
                data: rainfallen,
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true
                }
            },
            legend: { display: false ,
                labels: {
                    fontSize: 2 // Set the font size for the legend
                  }
            },
            title: {
                display: false,
                text: 'Rainfall in November'
            }
        }
    });
}

















/*line All chart */
function updateAllChart(data) {
    console.log("Updating chart with data:", data);

    var year = data.map(entry => entry.year);
    var jan = data.map(entry => entry.jan);
    var feb = data.map(entry => entry.feb);
    var mar = data.map(entry => entry.mar);
    var apr = data.map(entry => entry.apr);
    var may = data.map(entry => entry.may);
    var jun = data.map(entry => entry.jun);
    var jul = data.map(entry => entry.jul);
    var aug = data.map(entry => entry.aug);
    var sep = data.map(entry => entry.sep);
    var oct = data.map(entry => entry.oct);
    var nov = data.map(entry => entry.nov);
    var dec = data.map(entry => entry.dec);

    
    var ctA = document.getElementById("myAll").getContext('2d');

    var myAllChart = new Chart(ctA, {
        type: 'line',
        data: {
           
            labels: year,
            datasets: [
                {
                    label: "Jan",
                    backgroundColor: 'rgb(255, 144, 188, 0.2)',
                    borderColor: 'rgb(255, 144, 188)',
                    borderWidth: 1,
                    data: jan,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                },
            

                {
                    label: "Feb",
                    backgroundColor: 'rgb(217, 237, 191, 0.2)',
                    borderColor: 'rgb(217, 237, 191)',
                    borderWidth: 1,
                    data: feb,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                },
                {
                    label: "Mar",
                    backgroundColor: 'rgb(192, 192, 192, 0.2)',
                    borderColor: 'rgb(192, 192, 192)',
                    borderWidth: 1,
                    data: mar,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                },
                {
                    label: "Apr",
                    backgroundColor: 'rgb(255, 128, 255, 0.2)',
                    borderColor: 'rgb(255, 128, 255)',
                    borderWidth: 1,
                    data: apr,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                },
                {
                    label: "May",
                    backgroundColor: 'rgb(255, 255, 128, 0.2)',
                    borderColor: 'rgb(255, 255, 128)',
                    borderWidth: 1,
                    data: may,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                },
                {
                    label: "Jun",
                    backgroundColor: 'rgb(128, 128, 255, 0.2)',
                    borderColor: 'rgb(128, 128, 255)',
                    borderWidth: 1,
                    data: jun,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                },
                {
                    label: "Jul",
                    backgroundColor: 'rgb(128, 255, 128, 0.2)',
                    borderColor: 'rgb(128, 255, 128)',
                    borderWidth: 1,
                    data: jul,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                },
                {
                    label: "Aug",
                    backgroundColor: 'rgb(255, 128, 128, 0.2)',
                    borderColor: 'rgb(255, 128, 128)',
                    borderWidth: 1,
                    data: aug,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                },
                {
                    label: "Sep",
                    backgroundColor: 'rgb(161, 238, 189, 0.2)',
                    borderColor: 'rgb(161, 238, 189)',
                    borderWidth: 1,
                    data: sep,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                },
                {
                    label: "Oct",
                    backgroundColor: 'rgb(138, 205, 215, 0.2)',
                    borderColor: 'rgb(138, 205, 215)',
                    borderWidth: 1,
                    data: oct,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                },
                {
                    label: "Nov",
                    backgroundColor: 'rgb(138, 205, 215, 0.2)',
                    borderColor: 'rgb(138, 205, 215)',
                    borderWidth: 1,
                    data: nov,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                },
                {
                    label: "Dec",
                    backgroundColor: 'rgb(255, 192, 217, 0.2)',
                    borderColor: 'rgb(255, 192, 217)',
                    borderWidth: 1,
                    data: dec,
                    fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'rectRot'
                    
                },
            ]
        },
        options: {
            aspectRatio: 1.3, // Adjust this value to control the size of the chart
            maintainAspectRatio: true,
            
        }
    });
}


















