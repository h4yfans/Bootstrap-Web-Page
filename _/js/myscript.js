$(function(){var e=window.location.hash;e&&$('ul.nav a[href="'+e+'"]').tab("show");$("#monday.accordion-body").addClass("in");$("#artists #tuesday.accordion-body").addClass("in");$("#artists #wednesday.accordion-body").addClass("in");$("#artists #thursday.accordion-body").addClass("in");$("#artists #friday.accordion-body").addClass("in");$(".abouttheartists img").addClass("img-circle");$("aside.photosfromlastyear img").addClass("img-thumbnail");$(".artistinfo .photogrid img").addClass("img-circle");$("#home a:contains('Home')").parent().addClass("active");$("#schedule a:contains('Schedule')").parent().addClass("active");$("#artists a:contains('Artists')").parent().addClass("active");$("#venuetravel a:contains('Venue/Travel')").parent().addClass("active");$("#register a:contains('Register')").parent().addClass("active");$("ul.nav li.dropdown").hover(function(){$(".dropdown-menu",this).fadeIn()},function(){$(".dropdown-menu",this).fadeOut("fast")});$("[data-toggle='tooltip']").tooltip({animation:!0});$(".modalphotos img").on("click",function(){$("#modal").modal({show:!0});var e=this.src.substr(0,this.src.length-7)+".jpg";$("#modalimage").attr("src",e);$("#modalimage").on("click",function(){$("#modal").modal("hide")})})});