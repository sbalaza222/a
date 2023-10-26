var current = 0;
function swap() {
    var embed = document.getElementById("embed");
    switch (current){
        case 0: embed.src = "https://www.youtube.com/embed/RqjsW8qVET4?si=uV76o5NQqVyljObJ"; break;
        case 1: embed.src = "https://www.youtube.com/embed/9BalEldzE8o?si=_GHLspuXIxjpmEiC"; break;
        case 2: embed.src = "https://www.youtube.com/embed/ugeQEKtB2pU?si=ef2BHid_PNcnt4s0"; break;
        case 3: embed.src = "https://www.youtube.com/embed/DNF_OfLo9h4?si=T7Qw24Vuza-8RZwa"; break;
    }
    current += 1;
    if (current > 3){
        current = 0;
    }
}
