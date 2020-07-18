function exportCanvasAsPNG(id, fileName) {

    var canvasElement = document.getElementById(id);

    var MIME_TYPE = "image/png";

    var imgURL = canvasElement.toDataURL(MIME_TYPE).replace("image/png", "image/octet-stream");

    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
}

$(function() {
    var canvas = document.getElementById('canvas');
    var width = $('#img-certificate').width();
    var height = $('#img-certificate').height();
    ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.crossOrigin = "anonymous";
    canvas.height = height;
    ctx.drawImage($('#img-certificate').get(0), 0, 0);
    ctx.font = "50pt Verdana";
    $('#get-certificate').click(function(){
        //redraw image
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage($('#img-certificate').get(0), 0, 0);
        //refill text
        ctx.fillStyle = "#e55e5e";
        ctx.fillText($('#surname').val(), Math.floor(width/3), Math.floor(height/2) + 20);
        ctx.fillText($('#name').val(), Math.floor(width/3), Math.floor(height/2) + 100);
    });
    $('button').click(function(){
        exportCanvasAsPNG('canvas', 'certificate.png')
    });
});
