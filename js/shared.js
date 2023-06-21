// //dropdown

$('.has-dropdown').click(function(){
    if($('#dropdown').css('display') == 'none'){
        $('#dropdown').slideDown(300);
        console.log('down');
    }
    else{
        $('#dropdown').slideUp(300);
        console.log('up');
    }
    
});





// mobi menu

$('#header-menu-button').click(function(){
    if($('#menu-mobi').css('display') == 'none'){
        $('#menu-mobi').slideDown(300);
    }
    else{
        $('#menu-mobi').slideUp(300);
    }
});


// mobi menu
$('.menu-mobi-item').click(function(){
    if($(this).find('.menu-mobi-child').css('display') == 'block'){
        $(this).find('.menu-mobi-child').slideUp(300);
    }
    else{
        $(this).parent().find('.menu-mobi-child').slideUp(300);
        $(this).find('.menu-mobi-child').slideDown(300);
    }
    
});