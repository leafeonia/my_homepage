
function onkeydown_handler(event) {
    if (event.which == 13){
        var text = $("#content").val();
        // location.href = "http://www.baidu.com.cn/s?wd=" + text + "&cl=3";
        window.open("http://www.baidu.com.cn/s?wd=" + text + "&cl=3");
    }
}

function onfocus_handler(){   // 名字不能叫onfocus()!
    var input = $("#content");
    input.addClass('active') //addclass是jquery方法，js原生方法获得的元素不能直接使用
}

var current_bg = 1;
function change_bg(){
    current_bg = (current_bg ) % 2 + 1;
    $("body").css('background', "url(" + current_bg + ".jpg)");
}

// setInterval(change_bg,3000);