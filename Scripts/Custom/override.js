var topOffset = 170;

//dom ready functions
$(function(){
  insert_login()
  insert_top();
});

function clear_saved_state() {
  console.log('clear');
}

function insert_login() {
  $('#insert-form').empty();
  $.get('../login.html', function(data) {
    $('#insert-form').html(data);
  });
}

function insert_report() {
  var filename = $(this).text();
  filename = filename.replace(/(\w+).*/,"$1");
  console.log(filename);
  $('#insert-form').empty();
  $.get('../forms/form_' + filename + '.html', function(data) {
    $('#insert-form').html(data);
  });
}

function insert_customised() {
  var filename = $(this).text();
  filename = filename.replace(/(\w+).*/,"$1");
  console.log(filename);
  $('#insert-form').empty();
  $.get('../forms/form_' + filename + '.html', function(data) {
    $('#insert-form').html(data);
  });
}

function insert_profile() {
  var filename = $(this).text();
  filename = filename.replace(/(\w+).*/,"$1");
  if (filename === 'Profile') {
    $('#insert-form').empty();
    $.get('../forms/form_profile.html', function(data) {
      $('#insert-form').html(data);
    });
  }
  if (filename === 'Change') {
    $('#insert-form').empty();
    $.get('../forms/form_password.html', function(data) {
      $('#insert-form').html(data);
    });
  }
  if (filename === 'Logout') {
    window.location = '/';
  }
}

function login() {
  insert_dashboard();
  $('.btn-group.nger').removeClass('hidden');
}

function insert_dashboard() {
  $('#insert-form').empty();
  $.get('dashboard-6.html', function(data) {
      $('#insert-form').html(data);
    });
}

function insert_downloads() {
  $('#insert-form').empty();
  $.get('downloads.html', function(data) {
    $('#insert-form').html(data);
  });
}

function insert_manage_facilities() {
  $('#insert-form').empty();
  $.get('../manage_facilities.html', function(data) {
    $('#insert-form').html(data);
  });
}

function insert_manage_users() {
  $('#insert-form').empty();
  $.get('../manage_users.html', function(data) {
    $('#insert-form').html(data);
  });
}

function nav_button_hover() {
  $(this).addClass('nav-hover');
}

function nav_button_leave() {
  $(this).removeClass('nav-hover');
}

function insert_top() {
  $.get('top_bar.html', function(data) {
    $('#insert-top').html(data);
  });
  $('#insert-top').trigger('create');
}

function enlarge_chart() {
  if ($(this).hasClass('popup')) {
    return false;
  }
  var id = $(this).attr('id');
  var chart_clone = $(this).clone(true);
  $(chart_clone).attr('id', 'clone_' + id );
  $(chart_clone).addClass('popup').removeClass('original');
  $('.chart-popup').append(chart_clone).removeClass('hidden');
  $('.chart-overlay').removeClass('hidden');
  switch (id) {
    case 'hazardsFound':
      render_chart_hazards_clone();
      break;
    case 'tasksComplete':
      render_chart_tasks_clone();
      break;
    case 'inspectionsCompleted':
      render_chart_inspections_clone();
      break;
    }
}

function close_chart() {
  $('.chart-popup').empty().addClass('hidden');
  $('.chart-overlay').addClass('hidden');
}

function render_chart_hazards_clone() {
  //chart hazards clone
  var chartHazards_clone = new CanvasJS.Chart("clone_hazardsFound", {
      data: [
        {
          showInLegend: true,
          indexLabelFontSize: '14',
          indexLabelFontColor: 'white',
          startAngle: 150,
          indexLabelPlacement: "inside",
          toolTipContent: "{name}: {y}%",
          type: "pie",
          dataPoints: [
            { y: 3,indexLabel: 'RM800', name: "Operation Servicing" },
            { y: 1, indexLabel: 'RM600', name: "Road Furniture" },
            { y: 27, indexLabel: 'RM500', name: "Vegetation" },
            { y: 69, indexLabel: 'RM100', name: "Pavement" }
          ]
        }
      ],
      title:{
            text: "Hazards Found",
            fontSize: "18"
          },
      legend: {
        fontFamily: "Arial",
        fontSize: 14
      },
    backgroundColor: "white"
  });
  chartHazards_clone.render();
}

