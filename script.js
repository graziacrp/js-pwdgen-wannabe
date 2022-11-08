


let nome = prompt("Inserisci il nome");
let cognome = prompt("Inserisci il cognome");
let colorePreferito = prompt("Inserisci il colore preferito");


console.log(nome);
console.log(cognome);
console.log(colorePreferito);






console.log (
    ` 
    

    ----- Informazioni di contatto -----
    Password: ${nome + cognome + colorepreferito + 21};

   

    `
);


document.getElementById("nome").innerHTML = nome;
document.getElementById("cognome").innerHTML = cognome;
document.getElementById("colore preferito").innerHTML = colorePreferito;