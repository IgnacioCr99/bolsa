// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#dataTable1').DataTable();
    $('#dataTable2').DataTable();
    $('#dataTable3').DataTable();
    $('#dataTable4').DataTable();
    $('#dataTable5').DataTable();
});

$(document).ready(function() {
    $('#dataTableActivity').DataTable({
        "order": [[ 0, 'desc' ]]
    });
});
