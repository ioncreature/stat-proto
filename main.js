/**
 * @author Alexander Marenin
 * @date December 2013
 */


$( function(){
    // Tabs handler
    $( '.main-tabs a[data-toggle="tab"]' ).on( 'shown.bs.tab', function(){
        $( '#tab-caption' ).text( this.dataset.caption );
    });
    var first = $( '.main-tabs a[data-toggle="tab"]' )[0];
    $( first ).tab( 'show' );


    // Calendar
    new Pikaday( {field: $('#calendar')[0]} );


    // Charts
    var options = {
        lines: {
            show: true
        },
        points: {
            show: true
        },
        xaxis: {
            tickDecimals: 0,
            tickSize: 1
        },
        colors: ['rgba(220,220,220,1)', 'rgba(151,187,205,1)']
    };

    $.plot( '#chart1', [generateData(), generateData()], options );
    $.plot( '#chart2', [generateData(), generateData()], options );
    $.plot( '#chart3', [generateData(), generateData()], options );

//    fillColor : "rgba(220,220,220,0.5)",
//    strokeColor : "rgba(220,220,220,1)",
//    pointColor : "rgba(220,220,220,1)",
//    fillColor : "rgba(151,187,205,0.5)",
//    strokeColor : "rgba(151,187,205,1)",
//    pointColor : "rgba(151,187,205,1)",
});


function generateData( /*int?*/ count ){
    var r = [],
        count = count || 30;
    for ( var i = 0; i < count; i++ )
        r.push( [i, Math.floor(300 * Math.random())] );
    return r;
}