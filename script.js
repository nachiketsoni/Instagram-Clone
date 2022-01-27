var pirofile2 = document.querySelector("#pirofile2");

var arr = [
    {username: "papa_ki_pari" , name: "angel priya", followedby:"Followed by manish._.pandey_ + 8 ..."   },
    {username: "papa_ki_gori" , name: "angel rani" , followedby:"Followed by swarshashvat + 6 more"  },
    {username: "papa_ki_lori" , name: "angel kahani" , followedby:"Followed by swarshashvat + 7 more"  },
    {username: "papa_ki_chori" , name: "angel manmani" , followedby:"Followed by aryan_uikey16 + 10 more"   },
    {username: "papa_ki_sorry" , name: "angel purani" , followedby:"Follows you"  }


];

var clutter = "";
arr.forEach(function(elem, index){
clutter += `<div id="pirofile2">
<div class="leftpiro2">
    <div class="fotu2"></div>
    <div class="naam2">
        <h4>soni.nachiket</h4>
        <h3>${elem.followedby}</h3>
    </div>
    <a href="#">Follow</a>
</div>
</div>`
});

document.querySelector("#sug").innerHTML = clutter;

var stusrn = document.querySelector("#stusrn");

var story = [
    {username: "papa_ki_pari" , Image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" },             
    {username: "papa_ki_gori" , Image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"  },         
    {username: "papa_ki_lori" ,  Image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80" },         
    {username: "papa_ki_chori" , Image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" },         
    {username: "papa_ki_pari" , Image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" },          
    {username: "papa_ki_gori" , Image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"  },         
    {username: "papa_ki_lori" ,  Image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },         
    {username: "papa_ki_chori" , Image: "https://images.unsplash.com/photo-1546447147-3fc2b8181a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },            
    {username: "papa_ki_pari" , Image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1917&q=80" },          
    {username: "papa_ki_gori" , Image: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1362&q=80"  },         
    {username: "papa_ki_lori" ,  Image: "https://images.unsplash.com/photo-1575859431774-2e57ed632664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },         
    {username: "papa_ki_chori" , Image: "https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },         
    {username: "papa_ki_pari" , Image: "https://images.unsplash.com/photo-1546491764-67a5b8d5b3ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },             
    {username: "papa_ki_gori" , Image: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"  },            
    {username: "papa_ki_lori" ,  Image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" },         
    {username: "papa_ki_chori" , Image: "https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },         
    {username: "papa_ki_sorry" , Image: "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1977&q=80" }          


];
var strclutter = "";
var s;
 var count =0;
story.forEach(function(elem, index){
    strclutter +=  `<div id="stusrn">    
    <div id="storypic">
    <img id="${index}" src="${elem.Image}" alt="">
    </div>
    <h6>${elem.username}</h6>
    </div> `
    });
document.querySelector("#story").innerHTML = strclutter;


document.querySelector("#story").addEventListener("click", function(dets){
    document.querySelector("#fullpreview").style.display="flex";
    document.querySelector("#image img").setAttribute("src", story[dets.target.id].Image);
    s= setInterval(function() {
         if(count<100 ){
             document.querySelector("#progress").style.width = count++ + "%";
             
             
            }
            else{
                count = 0;
            }        
        }, 20);
        setTimeout(function(){
            clearInterval(s)
            document.querySelector("#storypic").style.background = "grey"
            
            document.querySelector("#fullpreview").style.display = "none"
        },2030)

})

var arrpost=[
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" },     
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"  }, 
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80" },  
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" },  
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" },  
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"  }, 
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },  
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1546447147-3fc2b8181a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },     
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1917&q=80" },  
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1362&q=80"  }, 
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1575859431774-2e57ed632664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },  
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },  
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1546491764-67a5b8d5b3ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },     
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"  },    
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" },  
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },  
    {heart:`<i class="ri-heart-line"></i>` ,Image: "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1977&q=80" }   
]
var clutterpost = "";
arrpost.forEach(function(elem, index){
    clutterpost += ` <div id="post">
    <div id="usrinfo">

        <div class="leftpiro2">
            <div class="fotu2"></div>
            <div class="naam3">
                <h4>lokesh_mali_</h4>
                <h3>lokesh</h3>
            </div>
            <a href="#">•••</a>
        </div>

    </div>
    <div id="content">
    <div id="heart"><i class="ri-heart-fill"></i></div>

        <img id="${index}" src="${elem.Image}" alt="">
    </div>
    
    <div id="likebar">
        <div id="comment">
            <i   class="ri-heart-line"></i>
            <svg aria-label="Comment" class="_8-yf5 " color="white" fill="#8e8e8e" height="24"
                role="img" viewBox="0 0 24 24" width="24">
                <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none"
                    stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
            <svg aria-label="Share Post" class="_8-yf5 " color="#black" fill="#8e8e8e" height="24"
                role="img" viewBox="0 0 24 24" width="24">
                <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22"
                    x2="9.218" y1="3" y2="10.083"></line>
                <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                    stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
            </svg>
        </div>
        <i class="ri-bookmark-line"></i>
    </div>
    <div id="likedby">
        <img src="https://images.unsplash.com/photo-1625760489379-a4fdf6bfcca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80" alt="">
        <h6>Liked by <span>lazy_developer</span> and 186 others</h6>
    </div>
  <div id="caption">  <h6><span>Sheryians_Coding_School</span> kaam esaa karo ki kaam bhi bole kaam mat karo</h6>
  </div>
  <h5>View all 36 Comment</h5>
  <h6>1 DAY AGO</h6>
  <input type="text" placeholder="Add a Comment" name="comment">

</div>`
});
document.querySelector("#feed").innerHTML = clutterpost;

document.querySelector("#content").addEventListener("dblclick", function(dets){
//   console.log(dets.target.id);
    // if(arrpost[dets.target.id] === 0){
    document.querySelector("#comment i").style.color = "red";
    document.querySelector("#heart").style.fontSize="120px";
    
    document.querySelector("#heart").style.opacity= 1;
    setTimeout(function(){
        document.querySelector("#heart").style.opacity = 0;
    document.querySelector("#heart").style.fontSize="100px";

        
    }, 600)


    
})