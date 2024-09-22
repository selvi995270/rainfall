var box=document.querySelector(".box5")
   
     function show()
     {
      box.style.display="block"
    
     }


     import 'node_modules/ol/ol.css';
import './style.css';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const box = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});
window.onload = init;

function init() {
    const map = new ol.Map({
        view: new ol.View({
            center: [12.5, 41.9],
            zoom: 5
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'map' // Corrected the target ID to 'map'
    });
}
var ctxS = document.getElementById('chart1').getContext('2d');
var labelsS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Ann'];

var valuesS = searchData.map(entry => [
    entry.jan, entry.feb, entry.mar, entry.apr, entry.may, entry.jun,
    entry.jul, entry.aug, entry.sep, entry.oct, entry.nov, entry.dec, entry.ann
]);
valuesS = valuesS[0].map((col, i) => valuesS.map(row => row[i]));

myChartS = new Chart(ctxS, {
    type: 'bar',
    data: {
        labels: labelsS,
        datasets: [{
            label: 'Rainfall Data',
            data: valuesS,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
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


$(document).ready(function () {
  myfunction();  // Call this function when the document is ready
});

function myfunction() {
  console.log("Fetching data...");

  



  fetch("fall.json")
  .then(response => response.json()) 
  .then(data=> showInfo(data));
  
  
  function showInfo(data){
      console.log(data.year)
  }
        
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

      
  
      }













/************************************** ***********************************************************************/













