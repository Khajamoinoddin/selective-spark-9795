//let api="7d62c723b884900b164dedced277c45adbaeaf5a56bf15301f9e17b4537c62a7"


let container=document.getElementById('container')

let upcomingData=JSON.parse(localStorage.getItem('data'))||[]
console.log(upcomingData)

let appendupcomingdata=()=>{
  upcomingData.forEach((el)=>{
    let div=document.createElement('div')

    let p=document.createElement('p')
     p.innerText=el.event_home_team
      
     div.append(p)
     container.append(div)
  })
}

appendupcomingdata()