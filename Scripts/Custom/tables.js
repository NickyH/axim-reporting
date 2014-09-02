//approval tables

// request approval report table
$('#request-approval-table').dataTable({
  "columns": [
    { "class": "remove-sort details-control" },
    { "class": "text" },
    { "class": "text" },
    {
      "class": "remove-sort",
      "orderable": false
    },
    { "class": "text" },
    {
      "class": "remove-sort",
      "orderable": false
    },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
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