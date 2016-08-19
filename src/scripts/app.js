$(function () {
    $('.summoner-cards-item').click(function () {
        var $card = $(this);
        var elm = $card.children();
        if (elm.hasClass('loading-img')) {

            var color = elm.attr('color');
            var targeturl = elm.attr('target');
            $.ajax({
                type: 'GET',
                url: targeturl,
                async: true,
                success: function ($response) {
                    elm.html($response);
                    elm.removeClass("loading-img");
                    elm.removeClass(color);
                    elm.removeAttr("target");
                    elm.removeAttr("color");
                    elm.removeAttr("content-loader");
                },
                error: function ($error) {
                    elm.parent().removeClass("manual-flip");
                    elm.addClass("loading-img");
                    elm.addClass(color);
                    elm.attr("color",color);
                    elm.attr("target",targeturl);
                    elm.html("<button src=\"##\" class=\"failed-btn " + color + "-shadow\">Retry</button>")
                }
            });

        }
        else if ($card.hasClass('hover')) {
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    });
});