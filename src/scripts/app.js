$(function () {
    $('.summoner-cards-item').click(function () {
        var $card = $(this);
        if ($card.hasClass('hover')) {
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    });
});