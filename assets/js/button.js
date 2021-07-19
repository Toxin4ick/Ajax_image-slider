$("#Butt1").click(function(e){
    e.preventDefault();
    $.ajax({
        url: '/slider.php',
        method: 'post',
        dataType: 'html',
        data: {key:1,},
        success: function(data){
            $("#test2").css('display','block');
            $("#test2").html(data);
        }
    });
});
$("#Butt2").click(function(e){
    e.preventDefault();
    $.ajax({
        url: '/slider.php',
        method: 'post',
        dataType: 'html',
        data: {key:2},
        success: function(data){
            $("#test2").css('display','block');
            $("#test2").html(data);
        }
    });
});
$("#Butt3").click(function(e){
    e.preventDefault();
    $.ajax({
        url: '/slider.php',
        method: 'post',
        dataType: 'html',
        data: {key:3},
        success: function(data){
            $("#test2").css('display','block');
            $("#test2").html(data);
        }
    });
});