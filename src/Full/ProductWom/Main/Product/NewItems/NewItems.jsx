import Card from "../../card/card"


export default function NewItems(props){
    return(
        <>

            <Card price = "1 400"
                foto = "src/assets/newItems/item1.jpg"
                description = "Футболка Apex – это сочетание минимализма и комфорта. Изготовлена из мягкого хлопка с добавлением эластана, обеспечивая идеальную посадку и свободу движений. Классический крой и лаконичный дизайн делают эту футболку универсальной, подходящей для любого случая – от прогулки до спортивных занятий."
                name = "Apex"
                idNum = "1">

                {props.children}
            </Card>

            <Card price = "1 600"
                foto = "src/assets/newItems/item2.jpg"
                description = "Футболка Vector – идеальный выбор для активных мужчин. Влаговпитывающая ткань и эргономичный крой обеспечивают комфорт даже при интенсивных нагрузках. Современный дизайн и стильные принты добавляют динамики и индивидуальности вашему образу."
                name = "Vector"
                idNum = "2">

                {props.children}
            </Card>

            <Card price = "2 800"
                foto = "src/assets/newItems/item3.jpg"
                description = "Брюки Elevate – воплощение стиля и элегантности. Изготовлены из мягкой и прочной ткани с добавлением эластана для максимального комфорта. Высокая талия и зауженные к низу брючины визуально удлиняют ноги и подчеркивают фигуру. Подходят как для делового, так и для повседневного гардероба."
                name = "Elevate"
                idNum = "3">

                {props.children}
            </Card>

            <Card price = "4 500"
                foto = "src/assets/newItems/item4.jpg"
                description = "Пиджак Plaid – стильный и универсальный элемент гардероба. Изготовлен из высококачественной шерсти с подкладкой из мягкого сатина, обеспечивающей комфорт на протяжении всего дня. Классический крой и модный клетчатый узор делают этот пиджак идеальным выбором для офиса или вечерних мероприятий."
                name = "Plaid"
                idNum = "4">

                {props.children}
            </Card>

            <Card price = "6 000"
                foto = "src/assets/newItems/item5.jpg"
                description = "Куртка Stealth – идеальный выбор для прохладной погоды. Водоотталкивающая и ветронепроницаемая ткань обеспечивает надежную защиту от непогоды. Утепленная подкладка сохраняет тепло, а стильный черный цвет и лаконичный дизайн делают эту куртку универсальной для любого случая."
                name = "Stealth"
                idNum = "5">

                {props.children}
            </Card>

            <Card price = "2 200"
                foto = "src/assets/newItems/item6.jpg"
                description = "Сумка Grace – это элегантный и практичный аксессуар для повседневного использования. Изготовлена из высококачественной экокожи, она обладает прочностью и долговечностью. Просторное основное отделение и несколько внутренних карманов обеспечивают удобство хранения ваших вещей. Изящный дизайн и утонченные детали подчеркивают ваш стиль и элегантность."
                name = "Grace"
                idNum = "6">

                {props.children}
            </Card>

            <Card price = "4 000"
                foto = "src/assets/newItems/item7.jpg"
                description = "Кроссовки Nova – это стиль и комфорт в одном флаконе. Изготовлены из дышащих материалов, они обеспечивают вентиляцию и комфорт даже при длительном ношении. Амортизирующая подошва и поддерживающая стелька снижают нагрузку на ноги, а современный дизайн делает их идеальными для повседневного использования и активного отдыха."
                name = "Nova"
                idNum = "7">

                {props.children}
            </Card>

            <Card price = "3 500"
                foto = "https://i.pinimg.com/474x/95/67/5a/95675add63facf884422356b09dfe913.jpg"
                description = "Джинсы Infinity – это идеальное сочетание стиля и комфорта. Изготовлены из высококачественного денима с добавлением эластана для лучшей посадки и свободы движений. Классический крой с высокой талией подчеркивает фигуру и визуально удлиняет ноги. Темно-синий цвет и минималистичный дизайн делают эти джинсы универсальным элементом гардероба, подходящим для любых ситуаций."
                name = "Infinity"
                idNum = "8">

                {props.children}
            </Card>

            <Card price = "3 800"
                foto = "https://i.pinimg.com/474x/2a/95/19/2a9519c35a114403166f8e5c9c67a9b3.jpg"
                description = "Джинсы Liberty – для тех, кто не боится выделяться. Модель с рваными элементами и модным выбеливанием придает образу дерзости и динамики. Высококачественный деним обеспечивает долговечность и комфорт в носке. Эти джинсы прекрасно сочетаются как с кроссовками, так и с каблуками, позволяя создавать разнообразные образы."
                name = "Liberty"
                idNum = "9">

                {props.children}
            </Card>

            <Card price = "3 200"
                foto = "https://i.pinimg.com/474x/8d/97/0c/8d970cefa226895eea36306acda32911.jpg"
                description = "Худи Pulse – для тех, кто всегда в движении. Выполнен из легкого и дышащего материала, который обеспечивает комфорт даже при активных нагрузках. Спортивный крой и минималистичный дизайн делают его универсальным выбором для занятий спортом и активного отдыха. Светоотражающие элементы добавляют безопасности в темное время суток."
                name = "Pulse"
                idNum = "10">

                {props.children}
            </Card>

            <Card price = "7 200"
                foto = "src/assets/WomCard/WomNewItems/item11.jpg"
                description = " Куртка Arctic создана для экстремальных условий. Высококачественный материал с водо- и ветрозащитными свойствами обеспечивает максимальную защиту от непогоды. Утеплитель из гусиного пуха гарантирует тепло даже в самые холодные дни. Эргономичный крой и множество карманов делают эту куртку идеальным выбором для зимних прогулок и активного отдыха."
                name = "Arctic"
                idNum = "11">

                {props.children}
            </Card>

            <Card price = "4 500"
                foto = "src/assets/WomCard/WomNewItems/item12.jpg"
                description = "Кроссовки Swift – это идеальный выбор для тех, кто ведет активный образ жизни. Легкие и дышащие материалы обеспечивают комфорт даже при длительном ношении. Амортизирующая подошва и поддерживающая стелька снижают нагрузку на ноги, что делает эти кроссовки идеальными для тренировок и прогулок. Стильный дизайн и яркие акценты подчеркнут вашу индивидуальность."
                name = "Swift"
                idNum = "12">

                {props.children}
            </Card>
        </>
    )
}