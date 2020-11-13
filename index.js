let partie = false;
let joueurs = ['X', 'O'];
let tour = 0;

const init = async () =>{
    console.log("Init")
    joueur = joueurs[0];
    morpion = ["1","2","3","4","5","6","7","8","9"];
    partie = true;
    tour = 0;
    document.querySelector("#jouer").innerHTML = "Rejouer"
    document.querySelector("#divmorpion").style.display = "block";
    document.querySelector("#player").style.display = "block";
    for(let i = 1; i < 10 ; i++ ){
        let x = document.createElement("TD");
        let t = document.createTextNode("");
        x.id = String(i);
        x.appendChild(t);
        x.classList.add("case");
        document.querySelector("#zone").appendChild(x);
    }
}
const replay = async () => {
    console.log("Rejouer")
    document.querySelectorAll('.casemorpion>td').forEach(elem => elem.style.backgroundImage = "none");
    document.querySelectorAll('.casemorpion>td').forEach(elem => elem.className = "");
    document.querySelector("#player").innerHTML = "Au joueur X de jouer"
    morpion = ["1","2","3","4","5","6","7","8","9"];
    joueur = joueurs[0];
    tour = 0;
}
const infomorpion = (e) => {
    if(e.target.id == "zone"){
        console.log("T'as clické sur le zone")
        return false;
    }else{
        if (e.target.className.indexOf("filled") >= 0){
            alert("Case déja joué");
        }else{
            if (joueur === joueurs[0]) {
                e.target.style.backgroundImage = "url(./css/croix.png)";
                e.target.style.backgroundSize = "contain";
                e.target.className = "filled";
                e.target.textContent = " ";
                joueur = joueurs[1];
                document.querySelector("#player").innerHTML = "Au joueur O de jouer"
                console.log("X a joué")
            }
            else{
                if (joueur === joueurs[1]) {
                    e.target.style.backgroundImage = "url(./css/rond.png)";
                    e.target.style.backgroundSize = "contain";
                    e.target.className = "filled";
                    e.target.textContent = "  ";
                    joueur = joueurs[0];
                    document.querySelector("#player").innerHTML = "Au joueur X de jouer"
                    console.log("0 a joué")     
                }
            } 
            verif(e);
        }
    }
}
const verif = (e) => {
    console.log(tour)
    morpion.splice(e.target.id-1, 1, e.target.textContent)
    if (morpion[0] === morpion[1] && morpion[0]=== morpion[2] ||
        morpion[3] === morpion[4] && morpion[3]=== morpion[5] ||
        morpion[6] === morpion[7] && morpion[6]=== morpion[8] ||
        morpion[0] === morpion[3] && morpion[0]=== morpion[6] ||
        morpion[1] === morpion[4] && morpion[1]=== morpion[7] ||
        morpion[2] === morpion[5] && morpion[2]=== morpion[8] ||
        morpion[0] === morpion[4] && morpion[0]=== morpion[8] ||
        morpion[2] === morpion[4] && morpion[2]=== morpion[6]) {
        if (joueur === joueurs[0]) {
            alert('Player O WIN');
  
        } else if (joueur === joueurs[1]) {
            alert('Player X WIN');
        }
    }
}
const majImg = async () => {
    try {
        if(url){
            console.log(url)
            return url;
        }
    } catch (error) {
        return error;
    }
}
document.querySelector("#jouer").addEventListener("click", () => {
    if(partie){
        replay();
    }else{
        init();
    }
})
document.querySelector("#jouer").addEventListener("click", replay);
document.querySelector("#zone").addEventListener("click", infomorpion);
