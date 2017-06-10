
$(function(){
    
    $("#add_member").on("click",function(event) {
        $(".modal").slideDown();
    });
    
    $("form").on( "submit", function( event ) {
        var list = $( this ).serializeArray();
        event.preventDefault();
    
        $("#test").before( "<div class='card'><div class='card_header'><div class='profile_picture'><img src='img/default_avatar.png' alt='profile_picture'></div><div class='profile_name'><h3>"+list[0].value+"</h3><p>"+"@"+list[1].value+"</p></div><div class='profile_icons'><i class='fa fa-pencil-square-o' aria-hidden='true'></i><i class='fa fa-bell-o' aria-hidden='true'></i><i class='fa fa-trash-o' aria-hidden='true'></i></div></div><div class='card_secondary'><div class='graph'></div><div class='task'><h1>"+list[2].value+"</h1><p>Open Tasks</p></div></div><div class='card_footer'><div class='card_cards'><i class='fa fa-th-large' aria-hidden='true'></i>Cards</div><div class='card_profile'><i class='fa fa-user-o'></i>Profile</div></div></div>" );
        
        $("form").each(function(){
            this.reset();
        });
        
        $(".modal").slideUp();
    });
    
    $(".modal").on("click",function(event) {
        if (event.target == this) {
            $(".modal").slideUp();
        }
    });
 
});

$("form").on( "submit", function( event ) {
    event.preventDefault();
    var list = $( this ).serializeArray();
});
