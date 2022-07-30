const imgs = document.getElementById("imgs");

const img = document.querySelectorAll('#imgs img') ;

let Idx = 0 ;
function run()
{
    Idx++ ;

    if(Idx > img.length -1)
    {
        Idx = 0 ;
    }
    imgs.style.transform = `translateX(${-Idx*500}px)` ;
}
setInterval(run ,2000);