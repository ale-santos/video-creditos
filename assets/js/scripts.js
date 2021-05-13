$(function () {
    data.map((thumb) => {
        const img = '<img src="thumbs/' + thumb.image + '" width="90" />'
        const text = '<p>' + thumb.text + '</p>'
        const article = "<article>" + img + text + "</article>"
        console.log(thumb)
        $('.thumbs').append(article);
    })
});