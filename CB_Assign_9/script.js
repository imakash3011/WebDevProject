function fn1(){
    var number=document.getElementById("first").value;
    
    for(let i=1;i<=number;i++){

        if(i%3==0 &&  i%5==0){
           
            document.getElementById('res').innerHTML="FizzBuzz"; 
        }else if(i%3===0){
            document.getElementById('res').innerHTML="Fizz"; 
            
        }else if(i%5===0){
            
            document.getElementById('res').innerHTML="Buzz"; 
        }else{
            document.getElementById('res').innerHTML="Try Again!...You Entered "+ i; 
            
        }
         
    }
}