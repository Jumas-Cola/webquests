function hashCode(str) {
    var hash = 0, i, chr;
    for (i = 0; i < str.length; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function checkPass() {
    var blinker = $('#blinker');
    var password = $('#inputPassword').val();
    if (hashCode(password) != -312389051) {
        blinker.addClass('black-blinker');
        blinker.addClass('blink-me-down');
        blinker.on(
            "webkitAnimationEnd oanimationend msAnimationEnd animationend",
            function() {
                $(this).removeClass('blink-me-down');
                $(this).removeClass('black-blinker');
            }
        );
    } else {
        blinker.addClass('white-blinker');
        blinker.addClass('blink-me-up');
        blinker.on(
            "webkitAnimationEnd oanimationend msAnimationEnd animationend",
            function() {
                window.open("TheOwlsAreNotWhatTheySeem.html","_self")
            }
        );
    }
}

$('#check-pass').click(checkPass);
$('#inputPassword').keyup(function(event) {
    if (event.keyCode === 13) {
        $('#check-pass').click();
    }
});