function render_chart_inspections_clone() {
  //inspections not completed column chart
var chartInspectionsCompleted_clone = new CanvasJS.Chart("clone_inspectionsCompleted", {
      title:{
        text: "Inspections Not Completed",
        fontSize: "18"
      },
      legend: {
        fontFamily: "Arial",
        fontSize: 14
      },
      backgroundColor: "none",
      axisY:{
        includeZero: true,
        gridColor: '#EBECED',
        valueFormatString: " ",
        lineThickness: 0,
        tickLength: 0
      },
      axisX: {
        tickThickness: 0,
        lineThickness: 0,
        interval: "month",
        valueFormatString: "MMM-YY",
        gridColor: '#EBECED',
        labelFontSize: 18,
        labelAngle: -45
      },
      toolTip: {
        shared: false
      },
      data: [
      {
        showInLegend: true,
        type: "stackedColumn",
        color: "#d8881e ",
        name: "Before Expiry",
        toolTipContent: "<strong>{name}</strong><br/> {label}%",
        dataPoints: [
          {x: new Date(2013,0), y: 6.49, label: 0.649 },
          {x: new Date(2013,1), y: 3.79, label: 0.379 },
          {x: new Date(2013,2), y: 7.41, label: 0.741 },
          {x: new Date(2013,3), y: 4.94, label: 0.494 },
          {x: new Date(2013,4), y: 1.99, label: 0.199 },
          {x: new Date(2013,5), y: 1.63, label: 0.163 },
          {x: new Date(2013,6), y: 0.33, label: 0.033 },
          {x: new Date(2013,7), y: 3.11, label: 0.311},
          {x: new Date(2013,8), y: 2.46, label: 0.246 },
          {x: new Date(2013,9), y: 0.96, label: 0.096 },
          {x: new Date(2013,10), y: 0.55, label: 0.055 },
          {x: new Date(2013,11), y: 0.65, label: 0.065 }
          ]
        },
      {
        showInLegend: true,
        type: "stackedColumn",
        color: "#f7170d ",
        name: "Not Completed",
        toolTipContent: "<strong>{name}</strong><br/> {label}%",
        dataPoints: [
        {x: new Date(2013,0), y: 1.04, label: 0.104 },
        {x: new Date(2013,1), y: 1.45, label: 0.145 },
        {x: new Date(2013,2), y: 0.73, label: 0.730 },
        {x: new Date(2013,3), y: 0.35, label: 0.350 },
        {x: new Date(2013,4), y: 0.14, label: 0.140 },
        {x: new Date(2013,5), y: 0.00, label: 0.000 },
        {x: new Date(2013,6), y: 13.66, label: 1.366 },
        {x: new Date(2013,7), y: 3.11, label: 0.311 },
        {x: new Date(2013,8), y: 0.00, label: 0.000 },
        {x: new Date(2013,9), y: 3.84, label: 0.384 },
        {x: new Date(2013,10), y: 0.41, label: 0.041 },
        {x: new Date(2013,11), y: 0.54, label: 0.054 }
        ]
      }
      ]
    });
chartInspectionsCompleted_clone.render();
}

function chart_hazards_render() {
  // hazards found chart
  var chartHazards = new CanvasJS.Chart("hazardsFound", {
      data: [
        {
          showInLegend: false,
          indexLabelFontSize: '14',
          indexLabelFontColor: 'white',
          startAngle: 150,
          indexLabelPlacement: "inside",
          toolTipContent: "{name}: {y}%",
          type: "pie",
          dataPoints: [
            { y: 3,indexLabel: 'RM800', name: "Operation Servicing" },
            { y: 1, indexLabel: 'RM600', name: "Road Furniture" },
            { y: 27, indexLabel: 'RM500', name: "Vegetation" },
            { y: 69, indexLabel: 'RM100', name: "Pavement" }
          ]
        }
      ],
      title:{
            text: "Hazards Found",
            fontSize: "18"
          },
      legend: {
        fontFamily: "Arial",
        fontSize: 14
      },
    backgroundColor: "none"
  });
  chartHazards.render();
  //append triangle with relevant status
    var status = "amber"
    var id = "#hazardsFound";
    add_status_colour(status, id);
}

function chart_tasks_render() {
  // tasks completed chart
  var chartTasksComplete = new CanvasJS.Chart("tasksComplete", {
      data: [
        {
          showInLegend: false,
          indexLabelFontSize: '14',
          indexLabelFontColor: 'white',
          startAngle: 150,
          indexLabelPlacement: "inside",
          toolTipContent: "{name}: ${y}",
          type: "pie",
          dataPoints: [
            { y: 33000,indexLabel: 'RM800', name: "Operation Servicing" },
            { y: 2000, indexLabel: 'RM700', name: "Structures" },
            { y: 59000, indexLabel: 'RM600', name: "Road Furniture" },
            { y: 75000, indexLabel: 'RM500', name: "Vegetation" },
            { y: 90000, indexLabel: 'RM400', name: "Drainage" },
            { y: 10000, indexLabel: 'RM200', name: "Shoulder" },
            { y: 557000, indexLabel: 'RM100', name: "Pavement" }
          ]
        }
      ],
      title:{
            text: "Tasks Completed",
            fontSize: "18"
          },
      legend: {
        fontFamily: "Arial",
        fontSize: 14
      },
    backgroundColor: "none"
  });

  chartTasksComplete.render();
  //append triangle with relevant status
  var status = "blue"
  var id = "#tasksComplete";
  add_status_colour(status, id);
}

function add_status_colour(status, id) {
  var triangle = $('.chart-triangle').clone(true);
  $(triangle).removeClass('hidden').addClass(status);
  $(id).prepend(triangle);
}

function render_chart_tasks_clone() {
// tasks completed chart
  var chartTasksComplete_clone = new CanvasJS.Chart("clone_tasksComplete", {
    data: [
      {
        showInLegend: true,
        indexLabelFontSize: '14',
        indexLabelFontColor: 'white',
        startAngle: 150,
        indexLabelPlacement: "inside",
        toolTipContent: "{name}: ${y}",
        type: "pie",
        dataPoints: [
          { y: 33000,indexLabel: 'RM800', name: "Operation Servicing" },
          { y: 2000, indexLabel: 'RM700', name: "Structures" },
          { y: 59000, indexLabel: 'RM600', name: "Road Furniture" },
          { y: 75000, indexLabel: 'RM500', name: "Vegetation" },
          { y: 90000, indexLabel: 'RM400', name: "Drainage" },
          { y: 10000, indexLabel: 'RM200', name: "Shoulder" },
          { y: 557000, indexLabel: 'RM100', name: "Pavement" }
        ]
      }
    ],
    title:{
        text: "Tasks Completed",
        fontSize: "18"
      },
    legend: {
      fontFamily: "Arial",
      fontSize: 14
    },
    backgroundColor: "none"
  });
  chartTasksComplete_clone.render();
}

// function swipe_table() {
//   console.log('swipe');
// }

function print_dash() {
  window.print();
}

function print_table() {
  window.print();
}