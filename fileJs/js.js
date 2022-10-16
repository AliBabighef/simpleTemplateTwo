// document.querySelector("body").innerHTML = location.href

let allButton = document.querySelectorAll(".nav-content button");

let directionIcon = document.querySelector(".direction_icon");

let navMenu = document.querySelector(".menu-nav .menu");

let link = document.querySelector(".link");

let allLinks = document.querySelectorAll(".link a");

directionIcon.addEventListener("click", _ => {

    document.querySelector(".features").scrollIntoView({

        behavior: "smooth"

    })

})

// start gollobal function for change background color every click 

function changin(ell) {

    "use strict";

    ell.forEach(allButton => {

        allButton.addEventListener("click", function (e) {

            ell.forEach(bu => {

                bu.classList.remove("active");

            })

            e.target.classList.add("active");


        })

    })


}
changin(allButton)

// end gollobal funtion for change background color every click

// start stop propagation in containaier links and menu 

link.addEventListener("click", function (li) {

    li.stopPropagation();

})

document.querySelectorAll(".menu span").forEach(sp => {

    sp.addEventListener("click", function (s) {

        s.stopPropagation()
        navMenu.parentElement.classList.toggle("open");
        link.classList.toggle("open")

    })

})

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("menu")) {

        e.target.addEventListener("click", function (el) {

            el.stopPropagation();
            navMenu.parentElement.classList.toggle("open");
            link.classList.toggle("open")

        })

    }

    navMenu.parentElement.classList.remove("open");
    link.classList.remove("open")

})
// start stop propagation in containaier links and menu

document.querySelector(".button").onclick = function (e) {

    setTimeout(function () {

        document.querySelectorAll(".hidden").forEach(el => {

            el.classList.toggle("visable")

            if (el.classList.contains("visable")) {

                e.target.classList.add("up")
                e.target.classList.remove("down")

            } else {

                e.target.classList.remove("up");
                e.target.classList.add("down")


            }

        });



    }, 500)


}

allLinks.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(`.${e.target.dataset.dt}`).scrollIntoView({

            behavior: "smooth"

        })

    })

})

let icon = document.querySelectorAll(".icon_place span");

let allPerInfo = document.querySelector(".testi_content");

let i = 1;

function checking() {

    "use strict";

    if (allPerInfo.firstElementChild.classList.contains("active")) {

        document.querySelector(".lt").classList.add("hidden")
        console.log("fst")

    }
    else if ((allPerInfo.lastElementChild.classList.contains("active"))) {

        document.querySelector(".gt").classList.add("hidden")
        console.log("last")


    }
    else {

        document.querySelector(".gt").classList.remove("hidden")
        document.querySelector(".lt").classList.remove("hidden")
        console.log("bttween")

    }


}
checking()

icon.forEach(el => {

    el.addEventListener("click", function (e) {

        /* start when clicked on greater than button */

        if (e.target.classList.contains("gt")) {

            if (document.querySelectorAll(".per_info").length - 1 <= i) {

                document.querySelector(".gt").classList.add("hidden");
                return false;

            }

            document.querySelectorAll(".per_info").forEach(ellments => {

                ellments.classList.add("hidden");
                ellments.classList.remove("active");

            })

            allPerInfo.children[i].classList.add("active");

            allPerInfo.children[i].classList.remove("hidden");

            checking()

            i = i + 1;

        }

        /* end when clicked on greater than button */
        /* start clicked on less than button */

        if (e.target.classList.contains("lt")) {

            if (i <= 0) {

                document.querySelector(".lt").classList.add("hidden");

                return false;

            }

            document.querySelectorAll(".per_info").forEach(ellments => {

                ellments.classList.add("hidden");
                ellments.classList.remove("active");

            })

            allPerInfo.children[i].classList.add("active");

            allPerInfo.children[i].classList.remove("hidden");

            checking()

            i = i - 1;

        }

    })
    /* end when clicked on less than button */

})