const inpValue = document.getElementById('inpValue');
const btn = document.getElementById('btn');
const apiKey = "12a15334ee2ff243c9bf080ae0666f77";


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function Search(e) {
    const res = await fetch(apiUrl + e + `&appid=${apiKey}`);
    const data = await res.json();
    console.log(data);

    document.getElementById('city').innerHTML = data.name;
    document.getElementById('temp').innerHTML = data.main.temp + "°C";
    document.getElementById('wind').innerHTML = data.wind.speed + "km/hr";
    document.getElementById('humidity').innerHTML = data.main.humidity + "%";

    if (data.weather[0].main == "Clouds") {
        weather_img.src = "images/clouds.gif";
    } else if (data.weather[0].main == "Clear") {
        weather_img.src = "images/clear.gif";
    }

    document.querySelector('.wether').style.display = 'block';
    document.querySelector('.date').style.display = 'flex';

}
  



var allDays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

var AllMonths=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"]

const today=new Date()
console.log(today)

day.innerHTML=" "+allDays[today.getDay()]
date.innerHTML="-"+today.getDate()
month.innerHTML=""+AllMonths[today.getMonth()]



btn.addEventListener('click', () => {
    Search(inpValue.value);
});

inpValue.addEventListener('click', () => {
    document.getElementById('list').classList.add('visible');
});

document.addEventListener('click', (event) => {
    const list = document.getElementById('list');
    if (event.target !== inpValue && event.target.parentNode !== list) {
        list.classList.remove('visible');
    }
});

document.querySelectorAll('#list .option').forEach(item => {
    item.addEventListener('click', () => {
        inpValue.value = item.textContent;
        list.classList.remove('visible');
        Search(inpValue.value); 
        Add()
        });
});

inpValue.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        Search(inpValue.value);
        document.getElementById('list').classList.remove('visible');
        Add()

    }
});


function Add(){
    if(inpValue.value==""){
        alert("Please Enter location name")
    }else{
        const data=document.createElement('li')
        data.innerHTML=inpValue.value
        his.append(data)

        const icon=document.createElement('i')
        icon.classList="fa-solid fa-trash"
        data.append(icon)    
    }
  

    his.addEventListener('click',function(e){
        if(e.target.tagName==='I'){
            e.target.parentElement.remove()
        }    
    })
    store()
}

function store(){
    localStorage.setItem('store',his.innerHTML)
}

function show(){
    his.innerHTML=inpValue.value
}
show()


function clearFields() {
    document.getElementById("userName").value = ""; 
    document.getElementById("email").value = ""; 
    document.getElementById("phoneNumber").value = ""; 
    document.getElementById("message").value = "";
    
}


