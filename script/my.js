$(function(){
    //스크롤 이벤트
    $(window).scroll(function(){
        var winScrollTop = $(window).scrollTop();
        console.log(winScrollTop);
        
        if(winScrollTop >= 200){
//            $('header').addClass('animate__animated animate__slideInDown');
            $('header').css({'backgroundColor':'rgba(255,255,255,0.6)'});
        }else{
            $('header').css({'backgroundColor':'#fff'});
        }
    });
    
    
    //바깥쪽 눌러도 나가기하기
    $(document).mouseup(function(e){
        var container = $('#menu');
        if(container.has(e.target).length === 0)
            container.hide();
    });
    
    $(document).mouseup(function(e){
        var container = $('#my');
        if(container.has(e.target).length === 0)
            container.hide();
    });
    
    
   //메뉴바
    $('.mainMenu').click(function(){
        $('#menu').fadeToggle();
    });
    
    
    //검색
    $('.sb').click(function(){
        $('#serch').slideToggle();
    });
    
    
    //좋아요
    $('.lb').click(function(){
        $('#like').slideToggle();
    });
    
    
    //마이페이지
    $('.mb').click(function(){
        $('#my').fadeToggle();
    });
    
    
    
});