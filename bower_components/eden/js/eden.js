function smoothScrolling(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var s=$(this.hash);if(s=s.length?s:$("[name="+this.hash.slice(1)+"]"),s.length)return $("html, body").animate({scrollTop:s.offset().top},1e3),!1}})}!function(s){s.fn.animation=function(){var i=s(window).scrollTop();return this.each(function(t){if(s(this).hasClass("on-delay")&&s(this).hasClass("on-scroll")){if(i+.8*s(window).height()>s(this).offset().top){var e=s(this).index();setTimeout(function(){s(".animation").eq(t).addClass("animated")},150*(e+1))}}else s(this).hasClass("on-scroll")?i+.8*s(window).height()>s(this).offset().top&&s(this).addClass("animated"):s(this).hasClass("on-delay")&&setTimeout(function(){s(".animation").eq(t).addClass("animated")},150*(t+1))})}}(jQuery),function(s){s.fn.collapsible=function(i){var t=s.extend({type:"expandable"},i);return this.each(function(){s(this).find(".show-content").click(function(){if(s(this).closest(".panel").hasClass("is-open"))s(this).closest(".panel").removeClass("is-open"),s(this).next(".content").css("max-height","0");else{"accordion"==t.type&&(s(this).closest(".collapsible").find(".panel").removeClass("is-open"),s(this).closest(".collapsible").find(".content").css("max-height","0")),s(this).closest(".panel").addClass("is-open");var i=s(this).next(".content")[0].scrollHeight+40;s(this).next(".content").css("max-height",i)}})})}}(jQuery),function(s){s.fn.sticky=function(i){var t=s.extend({pageWrapper:"main"},i);return this.each(function(){s("html").css("height","100%"),s("body").css({"min-height":"100%",display:"flex","flex-direction":"column"}),s(t.pageWrapper).css("flex","1")})}}(jQuery),function(s){s.fn.lightbox=function(){var i=this;return this.each(function(){s(this).append("<div class='modal dark-bg row center-center'>   <div class='content'>       <div class='active-img'>           <span class='slide-left slider-control'>❮</span>           <span class='slide-right slider-control'>❯</span>       </div>       <div class='close light inside'>           <span>✕</span>       </div>   </div></div>"),s(this).children("img").click(function(){s(this).hasClass("is-active")||(s(this).addClass("is-active").clone(!0).appendTo(".lightbox .modal .active-img"),s(this).next(".caption").clone(!0).appendTo(".lightbox .modal .active-img"),s(this).siblings(".modal").addClass("is-open"),s("body").addClass("no-scroll"))}),s(this).find(".slider-control").click(function(){s(this).hasClass("slide-left")?s(this).closest(".lightbox").children("img.is-active").is(":first-of-type")?(s(this).closest(".lightbox").children("img.is-active").removeClass("is-active"),s(this).closest(".lightbox").children("img:last-of-type").addClass("is-active")):s(this).closest(".lightbox").children("img.is-active").removeClass("is-active").prevAll("img:first").addClass("is-active"):s(this).closest(".lightbox").children("img.is-active").is(":last-of-type")?(s(this).closest(".lightbox").children("img.is-active").removeClass("is-active"),s(this).closest(".lightbox").children("img:first-of-type").addClass("is-active")):s(this).closest(".lightbox").children("img.is-active").removeClass("is-active").nextAll("img:first").addClass("is-active"),s(this).siblings("img").remove(),s(this).siblings(".caption").remove(),s(this).closest(".lightbox").children("img.is-active").clone(!0).appendTo(".lightbox .modal .active-img"),s(this).closest(".lightbox").children("img.is-active").next(".caption").clone(!0).appendTo(".lightbox .modal .active-img")}),s(this).find(".close").click(function(){s(this).closest(".modal").removeClass("is-open"),s("body").removeClass("no-scroll"),s(this).closest(".lightbox").find(".is-active").removeClass("is-active"),s(this).siblings(".active-img").find("img").remove(),s(this).siblings(".active-img").find(".caption").remove()}),s(document).keydown(function(s){37==s.keyCode?i.find(".slider-control.slide-left").trigger("click"):39==s.keyCode?i.find(".slider-control.slide-right").trigger("click"):27==s.keyCode&&i.find(".close").trigger("click")})})}}(jQuery),function(s){s.fn.modal=function(i){var t=s.extend({open:".open-modal",close:".close-modal"},i);return s(t.open).click(function(){var i=s(this).next(".modal");s(this).next(".modal").addClass("is-open"),s("body").addClass("no-scroll"),i.find(t.close).click(function(){i.removeClass("is-open"),s("body").removeClass("no-scroll")}),s(document).keyup(function(t){27==t.keyCode&&(i.removeClass("is-open"),s("body").removeClass("no-scroll"))})})}}(jQuery),function(s){s.fn.nav=function(i){var t=this,e=t.find(".mob-toggle"),a=t.find(".sidebar"),n=s.extend({pageShift:!1,openColor:"#2F2F2F",closeColor:"#2f2f2f",pageClass:".page-container"},i);return e.change(function(){this.checked?(s("body").addClass("no-scroll"),t.find(".hamburger").css("background-color",n.openColor),n.pageShift&&(a.hasClass("left")?a.hasClass("skinny")?s(n.pageClass).css("margin-left","200px"):a.hasClass("fat")?s(n.pageClass).css("margin-left","300px"):s(n.pageClass).css("margin-left","250px"):a.hasClass("right")&&(a.hasClass("skinny")?s(n.pageClass).css("margin-right","200px"):a.hasClass("fat")?s(n.pageClass).css("margin-right","300px"):s(n.pageClass).css("margin-right","250px")))):(s(n.pageClass).css("margin-left","0px"),s(n.pageClass).css("margin-right","0px"),t.find(".hamburger").css("background-color",n.closeColor),s("body").removeClass("no-scroll"))})}}(jQuery),function(s){s.fn.parallax=function(){var i=s(window).scrollTop();return this.each(function(){i<s(this).offset().top+s(this).height()&&(s(this).hasClass("short")?(s(this).css({"background-position-y":50-i/4+"%"}),s(this).find(".content").css({transform:"translate3d(0px,"+i/7.5+"%,0px)",opacity:1-i/500})):(s(this).css({"background-position-y":50-i/2+"%"}),s(this).find(".content").css({transform:"translate3d(0px,"+i/15+"%,0px)",opacity:1-i/750})))})}}(jQuery),function(s){s.fn.slide=function(i){var t=this,e=this.find(".slider-control"),a=this.find(".dots"),n=0,o=s.extend({quantity:1,timer:!0,delay:5e3,transition:!0,controls:!0,controlColor:"#fff"},i);return this.each(function(){s(this).find(".slides").css("width",100*o.quantity+"%"),e.css("color",o.controlColor),a.find(".dot").css("background-color",o.controlColor),o.transition||t.find(".slides").css("transition","none"),o.controls&&(e.click(function(){s(this).hasClass("slide-left")?t.find(".slide.is-active").is(":first-child")?(t.find(".slide.is-active").removeClass("is-active"),t.find(".slide:last-of-type").addClass("is-active"),a.find(".dot.is-active").removeClass("is-active"),a.find(".dot:last-of-type").addClass("is-active"),n=-100+100/o.quantity,t.find(".slides").css("transform","translateX("+n+"%)")):(t.find(".slide.is-active").removeClass("is-active").prev(".slide").addClass("is-active"),a.find(".dot.is-active").removeClass("is-active").prev(".dot").addClass("is-active"),n+=100/o.quantity,t.find(".slides").css("transform","translateX("+n+"%)")):s(this).hasClass("slide-right")&&(t.find(".slide.is-active").is(":last-child")?(t.find(".slide.is-active").removeClass("is-active"),t.find(".slide:first-of-type").addClass("is-active"),a.find(".dot.is-active").removeClass("is-active"),a.find(".dot:first-of-type").addClass("is-active"),n=0,t.find(".slides").css("transform","translateX("+n+"%)")):(t.find(".slide.is-active").removeClass("is-active").next(".slide").addClass("is-active"),a.find(".dot.is-active").removeClass("is-active").next(".dot").addClass("is-active"),n-=100/o.quantity,t.find(".slides").css("transform","translateX("+n+"%)")))}),a.find(".dot").click(function(){if(!s(this).hasClass("is-active")){var i=s(this).index();t.find(".slide.is-active").removeClass("is-active"),a.find(".dot.is-active").removeClass("is-active"),t.find(".slide").eq(i).addClass("is-active"),s(this).addClass("is-active")}})),o.timer&&setInterval(function(){t.find(".slide-right").trigger("click")},o.delay)})}}(jQuery),function(s){s.fn.tab=function(i){return this.each(function(){s(this).find(".tab-heading").click(function(){s(this).closest(".tab").find(".tab-heading").removeClass("is-active"),s(this).addClass("is-active"),s(this).closest(".tab").find(".tab-content").removeClass("is-open");var i=s(this).index();s(this).closest(".tab").find(".tab-content").eq(i).addClass("is-open")})})}}(jQuery),function(s){s.fn.video=function(i){return this.each(function(){s(this).find(".play").click(function(){s(this).closest(".video").addClass("is-playing"),s(this).closest(".video").find("video")[0].play()}),s(this).find(".pause").click(function(){s(this).closest(".video").removeClass("is-playing"),s(this).closest(".video").find("video")[0].pause()})})}}(jQuery);