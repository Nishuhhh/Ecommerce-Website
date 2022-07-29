const text = "thie Ecommerce is best for product !!!" ;

let Index = 0 ;

function Writetext()
{
    document.body.innerText = text.slice(0 ,Index) ;

    Index++ ;

    if(Index>text.length -1)
    {
        Index = 0 ;
    }

}

setInterval(Writetext , 100) ;