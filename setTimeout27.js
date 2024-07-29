setInterval(()=>{
    let date  = new Date()
    let timee = date.toLocaleTimeString()
    let dg = document.getElementById('digital_clock')
    dg.innerHTML = timee 
},1000)