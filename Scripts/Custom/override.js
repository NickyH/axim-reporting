var topOffset = 170;

//dom ready functions
$(function(){
  insert_login()
  insert_top();
});


$(window).scroll(function(){
  var table_width = $('.activity-data-table').width();
  var table_left_position = $('.activity-data-table').position() + 203;
  var column_width_1 = $('.activity-data-table tr:first-child td').attr('colspan');
  if  ($(window).scrollTop() >= 330){
      var tbl_edit_width = $('th.tbl-edit').width();
      var tbl_activity_width = $('th.tbl-activity').width();
      var tbl_invoice_width = $('th.tbl-invoice').width();
      var tbl_estimate_width = $('th.tbl-estimate').width();
      var tbl_measure_width = $('th.tbl-measure').width();
      var tbl_unit_width = $('th.tbl-unit').width();
      var tbl_total_width = $('th.tbl-total').width();
      var tbl_comments_width = $('th.tbl-comments').width();

      $('.cloned-header').remove();
      var cloned_header = $('.activity-data-table thead').clone().addClass('cloned-header');

      $('thead.cloned-header').children('tr').children('th.tbl-edit').width(tbl_edit_width);
      $('thead.cloned-header').children('tr').children('th.tbl-activity').width(tbl_activity_width);
      $('thead.cloned-header').children('tr').children('th.tbl-invoice').width(tbl_invoice_width);
      $('thead.cloned-header').children('tr').children('th.tbl-estimate').width(tbl_estimate_width);
      $('thead.cloned-header').children('tr').children('th.tbl-measure').width(tbl_measure_width);
      $('thead.cloned-header').children('tr').children('th.tbl-unit').width(tbl_unit_width);
      $('thead.cloned-header').children('tr').children('th.tbl-total').width(tbl_total_width);
      $('thead.cloned-header').children('tr').children('th.tbl-comments').width(tbl_comments_width);

      $(cloned_header).insertAfter('table.activity-data-table').css({ width:table_width }).delay(1000).removeClass('hidden');
  }
  if  ($(window).scrollTop() <= 329){
       $('.cloned-header').remove();
    }
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

function login() {
  $('#insert-form').empty();
  insert_left();
  $('.btn-group.nger').removeClass('hidden');
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

/* Custom animation for a table row to slide up or down */
(function ($) {
    var sR = {
        defaults: {
            slideSpeed: 400,
            easing: false,
            callback: false
        },
        thisCallArgs: {
            slideSpeed: 400,
            easing: false,
            callback: false
        },
        methods: {
            up: function (arg1, arg2, arg3) {
                if (typeof arg1 == 'object') {
                    for (p in arg1) {
                        sR.thisCallArgs.eval(p) = arg1[p];
                    }
                } else if (typeof arg1 != 'undefined' && (typeof arg1 == 'number' || arg1 == 'slow' || arg1 == 'fast')) {
                    sR.thisCallArgs.slideSpeed = arg1;
                } else {
                    sR.thisCallArgs.slideSpeed = sR.defaults.slideSpeed;
                }
                if (typeof arg2 == 'string') {
                    sR.thisCallArgs.easing = arg2;
                } else if (typeof arg2 == 'function') {
                    sR.thisCallArgs.callback = arg2;
                } else if (typeof arg2 == 'undefined') {
                    sR.thisCallArgs.easing = sR.defaults.easing;
                }
                if (typeof arg3 == 'function') {
                    sR.thisCallArgs.callback = arg3;
                } else if (typeof arg3 == 'undefined' && typeof arg2 != 'function') {
                    sR.thisCallArgs.callback = sR.defaults.callback;
                }
                var $cells = $(this).find('td');
                $cells.wrapInner('<div class="slideRowUp" />');
                var currentPadding = $cells.css('padding');
                $cellContentWrappers = $(this).find('.slideRowUp');
                $cellContentWrappers.slideUp(sR.thisCallArgs.slideSpeed, sR.thisCallArgs.easing).parent().animate({
                    paddingTop: '0px',
                    paddingBottom: '0px'
                }, {
                    complete: function () {
                        $(this).children('.slideRowUp').replaceWith($(this).children('.slideRowUp').contents());
                        $(this).parent().css({ 'display': 'none' });
                        $(this).css({ 'padding': currentPadding });
                    }
                });
                var wait = setInterval(function () {
                    if ($cellContentWrappers.is(':animated') === false) {
                        clearInterval(wait);
                        if (typeof sR.thisCallArgs.callback == 'function') {
                            sR.thisCallArgs.callback.call(this);
                        }
                    }
                }, 100);
                return $(this);
            },
            down: function (arg1, arg2, arg3) {
                if (typeof arg1 == 'object') {
                    for (p in arg1) {
                        sR.thisCallArgs.eval(p) = arg1[p];
                    }
                } else if (typeof arg1 != 'undefined' && (typeof arg1 == 'number' || arg1 == 'slow' || arg1 == 'fast')) {
                    sR.thisCallArgs.slideSpeed = arg1;
                } else {
                    sR.thisCallArgs.slideSpeed = sR.defaults.slideSpeed;
                }
                if (typeof arg2 == 'string') {
                    sR.thisCallArgs.easing = arg2;
                } else if (typeof arg2 == 'function') {
                    sR.thisCallArgs.callback = arg2;
                } else if (typeof arg2 == 'undefined') {
                    sR.thisCallArgs.easing = sR.defaults.easing;
                }
                if (typeof arg3 == 'function') {
                    sR.thisCallArgs.callback = arg3;
                } else if (typeof arg3 == 'undefined' && typeof arg2 != 'function') {
                    sR.thisCallArgs.callback = sR.defaults.callback;
                }
                var $cells = $(this).find('td');
                $cells.wrapInner('<div class="slideRowDown" style="display:none;" />');
                $cellContentWrappers = $cells.find('.slideRowDown');
                $(this).show();
                $cellContentWrappers.slideDown(sR.thisCallArgs.slideSpeed, sR.thisCallArgs.easing, function () { $(this).replaceWith($(this).contents()); });
                var wait = setInterval(function () {
                    if ($cellContentWrappers.is(':animated') === false) {
                        clearInterval(wait);
                        if (typeof sR.thisCallArgs.callback == 'function') {
                            sR.thisCallArgs.callback.call(this);
                        }
                    }
                }, 100);
                return $(this);
            }
        }
    };
    $.fn.slideRow = function (method, arg1, arg2, arg3) {
        if (typeof method != 'undefined') {
            if (sR.methods[method]) {
                return sR.methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            }
        }
    };
})(jQuery);



function insert_left() {
  $('#insert-left').empty();
  $.get('left_bar.html', function(data) {
    $('#insert-left').html(data);
  });
}

function insert_top() {
  $.get('top_bar.html', function(data) {
    $('#insert-top').html(data);
  });
  $('#insert-top').trigger('create');
}