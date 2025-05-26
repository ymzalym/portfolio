const sections=document.querySelectorAll('.section');
const secbtns=document.querySelectorAll('.controls');
const secbtn=document.querySelectorAll('.control');
const allsection=document.querySelector('.main-content');
// console.log(secbtn.length);
// console.log(secbtn[0]);

function ptransition(){ 

    for(let i=0; i<secbtn.length;i++){
        secbtn[i].addEventListener('click',function(){
            const current=document.querySelectorAll('.active-btn');
            current[0].className=current[0].className.replace('active-btn',' ');
        secbtn[i].className+=' active-btn';
            console.log(current.length);
            
            


        })

    }
    allsection.addEventListener('click',function(e){
   const id=e.target.dataset.id;
   if(id){
    secbtns.forEach(btn=>{
        btn.classList.remove('active'); 

    })
    e.target.classList.add('active');
    sections.forEach( section=>{
        section.classList.remove('active');

    })
    const element=document.getElementById(id);
    element.classList.add('active'); 

   }

    })

}

ptransition();
const thme=document.querySelector('.theme-btn');
thme.addEventListener('click',()=>{
    const element=document.body;
    element.classList.toggle('light-mode');
})
