let container=document.getElementById('container')

let upcoming=async()=>{
    // alert('hi i am upcoming')
      let date2=new Date
      console.log(date2)
      let month=date2.getUTCMonth()+1
      let day=date2.getDate()
      let year=date2.getFullYear()

      
      let month2=date2.getMonth()+2
      
      console.log(year+"-"+month2+"-"+day)
      console.log(year+"-"+month+"-"+day)
      let res=await fetch(`https://api.api-cricket.com/cricket/?method=get_events&APIkey=7d62c723b884900b164dedced277c45adbaeaf5a56bf15301f9e17b4537c62a7&date_start=${(year+"-"+month+"-"+day)}&date_stop=${(year+"-"+month2+"-"+day)}`)
      res=await res.json()
    
     let data=res.result
     appendData(data)
     console.log(data)
}
upcoming()
let appendData=(data)=>{
        container.innerHTML=null
    data.forEach(({event_away_team,event_home_team,event_away_team_logo,event_home_team_logo,country_name,event_date_start,
        event_status_info,event_status,event_time,league_name,league_season})=>{
            if(event_status_info==null){  
            let div=document.createElement('div')
            div.id="main"
            let div4=document.createElement('div')
            div4.id='cont'
            let div2=document.createElement('div')
           div2.className="team"
           
            let img=document.createElement('img')
            img.src=event_home_team_logo
             img.className='img1'
            let img2=document.createElement('img')
            img2.src=event_away_team_logo
            img2.className='img1'
            let h2=document.createElement('h2')
            h2.innerText=league_name+" "+league_season
            
            let p=document.createElement('p')
            p.innerText=event_date_start
            p.className="time"
            let a=document.createElement('p')
        //  a.innerText=event_status_info

           
            //  div2.append(h2)

           let time=document.createElement('p')
           time.innerText=event_time +"PM IST"
             time.className="time"

           let h3=document.createElement('h3')
           if(league_name=="ICC World Twenty20"||league_name=="One Day International"||league_name=="Twenty20 International"||league_name=="Twenty20 International Women"||league_name=="T20 Asia Cup Women"){
            h3.innerText="INT"
           }else{
            h3.innerText="DOM"
           }

            let div3=document.createElement('div')
            div3.className="team"
               let team=document.createElement('h4')
               team.innerText=event_home_team
               team.className="one" 
               let team2=document.createElement('h4')
               team2.innerText=event_away_team
               team2.className="one"
             let div5=document.createElement('div')
           let div6=document.createElement('div')
             div6.id="inter"
            let div7=document.createElement('div')
            let country=document.createElement('p')
            country.innerText="Venue:- "+ country_name

            div3.append(team,team2)
            
            div6.append(h3)
            div5.append(p,time)
            div2.append(img,img2)
            div4.append(div2,div3,div5)
            div.append(div6,h2,country,div4,a)
          
          
           container.append(div)
        }
    })


}


let live=async()=>{


    let res=await fetch(`https://apiv2.api-cricket.com/?method=get_livescore&APIkey=7d62c723b884900b164dedced277c45adbaeaf5a56bf15301f9e17b4537c62a7`)

    res=await res.json()

    let data2=res.result
    console.log(data2)
    appendlive(data2)
}


