let cl = console.log;
cl("Hello------------")


// const setZero = (val) => {
//     if(val < 10){
//         return  "0" + val
//     }else{
//         return val
//     }
    
// }

// const setZero = (val) => {
//     return(val < 10) ? '0' + val : val
// }

// const setTime = (val) =>{
//     if(val < 10){
//         return '0' + val
//     }else{
//         return val
//     }
// }

const setTime = (val) =>{
    return(val < 10) ? '0' + val : val
}

function DigCLock(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = 'AM'
    
    if(hr >= 12){
        session = 'PM'
    }
    if(hr > 12){
        hr = hr - 12
    }

    hr = setTime(hr);
    min = setTime(min);
    sec = setTime(sec);

    // cl(hr,min,sec,session);t
    
    let result = `${hr} : ${min} : ${sec} ${session}`;
    
    let clockInfo = document.getElementById("Dlock");
    clockInfo.innerHTML = result;
    setTimeout(DigCLock,1000);
}
DigCLock()





