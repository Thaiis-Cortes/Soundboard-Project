let audios = [
    {address: 'audio/que-viadao-bonito-hein-ratinho_2.mp3', legend: 'QUE VIADÃO BONITO'},
    {address: 'audio/projeto_ratinho_audios_jesus.mp3', legend: 'JESUS'},
    {address: 'audio/projeto_ratinho_audios_nao-e-o-pai.mp3', legend: ' ELE NAO É O PAI'},
    {address: 'audio/projeto_ratinho_audios_pare.mp3', legend: 'PARE'},
    {address: 'audio/projeto_ratinho_audios_que-isso-meu-filho.mp3', legend: 'QUE ISSO MEU FIO'},
    {address: 'audio/projeto_ratinho_audios_ratinhoo.mp3', legend: 'RATINHO'},
    {address: 'audio/projeto_ratinho_audios_uepa.mp3', legend: 'UEPA'},
    {address: 'audio/projeto_ratinho_audios_vixi-ratinho.mp3', legend: 'VIXI'},
    {address: 'audio/projeto_ratinho_audios_xaropinho.mp3', legend: 'XAROPINHO'},

 ];

 let btn = document.querySelectorAll('.button1');
 let leg = document.querySelectorAll('p');
 
 for (let i=0; i < 9; i++){
    leg[i].textContent = audios[i].legend;
    btn[i].setAttribute  ('data-item', i);
}
 
let audioTag = document.querySelector('audio');


 btn.forEach(button1 => {
    button1.addEventListener('click', () => {
        let sound = audios[button1.getAttribute('data-item')];
        audioTag.setAttribute('src', sound.address);
        audioTag.addEventListener('loadeddata', () =>{audioTag.play(); } )
        
    });


 });


