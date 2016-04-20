/**
 * Created by shenwei on 2015/10/13.
 */

$(document).ready(
    function(){
        $("#heading_menu_weigou").css("background-color","#EFEFEF");
        $("#heading_menu_weigou>p").css("color", "#8A8A8A");
        $("#weigou").css("width","25px").css("height","20px")
            .css("margin-left","24px").css("margin-top","16px")
            .css("background","url(./img/a-01.png) -0px -41px");

        $("#outside_title_show_dingdan").click(function(){
            $("#content_menu_dingdan_list").toggle();
            var a=$("#outside_title_show_dingdan").html();
            if(a=="-"){
                $("#outside_title_show_dingdan").html("+");
            }else{
                $("#outside_title_show_dingdan").html("-");
            }
        });
        $("#outside_title_show_cuxiao").click(function(){
            $("#content_menu_cuxiao_list").toggle();
            var a=$("#outside_title_show_cuxiao").html();
            if(a=="-"){
                $("#outside_title_show_cuxiao").html("+");
            }else{
                $("#outside_title_show_cuxiao").html("-");
            }
        });
        $("#outside_title_show_shezhi").click(function(){
            $("#content_menu_shezhi_list").toggle();
            var a=$("#outside_title_show_shezhi").html();
            if(a=="-"){
                $("#outside_title_show_shezhi").html("+");
            }else{
                $("#outside_title_show_shezhi").html("-");
            }
        });

        $("#heading_menu_weigou").click(
            function(){
                $("#little_menu_weigou").hide();
                $(".content_menu_lists_all").show();
                $(".content_menu_weigou_title").show();
                $(".content_menu_hide").show();
                //$(".content_menu_content").css("margin-top","76px");
                $(".heading_menu_list").css("background-color","#2A2E34");
                $(".content_menu_content").hide();
                $("#content_menu_weigou_content").show();
                $(".content_menu_tips").css("width","990px").css("margin-left","250px");

                $("#heading_menu_weigou").css("background-color","#EFEFEF");
                $("#weigou").css("width","25px").css("height","20px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-01.png) -0px -41px");
                $("#heading_menu_weigou>p").css("color","#8A8A8A");

                $("#hudong").css("width","25px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-02.png) -0px -0px");
                $("#weizhanhui").css("width","18px").css("height","26px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-03.png) -0px -0px");
                $("#fangwei").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-04.png) -0px -0px");
                $("#fensibao").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-05.png) -0px -0px");
                $("#leida").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-06.png) -0px -0px");
                $("#shangjia").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-07.png) -0px -0px");
            }
        );
        $("#heading_menu_weigou").hover(
            function(){
                if($("#content_menu_weigou_content").is(":hidden")){
                    $("#weigou").css("width","25px").css("height","20px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-01.png) -0px -20.6px");
                    $("#heading_menu_weigou>p").css("color","#FFFFFF");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $(".content_menu_weigou_title").hide();
                    $(".content_menu_content").hide();
                    $(".content_menu_content").css("margin-top","76px");
                    $("#content_menu_weigou_content").show();
                    $("#little_menu_weigou").show();

                    $("#heading_menu_weigou").css("background-color","#EFEFEF");
                    $("#weigou").css("width","25px").css("height","20px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-01.png) -0px -41px");
                    $("#heading_menu_weigou>p").css("color","#8A8A8A");
                }
            },
            function(){
                if($("#content_menu_weigou_content").is(":hidden")){
                    $("#weigou").css("width","25px").css("height","20px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-01.png) -0px -0px");
                    $("#heading_menu_weigou>p").css("color","#9FA1A2");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $("#content_menu_weigou_content").css("height","100%");
                    $(".content_menu_lists_all").hide();
                    $("#heading_menu_weigou").css("background-color","#2A2E34");
                    $("#weigou").css("width","25px").css("height","20px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-01.png) -0px -0px");
                    $("#heading_menu_weigou>p").css("color","#9FA1A2");
                    $("#little_menu_weigou").hide();
                }
            }
        );

        $("#heading_menu_hudong").click(
            function(){
                $("#little_menu_hudong").hide();
                $(".content_menu_lists_all").show();
                $(".content_menu_weigou_title").show();
                $(".content_menu_hide").show();
                $(".content_menu_content").css("margin-top","76px");
                $(".heading_menu_list").css("background-color","#2A2E34");
                $(".content_menu_content").hide();
                $("#content_menu_hudong_content").show();
                $("#content_menu_hudong_content").css("height","100%");
                $(".content_menu_tips").css("width","990px").css("margin-left","250px");

                $("#heading_menu_hudong").css("background-color","#EFEFEF");
                $("#hudong").css("width","25px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-02.png) -0px -54px");
                $("#heading_menu_hudong>p").css("color","#8A8A8A");

                $("#weigou").css("width","25px").css("height","20px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-01.png) -0px -0px");
                $("#weizhanhui").css("width","18px").css("height","26px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-03.png) -0px -0px");
                $("#fangwei").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-04.png) -0px -0px");
                $("#fensibao").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-05.png) -0px -0px");
                $("#leida").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-06.png) -0px -0px");
                $("#shangjia").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-07.png) -0px -0px");
            }
        );
        $("#heading_menu_hudong").hover(
            function(){
                if($("#content_menu_hudong_content").is(":hidden")){
                    $("#hudong").css("width","25px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-02.png) -0px -27px");
                    $("#heading_menu_hudong>p").css("color","#FFFFFF");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $(".content_menu_weigou_title").hide();
                    $(".content_menu_content").hide();
                    $(".content_menu_content").css("margin-top","76px");
                    $("#content_menu_hudong_content").show();
                    $("#little_menu_hudong").show();

                    $("#heading_menu_hudong").css("background-color","#EFEFEF");
                    $("#hudong").css("width","25px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-02.png) -0px -54px");
                    $("#heading_menu_hudong>p").css("color","#8A8A8A");

                }
            },
            function(){
                if($("#content_menu_hudong_content").is(":hidden")){
                    $("#hudong").css("width","25px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-02.png) -0px -0px");
                    $("#heading_menu_hudong>p").css("color","#9FA1A2");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $("#content_menu_hudong_content").css("height","100%");
                    $(".content_menu_lists_all").hide();
                    $("#heading_menu_hudong").css("background-color","#2A2E34");
                    $("#hudong").css("width","25px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-02.png) -0px -0px");
                    $("#heading_menu_hudong>p").css("color","#9FA1A2");
                    $("#little_menu_hudong").hide();
                }
            }
        );

        $("#heading_menu_weizhanhui").click(
            function(){
                $("#little_menu_weizhanshang").hide();
                $(".content_menu_lists_all").show();
                $(".content_menu_weigou_title").show();
                $(".content_menu_hide").show();
                $(".content_menu_content").css("margin-top","76px");
                $(".heading_menu_list").css("background-color","#2A2E34");
                $(".content_menu_content").hide();
                $("#content_menu_weizhanhui_content").show();
                $("#content_menu_weizhanhui_content").css("height","100%");
                $(".content_menu_tips").css("width","990px").css("margin-left","250px");

                $("#heading_menu_weizhanhui").css("background-color","#EFEFEF");
                $("#weizhanhui").css("width","18px").css("height","26px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-03.png) -0px -58px");
                $("#heading_menu_weizhanhui>p").css("color","#8A8A8A");

                $("#weigou").css("width","25px").css("height","20px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-01.png) -0px -0px");
                $("#hudong").css("width","25px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-02.png) -0px -0px");
                $("#fangwei").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-04.png) -0px -0px");
                $("#fensibao").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-05.png) -0px -0px");
                $("#leida").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-06.png) -0px -0px");
                $("#shangjia").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-07.png) -0px -0px");
            }
        );
        $("#heading_menu_weizhanhui").hover(
            function(){
                if($("#content_menu_weizhanhui_content").is(":hidden")){
                    $("#weizhanhui").css("width","18px").css("height","26px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-03.png) -0px -29px");
                    $("#heading_menu_weizhanhui>p").css("color","#FFFFFF");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $(".content_menu_weigou_title").hide();
                    $(".content_menu_content").hide();
                    $(".content_menu_content").css("margin-top","76px");
                    $("#content_menu_hudong_content").show();
                    $("#little_menu_weizhanshang").show();

                    $("#heading_menu_weizhanhui").css("background-color","#EFEFEF");
                    $("#weizhanhui").css("width","18px").css("height","26px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-03.png) -0px -58px");
                    $("#heading_menu_weizhanhui>p").css("color","#8A8A8A");

                }
            },
            function(){
                if($("#content_menu_weizhanhui_content").is(":hidden")){
                    $("#weizhanhui").css("width","18px").css("height","26px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-03.png) -0px -0px");
                    $("#heading_menu_weizhanhui>p").css("color","#9FA1A2");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $("#content_menu_weizhanhui_content").css("height","100%");
                    $(".content_menu_lists_all").hide();
                    $("#heading_menu_weizhanhui").css("background-color","#2A2E34");
                    $("#weizhanhui").css("width","18px").css("height","26px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-03.png) -0px -0px");
                    $("#heading_menu_weizhanhui>p").css("color","#9FA1A2");
                    $("#little_menu_weizhanshang").hide();
                }
            }
        );

        $("#heading_menu_fangwei").click(
            function(){
                $("#little_menu_fangwei").hide();
                $(".content_menu_lists_all").show();
                $(".content_menu_weigou_title").show();
                $(".content_menu_hide").show();
                $(".content_menu_content").css("margin-top","76px");
                $(".heading_menu_list").css("background-color","#2A2E34");
                $(".content_menu_content").hide();
                $("#content_menu_fangwei_content").show();
                $("#content_menu_fangwei_content").css("height","100%");
                $(".content_menu_tips").css("width","990px").css("margin-left","250px");

                $("#heading_menu_fangwei").css("background-color","#EFEFEF");
                $("#fangwei").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-04.png) -0px -54px");
                $("#heading_menu_fangwei>p").css("color","#8A8A8A");

                $("#weigou").css("width","25px").css("height","20px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-01.png) -0px -0px");
                $("#hudong").css("width","25px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-02.png) -0px -0px");
                $("#weizhanhui").css("width","18px").css("height","26px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-03.png) -0px -0px");
                $("#fensibao").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-05.png) -0px -0px");
                $("#leida").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-06.png) -0px -0px");
                $("#shangjia").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-07.png) -0px -0px");
            }
        );
        $("#heading_menu_fangwei").hover(
            function(){
                if($("#content_menu_fangwei_content").is(":hidden")){
                    $("#fangwei").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-04.png) -0px -27px");
                    $("#heading_menu_fangwei>p").css("color","#FFFFFF");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $(".content_menu_weigou_title").hide();
                    $(".content_menu_content").hide();
                    $(".content_menu_content").css("margin-top","76px");
                    $("#content_menu_fangwei_content").show();
                    $("#little_menu_fangwei").show();

                    $("#heading_menu_fangwei").css("background-color","#EFEFEF");
                    $("#fangwei").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-04.png) -0px -54px");
                    $("#heading_menu_fangwei>p").css("color","#8A8A8A");
                }
            },
            function(){
                if($("#content_menu_fangwei_content").is(":hidden")){
                    $("#fangwei").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-04.png) -0px -0px");
                    $("#heading_menu_fangwei>p").css("color","#9FA1A2");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $("#content_menu_fangwei_content").css("height","100%");
                    $(".content_menu_lists_all").hide();
                    $("#heading_menu_fangwei").css("background-color","#2A2E34");
                    $("#fangwei").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-04.png) -0px -0px");
                    $("#heading_menu_fangwei>p").css("color","#9FA1A2");
                    $("#little_menu_fangwei").hide();
                }
            }
        );

        $("#heading_menu_fensibao").click(
            function(){
                $("#little_menu_fensibao").hide();
                $(".content_menu_lists_all").show();
                $(".content_menu_weigou_title").show();
                $(".content_menu_hide").show();
                $(".content_menu_content").css("margin-top","76px");
                $(".heading_menu_list").css("background-color","#2A2E34");
                $(".content_menu_content").hide();
                $("#content_menu_fensibao_content").show();
                $("#content_menu_fensibao_content").css("height","100%");
                $(".content_menu_tips").css("width","990px").css("margin-left","250px");

                $("#heading_menu_fensibao").css("background-color","#EFEFEF");
                $("#fensibao").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","14px")
                    .css("background","url(./img/a-05.png) -0px -46px");
                $("#heading_menu_fensibao>p").css("color","#8A8A8A").css("margin-top","10px");

                $("#weigou").css("width","25px").css("height","20px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-01.png) -0px -0px");
                $("#hudong").css("width","25px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-02.png) -0px -0px");
                $("#weizhanhui").css("width","18px").css("height","26px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-03.png) -0px -0px");
                $("#fangwei").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-04.png) -0px -0px");
                $("#leida").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-06.png) -0px -0px");
                $("#shangjia").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-07.png) -0px -0px");
            }
        );
        $("#heading_menu_fensibao").hover(
            function(){
                if($("#content_menu_fensibao_content").is(":hidden")){
                    $("#fensibao").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-05.png) -0px -24.5px");
                    $("#heading_menu_fensibao>p").css("color","#FFFFFF");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $(".content_menu_weigou_title").hide();
                    $(".content_menu_content").hide();
                    $(".content_menu_content").css("margin-top","76px");
                    $("#content_menu_fensibao_content").show();
                    $("#little_menu_fensibao").show();

                    $("#heading_menu_fensibao").css("background-color","#EFEFEF");
                    $("#fensibao").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","14px")
                        .css("background","url(./img/a-05.png) -0px -46px");
                    $("#heading_menu_fensibao>p").css("color","#8A8A8A").css("margin-top","10px");
                }
            },
            function(){
                if($("#content_menu_fensibao_content").is(":hidden")){
                    $("#fensibao").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-05.png) -0px -0px");
                    $("#heading_menu_fensibao>p").css("color","#9FA1A2");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $("#content_menu_fensibao_content").css("height","100%");
                    $(".content_menu_lists_all").hide();
                    $("#heading_menu_fensibao").css("background-color","#2A2E34");
                    $("#fensibao").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-05.png) -0px -0px");
                    $("#heading_menu_fensibao>p").css("color","#9FA1A2").css("margin-top","8px");
                    $("#little_menu_fensibao").hide();
                }
            }
        );

        $("#heading_menu_leida").click(
            function(){
                $("#little_menu_leida").hide();
                $(".content_menu_lists_all").show();
                $(".content_menu_weigou_title").show();
                $(".content_menu_hide").show();
                $(".content_menu_content").css("margin-top","76px");
                $(".heading_menu_list").css("background-color","#2A2E34");
                $(".content_menu_content").hide();
                $("#content_menu_leida_content").show();
                $("#content_menu_leida_content").css("height","100%");
                $(".content_menu_tips").css("width","990px").css("margin-left","250px");

                $("#heading_menu_leida").css("background-color","#EFEFEF");
                $("#leida").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-06.png) -0px -54px");
                $("#heading_menu_leida>p").css("color","#8A8A8A");

                $("#weigou").css("width","25px").css("height","20px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-01.png) -0px -0px");
                $("#hudong").css("width","25px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-02.png) -0px -0px");
                $("#weizhanhui").css("width","18px").css("height","26px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-03.png) -0px -0px");
                $("#fangwei").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-04.png) -0px -0px");
                $("#fensibao").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-05.png) -0px -0px");
                $("#shangjia").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-07.png) -0px -0px");
            }
        );
        $("#heading_menu_leida").hover(
            function(){
                if($("#content_menu_leida_content").is(":hidden")){
                    $("#leida").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-06.png) -0px -27px");
                    $("#heading_menu_leida>p").css("color","#FFFFFF");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $(".content_menu_weigou_title").hide();
                    $(".content_menu_content").hide();
                    $(".content_menu_content").css("margin-top","76px");
                    $("#content_menu_leida_content").show();
                    $("#little_menu_leida").show();

                    $("#heading_menu_leida").css("background-color","#EFEFEF");
                    $("#leida").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-06.png) -0px -54px");
                    $("#heading_menu_leida>p").css("color","#8A8A8A");
                }
            },
            function(){
                if($("#content_menu_leida_content").is(":hidden")){
                    $("#leida").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-06.png) -0px -0px");
                    $("#heading_menu_leida>p").css("color","#9FA1A2");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $("#content_menu_leida_content").css("height","100%");
                    $(".content_menu_lists_all").hide();
                    $("#heading_menu_leida").css("background-color","#2A2E34");
                    $("#leida").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-06.png) -0px -0px");
                    $("#heading_menu_leida>p").css("color","#9FA1A2");
                    $("#little_menu_leida").hide();
                }
            }
        );

        $("#heading_menu_shangjia").click(
            function(){
                $("#little_menu_shangjia").hide();
                $(".content_menu_lists_all").show();
                $(".content_menu_weigou_title").show();
                $(".content_menu_hide").show();
                $(".content_menu_content").css("margin-top","76px");
                $(".heading_menu_list").css("background-color","#2A2E34");
                $(".content_menu_content").hide();
                $("#content_menu_shangjia_content").show();
                $("#content_menu_shangjia_content").css("height","100%");
                $(".content_menu_tips").css("width","990px").css("margin-left","250px");

                $("#heading_menu_shangjia").css("background-color","#EFEFEF");
                $("#shangjia").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-07.png) -0px -54px");
                $("#heading_menu_shangjia>p").css("color","#8A8A8A");

                $("#weigou").css("width","25px").css("height","20px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-01.png) -0px -0px");
                $("#hudong").css("width","25px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-02.png) -0px -0px");
                $("#weizhanhui").css("width","18px").css("height","26px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-03.png) -0px -0px");
                $("#fangwei").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-04.png) -0px -0px");
                $("#fensibao").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-05.png) -0px -0px");
                $("#leida").css("width","24px").css("height","24px")
                    .css("margin-left","24px").css("margin-top","16px")
                    .css("background","url(./img/a-06.png) -0px -0px");
            }
        );
        $("#heading_menu_shangjia").hover(
            function(){
                if($("#content_menu_shangjia_content").is(":hidden")){
                    $("#shangjia").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-07.png) -0px -27px");
                    $("#heading_menu_shangjia>p").css("color","#FFFFFF");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $(".content_menu_weigou_title").hide();
                    $(".content_menu_content").hide();
                    $(".content_menu_content").css("margin-top","76px");
                    $("#content_menu_shangjia_content").show();
                    $("#little_menu_shangjia").show();

                    $("#heading_menu_shangjia").css("background-color","#EFEFEF");
                    $("#shangjia").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-07.png) -0px -54px");
                    $("#heading_menu_shangjia>p").css("color","#8A8A8A");
                }
            },
            function(){
                if($("#content_menu_shangjia_content").is(":hidden")){
                    $("#shangjia").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-07.png) -0px -0px");
                    $("#heading_menu_shangjia>p").css("color","#9FA1A2");
                }
                if($(".content_menu_weigou_title").is(":hidden")){
                    $("#content_menu_shangjia_content").css("height","100%");
                    $(".content_menu_lists_all").hide();
                    $("#heading_menu_shangjia").css("background-color","#2A2E34");
                    $("#shangjia").css("width","24px").css("height","24px")
                        .css("margin-left","24px").css("margin-top","16px")
                        .css("background","url(./img/a-07.png) -0px -0px");
                    $("#heading_menu_shangjia>p").css("color","#9FA1A2");
                    $("#little_menu_shangjia").hide();
                }
            }
        );

        $(".content_menu_hide").click(function(){
            $(".content_menu_lists_all").hide();
            $(".content_menu_hide").hide();
            $(".heading_menu_list").css("background-color","#2A2E34");
            $(".heading_menu_list>p").css("color", "#9FA1A2");
            $(".content_menu_tips").css("width","1130px").css("margin-left","110px");
            $("#weigou").css("width","25px").css("height","20px")
                .css("margin-left","24px").css("margin-top","16px")
                .css("background","url(./img/a-01.png) -0px -0px");
            $("#hudong").css("width","25px").css("height","24px")
                .css("margin-left","24px").css("margin-top","16px")
                .css("background","url(./img/a-02.png) -0px -0px");
            $("#weizhanhui").css("width","18px").css("height","26px")
                .css("margin-left","24px").css("margin-top","16px")
                .css("background","url(./img/a-03.png) -0px -0px");
            $("#fangwei").css("width","24px").css("height","24px")
                .css("margin-left","24px").css("margin-top","16px")
                .css("background","url(./img/a-04.png) -0px -0px");
            $("#fensibao").css("width","24px").css("height","24px")
                .css("margin-left","24px").css("margin-top","16px")
                .css("background","url(./img/a-05.png) -0px -0px");
            $("#leida").css("width","24px").css("height","24px")
                .css("margin-left","24px").css("margin-top","16px")
                .css("background","url(./img/a-06.png) -0px -0px");
            $("#shangjia").css("width","24px").css("height","24px")
                .css("margin-left","24px").css("margin-top","16px")
                .css("background","url(./img/a-07.png) -0px -0px");
        });

        $(".content_menu_tips_right").click(function(){
            $(".content_menu_tips").hide();
        });
    }
);
