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

function toggle_time_group() {
   var trs = $(this).parent('tr').nextUntil('tr:has(.time-header)');
   if ($(trs).hasClass('hidden')) {
    $(trs).removeClass('hidden').slideDown(500);
   }
   else {
     $(trs).addClass('hidden').slideUp(500);
   }
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

// function toggle_all_facilities() {
//  $('#selectAll').click(function(e){
//     var table= $($(this).target).closest('table');
//     $('td input:checkbox',table).prop('checked',this.checked);
// });
// }

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
  if (id === 'hazardsFound') {
    render_chart_hazards_clone();
  }
  switch (id) {
    case 'hazardsFound':
      render_chart_hazards_clone();
      break;
    case 'tasksComplete':
      render_chart_tasks_clone();
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
      backgroundColor: "white"
    });
    chartTasksComplete.render();
  }

  function render_chart_tasks_clone() {
  // tasks completed chart
    var chartTasksComplete = new CanvasJS.Chart("clone_tasksComplete", {
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
      backgroundColor: "white"
    });
    chartTasksComplete.render();
  }