function showpassword(){
    let password=document.getElementById('pwd');
    if(password.type=='password'){
        password.type='text'
    }else{
        password.type='password'
    }
}