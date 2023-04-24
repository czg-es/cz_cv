var lista_col = ['AliceBlue','FloralWhite','PapayaWhip','LightGoldenRodYellow','LavenderBlush', 'PeachPuff','HoneyDew','MintCream','Thistle'];

var lista_col2 = [ 'Aquamarine','Aqua','red','lime','plum','darkgoldenrod','green','violet','lemonchiffon','DarkKhaki','DarkSeaGreen','Olive','RosyBrown'];

function change_background(value){
    var current_c = lista_col[Math.floor(Math.random()*lista_col.length)];
    if(!value){value =current_c}
    
    document.documentElement.style.setProperty('--text_accent', value);
    document.getElementById('chosen_color').innerHTML = value;
    console.log(value)
    
    /* var current_c2 = lista_col[Math.floor(Math.random()*lista_col.length)];
    document.documentElement.style.setProperty('--background', current_c2);
    console.log(current_c2)
    */
   
}
change_background();

function set_background(value){
        document.documentElement.style.setProperty('background', value);
        document.getElementById('chosen_color').innerHTML = value;
        document.getElementById('chosen_color').style.setProperty('background', value);
}


var i = 180;                  //  set a counter to 180 :p
function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    let grados = i+"deg"
    document.documentElement.style.setProperty('--degrees', grados);   //  Update the degrees of linear-gradient
    /* console.log(grados); */
    i++;                    //  increment the counter
    if (i < 360) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 3)
}
myLoop();                   //  start the loop

function update(value){
    change_background(value);
    i = 270;
    myLoop();
    console.log('ENTRO')

}
const blind_text ='Resolutiv@, inventiv@, con recursos y siempre buscando un nuevo reto.';
function blur(){
    var mugs = ['Tuxlets-Baby-Tux.ico','din.jpeg','Mugshot-Tux-icon.png','nibbler.png'];
    random_mug = mugs[Math.floor(Math.random()*mugs.length)];
    document.getElementById('tlf').style.setProperty('filter', 'blur(5px)');
    document.getElementById('mail').style.setProperty('filter', 'blur(5px)');
    document.getElementById('nombre').style.setProperty('filter', 'blur(5px)');

    //document.getElementById('part1').style.setProperty('filter', 'blur(5px)');
    // document.getElementById('part2').style.setProperty('filter', 'blur(5px)');
    document.getElementById('webpage').style.setProperty('filter', 'blur(5px)');

    document.getElementById('part2').innerHTML = blind_text;

    document.getElementById("picture").src="images/"+random_mug;
}