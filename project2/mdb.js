window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
              indexLabelFontSize: 16,
            indexLabelPlacement: "outside",
            dataPoints: [
                { x: 10, y: 71 },
                { x: 20, y: 55 },
                { x: 30, y: 50 },
                { x: 40, y: 65 },
                { x: 50, y: 92, indexLabel: "\u2605 Highest" },
                { x: 60, y: 68 },
                { x: 70, y: 38 },
                { x: 80, y: 71 },
                { x: 90, y: 54 },
                { x: 100, y: 60 },
                { x: 110, y: 36 },
                { x: 120, y: 49 },
                { x: 130, y: 21, indexLabel: "\u2691 Lowest" }
            ]
        }]
    });
    chart.render();




    // second
    var chart2 = new CanvasJS.Chart("chart1", {
        animationEnabled: true,
        
        axisX: {
            valueFormatString: "DD MMM,YY"
        },
        axisY: {
            title: "Temperature (in °C)",
            includeZero: false,
            suffix: " °C"
        },
        legend:{
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries
        },
        toolTip:{
            shared: true
        },
        data: [{
            name: "Myrtle Beach",
            type: "spline",
            yValueFormatString: "#0.## °C",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017,6,24), y: 31 },
                { x: new Date(2017,6,25), y: 31 },
                { x: new Date(2017,6,26), y: 29 },
                { x: new Date(2017,6,27), y: 29 },
                { x: new Date(2017,6,28), y: 31 },
                { x: new Date(2017,6,29), y: 30 },
                { x: new Date(2017,6,30), y: 29 }
            ]
        },
        {
            name: "Martha Vineyard",
            type: "spline",
            yValueFormatString: "#0.## °C",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017,6,24), y: 20 },
                { x: new Date(2017,6,25), y: 20 },
                { x: new Date(2017,6,26), y: 25 },
                { x: new Date(2017,6,27), y: 25 },
                { x: new Date(2017,6,28), y: 25 },
                { x: new Date(2017,6,29), y: 25 },
                { x: new Date(2017,6,30), y: 25 }
            ]
        },
        {
            name: "Nantucket",
            type: "spline",
            yValueFormatString: "#0.## °C",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017,6,24), y: 22 },
                { x: new Date(2017,6,25), y: 19 },
                { x: new Date(2017,6,26), y: 23 },
                { x: new Date(2017,6,27), y: 24 },
                { x: new Date(2017,6,28), y: 24 },
                { x: new Date(2017,6,29), y: 23 },
                { x: new Date(2017,6,30), y: 23 }
            ]
        }]
    });
    chart2.render();
    
    function toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else{
            e.dataSeries.visible = true;
        }
        chart2.render();
    }
    
    }
   