var bulb_on = document.getElementById('on');
var bulb_off = document.getElementById('off');
var switch_btn = document.getElementById('switch');
    
function toggleOnOff(){
    if (window.getComputedStyle(bulb_on).display === "none"){
        bulb_on.style.display = 'block';
        bulb_off.style.display = 'none';
        switch_btn.innerHTML = 'On';
    } else{
        bulb_on.style.display = 'none';
        bulb_off.style.display = 'block';
        switch_btn.innerHTML = 'Off';
    } toggleSwitch();
}

function toggleSwitch(){
    switch_btn.classList.toggle("onoff-on");
    switch_btn.classList.toggle("onoff-off");
}
switch_btn.addEventListener('click',function(){toggleOnOff();});