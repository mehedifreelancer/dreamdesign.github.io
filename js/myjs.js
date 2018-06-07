        $(document).ready(function () {

            $(".myMenu").click(function () {
                $(".sideNav").slideToggle(500);
            })

            $(".arrowOpen").click(function () {
                $(".sideNav").animate({
                    "width": "220px"
                })
                $(".myMenu").animate({
                    "width": "220px"
                })
                $(".arrowOpen").css({
                    "display": "none"
                })
                $(".arrowClose").css({
                    "display": "block"
                })
                $(".menu").css({
                    "background-color": "#808080"
                })
                $("span").css({
                    "display": "block"
                })


            })
            $(".arrowClose").click(function () {
                $(".sideNav").animate({
                    "width": "100px"
                })
                $(".myMenu").animate({
                    "width": "100px"
                })
                $(".arrowClose").css({
                    "display": "none"
                })
                $(".arrowOpen").css({
                    "display": "block"
                })
                $(".menu").css({
                    "background-color": "transparent"
                })

            })

        })
