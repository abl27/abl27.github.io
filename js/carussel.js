/* global $ jQuery */
jQuery(function () {
    var $els = $("div[id^=cake]")
        , i = 0
        , len = $els.length;
    $els.slice(1).hide();
    setInterval(function () {
        $els.eq(i).fadeOut(function () {
            i = (i + 1) % len;
            $els.eq(i).fadeIn();
        });
    }, 4000);
});
$(".fa-bars").click(function () {
    $(".menumov").slideToggle();
});