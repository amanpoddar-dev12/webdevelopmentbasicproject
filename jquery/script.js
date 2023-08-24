// $('h1').css('color','red');


// $('h1').addClass('h1');

// $('h1').text('hiii my self amamn');
// $('h1').html('<h1>Aman Poddar</h1>');
// $('a').attr('href','https://www.yahoo.com');

// $('h1').click(function () { 
//    $("h1").css("color","red");
    
// });

// $(document).keypress(function(event){
//       $('h1').css('color','red');
//       $('h1').css('font-size','5rem');
//     $('h1').text(event.key)
// })

// $('h1').on('mouseover',function(){
//     $("h1").css('color','red');
// })

// $('h1').off('mouseover',function(){
//     $("h1").css('color','black');
// })


// $('h1').before("<button>send</button>");
// $('h1').after("<button>send</button>");
// $('h1').append("<button>send</button>");
// $('h1').prepend("<button>send</button>");





// $('button').on('click',function(){
//     $("h1").hide();
// })


// $('button').on('click',function(){
//     $("h1").show();
// })



// $('button').on('click',function(){
//     $("h1").toggle();
// })


$('button').on('click',function(){
    $("h1").slideUp().slideDown().animate({
        margin: 100
    });
})

















