var btn = document.getElementById("forecast");

btn.addEventListener('click', () => {
    let value = prompt('З днем нарожження, Вован! Введи одне число і отримай своє передбачення', '');

    switch(value) {
        case '1': 
         alert('НЕ КИСНИ (все буде добре і навіть набагато краще ніж ти думаєш) ');
         break;
        case '2':
            alert('БУДЬ ГНУЧКИМ (іноді варто переглянути сталі погляди) ');
        break;
        case '3':
            alert('"НЕ МІШАЙ" (є моменти, які варто пустити за течією і "не мішати" долі робити свою справу) ');    
        break;
        case '4':
            alert('НЕ БУДЬ ЛИПУЧКОЮ (відліпися від старих вподобань, спробуй щось нове) ');
        break;
        case '5': 
            alert('Будеш вонять');
        break;   
        case '6':
            alert('БУДЬ ГОСТРІШИМ (додай трошки "ПЕРЧИНКИ" у свої будні) ');
        break;
        case '7':
            alert('БЛЄСТАЙ (ти маєш багато талантів не загортай їх в "обгортку" ) ');    
        break;   
        case '8':
            alert('НЕ ПРОГИНАЙСЯ чи НЕ ПІДСТИЛЯСЯ (життя тебе випробовує, будь наполеглевий "не стоит прогибаться под изменчивый мир, пусть лучше он прогнется под нас") ');
        break;
        case '9': 
            alert('НЕ ВИГОРАЙ (ти дуже відданий роботі, але залишай більше часу для себе) ');
        break;   
        case '10':
            alert('НЕ СИП СІЛЬ НА РАНУ (інколи варто перевірити на сіль суп, а не свої почуття. Нехай тільки страви будуть солоні)');
        break;
        case '11':
            alert('НЕ БУДЬ ЖОРСТКИМ (трошки ніжніше та трошки м*якше стався до всього)');    
        break;   
        case '12':
            alert('ЗМИВАЙ (не тримай в собі негатив і погані думки, змивай усе й одразу) ');
        break;
        case '13': 
            alert('" НЕ СЦИ" (досить боятися, варто вже світу відкриватися) ');
        break;   
        case '14':
            alert('НЕ ЗАКРИВАЙСЯ ( будь відкритий для людей, тебе хочется пізнавати) ');
        break;
        case '15':
            alert('ЗАПИШИ (записуй свої геніальні ідеї, мрії та бажання тоді це все швидше втілиться в життя.) Але в деяких випадках  можна використовував, як "губозакатувальний" прибор :) ');    
        break;   
        case '16':
            alert('БУДЬ РІЗНИМ (частіше випускай свої внутрішніх героїв, щоб вони дивували світ)  ');
        break;
        case '17':
            alert('НАПОВНЮЙСЯ (дізнавайся нове, приїжджай до нас в гості, будь відкритий до нових наповнень) ');
        break;
        case '18':
            alert('НЕ НАКРУЧУЙ (більше позитивних думок, все вирішиться, головне "не накручуй" себе) ');    
        break;       
        case '19':
            alert('ДОДАЙ КОЛЬОРУ (яскраві емоції, більше рішучості і шаленості - це тобі дуже необхідно)');
        break;    
        default:
        alert('Сорян, Вован. Це, канєшно, твоє свято, але ти ввів неіснуючий номер передбачення. Лол. Кєк ;)');
        break;
    }
});
