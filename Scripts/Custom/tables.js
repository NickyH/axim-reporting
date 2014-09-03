//approval tables

// request approval report table
$('#request-approval-table').dataTable({
  "columns": [
    { "class": "remove-sort details-control col-checkbox" },
    { "class": "text" },
    { "class": "text col-category" },
    { "class": "text col-code" },
    { "class": "text" },
    { "class": "text" },
    {
      "class": "remove-sort col-note",
      "orderable": false
    },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    {
      "class": "remove-sort col-other",
      "orderable": false
    },
    { "class": "col-reviewed" },
    { "class": "text" }
  ]
});

// task approval report table
$('#task-approval-table').dataTable({
  "columns": [
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" }
  ]
});