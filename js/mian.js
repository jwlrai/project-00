var nme = new beizerText({
    parent          :'mh',
    text            :'Ujwal Rai',
    control_points  : [[350,350],[650,450],[550,300],[400,300],[400,200],[600,200],[600,100],[0,0]],
    end_text_align  :'',
    final_font      :55,
    charDelay:100,
    aniDelay :10
    });
    
   
    
    var des = new beizerText({
    parent          :'md',
    text            :'Full Stack Developer | ',
    control_points  : [[350,350],[850,450],[550,300],[400,300],[400,200],[600,200],[600,100],[0,0]],
    end_text_align  :'',
    final_font      :23,
    charDelay:100,
    aniDelay :7
    });
    var des1 = new beizerText({
        parent          :'md-1',
        text            :'Focus on Backend',
        control_points  : [[350,350],[850,450],[550,300],[400,300],[400,200],[600,200],[600,100],[0,0]],
        end_text_align  :'',
        final_font      :23,
        charDelay:100,
        aniDelay :7
        });
    nme.start();
    des.start(function(){
       
    });
    setTimeout(function(){
        des1.start();
    },1500);
    (function(jq){
      
        var carouselEle =  '';
        function carousel( ele  ){
            if(carouselEle !== ''){
               
                ele = carouselEle;
                carouselEle = '';
                jq(ele).siblings('div').removeClass('displayOn').addClass('displayOff');
            }
            jq(ele).removeClass('displayOff').addClass('displayOn');
            var slide = jq(ele).data('slide');
            jq('.sld_nav ul li').css('background-color','white');
            jq('.sld_nav ul li:nth-child('+slide+')').css('background-color','blue');
            
                setTimeout(function(){             
                
                    var nxt = jq(ele).next();
                    jq(ele).next().removeClass('displayOn').addClass('displayOff');
                    jq(ele).removeClass('displayOn').addClass('displayOff');
                    if(nxt.length ==0){
                        
                        carousel(jq('.crsl > div div.sld:nth-child(1)'));
                    }
                    else{
                        carousel(nxt);
                    }j
                },3000);
           
        }
        carousel('.crsl > div div.sld:nth-child(1)');
        jq('.sld_nav ul li').click(function(e){
           
            var slide = jq(this).data('slide');
            jq('.sld_nav ul li').css('background-color','white');
            jq('.sld_nav ul li:nth-child('+slide+')').css('background-color','blue');
            carouselEle = jq('.crsl > div div.sld:nth-child('+slide+')');
          
        });
        jq(document).scroll(function(){
            var y = window.scrollY;
            if(y > 0){
                if(!jq('body>header').hasClass('shadow')){
                    jq('body>header').addClass('shadow');
                }
                
            }
            else if(y == 0){
                if(jq('body>header').hasClass('shadow')){
                    jq('body>header').removeClass('shadow');
                }
            }
            
          
        });
        jq('body> header  h1 a:last-child').click(function(e){
            e.preventDefault();
            jq('nav ul li a').removeClass('selctNav');
            jq(this).addClass('selctNav');
            jq('html, body').animate({
                scrollTop: 0
            }, 500);
        });
        jq('body> header  h1 a:first-child').click(function(e){
            jq('nav').toggleClass( 'nav_tgle' );
            jq(this).toggleClass('brger_click');
        });
        jq('nav ul li a').click(function(e){
            e.preventDefault();
            
            
         
            jq('html, body').animate({
                scrollTop:  jq(jq(this).attr('href')).offset().top
            }, 500);
            if(screen.width <= 415){
                jq('body> header  h1 a:first-child').trigger('click');
            }
            else{
                jq('nav ul li a').removeClass('selctNav');
                jq('body> header  h1 a').removeClass('selctNav');
                jq(this).addClass('selctNav');
            }
        });

    })(jQuery.noConflict())