const apiurl = 'https://picsum.photos/v2/list'

window.onload = function() {
    $.ajax({
        url: apiurl,
        contentType: 'application/json',
        dataType: 'json',
        success: function(result) {
            console.log(result)
            $('.card-img-top').attr('drc', result[0].url)
        }
    })
}