$(document).ready(function () {
    const rowsPerPage = 10;
    let currentPage = 0;

    // Call this function when the document is ready
    myfunction();

    // Next button click event
    $('#nextButton').on('click', function () {
        currentPage++;
        myfunction();
    });

    // Previous button click event
    $('#prevButton').on('click', function () {
        if (currentPage > 0) {
            currentPage--;
            myfunction();
        }
    });

    // Function to handle form submission for year search
    $('#index').submit(function (event) {
        event.preventDefault();

        var searchYear = $('#search_year').val();

        // Clear the table even when the input is incorrect
        clearTable();

        // Check if the input is a valid number
        if (isNaN(searchYear) || searchYear.trim() === '') {
            $('#error_message').text('Please enter a valid year.');
            return;
        }

        $.ajax({
            url: 'http://127.0.0.1:5000/fetch_data_by_year',
            type: 'GET',
            data: { year: searchYear },
            dataType: 'json',
            success: function (data) {
                console.log("Data fetched successfully:", data);

                // Display the selected year
                $('#selected_year').text('Year: ' + searchYear);

                // Update the table with the fetched data or show an error message
                if (data.error) {
                    $('#error_message').text(data.error);
                } else {
                    $('#error_message').text('');
                    updateTable(data);
                }
            },
            error: function (error) {
                console.error("Error fetching data:", error);
            }
        });
    });

    function myfunction() {
        console.log("Fetching data...");

        // AJAX request to fetch the data with pagination
        $.ajax({
            url: 'http://127.0.0.1:5000/fetch_data_paginated',
            type: 'GET',
            data: { page: currentPage, rowsPerPage: rowsPerPage },
            dataType: 'json',
            success: function (data) {
                console.log("Data fetched successfully:", data);

                // Update the table with the fetched data
                updateTable(data);

                // Clear any previous error messages
                $('#error_message').text('');
            },
            error: function (error) {
                console.error("Error fetching data:", error);
                $('#error_message').text('Error fetching data. Please try again.');
            }
        });
    }

    // Function to update the table with data
    function updateTable(data) {
        var table = $('#rainfallTable').find('tbody');
        table.empty();

        if (data.length === 0) {
            // Handle the case where data is empty
            $('#error_message').text('No data available.');
            return;
        }

        $.each(data, function (index, row) {
            var newRow = $('<tr>');

            // Add id cell
            var newCell = $('<td>').text(row.id);
            newRow.append(newCell);

            // Adjust the loop based on your data structure
            $.each(row, function (key, value) {
                // Skip id in this loop
                if (key !== 'id') {
                    var newCell = $('<td>').text(value);
                    newRow.append(newCell);
                }
            });

            table.append(newRow);
        });
    }

    // Function to clear the table
    function clearTable() {
        var table = $('#rainfallTable').find('tbody');
        table.empty();
    }
});
