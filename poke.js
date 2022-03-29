// poke Stats
const pokeStatsDiv = document.getElementById("pokeStats");
// Poke name label
const pokeNameid = document.getElementById("pokeNameid");
// poke id
const pokeIdNum = document.getElementById("pokeId");
// poke image
const pokeImg = document.getElementById("pokeImage");
// poke name
const pokeName = document.getElementById("pokeName");
// poke types
const pokeTypeDiv = document.getElementById("pokeType");

const pokeImgBack = document.getElementById("pokeImageBack");

const pokeMoves = document.getElementById ("pokeMoves")


const  fetchPokemon = () => {


    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    // se obtiene lo que hay en el input
    

    const api = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    

    fetch(api).then((res) => {
        // en el caso de que no encuentre la consulta
        if (res.status != '200'){
            console.log(res);
            changeImage("/bad2.png");
            pokeIdNumber(pokeIdNum.innerHTML= "No found");
            
        }
        // console.log(res);
        return res.json();

    }).then((data)=>{

        console.log(data);
        console.log('hola');
        console.log(data.stats);
        console.log(data.moves);
        // console.log(data.types[0].type.name);
        // console.log(data.types[1].type.name);

        for (let index = 0; index < 6; index++) {
            console.log(data.stats[index].stat.name);  
            console.log(data.stats[index].base_stat);     
        }
        // let pokeHp = data.stats[0].stat.name;
        // console.log(pokeHp);
      
        // console.log(pokeHpbase);
        //Pokemon ID number
        let pokeIdNum = data.id;

        let  pokeNameid = data.name;

        let pokeimg = data.sprites.front_default;
        console.log(pokeimg);

        let pokeImageBack = data.sprites.front_shiny;


        // funcion para cambiar la imagen

        changeImage(pokeimg);
        // pokeHpStat(pokeHp);
        pokeIdNumber(pokeIdNum);
        pokeNamefunc( pokeNameid);
        pokeStats(data.stats);
        pokeTypefunc(data.types);
        // image back
        changeImageBack(pokeImageBack);

        getPokeMoves(data.moves)

      
        
    })

   
}
// Pokemon ID
const pokeIdNumber = (pokeId) => {
    // const pokeIdNum = document.getElementById("pokeId");
    pokeIdNum.innerHTML = pokeId;
}
// Pokemon Name
const pokeNamefunc = (pokeName) => {
   
    // const pokeNameid = document.getElementById("pokeNameid");
    pokeNameid.innerHTML = pokeName;
}
// Pokemon type
const pokeTypefunc = (pokeType) => {

    pokeTypeDiv.innerHTML = "";
    console.log("aqui hay algo perro");
    console.log(pokeType);
    pokeType.forEach(readTypes =>{
        console.log("-------------------------------");
        console.log(readTypes);

        const typeElement = document.createElement("div")
        const typeOneElement = document.createElement("div");
        const typeTwoElement = document.createElement("div");

        typeOneElement.className = "pokeTypeLabel";
        typeTwoElement.className = "pokeTypeLabel";
        typeElement.className = "poketypecontainer";

        typeOneElement.textContent = readTypes.type.name;
        typeTwoElement.textContent = readTypes.type.name;

        typeElement.appendChild(typeOneElement);
      


        pokeTypeDiv.appendChild(typeElement);






    })



}
// Poke Image
const changeImage = (url) => {
    pokeImg.src = url;
}
// poke imageback
const changeImageBack = (url2) => {
    pokeImgBack.src = url2;
}

// funcion para onclick guardar el valor que esta en el input
const pokeSearch = () =>{
    let pokeInput = pokeName.value;
    console.log("hola" + pokeInput);
}



// pokestats
const pokeStats = (pokeStatsData) => {
    pokeStatsDiv.innerHTML = '';
    console.log(pokeStatsData)
    pokeStatsData.forEach(readData => {
        console.log(readData);

        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElement.className = "statCont";
        statElementName.className = "statname";
        statElementAmount.className = "statamount";


        statElementName.textContent = `${readData.stat.name} :`;
        statElementAmount.textContent = readData.base_stat;

        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);

        pokeStatsDiv.appendChild(statElement);


    });

} 


const getPokeMoves = (pokeMovesData) => {


    pokeMoves.innerHTML = '';
    let cont = 0;

    pokeMovesData.forEach(readMoves =>{


        cont = cont + 1;


        const statElementMove = document.createElement("div");
        const statElementMoveName = document.createElement("div");

        statElementMove.className = "divMove";
        statElementMoveName.className = 'Move';


    
        statElementMoveName.textContent = `${cont}: ${readMoves.move.name}`;

        statElementMove.appendChild(statElementMoveName);

        pokeMoves.appendChild(statElementMove);







    })



}



