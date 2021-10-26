var counter=document.querySelector('.lovemeter_counter')
var form=document.querySelector('#form')
var romeo=document.querySelector('#romeo_inp')
var juliet=document.querySelector('#juliet_inp')
var julieterr=document.querySelector('.juliet_err')
var romeoerr=document.querySelector('.romeo_err')
var close=document.querySelector('#close')
var quotebar=document.querySelector('.funny_quotes')
var clicker=document.querySelector('.clicker')
var spanone=document.querySelector('#spanone')
var spantwo=document.querySelector('#spantwo')





let main=()=>{
    let runone=false;
    let runtwo=false;
    if(romeo.value === '') {
        romeoerr.textContent="field's are mandatory"
    }
    if(juliet.value === ''){
        julieterr.textContent="field's are mandatory"
    }
    if(romeo.value != ''){
        runone=true
        romeoerr.textContent=""
    }
    if(juliet.value != ''){
        runtwo=true;{
            julieterr.textContent=''
        }
    }
    if(runone==true && runtwo==true){
        var a=Math.random()
        var b=Math.floor(a*100)
        counter.textContent=b+'%'
        spanone.textContent=romeo.value;
        spantwo.textContent=juliet.value;
    }
}
form.addEventListener('submit',(e)=>{    
    e.preventDefault();
    main();
    romeo.value='';
    juliet.value='';
})

close.addEventListener('click',()=>{
    quotebar.style.display='none'
})
clicker.addEventListener('click',()=>{
    quotebar.style.display='inherit'
})