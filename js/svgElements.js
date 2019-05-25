var desktopElements = document.getElementsByClassName("desktopElement");
var mobTabElements = document.getElementsByClassName("mobTabElement");
var mobIcons = document.getElementsByClassName("mobIcon");
var desktopIcons = document.getElementsByClassName("desktopIcon");

window.onload = function () {

    var r = Raphael("holder", 600, 600),
        rl = Raphael("holder_lines", 800, 800),
        rbw = Raphael("holder_button_wrappers", 600, 600),
        rmm = Raphael("holder_mob_menu", 280, 280),
        R = 180,
        param = {"stroke-width": 75};
                
        var drawTheCircleVector = function (value, total, R, type, center_x, center_y) {
            var alpha = 360 / total * value,
                a = (90 - alpha) * Math.PI / 180,
                x = center_x + R * Math.cos(a),
                y = center_y - R * Math.sin(a),
                color,
                path;

            if (type == 1)
                color = "black";
            if (type == 2)
                color = "#26b99a";
            if (type == 3)
                color = "#3182c5";

            path = [["M", center_x, center_y - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
                    
            return {path: path, stroke: color};
        };

        r.customAttributes.arc = drawTheCircleVector;
        rbw.customAttributes.arc = drawTheCircleVector;
        rmm.customAttributes.arc = drawTheCircleVector;

        var arc1 = r.path().attr(param).attr({arc: [16.66666666666667, 100, R, 2, 300, 300]});
        var arc2 = r.path().attr(param).attr({arc: [16.66666666666667, 100, R, 3, 300, 300]});
        var arc3 = r.path().attr(param).attr({arc: [16.66666666666667, 100, R, 2, 300, 300]});
        var arc4 = r.path().attr(param).attr({arc: [16.66666666666667, 100, R, 3, 300, 300]});
        var arc5 = r.path().attr(param).attr({arc: [16.66666666666667, 100, R, 2, 300, 300]});
        var arc6 = r.path().attr(param).attr({arc: [16.66666666666667, 100, R, 3, 300, 300]});

        arc2.rotate(60,300,300);
        arc3.rotate(120,300,300);
        arc4.rotate(180,300,300);
        arc5.rotate(240,300,300);
        arc6.rotate(300,300,300);

        var button1 = rbw.path().attr(param).attr({arc: [16.66666666666667, 100, R, 1, 300, 300]});
        button1.attr("stroke-opacity", 0);
        var button2 = rbw.path().attr(param).attr({arc: [16.66666666666667, 100, R, 1, 300, 300]});
        button2.attr("stroke-opacity", 0);
        var button3 = rbw.path().attr(param).attr({arc: [16.66666666666667, 100, R, 1, 300, 300]});
        button3.attr("stroke-opacity", 0);
        var button4 = rbw.path().attr(param).attr({arc: [16.66666666666667, 100, R, 1, 300, 300]});
        button4.attr("stroke-opacity", 0);
        var button5 = rbw.path().attr(param).attr({arc: [16.66666666666667, 100, R, 1, 300, 300]});
        button5.attr("stroke-opacity", 0);
        var button6 = rbw.path().attr(param).attr({arc: [16.66666666666667, 100, R, 1, 300, 300]});
        button6.attr("stroke-opacity", 0);

        button2.rotate(60,300,300);
        button3.rotate(120,300,300);
        button4.rotate(180,300,300);
        button5.rotate(240,300,300);
        button6.rotate(300,300,300);

        var mobMenuArc1,mobMenuArc2,mobMenuArc3,mobMenuArc4,mobMenuArc5,mobMenuArc6;
        mobMenuArc1 = rmm.path().attr("stroke-width", 45).attr({arc: [17, 100, 110, 2, 140, 140]});
        mobMenuArc2 = rmm.path().attr("stroke-width", 45).attr({arc: [17, 100, 110, 3, 140, 140]});
        mobMenuArc2.rotate(60, 140, 140);
        mobMenuArc3 = rmm.path().attr("stroke-width", 45).attr({arc: [17, 100, 110, 2, 140, 140]});
        mobMenuArc3.rotate(120, 140, 140);
        mobMenuArc4 = rmm.path().attr("stroke-width", 45).attr({arc: [17, 100, 110, 3, 140, 140]});
        mobMenuArc4.rotate(180, 140, 140);
        mobMenuArc5 = rmm.path().attr("stroke-width", 45).attr({arc: [17, 100, 110, 2, 140, 140]});
        mobMenuArc5.rotate(240, 140, 140);
        mobMenuArc6 = rmm.path().attr("stroke-width", 45).attr({arc: [17, 100, 110, 3, 140, 140]});
        mobMenuArc6.rotate(300, 140, 140);

        mobMenuArc1.node.style.cursor = "pointer";
        mobMenuArc2.node.style.cursor = "pointer";
        mobMenuArc3.node.style.cursor = "pointer";
        mobMenuArc4.node.style.cursor = "pointer";
        mobMenuArc5.node.style.cursor = "pointer";
        mobMenuArc6.node.style.cursor = "pointer";

        var mobMenuLink1 = function() {
            window.open("http://www.evoke.rs", "_blank");
        }
        mobMenuArc1.node.onclick = mobMenuLink1;
        document.getElementById("web_icon_wrapper_mob").onclick = mobMenuLink1;

        var mobMenuSkype = function() {
            window.location.href = ("skype:evoke.rs?userinfo");
        }
        mobMenuArc4.node.onclick = mobMenuSkype;
        document.getElementById("skype_icon_wrapper_mob").onclick = mobMenuSkype;

        var mobMenuLink2 = function() {
            window.open("https://www.linkedin.com/company/evoke-agency", "_blank");
        }
        mobMenuArc2.node.onclick = mobMenuLink2;
        document.getElementById("linkedin_icon_wrapper_mob").onclick = mobMenuLink2;

        var mobMenuLink3 = function() {
            window.open("https://www.instagram.com/rs.evoke/", "_blank");
        }
        mobMenuArc3.node.onclick = mobMenuLink3;
        document.getElementById("instagram_icon_wrapper_mob").onclick = mobMenuLink3;

        var mobMenuMail = function() {
            window.location.href = 'mailto:office@evoke.rs';
        }
        mobMenuArc6.node.onclick = mobMenuMail;
        document.getElementById("mail_icon_wrapper_mob").onclick = mobMenuMail;

        var mobMenuDial = function() {
            window.location.href = 'tel:+38163694585';
        }
        mobMenuArc5.node.onclick = mobMenuDial;
        document.getElementById("phone_icon_wrapper_mob").onclick = mobMenuDial;

        var gap1 = rbw.path("M 288 80 L 312 80 L 312 159 L 288 159 Z").attr("fill", "#13385C").attr("stroke-width", "0");
        var gap2 = rbw.path("M 288 80 L 312 80 L 312 159 L 288 159 Z").attr("fill", "#153C61").attr("stroke-width", "0");
        var gap3 = rbw.path("M 288 80 L 312 80 L 312 159 L 288 159 Z").attr("fill", "#143B5F").attr("stroke-width", "0");
        var gap4 = rbw.path("M 288 80 L 312 80 L 312 159 L 288 159 Z").attr("fill", "#13395C").attr("stroke-width", "0");
        var gap5 = rbw.path("M 288 80 L 312 80 L 312 159 L 288 159 Z").attr("fill", "#12375A").attr("stroke-width", "0");
        var gap6 = rbw.path("M 288 80 L 312 80 L 312 159 L 288 159 Z").attr("fill", "#113659").attr("stroke-width", "0");
        gap2.rotate(60, 300,300);
        gap3.rotate(120, 300,300);
        gap4.rotate(180, 300,300);
        gap5.rotate(240, 300,300);
        gap6.rotate(300, 300,300);

        button1.node.style.cursor = "pointer";
        button2.node.style.cursor = "pointer";
        button3.node.style.cursor = "pointer";
        button4.node.style.cursor = "pointer";
        button5.node.style.cursor = "pointer";
        button6.node.style.cursor = "pointer";

        var linkedin_line1, linkedin_line2, linkedin_circle;
        document.getElementById('linkedin_text_wrapper').style.display = "none";

        function linkedInHoverStop() {
            linkedin_line1.node.style.display = "none";
            linkedin_line2.node.style.display = "none";
            linkedin_circle.node.style.display = "none";
            //document.getElementById('linkedin_text_wrapper').style.display = "none";
            $('#linkedin_text_wrapper').stop(true).fadeTo(0,0);
            delete linkedin_line1;
            console.log(linkedin_line1);
            delete linkedin_line2;
            console.log(linkedin_line1);
            delete linkedin_circle;
            console.log(linkedin_line1);
        }

        button2.hover(function() {
            linkedin_line1 = rl.path("M616 399").attr("stroke", "#3182c5").attr("stroke-width", 3.5);
            linkedin_line2 = rl.path("M696 399").attr("stroke", "#3182c5").attr("stroke-width", 3.5);
            linkedin_circle = rl.circle(756, 355, 0.1).attr("fill", "#3182c5").attr("stroke-width", 0);

            $('#linkedin_text_wrapper').stop(true).fadeTo(420,1);

            linkedin_line1.animate({path: "M 616 399 L 696 399"}, 150, function() {
                linkedin_line2.animate({path: "M 695 399 L 756 355"}, 150, function() {
                    linkedin_circle.animate({transform: 'S50'}, 120);
                });
            });
        }, linkedInHoverStop);

        button2.node.onclick = function() {
            window.open("https://www.linkedin.com/company/evoke-agency", "_blank");
            linkedInHoverStop();
        };

        var phone_line1, phone_line2, phone_circle;
        document.getElementById('phone_text_wrapper').style.display = "none";

        function phoneHoverStop() {
            phone_line1.node.style.display = "none";
            phone_line2.node.style.display = "none";
            phone_circle.node.style.display = "none";
            $("#phone_text_wrapper").stop(true).fadeTo(0,0);
            delete phone_line1;
            console.log(phone_line1);
            delete phone_line2;
            console.log(phone_line1);
            delete phone_circle;
            console.log(phone_line1);
        }

        button5.hover(function() {
            phone_line1 = rl.path("M184 399").attr("stroke", "#26b99a").attr("stroke-width", 3.5);
            phone_line2 = rl.path("M104 399").attr("stroke", "#26b99a").attr("stroke-width", 3.5);
            phone_circle = rl.circle(44, 445, 0.1).attr("fill", "#26b99a").attr("stroke-width", 0);

            $('#phone_text_wrapper').stop(true).fadeTo(420,1);

            phone_line1.animate({path: "M184 399L 104 399"}, 150, function() {
                phone_line2.animate({path: "M 105 399L 44 445"}, 150, function() {
                    phone_circle.animate({transform: 'S50'}, 120);
                });
            });
        }, phoneHoverStop);

        button5.node.onclick = function() {
            window.location.href = 'tel:+38163694585';
            phoneHoverStop();
        };

        var skype_line1, skype_line2, skype_circle;
        document.getElementById("skype_text_wrapper").style.display = "none";

        function skypeHoverStop() {
            skype_line1.node.style.display = "none";
            skype_line2.node.style.display = "none";
            skype_circle.node.style.display = "none";
            document.getElementById('skype_text_wrapper').style.display = "none";
            $('#skype_text_wrapper').stop(true).fadeTo(0,0);
            delete skype_line1;
            console.log(skype_line1);
            delete skype_line2;
            console.log(skype_line1);
            delete skype_circle;
            console.log(skype_line1);
        }

        button4.hover(function() {
            skype_line1 = rl.path("M283 582").attr("stroke", "#3182c5").attr("stroke-width", 3.5);
            skype_line2 = rl.path("M221 628").attr("stroke", "#3182c5").attr("stroke-width", 3.5);
            skype_circle = rl.circle(141, 628, 0.1).attr("fill", "#3182c5").attr("stroke-width", 0);

            $('#skype_text_wrapper').stop(true).fadeTo(420,1);

            skype_line1.animate({path: "M283 582L 221 628"}, 150, function() {
                skype_line2.animate({path: "M 222 628L 141 628"}, 150, function() {
                    skype_circle.animate({transform: 'S50'}, 120);
                });
            });
        }, skypeHoverStop);

        button4.node.onclick = function() {
            window.location.href = ("skype:evoke.rs?userinfo");
            skypeHoverStop();
        };

        var web_line1, web_line2, web_circle;
        document.getElementById('web_text_wrapper').style.display = "none";

        function webHoverStop() {
            web_line1.node.style.display = "none";
            web_line2.node.style.display = "none";
            web_circle.node.style.display = "none";
            $('#web_text_wrapper').stop(true).fadeTo(0,0);
            delete web_line1;
            console.log(web_line1);
            delete web_line2;
            console.log(web_line1);
            delete web_circle;
            console.log(web_line1);
        }

        button1.hover(function() {
            web_line1 = rl.path("M510 214").attr("stroke", "#26b99a").attr("stroke-width", 3.5);
            web_line2 = rl.path("M567 169").attr("stroke", "#26b99a").attr("stroke-width", 3.5);
            web_circle = rl.circle(647, 169, 0.1).attr("fill", "#26b99a").attr("stroke-width", 0);

                    //document.getElementById('web_text_wrapper').style.display = "block";
            $('#web_text_wrapper').stop(true).fadeTo(420,1);

            web_line1.animate({path: "M510 214L 567 169"}, 150, function() {
                web_line2.animate({path: "M 566 169L 647 169"}, 150, function() {
                    web_circle.animate({transform: 'S50'}, 120);
                });
            });
        }, webHoverStop);

        button1.node.onclick = function() {
            window.open('http://evoke.rs/', '_blank');
            webHoverStop();
        };

        var mail_line, mail_circle;
        document.getElementById('mail_text_wrapper').style.display = "none";

        function mailHoverStop() {
            mail_line.node.style.display = "none";
            mail_circle.node.style.display = "none";
            $('#mail_text_wrapper').stop(true).fadeTo(0,0);
            delete mail_line;
            console.log(mail_line);
            delete mail_circle;
            console.log(mail_line);
        }

        button6.hover(function() {
            mail_line = rl.path("M287 216").attr("stroke", "#3182c5").attr("stroke-width", 3.5);
            mail_circle = rl.circle(247, 185, 0.1).attr("fill", "#3182c5").attr("stroke-width", 0);

            $('#mail_text_wrapper').stop(true).fadeTo(270,1);

            mail_line.animate({path: "M 287 216 L 247 185"}, 150, function() {
                mail_circle.animate({transform: 'S50'}, 120);
            });
        }, mailHoverStop);

        button6.node.onclick = function() {
            window.location.href = 'mailto:office@evoke.rs';
            mailHoverStop();
        };

        var instagram_line, instagram_circle;
        document.getElementById('instagram_text_wrapper').style.display = "none";

        function instagramHoverStop() {
            instagram_line.node.style.display = "none";
            instagram_circle.node.style.display = "none";
            //document.getElementById('instagram_text_wrapper').style.display = "none";
            $('#instagram_text_wrapper').stop(true).fadeTo(0,0);
            delete instagram_line;
            console.log(instagram_line);
            delete instagram_circle;
            console.log(instagram_line);
        }

        button3.hover(function() {
            instagram_line = rl.path("M521 578").attr("stroke", "#26b99a").attr("stroke-width", 3.5);
            instagram_circle = rl.circle(570, 618, 0.1).attr("fill", "#26b99a").attr("stroke-width", 0);

            $('#instagram_text_wrapper').stop(true).fadeTo(270,1);

            instagram_line.animate({path: "M 521 578 L 570 618"}, 150, function() {
                instagram_circle.animate({transform: 'S50'}, 120);
            });
        }, instagramHoverStop);

        button3.node.onclick = function() {
            window.open('https://www.instagram.com/rs.evoke/', '_blank');
            instagramHoverStop();
        }; 

        var deviceWidth = window.innerWidth;
        var deviceHeight = window.innerHeight;
        if (deviceWidth < 950 || deviceHeight < 500) {
            for (var i=0; i<desktopElements.length; i++)
                desktopElements[i].style.display = "none";
            for (var i=0; i<mobTabElements.length; i++)
                mobTabElements[i].style.display = "block";
            for (var i=0; i<mobIcons.length; i++)
                mobIcons[i].style.display = "none";

            mobMenuArc1.animate({transform: "r360" + "," + 140 + "," + 140}, 2000, "<>");
            mobMenuArc2.animate({transform: "r420" + "," + 140 + "," + 140}, 2000, "<>");
            mobMenuArc3.animate({transform: "r480" + "," + 140 + "," + 140}, 2000, "<>");
            mobMenuArc4.animate({transform: "r540" + "," + 140 + "," + 140}, 2000, "<>");
            mobMenuArc5.animate({transform: "r600" + "," + 140 + "," + 140}, 2000, "<>");
            mobMenuArc6.animate({transform: "r660" + "," + 140 + "," + 140}, 2000, "<>");

            $('.mobIcon').delay(2000).fadeTo(500, 1);

        } else {
            for (var i=0; i<desktopElements.length; i++)
                desktopElements[i].style.display = "block";
            for (var i=0; i<mobTabElements.length; i++)
                mobTabElements[i].style.display = "none";
        }
};

window.onresize = function(event) {
    var deviceWidth = window.innerWidth;
    var deviceHeight = window.innerHeight;

    if (deviceWidth < 950 || deviceHeight < 500) {
        for (var i=0; i<desktopElements.length; i++)
            desktopElements[i].style.display = "none";
        for (var i=0; i<mobTabElements.length; i++)
            mobTabElements[i].style.display = "block";
    } else {
        for (var i=0; i<desktopElements.length; i++)
            desktopElements[i].style.display = "block";
        for (var i=0; i<mobTabElements.length; i++)
            mobTabElements[i].style.display = "none";
    }

};