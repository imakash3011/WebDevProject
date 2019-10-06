function fn1(){
    var nresult=0;
    var presult=0;
    var rresult=0;

    var myinp=document.getElementById("first").value;
    var num=(myinp.split(' '));
    for(let i=0;i<num.length;i++){
        a=Math.pow(rresult,2);
        b=Math.pow(Number(num[i]),2);
        rresult =Math.sqrt((a+b));

        if(num[i]>0)
        {
            c=Math.pow(presult,2);
            d=Math.pow(Number(num[i]),2);
            presult =Math.sqrt((c+d));
        
        }
        if(num[i]<0)
        {
            e=Math.pow(nresult,2);
            f=Math.pow(Number(num[i]),2);
            nresult =Math.sqrt((e+f));   
        }   
        
    }
    document.getElementById("rvalue").innerHTML=rresult;
    
    document.getElementById("pvalue").innerHTML=presult;

    document.getElementById("nvalue").innerHTML=nresult;

}