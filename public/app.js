
$(document).ready(function() {
    console.log(jQuery);
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    console.log("document ready");


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
        $('#ajax').modal({
            show: true
        });
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