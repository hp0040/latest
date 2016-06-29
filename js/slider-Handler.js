(function() {
    $(".slider-range").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [200, 1000],
        slide: function(e, ui) {
            var hours1 = Math.floor(ui.values[0] / 60);
            var minutes1 = ui.values[0] - (hours1 * 60);

            if (hours1.length == 1) hours1 = '0' + hours1;
            if (minutes1.length == 1) minutes1 = '0' + minutes1;
            if (minutes1 == 0) minutes1 = '00';
            if (hours1 >= 12) {
                if (hours1 == 12) {
                    hours1 = hours1;
                    minutes1 = minutes1 + " hrs";
                } else {
                    hours1 = hours1 - 12;
                    minutes1 = minutes1 + " hrs";
                }
            } else {
                hours1 = hours1;
                minutes1 = minutes1 + " hrs";
            }
            if (hours1 == 0) {
                hours1 = 12;
                minutes1 = minutes1;
            }



            $('.slider-time').html(hours1 + ':' + minutes1);

            var hours2 = Math.floor(ui.values[1] / 60);
            var minutes2 = ui.values[1] - (hours2 * 60);

            if (hours2.length == 1) hours2 = '0' + hours2;
            if (minutes2.length == 1) minutes2 = '0' + minutes2;
            if (minutes2 == 0) minutes2 = '00';
            if (hours2 >= 12) {
                if (hours2 == 12) {
                    hours2 = hours2;
                    minutes2 = minutes2 + " hrs";
                } else if (hours2 == 24) {
                    hours2 = 11;
                    minutes2 = "59 hrs";
                } else {
                    hours2 = hours2 - 12;
                    minutes2 = minutes2 + " hrs";
                }
            } else {
                hours2 = hours2;
                minutes2 = minutes2 + " hrs";
            }

            $('.slider-time2').html(hours2 + ':' + minutes2);
        }
    });



    $(".slider-range1").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [200, 1000],
        slide: function(e, ui) {
            var hours1 = Math.floor(ui.values[0] / 60);
            var minutes1 = ui.values[0] - (hours1 * 60);

            if (hours1.length == 1) hours1 = '0' + hours1;
            if (minutes1.length == 1) minutes1 = '0' + minutes1;
            if (minutes1 == 0) minutes1 = '00';
            if (hours1 >= 12) {
                if (hours1 == 12) {
                    hours1 = hours1;
                    minutes1 = minutes1 + " hrs";
                } else {
                    hours1 = hours1 - 12;
                    minutes1 = minutes1 + " hrs";
                }
            } else {
                hours1 = hours1;
                minutes1 = minutes1 + " hrs";
            }
            if (hours1 == 0) {
                hours1 = 12;
                minutes1 = minutes1;
            }



            $('.slider-time1').html(hours1 + ':' + minutes1);

            var hours2 = Math.floor(ui.values[1] / 60);
            var minutes2 = ui.values[1] - (hours2 * 60);

            if (hours2.length == 1) hours2 = '0' + hours2;
            if (minutes2.length == 1) minutes2 = '0' + minutes2;
            if (minutes2 == 0) minutes2 = '00';
            if (hours2 >= 12) {
                if (hours2 == 12) {
                    hours2 = hours2;
                    minutes2 = minutes2 + " hrs";
                } else if (hours2 == 24) {
                    hours2 = 11;
                    minutes2 = "59 hrs";
                } else {
                    hours2 = hours2 - 12;
                    minutes2 = minutes2 + " hrs";
                }
            } else {
                hours2 = hours2;
                minutes2 = minutes2 + " hrs";
            }

            $('.slider-time3').html(hours2 + ':' + minutes2);
        }
    });

    $(".slider-range2").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [200, 1000],
        slide: function(e, ui) {
            var hours1 = Math.floor(ui.values[0] / 60);
            var minutes1 = ui.values[0] - (hours1 * 60);

            if (hours1.length == 1) hours1 = '0' + hours1;
            if (minutes1.length == 1) minutes1 = '0' + minutes1;
            if (minutes1 == 0) minutes1 = '00';
            if (hours1 >= 12) {
                if (hours1 == 12) {
                    hours1 = hours1;
                    minutes1 = minutes1 + " hrs";
                } else {
                    hours1 = hours1 - 12;
                    minutes1 = minutes1 + " hrs";
                }
            } else {
                hours1 = hours1;
                minutes1 = minutes1 + " hrs";
            }
            if (hours1 == 0) {
                hours1 = 12;
                minutes1 = minutes1;
            }



            $('.slider-time4').html(hours1 + ':' + minutes1);

            var hours2 = Math.floor(ui.values[1] / 60);
            var minutes2 = ui.values[1] - (hours2 * 60);

            if (hours2.length == 1) hours2 = '0' + hours2;
            if (minutes2.length == 1) minutes2 = '0' + minutes2;
            if (minutes2 == 0) minutes2 = '00';
            if (hours2 >= 12) {
                if (hours2 == 12) {
                    hours2 = hours2;
                    minutes2 = minutes2 + " hrs";
                } else if (hours2 == 24) {
                    hours2 = 11;
                    minutes2 = "59 hrs";
                } else {
                    hours2 = hours2 - 12;
                    minutes2 = minutes2 + " hrs";
                }
            } else {
                hours2 = hours2;
                minutes2 = minutes2 + " hrs";
            }

            $('.slider-time5').html(hours2 + ':' + minutes2);
        }
    });

    $(".slider-range3").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [200, 1000],
        slide: function(e, ui) {
            var hours1 = Math.floor(ui.values[0] / 60);
            var minutes1 = ui.values[0] - (hours1 * 60);

            if (hours1.length == 1) hours1 = '0' + hours1;
            if (minutes1.length == 1) minutes1 = '0' + minutes1;
            if (minutes1 == 0) minutes1 = '00';
            if (hours1 >= 12) {
                if (hours1 == 12) {
                    hours1 = hours1;
                    minutes1 = minutes1 + " hrs";
                } else {
                    hours1 = hours1 - 12;
                    minutes1 = minutes1 + " hrs";
                }
            } else {
                hours1 = hours1;
                minutes1 = minutes1 + " hrs";
            }
            if (hours1 == 0) {
                hours1 = 12;
                minutes1 = minutes1;
            }



            $('.slider-time6').html(hours1 + ':' + minutes1);

            var hours2 = Math.floor(ui.values[1] / 60);
            var minutes2 = ui.values[1] - (hours2 * 60);

            if (hours2.length == 1) hours2 = '0' + hours2;
            if (minutes2.length == 1) minutes2 = '0' + minutes2;
            if (minutes2 == 0) minutes2 = '00';
            if (hours2 >= 12) {
                if (hours2 == 12) {
                    hours2 = hours2;
                    minutes2 = minutes2 + " hrs";
                } else if (hours2 == 24) {
                    hours2 = 11;
                    minutes2 = "59 hrs";
                } else {
                    hours2 = hours2 - 12;
                    minutes2 = minutes2 + " hrs";
                }
            } else {
                hours2 = hours2;
                minutes2 = minutes2 + " hrs";
            }

            $('.slider-time7').html(hours2 + ':' + minutes2);
        }
    });

    $(".slider-range4").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [200, 1000],
        slide: function(e, ui) {
            var hours1 = Math.floor(ui.values[0] / 60);
            var minutes1 = ui.values[0] - (hours1 * 60);

            if (hours1.length == 1) hours1 = '0' + hours1;
            if (minutes1.length == 1) minutes1 = '0' + minutes1;
            if (minutes1 == 0) minutes1 = '00';
            if (hours1 >= 12) {
                if (hours1 == 12) {
                    hours1 = hours1;
                    minutes1 = minutes1 + " hrs";
                } else {
                    hours1 = hours1 - 12;
                    minutes1 = minutes1 + " hrs";
                }
            } else {
                hours1 = hours1;
                minutes1 = minutes1 + " hrs";
            }
            if (hours1 == 0) {
                hours1 = 12;
                minutes1 = minutes1;
            }



            $('.slider-time8').html(hours1 + ':' + minutes1);

            var hours2 = Math.floor(ui.values[1] / 60);
            var minutes2 = ui.values[1] - (hours2 * 60);

            if (hours2.length == 1) hours2 = '0' + hours2;
            if (minutes2.length == 1) minutes2 = '0' + minutes2;
            if (minutes2 == 0) minutes2 = '00';
            if (hours2 >= 12) {
                if (hours2 == 12) {
                    hours2 = hours2;
                    minutes2 = minutes2 + " hrs";
                } else if (hours2 == 24) {
                    hours2 = 11;
                    minutes2 = "59 hrs";
                } else {
                    hours2 = hours2 - 12;
                    minutes2 = minutes2 + " hrs";
                }
            } else {
                hours2 = hours2;
                minutes2 = minutes2 + " hrs";
            }

            $('.slider-time9').html(hours2 + ':' + minutes2);
        }
    });

    $(".slider-range5").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [200, 1000],
        slide: function(e, ui) {
            var hours1 = Math.floor(ui.values[0] / 60);
            var minutes1 = ui.values[0] - (hours1 * 60);

            if (hours1.length == 1) hours1 = '0' + hours1;
            if (minutes1.length == 1) minutes1 = '0' + minutes1;
            if (minutes1 == 0) minutes1 = '00';
            if (hours1 >= 12) {
                if (hours1 == 12) {
                    hours1 = hours1;
                    minutes1 = minutes1 + " hrs";
                } else {
                    hours1 = hours1 - 12;
                    minutes1 = minutes1 + " hrs";
                }
            } else {
                hours1 = hours1;
                minutes1 = minutes1 + " hrs";
            }
            if (hours1 == 0) {
                hours1 = 12;
                minutes1 = minutes1;
            }
            $('.slider-time10').html(hours1 + ':' + minutes1);

            var hours2 = Math.floor(ui.values[1] / 60);
            var minutes2 = ui.values[1] - (hours2 * 60);

            if (hours2.length == 1) hours2 = '0' + hours2;
            if (minutes2.length == 1) minutes2 = '0' + minutes2;
            if (minutes2 == 0) minutes2 = '00';
            if (hours2 >= 12) {
                if (hours2 == 12) {
                    hours2 = hours2;
                    minutes2 = minutes2 + " hrs";
                } else if (hours2 == 24) {
                    hours2 = 11;
                    minutes2 = "59 hrs";
                } else {
                    hours2 = hours2 - 12;
                    minutes2 = minutes2 + " hrs";
                }
            } else {
                hours2 = hours2;
                minutes2 = minutes2 + " hrs";
            }

            $('.slider-time11').html(hours2 + ':' + minutes2);
        }
    });

    $('.rating-slider').slider({
        range: true,
        min: 0,
        max: 10,
        step: 1,
        values: [2, 7],
        slide: function(e, ui) {
            var parent = $(e.target).parents('.slider-cont');
            var minVal = parent.find('.slider-time10');
            var maxVal = parent.find('.slider-time11');
            minVal.html(ui.values[0]);
            maxVal.html(ui.values[1]);
        }
    });
    $('.stars-slider').slider({
        range: true,
        min: 0,
        max: 5,
        step: 1,
        values: [1, 3],
        slide: function(e, ui) {
            var parent = $(e.target).parents('.slider-cont');
            var minVal = parent.find('.slider-time10');
            var maxVal = parent.find('.slider-time11');
            minVal.html(ui.values[0]);
            maxVal.html(ui.values[1]);
        }
    });
    $('.price-slider').slider({
        range: true,
        min: 0,
        max: 1000,
        step: 10,
        values: [100, 750],
        slide: function(e, ui) {
            var parent = $(e.target).parents('.slider-cont');
            var minVal = parent.find('.slider-time10');
            var maxVal = parent.find('.slider-time11');
            minVal.html('$' + ui.values[0]);
            maxVal.html('$' + ui.values[1]);
        }
    });

})();
