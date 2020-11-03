menu.onclick = function myFunction (){                    //menu.oneclick - запускаем функцию путем клика, создается функция с названием MyFunction
    var x = document.getElementsById('MyTopNav');        //Создается переменная x которая принимает значение с элемента с идентификатором MyTopNav 
    if (x.className === "TopNav") {                        //Условие, если переменная x.class будет идентична(===) TopNav.class классу 
        x.className += " responsive";                       //Тогда к нашему классу будет добавлятся такое слово как responsive
    }
    else {
        x.className = "TopNav";                            //В противном случае все будет оставаться как TopNav
    }
}

