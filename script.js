
const list = document.querySelector(".fotokonten")

const url = "https://pixabay.com/api/?key=27288807-7c18b43e45aba5d7e6b6f5102&q=yellow+flowers&image_type=photo";

let myfetchData = async () => {
    const response = await fetch(url);
    if(response.status !==200){
        throw new Error("cannot fetch data");
    }
    let data = await response.json();
    return data;
}

myfetchData()
.then((data) => {
    data?.hits.map(x => {
        let img = document.createElement("img");

        let icon1 =  document.createElement("img");
        let likecount =  document.createElement("span");
        likecount.innerHTML= x.likes;
        let icon2 = document.createElement("img");
        let commentcount =  document.createElement("span");
        commentcount.innerHTML= x.comments;

        icon1.src = "assets/png/like.png";
        icon2.src = "assets/png/comment.png"

        let bungkus3 = document.createElement("div");
        let bungkus2 = document.createElement("div");
        let bungkus4 = document.createElement("div");
        let bungkus5 = document.createElement("div");
        bungkus4.setAttribute("class","like_wrapper")
        bungkus5.setAttribute("class","comment_wrapper")
        bungkus2.setAttribute("class","image_wrapper")
        bungkus3.setAttribute("class","icon")
        img.src = x.largeImageURL
        img. setAttribute("class","fotokonten")
        
       
        let div = document.getElementById("konten");
        bungkus4.append(icon1,likecount)
        bungkus5.append(icon2,commentcount)
        bungkus3.append(bungkus4)
        bungkus3.append(bungkus5)
        bungkus2.append(img)
        bungkus2.append(bungkus3)
      
        div.append(bungkus2);



       
      
    }
    
        )
    // let div = document.getElementById("konten");
    // div.appendChild(img);
    // div.setAttribute("style", "text-align:center");
});


