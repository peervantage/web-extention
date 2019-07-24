document.getElementById('submit').addEventListener('click',function () {
    // email=document.getElementById('email__id').value
    // password=document.getElementById('password__id').value

        // email:email,
        //password:password

        let formData ={
            email:document.getElementById('email__id').value,
            password:document.getElementById('password__id').value,
        } 

      

    fetch('http://54.198.223.125:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formData),
        mode: "cors",
    }).then(resp => {
        console.log(resp);



        let form = document.getElementById('from__id');
        let votes = document.getElementById('datas');
        
        resp.json(obj=>{
            if(obj.status === 'success'){
                form.style.display = 'none';
                // up.innerHTML = 15;
                // down.innerHTML = 2;
            }else{
              console.log('this is else part');  
            }
      
        })
         
    })





})







// document.getElementByClassName('number-up').addEventListener('click',function () {
   
//         let formData ={
//             user_id:"1",
//             url:document.documentURI
//         } 

      

//     fetch('http://172.20.0.63:5000/upvote', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(formData),
//         mode: "cors",
//     }).then(resp => {
//         console.log(resp);



//         let up = document.querySelector('.number-up');
        
//         resp.json(obj=>{
//             if(obj.status === 'success'){
//                 up.innerHTML = 15;
//                 down.innerHTML = 2;
//             }else{
//               console.log('this is else part');  
//             }
      
//         })
         
//     })





// })























let formData = new FormData();
formData.append('url', document.documentURI);

fetch('http://54.198.223.125:5000/getarticlesbyurl', {
    method: 'POST',
    body: formData,
    mode: "cors",
}).then(function (resp) {
    
    
    resp.json().then(function (json) {
        div=document.createElement('div')
        if(json.status=="success"){
            let up = document.querySelector('.number-up');
            let down = document.querySelector('.number-down');
            console.log(json)
            up.textContent=json.article.upvote
            down.textContent=json.article.downvote
        }
        
        //div.innerText=JSON.stringify(json)
        //document.getElementById('datas').append(div);
    
        console.log(json)
    })
});



