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
});
