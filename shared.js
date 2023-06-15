// //dropdown

$('.has-dropdown').click(function () { 
    if($('#dropdown').hasClass('dropdown-active')){
        $('#dropdown').removeClass('dropdown-active');
    }
    else{
        $('#dropdown').addClass('dropdown-active');
    }
});