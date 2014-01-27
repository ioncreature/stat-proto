/**
 * @author Alexander Marenin
 * @date December 2013
 */


$( function(){
    // Tabs handler
    var first = $( '.main-tabs a[data-toggle="tab"]' )[0];
    $( first ).tab( 'show' );


    // Date dropdown
    var dd = $( '#date-dropdown' ),
        dc = $( '#date-container' ),
        dateTitle = $( '#date-title' ),
        dateOkButton = $( '#date-ok-button' ),
        dateCancelButton = $( '#date-cancel-button' ),
        prevCaption = dateTitle.text(),
        curCaption = prevCaption,
        showCalendar = $( '#date-show-calendar' );

    dc.on( 'hide.bs.dropdown', function(){
        if ( curCaption !== prevCaption ){
            curCaption = prevCaption;
            dateTitle.text( prevCaption );
        }
        showCalendar.popover( 'hide' );
    });

    dd.find( 'li' ).click( function( e ){
        e.stopPropagation();
        if ( showCalendar[0].parentNode === this )
            return;

        curCaption = $( this ).find( 'a' ).text() || curCaption;
        dateTitle.text( curCaption );
    });

    dateOkButton.click( function(){
        prevCaption = curCaption;
        dd.dropdown( 'toggle' );
    });

    dateCancelButton.click( function(){
        dd.dropdown( 'toggle' );
    });

    showCalendar.click( function( e ){
        e.stopPropagation();
    });

    showCalendar.popover({
        placement: 'left',
        html: true,
        title: 'Выберите дату',
        content: function(){
            var c1 = document.createElement( 'div' ),
                c2 = document.createElement( 'div' ),
                cont = document.createElement( 'div' );
            cont.appendChild( c1 );
            cont.appendChild( c2 );
            cont.className = 'calendar-container';
            $( c1 ).datetimepicker({
                format: 'd.m.Y H:i',
                inline: true,
                timepicker: false,
                lang: 'ru'
            });
            $( c2 ).datetimepicker({
                format: 'd.m.Y H:i',
                inline: true,
                timepicker: false,
                lang: 'ru'
            });
            return cont.outerHTML;
        }
    });


    // Charts
    var options = {
        grid: {
            color: 'white',
            backgroundColor: null,
            borderWidth: 0,
            clickable: true,
            hoverable: true,
            autoHighlight: true
        },
        legend: {
            show: false
        },
        lines: {
            show: true,
            lineWidth: 4
        },
        points: {
            show: false
        },
        xaxis: {
            tickColor: 'rgba(0, 0, 0, 0)',
            tickDecimals: 0,
            tickSize: 1,
            font: {
                color: '#ffffff'
            }
        },
        yaxis: {
            min: 0,
            max: 10000,
            tickColor: 'rgba(255, 255, 255, 0.4)',
            font: {
                color: '#ffffff'
            }
        },
        tooltip: true,
        tooltipOpts: {
            content: '<b>%s: %y</b>'
        },
        shadowSize: 0,
        colors: ['#FFF', '#CCC', '#AAA']
    };

    $.plot( '#chart1', [{label: 'ПОКАЗЫ', data: generateData()}], options );
    $.plot( '#chart2', [{label: 'СОГЛАСИЯ', data: generateData()}], options );
    $.plot( '#chart3', [
        {label: 'БОЛЬ', data: generateData()},
        {label: 'ТЛЕН', data: generateData()},
        {label: 'БЕЗЫСХОДНОСТЬ', data: generateData()}
    ], options );
});


var MAX = 9800;
function generateData( /*int?*/ count ){
    var r = [],
        count = count || 14;
    for ( var i = 1; i <= count; i++ )
        r.push( [i, Math.floor(MAX * Math.random())] );
    return r;
}