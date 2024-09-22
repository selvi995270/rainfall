$(document).ready(function () {
    myfunction();  // Call this function when the document is ready
});

function myfunction() {
    console.log("Fetching data...");

    // First AJAX request
    $.ajax({
        url: 'http://127.0.0.1:5000',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log("Data fetched successfully:", data);
            
            updateLineChart(data);      
            document.addEventListener('DOMContentLoaded', function() {
                fetch('fall')
                    .then(response => response.json())
                    .then(data => {
                        const table = document.getElementById('dataTable');
                        const thead = table.querySelector('thead');
                        const tbody = table.querySelector('tbody');
            
                        // Create table header
                        if (data.length > 0) {
                            const headerRow = document.createElement('tr');
                            Object.keys(data[0]).forEach(column => {
                                const th = document.createElement('th');
                                th.textContent = column;
                                headerRow.appendChild(th);
                            });
                            thead.appendChild(headerRow);
            
                            // Create table rows
                            data.forEach(row => {
                                const tr = document.createElement('tr');
                                Object.values(row).forEach(cell => {
                                    const td = document.createElement('td');
                                    td.textContent = cell;
                                    tr.appendChild(td);
                                });
                                tbody.appendChild(tr);
                            });
                        }
                    })
                    .catch(error => console.error('Error fetching data:', error));
            });
            
            

            // Second AJAX request
            $.ajax({
                url: 'http://127.0.0.1:5000/fetch_last_data',
                type: 'GET',
                dataType: 'json',
                success: function (anotherData) {
                    console.log("Another data fetched successfully:", anotherData);

                    // Filter data as needed
                    var filteredData = filterData(anotherData);

                    //  Process the data and update the chart
                    updateBarChart(filteredData);
                },
                error: function (error) {
                    console.error("Error fetching another data:", error);
                }
            });
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        }
    });
}

/* update year last year */
function filterData(data) {
    // Implement your filtering logic here
    // For example, filter out specific months or other criteria
    var filteredData = {
        
        "jan": data.jan,
        "feb": data.feb,
        "mar": data.mar,
        "apr": data.apr,
        "may": data.may,
        "jun": data.jun,
        "jul": data.jul,
        "aug": data.aug,
        "sep": data.sep,
        "oct": data.oct,
        "nov": data.nov,
        "dec": data.dec,
        "ann": data.ann
        // ... Add or remove as needed
    };

    return filteredData;
}












/************************************** ***********************************************************************/


function updateBarChart(data) {
    // Assuming you have a bar chart instance with an id "myBarF"
    var ctt = document.getElementById('chart1').getContext('2d');

    // Extract labels and data from the filteredData object
    var labb = Object.keys(data);
    var chartData = Object.values(data);

    // Example: Update a bar chart with new data
    var myChaa = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labb, // Use the keys as labels
            datasets: [{
                label: '(Past Year)',
                data: chartData, // Use the values as data points
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}





/*line chart */
function updateLineChart(data) {
    console.log("Updating chart with data:", data);

    var labels = data.map(entry => entry.year);
    var rainfallstates = data.map(entry => entry.ann);

    var ctxx = document.getElementById("box").getContext('2d');
    var myLineChart = new Chart(ctxx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "Rainfall Data's",
                backgroundColor: [
                    'rgb(255, 144, 188, 0.2)',
                    'rgb(217, 237, 191, 0.6)',
                    'rgb(255, 192, 217, 0.2)',
                    'rgb(138, 205, 215, 0.2)',
                    'rgb(161, 238, 189, 0.2)',
                    'rgb(255, 128, 128)',
                    'rgb(128, 255, 128)',
                    'rgb(128, 128, 255)',
                    'rgb(255, 255, 128)',
                    'rgb(255, 128, 255)',
                    'rgb(128, 255, 255)',
                    'rgb(192, 192, 192)',
                    'rgb(128, 0, 0)',
           
                ],
                borderColor: [
                    'rgb(0, 0, 0)',
                    'rgb(0, 255, 0)',
                    'rgb(0, 0, 255)',
                    'rgb(255, 255, 0)',
                    'rgb(255, 0, 255)',
                    'rgb(0, 255, 255)',
                   
                ],
                borderWidth: 1,
                data: rainfallstates,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 900,  // Set the minimum zoom level
                    max: 1500,  // Set the maximum zoom level
                }
            },
            legend: { display: false },
            title: {
                display: true,
                text: 'Rainfallstates Chart'
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            }
        },
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x',
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: 'xy',
                },
            }
        }
    });
}

/*line chart */
function updateLineChart(data) {
    console.log("Updating chart with data:", data);

    var labels = data.map(entry => entry.year);
    var rainfallstates = data.map(entry => entry.ann);

    var ctl = document.getElementById("box").getContext('2d');
    var myLineChart = new Chart(ctl, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "Rainfall Data's",
                backgroundColor: [
                    'rgb(255, 144, 188, 0.2)',
                    'rgb(217, 237, 191, 0.6)',
                    'rgb(255, 192, 217, 0.2)',
                    'rgb(138, 205, 215, 0.2)',
                    'rgb(161, 238, 189, 0.2)',
                    'rgb(255, 128, 128)',
                    'rgb(128, 255, 128)',
                    'rgb(128, 128, 255)',
                    'rgb(255, 255, 128)',
                    'rgb(255, 128, 255)',
                    'rgb(128, 255, 255)',
                    'rgb(192, 192, 192)',
                    'rgb(128, 0, 0)',
           
                ],
                borderColor: [
                    'rgb(0, 0, 0)',
                    'rgb(0, 255, 0)',
                    'rgb(0, 0, 255)',
                    'rgb(255, 255, 0)',
                    'rgb(255, 0, 255)',
                    'rgb(0, 255, 255)',
                   
                ],
                borderWidth: 1,
                data: rainfallstates,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 900,  // Set the minimum zoom level
                    max: 1500,  // Set the maximum zoom level
                }
            },
            legend: { display: false },
            title: {
                display: true,
                text: 'Rainfallstates Chart'
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            }
        },
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x',
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: 'xy',
                },
            }
        }
    });
}


