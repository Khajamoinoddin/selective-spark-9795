


let dataresult=JSON.parse(localStorage.getItem("dataresult"))||[]


console.log(dataresult)
let container=document.getElementById('container')
let appendData=(dataresult)=>{
    dataresult.forEach((el) => {
        let div=document.createElement('div')
        div.id="main"
       
        let div4=document.createElement('div')
        div4.id='cont'
        let div2=document.createElement('div')
       div2.className="team"
       
        let img=document.createElement('img')
        img.src=el.event_home_team_logo
         img.className='img1'
        let img2=document.createElement('img')
        img2.src=el.event_away_team_logo
        img2.className='img1'
        let h2=document.createElement('h2')
        h2.innerText=el.event_home_team+" "+"VS"+" "+el.event_away_team
        
        let p=document.createElement('p')
        p.innerText=el.event_away_final_result

        p.className="time"
        let a=document.createElement('p')
        a.innerText=el.event_status_info
       let time=document.createElement('p')
       time.innerText=el.event_home_final_result

         time.className="time"

       let rr=document.createElement('p')
         rr.innerText=el.event_away_rr

       let rr2=document.createElement('p')
         rr2.innerText=el.event_home_rr
        let div3=document.createElement('div')
        div3.className="team"
           let team=document.createElement('h4')
           team.innerText=el.event_home_team
           team.className="one" 
           let team2=document.createElement('h4')
           team2.innerText=el.event_away_team
           team2.className="one"
         let div5=document.createElement('div')
       let div6=document.createElement('div')
        
        let div7=document.createElement('div')
       let btn=document.createElement('button')
       btn.innerText="Summary"
       btn.onclick=()=>{
        summary()
       }
       let btn2=document.createElement('button')
       btn2.innerText="Commentary"
       let btn3=document.createElement('button')
       btn3.innerText="Scorecard"
       btn3.onclick=()=>{
        scorecard()
       }
       let btn4=document.createElement('button')
       btn4.innerText="Highlights"
       let btn5=document.createElement('button')
       btn5.innerText="Match info"
       let btn6=document.createElement('button')
       btn6.innerText="Articles"
       

       
       
       
       
       
       
        div3.append(team,team2)
        div6.append(rr,rr2)
        div7.append(btn,btn2,btn3,btn4,btn5,btn6)
        div5.append(p,time)
        div2.append(img,img2)
        div4.append(div2,div3,div5,div6)
        div.append(h2,div4,a)
      
      
       container.append(div,div7)
     
})
}
appendData(dataresult)




let scorecard=()=>{


console.log(dataresult)

}