
    let categ=JSON.parse(localStorage.getItem("categ"))
    console.log(categ);
    
    let getData = async ()=>{
        try{
            let res = await fetch (`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7fe798a8a3b34e748f7f0ccb417e8f64`)
            let data= await res.json()
            let new_data=data.sources
            console.log(data.articles);
            appendData(data)
        }
        catch(err){
            console.log("err", err)
        }
     }
     getData(categ)
     
     let appendData = (data) =>{
        //  console.log(new_data);
         let append_ent_data=document.getElementById("container")
         data.articles.forEach(({title,description,urlToImage,publishedAt,author}) => {
            let div= document.createElement('div')
            div.setAttribute("class", "elem")
            let div1= document.createElement('div')
            div1.setAttribute("class", "img")
            let div2= document.createElement('div')
            div2.setAttribute("class", "text")
            let div3= document.createElement('div')
            div3.setAttribute("class", "date_author")
            let name1=document.createElement('h2')
            name1.innerHTML=title
            let desc1=document.createElement('p')
            desc1.innerHTML=description
            let auth1=document.createElement('p')
            auth1.innerHTML=author
            let pub1=document.createElement('p')
            pub1.innerHTML=publishedAt
            let img1=document.createElement('img')
            img1.src=urlToImage
            img1.style.width="500px"
            img1.style.height="250px"
            img1.style.borderRadius="10px"

            div1.append(img1)
            div1.style.marginRight="10px"
            div3.append(pub1,auth1)
            div3.style.display="flex"
            div2.append(name1,desc1,div3)
            div2.style.paddingTop="-10px"
            div.append(div1,div2)
            div.style.display="flex"
            div.style.padding="20px"
            append_ent_data.append(div)
            append_ent_data.style.width="80%"
            append_ent_data.style.margin="auto"
            append_ent_data.style.fontFamily= "Montserrat";
            // console.log(element.name);
            
        
        });



    }