let appendlive=(data2)=>{
    container.innerHTML=null
data2.forEach(({event_away_team,event_home_team,event_away_team_logo,event_home_team_logo,country_name,event_date_start,
    event_status_info,event_status,event_time,league_name,league_season,event_stadium,event_service_away
  ,event_home_final_result,event_away_final_result,event_service_home,event_type})=>{
      if(event_status=="In Progress"){ 
        let div=document.createElement('div')
        div.id="main"
        let div4=document.createElement('div')
        div4.id='cont1'
        let div2=document.createElement('div')
       div2.className="team"
       
        let img=document.createElement('p')
        
        
        img.className='img1'
        if(event_service_away===""){
          img.innerText=event_away_final_result
        }else{
          img.innerText=event_away_final_result+" & "+event_service_away
        }
        let img2=document.createElement('p')
        
        if(event_service_home===""){
          img2.innerText=event_home_final_result
        }else{
          img2.innerText=event_home_final_result+" & "+event_service_home
        }
        img2.className='img1'
        let h2=document.createElement('h3')
        h2.innerText=league_name+" "+league_season
        
        let p=document.createElement('p')
        p.innerText=event_date_start
        p.className="time"
        let a=document.createElement('p')
    //    a.innerText=event_status_info

        if(event_status_info==null){
            a.innerText='Yet to start'
        
        }else{
            a.innerText=event_status_info
        }
        //  div2.append(h2)

       let time=document.createElement('p')
       time.innerText=event_time +"PM IST"
         time.className="time"

       let h3=document.createElement('h3')

       if(league_name=="ICC World Twenty20"||league_name=="One Day International"||league_name=="Twenty20 International"||league_name=="Twenty20 International Women"||league_name=="T20 Asia Cup Women"){
        h3.innerText="INT"
       }else{
        h3.innerText="DOM"
       }

        let div3=document.createElement('div')
        div3.className="team"
           let team=document.createElement('h4')
           team.innerText=event_home_team
           team.className="one" 
           let team2=document.createElement('h4')
           team2.innerText=event_away_team
           team2.className="one"
         let div5=document.createElement('div')
       let div6=document.createElement('div')
         div6.id="inter"
        let div7=document.createElement('div')
        let country=document.createElement('p')
        country.innerText="Venue:- "+event_stadium

        let type=document.createElement('h4')
        type.innerText=event_type
       type.style.color="orange"
        div3.append(team,team2)

        div7.append(type)
        div6.append(h3)
        div5.append(p,time)
        div2.append(img2,img)
        div4.append(div3,div2,div5)
        div.append(div6,div7,h2,country,div4,a)
      
      
       container.append(div)
      }
      })


}


let results=async()=>{
  let date2=new Date
      console.log(date2)
      let month=date2.getUTCMonth()+1
      let day=date2.getDate()-1
      let year=date2.getFullYear()

      
      let month2=date2.getMonth()
      
      console.log(year+"-"+month2+"-"+day)
      console.log(year+"-"+month+"-"+day)

      let res=await fetch(`https://api.api-cricket.com/cricket/?method=get_events&APIkey=7d62c723b884900b164dedced277c45adbaeaf5a56bf15301f9e17b4537c62a7&date_start=${(year+"-"+month2+"-"+day)}&date_stop=${(year+"-"+month+"-"+day)}`)
      res=await res.json()
    
     let data3=res.result
console.log(data3)
appendresults(data3)




}


  let appendresults=(data3)=>{
    container.innerHTML=null
data3.forEach(({event_away_team,event_home_team,event_away_team_logo,event_home_team_logo,country_name,event_date_start
    ,event_status,event_time,league_name,league_season,event_stadium,event_away_final_result,event_home_final_result,event_status_info})=>{
        if(event_status=="Finished"){  
        let div=document.createElement('div')
        div.id="main"
        let div4=document.createElement('div')
        div4.id='cont'
        let div2=document.createElement('div')
       div2.className="team"
       
        let img=document.createElement('img')
        img.src=event_home_team_logo
         img.className='img1'
        let img2=document.createElement('img')
        img2.src=event_away_team_logo
        img2.className='img1'
        let h2=document.createElement('h2')
        h2.innerText=league_name+" "+league_season
        
        let p=document.createElement('p')
        p.innerText=event_away_final_result

        p.className="time"
        let a=document.createElement('p')
        a.innerText=event_status_info
       let time=document.createElement('p')
       time.innerText=event_home_final_result

         time.className="time"

       let h3=document.createElement('h3')
       if(league_name=="ICC World Twenty20"||league_name=="One Day International"||league_name=="Twenty20 International"||league_name=="Twenty20 International Women"||league_name=="T20 Asia Cup Women"||league_name=="Test Series"){
        h3.innerText="INT"
       }else{
        h3.innerText="DOM"
       }

        let div3=document.createElement('div')
        div3.className="team"
           let team=document.createElement('h4')
           team.innerText=event_home_team
           team.className="one" 
           let team2=document.createElement('h4')
           team2.innerText=event_away_team
           team2.className="one"
         let div5=document.createElement('div')
       let div6=document.createElement('div')
         div6.id="inter"
        let div7=document.createElement('div')
        // let country=document.createElement('p')
        // country.innerText="Venue:- "+event_stadium

        div3.append(team,team2)
        
        div6.append(h3)
        div5.append(p,time)
        div2.append(img,img2)
        div4.append(div2,div3,div5)
        div.append(div6,h2,div4,a)
      
      
       container.append(div)
    }
})


}





let selectone=()=>{
  let select=document.getElementById('inn2').value ;
  console.log(select)

 
}

