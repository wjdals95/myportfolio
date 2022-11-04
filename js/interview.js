$(document).ready(function(){ // 페이지가 열리면 실행
    const nvDB =[
        ['나의 소개페이지','#about'],
        ['다룰 수 있는 언어','#portfoloio'],
        ['프로젝트','#preInterview'],
        ['연락하기','#contact']
    ];
    let nvli = '';
    for(let i in nvDB){
        nvli += `<li><a href="${nvDB[i][1]}">${nvDB[i][0]}</a></li>`
    }
    $('.depth1').html(nvli); //ul에 내비넣기

    //데이터삽입완료 최상위유지해야한다.

    //각 섹션타이틀 #preInterview는 제외하고 링크텍스트와 매치하기
    $('.slideSection:not(#preInterview)').each(function(){
        $(this).find('h2').html(nvDB[$(this).index()][0])
    }); ////each

    //내비 슬라이드 색션이동
     $(".depth1 a").click(function(e){ //매개변수 e는 이벤트를 위미함
        //내비게이션 클릭실행
        e.preventDefault(); //a태그의 고유의 기능 막는다 -> JS실행목적
        var targetPos = $($(this).attr('href')).offset().top; //top, left 뿐이다.
        //a태그 href값이랑 같은 객체의 상단위치 저장
        $('body, html').animate({'scrollTop':targetPos});
        //화면 애니메이션 쳐라 스크롤상단위치에
        //그 위치를 넣어서 마치 그 객체한태 간것처럼 보여라
        
        //클릭시 색깔 나오게 하기
       $(this).parent().addClass('active').siblings().removeClass('active');
        //.depth1 li.active a

        // $('.depth1 li').removeClass('active') //모든 li는 클래스를 없애고
        // $(this).parent().addClass('active')  //선택된 li에 클래스를 준다.
     
    
    
    }); ////click

    $("#preInterview dt").click(function(){
        
        $("#preInterview dt").removeClass('active')
        $(this).toggleClass('active')
    })
    // $('preInterview dt').click(function(){
    //     $(this).toggleClass('active').siblings().removeClass('active');
    // })
    var toggleall = false;
    $("#allBtn_interview").click(function(){
        if(toggleall){
            $(this).html('전체열기')
            $("#preInterview dt").removeClass('active')
            toggleall = false;
        }else{
            $(this).html('전체닫기')
            $("#preInterview dt").addClass('active')
            toggleall = true;
        } 
    })
    
    let btt = document.querySelector('#go-top');
    //스크롤양 확인하는 태그
    //document.documentElement.scrollTop
    //window.pageYOFFset
    let scrollAmt;

    window.addEventListener('scroll',()=>{
        scrollAmt = window.pageYOffset;
 
        
        if(scrollAmt > 300){
            btt.className = 'act';
        }else{
            btt.classList.remove('act');
        }   

    })//scroll event

    btt.addEventListener('click',(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        });
    })
});

/*
 페이지가 열리면 실행
JS
 window.onload = function(){

 }
Jquery
$(document).ready(function(){
}
*/