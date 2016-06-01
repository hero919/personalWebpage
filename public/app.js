
$(document).ready(function() {
    console.log(angular);
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    console.log("document ready");


    $.Slitslider.defaults 	= {
        // transitions speed
        speed : 800,
        // if true the item's slices will also animate the opacity value
        optOpacity : false,
        // amount (%) to translate both slices - adjust as necessary
        translateFactor : 230,
        // maximum possible angle
        maxAngle : 25,
        // maximum possible scale
        maxScale : 2,
        // slideshow on / off
        autoplay : true,
        // keyboard navigation
        keyboard : true,
        // time between transitions
        interval : 4000,
        // callbacks
        onBeforeChange : function( slide, idx ) { return false; },
        onAfterChange : function( slide, idx ) { return false; }
    };


    $('#weatherSearchingSystem').click(function () {
        $('#weatherModal').modal({
            show: true
        });
    });


    $('#button01').click(function () {
        console.log("click button01");
        $('#Unity').modal({
            show: true
        });
    });
    $('#Unity').on('show.bs.modal', function () {
        console.log("Success01");
        Galleria.run('.galleria01');

    });



    $('#meanstack').click(function () {
        console.log("click meanstack");
        $('#tripDetails').modal({
            show: true
        });
    });
    $('#tripDetails').on('show.bs.modal', function () {
        console.log("SuccessTrip");
        Galleria.run('.galleriaTrip');

    });















    $('#button02').click(function () {
        console.log("click button02");
        $('#personalWebsite').modal({
            show: true
        });
    });
    $('#personalWebsite').on('show.bs.modal', function () {
        console.log("Success02");
        Galleria.run('.galleria02');
    });





    $('#button04').click(function () {
        console.log("click button04");
        $('#StateStreet').modal({
            show: true
        });
    });






    $('#button05').click(function () {
        console.log("click button05");
        $('#clientSide').modal({
            show: true
        });
    });

    $('#clientSide').on('show.bs.modal', function () {
        console.log("clientSide");
        Galleria.run('.galleria03');

    });



    //$('#ajax').on('shown.bs.modal', function () {
    //    console.log("Success01");
    //    //Galleria.run('.galleria02');
    //    // do something...
    //})
    //
    //$('#ajax').on('show.bs.modal', function () {
    //    console.log("Success02");
    //    //Galleria.run('.galleria02');
    //    // do something...
    //})
    //
    //$('#ajax').on('hide.bs.modal', function () {
    //    console.log("Success03");
    //    //Galleria.run('.galleria02');
    //    // do something...
    //})
    //
    //$('#ajax').on('hidden.bs.modal', function () {
    //    console.log("Success04");
    //    //Galleria.run('.galleria02');
    //    // do something...
    //})
    //
    //$('#ajax').on('loaded.bs.modal', function () {
    //    console.log("Success05");
    //    //Galleria.run('.galleria02');
    //    // do something...
    //})




});