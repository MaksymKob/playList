'use strict'
$(document).ready(function () {

    const playList = [
        {
            author: "LED ZEPPELIN",
            song: "STAIRWAY TO HEAVEN"
        }, {
            author: "QUEEN",
            song: "BOHEMIAN RHAPSODY"
        }, {
            author: "LYNYRD SKYNYRD",
            song: "FREE BIRD"
        }, {
            author: "DEEP PURPLE",
            song: "SMOKE ON THE WATER"
        }, {
            author: "JIMI HENDRIX",
            song: "ALL ALONG THE WATCHTOWER"
        }, {
            author: "AC/DC",
            song: "BACK IN BLACK"
        }, {
            author: "QUEEN",
            song: "WE WILL ROCK YOU"
        }, {
            author: "METALLICA",
            song: "ENTER SANDMAN"
        }];

    let ol = $('<ol></ol>')
    for (let elem in playList) {
        let $li = $('<li></li>')
        let $btn = $(`<button class="infoBtn">show info</button>`)
        $($li).append(`${playList[elem].author} - ${playList[elem].song}`, $btn)
        $(ol).append($li)
        $btn.click(function () {
            showInfo(playList[elem].author, playList[elem].song, $li)
        })
    }
    $('body').append(ol)

    function showInfo(author, song, list) {
        let $window = $(`<div class="windowFade"></div>`),
            $content = $(`<div class="someInfo"></div>`),
            $text = $(`<p class="text">${author} - ${song}</p>`),
            $btnClose = $(`<button class="btnClose">Close</button>`)
        $btnClose.click(function () {
            closeInfo()
        })
        $content.append($btnClose, $text)
        $window.append($content)
        $('body').append($window)
        list.append('<hr class="hrText">')
        $(`.windowFade`).fadeIn()
    }

    function closeInfo() {
        $(`.windowFade`).remove()
        // $(`.windowFade`).fadeOut()
    }
})