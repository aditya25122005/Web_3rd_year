let allLikeButton = document.querySelectorAll('.like-btn');
async function likeButton(productId , btn){
    try{
        let response = await axios({
            method: 'post', 
            url: `/products/${productId}/like`,
            headers : {'X-Requested-With' : 'XMLHttpRequest'}
        })
        
        // Server's response dictates the icon's state
        const isLiked = response.data.isLiked;
        if(isLiked){
            btn.children[0].classList.remove('fa-regular');
            btn.children[0].classList.add('fa-solid');
        }else{
            btn.children[0].classList.remove('fa-solid');
            btn.children[0].classList.add('fa-regular');
        }

    }
    catch(e){
        // Check if the response object exists before trying to access its status
        if(e.response && e.response.status === 401){
            window.location.replace('/login');
        } else {
            console.error('An error occurred during the request:', e);
        }
    }
}

for(let btn of allLikeButton){
    btn.addEventListener('click' , ()=>{
        let productId = btn.getAttribute('product-id');
        likeButton(productId , btn);
    })
}