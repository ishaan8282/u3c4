// https://masai-mock-api.herokuapp.com/news/top-headlines?country=
// https://masai-mock-api.herokuapp.com/news?q=


async function apicall(url)
{
    try{
      let res = await fetch(url);
      let data = await res.json()
      return data.articles
    }catch(err){
   console.log("err",err)
    }
}

function appendArticles (articles,results)
{
    articles.map((el) => {
        let div1 = document.createElement("div")

         div1.setAttribute("id","div1")

         div1.addEventListener("click",function(){
             showArticles(el)
         })

         let img = document.createElement("img");
         img.src = el.urlToImage;

         let title = document.createElement("p")
         title.innerText = el.title

         div1.append(img,title)
         results.append(div1)
    })
}

function showArticles(el){

    let artArr = [];
    artArr.push(el);
    localStorage.setItem("news",JSON.stringify(artArr));
   window.location.href = "news.html"
}

export {apicall,appendArticles}