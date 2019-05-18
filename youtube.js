const request = require('request');

//sendRequest();

function sendRequest() {
    console.log("Send Request....");
    request.get({
        headers: { 'content-type': 'application/json' },
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLBC3q0b5MLyBiGHvIjnrURTfAsEjwoRiz&key=AIzaSyBnSYRaGovmp9dAwNpy1oQCy_hM0ynXRBU'
    }, function (error, response, body) {
        console.log(body);
    });
};


// $(document).ready(function () { $('.video-card, .clip-similar .item').matchHeight(); var objowlcarousel = $(".owl-carousel-category"); if (objowlcarousel.length > 0) { objowlcarousel.owlCarousel({ items: 8, lazyLoad: true, pagination: false, loop: true, autoPlay: 2000, navigation: true, stopOnHover: true, navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"] }); } }); $(document).ready(function () {
//     var showChar = 300; var ellipsestext = "..."; var moretext = "SHOW MORE Â»"; var lesstext = "SHOW LESS"; $('.more').each(function () { var content = $(this).html(); if (content.length > showChar) { var c = content.substr(0, showChar); var h = content.substr(showChar, content.length - showChar); var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>'; $(this).html(html); } }); $(".morelink").click(function () {
//         if ($(this).hasClass("less")) { $(this).removeClass("less"); $(this).html(moretext); } else { $(this).addClass("less"); $(this).html(lesstext); }
//         $(this).parent().prev().toggle(); $(this).prev().toggle(); return false;
//     });
// });


var homes = [
    {
        "h_id": "3",
        "city": "Dallas",
        "state": "TX",
        "zip": "75201",
        "price": "162500"
    }, {
        "h_id": "4",
        "city": "Bevery Hills",
        "state": "CA",
        "zip": "90210",
        "price": "250"
    }, {
        "h_id": "5",
        "city": "New York",
        "state": "NY",
        "zip": "00010",
        "price": "1"
    }
];

console.log(JSON.stringify(homes));

homes.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});

console.log(JSON.stringify(homes));


var data = [
    { id: "fmgbwe45", age: 24, gender: "male"   },
    { id: "kjregh23", age: 27, gender: "female" }, 
    { id: "kjfdhg87", age: 30, gender: "male" }, 
    { id: "lsdjfk43", age: 10, gender: "female" }, 
]
data.forEach(function(item,i){
  if(item.id === "kjfdhg87"){
    data.splice(i, 1);
    data.unshift(item);
  }
});

console.log(data);



var array = [
    {"id":"4","name":"Boaz"},
    {"id":"2","name":"Shareen"},
    {"id":"3","name":"Simon"},
    {"id":"1","name":"Miriam"}
];

array.forEach(function(item,i){
    if(item.id === "3"){
        var itemToReplace = array.splice(i, 1);
        array = array.concat(itemToReplace);
    }
  });

//var itemToReplace = array.splice(0, 2); 
//array = array.concat(itemToReplace);

console.log(array);





// var arr = [
//     {"id":"4","name":"Boaz"},
//     {"id":"2","name":"Shareen"},
//     {"id":"3","name":"Simon"},
//     {"id":"1","name":"Miriam"}
// ];
// var removed = arr.splice(2,1);
// var new_arr = arr.concat(removed);

// console.log(new_arr);