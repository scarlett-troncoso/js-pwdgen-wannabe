console.log('Hello');

/* 
esercizio di oggi: password generator (farlocco ed insicurissimo)
nome repo: js-pwdgen-wannabe
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
Ad esempio se scrivessi:
fabio
pacifici
blue
la password che esce fuori sará:
fabiopacificiblue23
confermate lettura come al solito e buon divertimento con
Javascript, anzi no, con ECMAScript, anzi no, con ES6...  
*/

/* Tools
-prompt
-(variabile) const/let
-(per salvare quello che scrive lutente)backticks '${}'

*/

//Chiedi all’utente il suo nome e lo salvo in una variabile
const user_name = prompt ('Come ti chiami?');


//poi chiedi il suo cognome
const user_last_name = prompt ('Quale é il tuo cognome?');


//poi chiedi il suo colore preferito
const user_color = prompt ('Quale é il tuo colore preferito?');


//Infine scrivi sulla pagina nomecognomecolorepreferito23



console.log(user_name, user_last_name, user_color);