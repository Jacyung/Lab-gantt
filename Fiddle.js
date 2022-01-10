    google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['P1', 'Initiation', new Date(2022, 0, 10), new Date(2022, 0, 31), null,  100,  null],
        ['P2', 'Planning', new Date(2022, 0, 31),new Date(2022, 1, 14), null, 25, 'P1'],
        ['P3', 'Execution', new Date(2022, 1, 14), new Date(2022, 2, 10),null, 20, 'P2'],
        ['P4', 'Analysis', new Date(2022, 2, 10), new Date(2022, 2, 24),null, 20, 'P3'],
        ['P5', 'Design', new Date(2022, 2, 24), new Date(2022, 3, 10),null, 20, 'P4'],
        ['P6', 'Code', new Date(2022, 3, 10), new Date(2022, 3, 24),null, 20, 'P5'],
        ['P7', 'Test', new Date(2022, 3, 24), new Date(2022, 4, 7),null, 20, 'P6'],
        ['P8', 'Deploy', new Date(2022, 4, 7), new Date(2022, 4, 21),null, 20, 'P7'],
        ['P9', 'Closing', new Date(2022, 4, 21), new Date(2022, 5, 5),null, 0, 'P8'],
        ['P10', 'Evaluation', new Date(2022, 5, 5), new Date(2022, 5, 19),null, 100, 'P9']
      ]);

      var options = {
        height: 575,
       gantt: {
          criticalPathEnabled: false,
          innerGridHorizLine: {
            stroke: '#ffe0b2',
            strokeWidth: 2
          },
          innerGridTrack: {fill: '#FFF0F5 '},
          innerGridDarkTrack: {fill: '#E6E6FA'}
        }
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
