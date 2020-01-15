
const ausgabe = document.querySelector('.ausgabe');
const eingabe = document.querySelector('.eingabe');
const senden  = document.querySelector('.senden');

const fetchJSON = async (query,body)=> {

};

const nachrichtenAbholen = async ()=> {
  let data = await fetchJSON('/message',{});
  datenAusgeben(data.msgs);
};

const datenAusgeben = (msgs)=> {
  ausgabe.innerHTML = '';
  for ( message of msgs ){
    ausgabe.innerHTML += message + '<br/>';
  }
};

senden.onclick = async e => {
  let message = eingabe.value;
  let data = await fetchJSON(
    '/message', { msg:message, name:'anx' }
  );
  datenAusgeben(data.msgs);
  eingabe.value = '';
};

setInterval(nachrichtenAbholen,1000);
nachrichtenAbholen();
