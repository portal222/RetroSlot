$(document).ready(function () {

    var prvaSlika = $("#prvi");
    var drugaSlika = $("#drugi");
    var trecaSlika = $("#treci");
    var kredit = parseInt(prompt("koliko kredita uplacujete?", 100));
    $("#kredit b").html(kredit);
    $("#rez").html("Osvojite Dijamante!");


    //Manje slika za vecu verovatnocu pogotka
    // var slike = [img/tresnja_beli_rub.png", "img/detelina_beli_rub.png", "img/dijamant_beli_rub.png"];

    var slike = ["img/tresnja_beli_rub.png", "img/detelina_beli_rub.png", "img/dijamant_beli_rub.png", "img/limun_beli_rub.png",
        "img/narandza_beli_rub.png", "img/lubenica_beli_rub.png", "img/jagoda_beli_rub.png"];





    var rand1;
    var rand2;
    var rand3;

    function generateRandom() {

        $("#prvi").animate({
            top: "-90"
        }, 1);
        $("#drugi").animate({
            top: "-90"
        }, 30);
        $("#treci").animate({
            top: "-90"
        }, 70);

        rand1 = Math.floor(Math.random() * slike.length);
        rand2 = Math.floor(Math.random() * slike.length);
        rand3 = Math.floor(Math.random() * slike.length);
        console.log(rand1 + " " + rand2 + " " + rand3);

        prvaSlika.attr("src", slike[rand1]);
        drugaSlika.attr("src", slike[rand2]);
        trecaSlika.attr("src", slike[rand3]);

        //Animacija koja simulira okretanje tockova

        $("#prvi").animate({
            top: "100px",
        }, 200);
        $("#drugi").animate({
            top: "100px",
        }, 200);
        $("#treci").animate({
            top: "100px",
        }, 200);
        $("#prvi").animate({
            top: "-97"
        }, 1);
        $("#drugi").animate({
            top: "-90"
        }, 1);
        $("#treci").animate({
            top: "-158"
        }, 1);

    };

    $("#spin").click(function () {

        //odlozen pocetak radi uklapanja sa zvukom 
        setTimeout(function () {
            $(".stoji").css("border-color", "yellow");
            $(".tacke").css("border-color", "transparent");
            $(".tacke2").css("color", "transparent");
        }, 200);

        $('audio#pocetak')[0].play();
        //Postavljamo interval koji ce za odredjeno vreme generisati nasumicne brojeve
        //napravili smo varijablu da bi kasnije mogli da zaustavimo  

        var interval = setInterval(generateRandom, 300);

        // generateRandom();
        if (kredit > 9) {

            $("#rez").html("");
            //Postavili smo setTimeout da sacekamo 2 sekunde dok se generisu brojevi
            //pre nego sto zaustavimo interval (okretanje brojeva)
            setTimeout(function () {

                //vrednosti za tri dijamanta
                if (rand1 == 2 && rand2 == 2 && rand3 == 2) {

                    $("#prvi").animate({
                        top: "2px"
                    });
                    $("#drugi").animate({
                        top: "2px"
                    });
                    $("#treci").animate({
                        top: "2px"
                    });

                    //odlaganje animacije, zvuka i teksta da bi se poklopilo sa zaustavjanjem tocka
                    setTimeout(function () {
                        new Audio("sound/ispada_novac.mp3").play();
                        $("#rez").html("BRILJANTNO! 300 evra!");

                        kredit += 300;
                        $("#kredit b").html(kredit);

                        $(".stoji").css("border-color", "transparent");
                        $(".tacke2").css("color", "rgba(255, 255, 0, 0.78)");
                        $(".tacke").css("border-color", "rgb(193, 82, 248");

                        //animacija fontova na ekranu
                        $("#rez").animate({
                            fontSize: "14px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "28px"
                        }, 300);
                        $("#rez").animate({
                            fontSize: "20px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "28px"
                        }, 300);
                        $("#rez").animate({
                            fontSize: "12px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "24px"
                        }, 300);
                        $("#rez").animate({
                            fontSize: "10px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "30px"
                        }, 600);
                        $("#rez").animate({
                            fontSize: "18px"
                        }, 200);
                        $("#rez").animate({
                            fontSize: "30px"
                        }, 700);

                    }, 700);

                } else if (rand1 == 1 && rand2 == 1 && rand3 == 1) {

                    $("#prvi").animate({
                        top: "2px"
                    });
                    $("#drugi").animate({
                        top: "2px"
                    });
                    $("#treci").animate({
                        top: "2px"
                    });

                    setTimeout(function () {
                        new Audio("sound/Detelina_novac.mp3").play();
                        $("#rez").html("BRAVO! 100 evra!");

                        kredit += 100;
                        $("#kredit b").html(kredit);

                        $(".stoji").css("border-color", "transparent");
                        $(".tacke2").css("color", "rgba(193, 82, 248, 0.78)");
                        $(".tacke").css("border-color", "rgb(255, 255, 0)");

                        $("#rez").animate({
                            fontSize: "14px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "28px"
                        }, 300);
                        $("#rez").animate({
                            fontSize: "18px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "28px"
                        }, 500);
                        $("#rez").animate({
                            fontSize: "14px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "28px"
                        }, 500);
                        $("#rez").animate({
                            fontSize: "18px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "28px"
                        }, 800);

                    }, 700);

                } else if (rand1 == rand2 && rand2 == rand3) {

                    $("#prvi").animate({
                        top: "2px"
                    });
                    $("#drugi").animate({
                        top: "2px"
                    });
                    $("#treci").animate({
                        top: "2px"
                    });


                    setTimeout(function () {
                        new Audio("sound/win-jackpot.wav").play();
                        $("#rez").html("JackPot 50 evra!");

                        kredit += 50;
                        $("#kredit b").html(kredit);

                        $(".stoji").css("border-color", "transparent");
                        $(".tacke2").css("color", "rgba(255, 255, 0, 0.78)");
                        $(".tacke").css("border-color", "orange");


                        $("#rez").animate({
                            fontSize: "18px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "28px"
                        }, 300);
                        $("#rez").animate({
                            fontSize: "15px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "28px"
                        }, 300);
                        $("#rez").animate({
                            fontSize: "20px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "28px"
                        }, 500);

                    }, 700);


                } else if (rand1 == 2 && rand2 == 2 && rand3 != rand1) {

                    $("#prvi").animate({
                        top: "2px"
                    });
                    $("#drugi").animate({
                        top: "2px"
                    });
                    $("#treci").animate({
                        top: "2px"
                    });


                    setTimeout(function () {
                        new Audio("sound/win-jackpot.wav").play();
                        $("#rez").html("Dobili ste 50 evra!");

                        kredit += 50;
                        $("#kredit b").html(kredit);

                        $(".stoji").css("border-color", "transparent");
                        $(".tacke2").css("color", "rgba(80, 249, 219, 0.78)");
                        $(".tacke").css("border-color", "orange");

                        $("#rez").animate({
                            fontSize: "24px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "30px"
                        }, 300);
                        $("#rez").animate({
                            fontSize: "18px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "28px"
                        }, 300);
                        $("#rez").animate({
                            fontSize: "22px"
                        }, 100);
                        $("#rez").animate({
                            fontSize: "28px"
                        }, 500);
                        $("#rez").animate({
                            fontSize: "18px"
                        }, 300);

                    }, 700);




                } else if ((rand1 == rand2 && rand2 != rand3) ||
                    (rand1 != rand3 && rand2 == rand1)
                ) {


                    $("#prvi").animate({
                        top: "2px"
                    });
                    $("#drugi").animate({
                        top: "2px"
                    });
                    $("#treci").animate({
                        top: "2px"
                    });

                    setTimeout(function () {
                        new Audio("sound/coin-win.wav").play();
                        $("#rez").html("Dobili ste 25 evra!");

                        kredit += 25;
                        $("#kredit b").html(kredit);

                        $(".stoji").css("border-color", "transparent");
                        $(".tacke").css("border-color", "lightgreen");
                        $(".tacke2").css("color", "rgba(255, 255, 0, 0.78");

                        $("#rez").animate({
                            fontSize: "15px"
                        }, 10);
                        $("#rez").animate({
                            fontSize: "24px"
                        }, 400);
                        $("#rez").animate({
                            fontSize: "20px"
                        }, 10);
                        $("#rez").animate({
                            fontSize: "24px"
                        }, 300);
                        $("#rez").animate({
                            fontSize: "15px"
                        }, 200);
                        $("#rez").animate({
                            fontSize: "24px"
                        }, 700);

                    }, 700);


                } else {

                    $("#prvi").animate({
                        top: "2px"
                    });
                    $("#drugi").animate({
                        top: "2px"
                    });
                    $("#treci").animate({
                        top: "2px"
                    });


                    setTimeout(function () {
                        new Audio("sound/loose-money.wav").play();
                        $("#rez").html("Izgubili ste 10 evra!");

                        kredit -= 10;
                        $("#kredit b").html(kredit);

                        $(".stoji").css("border-color", "red");
                        $(".tacke").css("border-color", "transparent");
                        $(".tacke2").css("color", "transparent")

                        $("#rez").animate({
                            fontSize: "15px"
                        }, 1200);
                        $("#rez").animate({
                            fontSize: "22px"
                        }, 400);

                    }, 700);

                };

                clearInterval(interval);

            }, 2000);

        } else {

            $('audio#pocetak')[0].pause();
            new Audio("sound/ta-da.mp3").play();
            $("#rez").html("Kraj igre!");

            $("#prvi").animate({
                top: "2px"
            });
            $("#drugi").animate({
                top: "2px"
            });
            $("#treci").animate({
                top: "2px"
            });

            $("#spin").attr("disabled", "true");
            clearInterval(interval);

        }


        $("#nova").click(function () {

            location.reload();

        });

    });

});