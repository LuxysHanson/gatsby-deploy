import $ from "jquery"
import easyPie from "easy-pie-chart"

export default class Main {
    scrollDown() {
        // arrow down
        $('.mbr-arrow').on('click', function (e) {
            var $next = $(e.target).closest('section').next();
            if ($next.hasClass('engine')) {
                $next = $next.closest('section').next();
            }
            var offset = $next.offset();
            $('html, body').stop().animate({
                scrollTop: offset.top
            }, 700, 'linear');
        });
    }

    scrollSticky() {
        // scroll menu
        window.onscroll = function () {
            myFunction()
        };

        var header = document.getElementById("fixed-top"),
            main_header = document.querySelector(".site-header"),
            sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) main_header.classList.add("sticky");
            else main_header.classList.remove("sticky");
        }
    }

    portfolioFilter() {
        const jQueryBridget = require("jquery-bridget");
        const Isotope = require("isotope-layout");

        // Portfolio isotope filter
        jQueryBridget( 'isotope', Isotope, $ );
        let container = $('.portfolio-lists');
        container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.portfolio-cat li').click(function () {
            $('.portfolio-cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    skillsChart() {
        const jQueryBridget = require("jquery-bridget");
        const Isotope = require("isotope-layout");

        // skills chart
        $(document).ready(function (e) {
            var index = 0;
            $(document).scroll(function () {
                var top = $('#skills').height() - $(window).scrollTop();
                if (top < -1000) {
                    if (index === 0) {

                        jQueryBridget('easyPieChart', easyPie, $);
                        $('.chart').easyPieChart({
                            easing: 'easeOutBounce',
                            onStep: function (from, to, percent) {
                                $(this.el).find('.percent').text(Math.round(percent));
                            }
                        });

                    }
                    index++;
                }
            })
        });
    }
}