function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

sessionStorage.setItem('stage', 0)

const imageObj = new Image();
const pieces = []

const data = [
    {
        id: 1,
        width: 202,
        height: 171,
        imageSrc: 'images/puzzles/1.svg',
        href: null,
    },
    {
        id: 2,
        width: 182,
        height: 206,
        imageSrc: 'images/puzzles/2.svg',
        href: null,
    },
    {
        id: 3,
        width: 202,
        height: 171,
        imageSrc: 'images/puzzles/3.svg',
        href: null,
    },
    {
        id: 4,
        width: 170,
        height: 206,
        imageSrc: 'images/puzzles/4.svg',
        href: null,
    },
    {
        id: 5,
        width: 247,
        height: 170,
        imageSrc: 'images/puzzles/5.svg',
        href: null,
    },
    {
        id: 6,
        width: 176,
        height: 206,
        imageSrc: 'images/puzzles/6.svg',
        href: null,
    },
]


let questions = []

const puzzleName = sessionStorage.getItem('puzzleName')
if (puzzleName === 'corn') {
    imageObj.src = 'images/puzzle-03.png'
    questions = [
        {
            id: 1,
            question: 'Как кукуруза помогает улучшать зрение?',
            items: [
                'С помощью витаминов и полезных веществ',
                'Если на неё долго смотреть, то начнёшь лучше видеть',
                'С помощью витаминов и полезных веществ',
            ],
            explanation: 'В кукурузе содержатся вещества бета-каротин и лютеин, которые помогают зрению правильно развиваться!',
            rightAnswer: 'a'
        },
        {
            id: 2,
            question: 'Почему кукуруза даёт тебе супер-силу?',
            items: [
                'Потому что она сама супер!',
                'Поднимая банки с кукурузой много раз, ты станешь сильнее',
                'Её полезные вещества укрепляют мышцы',
            ],
            explanation: 'Кукуруза помогает мышцам и костям стать крепче, благодаря высокому содержанию белка, чтобы у тебя было больше сил!',
            rightAnswer: 'c'
        },
        {
            id: 3,
            question: 'Как кукуруза защищает от болезней?',
            items: [
                'Она умеет улучшать иммунитет',
                'Намажься её зёрнами целиком, и никогда не заболеешь',
                'Из неё можно сделать щит от любой заразы',
            ],
            explanation: 'Пищевые волокна, клетчатка и другие полезные вещества в кукурузе помогают противостоять вирусам и бактериям и укрепляют твоё здоровье!',
            rightAnswer: 'a'
        },
        {
            id: 4,
            question: 'Почему кукуруза очень полезна для детей?',
            items: [
                'Потому что её собирают, когда она молодая',
                'Из неё можно сделать немало полезных вещей',
                'В ней много витаминов для роста',
            ],
            explanation: 'В кукурузе содержатся витамины А и Е, кальций, железо и другие вещества, очень полезные для роста и развития молодого организма!',
            rightAnswer: 'c'
        },
        {
            id: 5,
            question: 'Как кукуруза улучшает ум?',
            items: [
                'Соком кукурузы написано много умных книжек',
                'С помощью полезных витаминов',
                'Если сосчитать все зёрнышки в банке, то станешь умнее',
            ],
            explanation: 'Витамины группы B, которые содержатся в кукурузе, положительно влияют на центральную нервную систему!',
            rightAnswer: 'b'
        },
        {
            id: 6,
            question: 'Почему молодая кукуруза такая сладкая?',
            items: [
                'Потому что она растёт рядом со сладкими фруктами и ягодами',
                'Потому что в банки с ней добавляют конфеты',
                'Она сладкая от природы',
            ],
            explanation: 'Молодая кукуруза сладкая от природы, и в баночки с ней не добавляют сахар, поэтому она такая полезная!',
            rightAnswer: 'c'
        },
    ]
} else if (puzzleName === 'together') {
    imageObj.src = 'images/puzzle-04.png'
    questions = [
        {
            id: 1,
            question: 'Почему брокколи так же полезна, как лимон?',
            items: [
                'По кочану и по кочерыжке',
                'Потому что они растут на одном дереве',
                'В ней столько же витамина С',
            ],
            explanation: 'По содержанию витамина С, полезного для здоровья, брокколи не уступает лимону, и при этом в ней нет такой сильной кислоты!',
            rightAnswer: 'c'
        },
        {
            id: 2,
            question: 'Почему фасоль сделает тебя крепче?',
            items: [
                'Открывая каждый день банки с фасолью, ты станешь сильнее',
                'В ней много белка',
                'Потому что фасолинки похожи на сильные мышцы',
            ],
            explanation: 'Фасоль очень питательная, и её называют растительным мясом, потому что в ней много белка!',
            rightAnswer: 'b'
        },
        {
            id: 3,
            question: 'Почему кабачок очень полезен для детей?',
            items: [
                'В нём много витаминов для роста',
                'Из него можно сделать классные игрушки',
                'На кабачках удобно считать, чтобы решать задачки по математике',
            ],
            explanation: 'В кабачке содержится множество витаминов и микроэлементов, очень полезных для роста и развития детей!',
            rightAnswer: 'a'
        },
        {
            id: 4,
            question: 'Почему морковка умеет быстро заживлять ранки?',
            items: [
                'Потому что из неё делают пластыри',
                'У неё есть антисептические свойства',
                'Она растёт только рядом с подорожником',
            ],
            explanation: 'Морковь обладает отличными обеззараживающими свойствами, поэтому она используется для заживления ран и порезов!',
            rightAnswer: 'b'
        },
        {
            id: 5,
            question: 'Почему огурчик пробуждает аппетит?',
            items: [
                'Потому что его так и хочется съесть',
                'С ним всё всегда гораздо вкуснее',
                'Он стимулирует выработку желудочного сока',
            ],
            explanation: 'Огурцы славятся тем, что стимулируют выработку желудочного сока, улучшая переваривание пищи и восстанавливая обмен веществ!',
            rightAnswer: 'c'
        },
        {
            id: 6,
            question: 'Почему перец помогает уснуть?',
            items: [
                'В нём есть специальные витамины ',
                'Его семенами можно набить подушку',
                'Можно быстро задремать, если в голове считать перчики',
            ],
            explanation: 'Благодаря своим витаминам, сладкий перец помогает при бессоннице, постоянных стрессах, а также избавляет от усталости!',
            rightAnswer: 'a'
        },
    ]
} else {

    imageObj.src = 'images/puzzle-02.png';
    questions = [
        {
            id: 1,
            question: 'Как горошек замедляет старение?',
            items: [
                'Когда его ешь, то забываешь про возраст',
                'С помощью витаминов',
                'Глядя на молодой горошек, можно почувствовать себя молодым',
            ],
            explanation: 'Благодаря витаминам группы B, которые есть в горошке, улучшаются обменные процессы, и замедляется старение клеток!',
            rightAnswer: 'b'
        },
        {
            id: 2,
            question: 'Почему горошек делает людей энергичными?',
            items: [
                'В нём накапливается электроэнергия',
                'Потому что его надо быстро есть',
                'Потому что он природный энергетик',
            ],
            explanation: 'Горошек с помощью микроэлементов и углеводов прибавляет бодрости организму, чтобы легче переносить физические нагрузки!',
            rightAnswer: 'c'
        },
        {
            id: 3,
            question: 'Как горошек помогает нам быть стройными?',
            items: [
                'Он нормализует обмен жиров',
                'Банка с горошком – лучший спортивный инструмент',
                'Если принять гороховую ванну, то можно похудеть',
            ],
            explanation: 'Из-за низкой калорийности горошек очень полезен людям с лишним весом и сидящим на диете!!',
            rightAnswer: 'a'
        },
        {
            id: 4,
            question: 'Почему горошек полезен для твоих зубок?',
            items: [
                'Потому что его легко раскусить',
                'У него есть витамины для укрепления зубов',
                'Зубные врачи тоже очень любят горошек',
            ],
            explanation: 'Благодаря каротину или, как его ещё называют, провитамину А, горошек помогает укреплять костную систему и зубную эмаль!',
            rightAnswer: 'b'
        },
        {
            id: 5,
            question: 'Как горошек укрепляет сердце?',
            items: [
                'Говорят, смех полезен для сердца, а про горошек есть очень много шуток',
                'Если каждый день открывать банки с горошком, то можно здорово прокачать сердце',
                'С помощью полезных веществ',
            ],
            explanation: 'Горошек, благодаря калию, магнию и кальцию, помогает сердцу работать лучше и улучшает давление!',
            rightAnswer: 'c'
        },
        {
            id: 6,
            question: 'Почему горошек полезен для кожи?',
            items: [
                'Потому что у него есть витамин А',
                'Из него получается отличная маска для лица',
                'Потому что полезен, и всё тут',
            ],
            explanation: 'С помощью ретинола (витамина А) горошек помогает быстро восстановить ткани и оказывает положительное влияние на кожу!',
            rightAnswer: 'a'
        },
    ]
}

buildPieceWrappers()

const prevButton = document.querySelector('.quiz__prev-button')

prevButton.addEventListener('click', function(e) {
    e.preventDefault()

    if (document.querySelector('.quiz__variants.active')
        && window.matchMedia('(max-width: 768.98px)').matches
    ) {
        resetQuestion()
        return
    }

    if (document.querySelector('.quiz__game-over.active')) {
        document.querySelector('.quiz__game-over.active').classList.remove('.active')
        document.querySelector('.quiz__game-over').style.display = 'none'
        document.querySelector('.quiz__main').style.display = 'block'
        return
    }

    window.location.href = '/'
})

function resetQuestion() {
    document.body.classList.remove('lock')
    document.querySelector('.quiz__title').innerHTML = `выбирай пазл,<br /> отвечай на вопросы<br /> и собери картинку`
    document.querySelector('.quiz__top').appendChild(document.querySelector('.quiz__title'))
    document.querySelector('.quiz__variants.active').innerHTML = ''
    document.querySelector('.quiz__variants.active').classList.remove('active')
}

function dragElement(el) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    el.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        console.log(e.target)
        if (e.target.closest('.quiz__piece') && !e.target.closest('.quiz__piece').classList.contains('active')) return


        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        console.log(e.target)
        if (e.target.closest('.quiz__piece') && !e.target.closest('.quiz__piece').classList.contains('active')) return

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        if (window.getComputedStyle(el).position !== 'absolute') {
            el.style.position = 'absolute'
        }

        el.style.top = el.offsetTop - pos2 + "px";
        el.style.left = el.offsetLeft - pos1 + "px";

    }

    function stopElementDrag(e) {
        document.onpointerup = null;
        document.onpointermove = null;
        const squares = document.querySelectorAll('.quiz__square')

        for (let index = 0; index < squares.length; index++) {

            const square = squares[index]

            const squarePos = square.getBoundingClientRect()
            const squareX = squarePos.x
            const squareY = squarePos.y

            const puzzlePos = e.target.getBoundingClientRect()

            const puzzleX = puzzlePos.x
            const puzzleY = puzzlePos.y
            const puzzleWidth = puzzlePos.width
            const puzzleHeight = puzzlePos.height

            let radius = 120

            if (window.matchMedia('(max-width: 767.98px)').matches) {
                radius = 50
            }
            const x = puzzleX - squareX > (radius * -1) && puzzleX - squareX + radius < puzzleWidth
            const y = puzzleY - squareY > (radius * -1) && puzzleY - squareY + radius < puzzleHeight

            if (x && y)  {
                const piece = e.target.closest('.quiz__piece')



                const squareIndex = square.dataset.squareIndex
                const pieceIndex = piece.dataset.pieceIndex

                if (squareIndex !== pieceIndex) {
                    setInitialPosition(el)
                    return
                }
                setFinalPosition(piece, square)

                const stage = +sessionStorage.getItem('stage')
                sessionStorage.setItem('stage', stage + 1)

                document.querySelector('.quiz__variants').innerHTML = ''
                document.querySelector('.quiz__title').innerHTML = ''


                setGameOver()
            }
        }


    }
}

function setGameOver() {
    const fixedPieces = document.querySelectorAll('.quiz__piece.fixed')

    if (fixedPieces.length === 6) {
        document.querySelector('.quiz__main').style.display = 'none'
        document.querySelector('.quiz__game-over').style.display = 'block'
        document.querySelector('.quiz__game-over').classList.add('active')
    }
}

function buildPieceWrappers() {
    const pieces = document.querySelectorAll('.quiz__piece')

    for (let index = 0; index < pieces.length; index++) {
        const piece = pieces[index]
        piece.addEventListener('click', setQuestion)

        dragElement(piece)

        piece.addEventListener( 'touchmove', function(e) {
            e.preventDefault()
        })
    }
}

async function setGame() {
    document.querySelector('.game-over__image').appendChild(imageObj)

    let sourceY = 0
    let sourceX = 0
    for (let index = 0; index < 6; ++index) {
        const piece = data[index]
        const pieceDOM = document.querySelector(`.quiz__piece[data-piece-index="${index}"]`)

        let width = parseFloat(window.getComputedStyle(pieceDOM).width)
        let height = parseFloat(window.getComputedStyle(pieceDOM).height)

        // Устанавливаем начало координат, начиная со второго столбца пазлов
        if (index % 3 !== 0) {
            sourceX += width;
        } else {
            sourceX = 0
        }

        // Устанавливаем начало координат для второй строки пазлов
        if (index > 2) {
            sourceY = height;
        }

        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d');


        canvas.width = width
        canvas.height = height

        context.width = String(width)
        context.height = String(height)

        const updatedImage = await resizeImage(imageObj)

        // Отрисовка кусков пазла на различных расширениях экрана
        if (window.matchMedia("(min-width: 1100px)").matches) {
            switch (index) {
                case 0:
                    context.drawImage(updatedImage, sourceX, sourceY, width, height, 0, 0, width, height);
                    break;
                case 1:
                    context.drawImage(updatedImage, sourceX - 35, sourceY, width, height, 0, 0, width, height);
                    break;
                case 2:
                    context.drawImage(updatedImage, 274, sourceY, width, height, 0, 0, width, height );
                    break;
                case 3:
                    context.drawImage(updatedImage, sourceX, sourceY - 100, width, height, 0, 0, width, height);
                    break;
                case 4:
                    context.drawImage(updatedImage, sourceX - 133, sourceY - 20, width, height, 0, 0, width, height);
                    break;
                case 5:
                    context.drawImage(updatedImage, 312, sourceY - 90, width, height, 0, 0, width + 20, height);
                    break;
            }
        } else if (window.matchMedia("(min-width: 767.98px) and (max-width: 1100px)").matches) {
            switch (index) {
                case 0:
                    context.drawImage(updatedImage, sourceX, sourceY, width, height, 0, 0, width, height);
                    break;
                case 1:
                    context.drawImage(updatedImage, sourceX - 32, sourceY, width, height, 0, 0, width, height);
                    break;
                case 2:
                    context.drawImage(updatedImage, 235, sourceY, width, height, 0, 0, width, height);
                    break;
                case 3:
                    context.drawImage(updatedImage, sourceX, sourceY - 85, width, height, 0, 0, width, height);
                    break;
                case 4:
                    context.drawImage(updatedImage, sourceX - 110, sourceY - 20, width, height, 0, 0, width, height);
                    break;
                case 5:
                    context.drawImage(updatedImage, 270, sourceY - 80, width, height, 0, 0, width + 20, height);
                    break;
                }
        } else if (window.matchMedia("(max-width: 767px)").matches) {
            switch (index) {
                case 0:
                    context.drawImage(updatedImage, sourceX, sourceY, width, height, 0, 0, width, height);
                    break;
                case 1:
                    context.drawImage(updatedImage, sourceX - 15, sourceY, width, height, 0, 0, width, height);
                    break;
                case 2:
                    context.drawImage(updatedImage, 117, sourceY, width, height, 0, 0, width, height);
                    break;
                case 3:
                    context.drawImage(updatedImage, sourceX, sourceY - 40, width, height, 0, 0, width, height);
                    break;
                case 4:
                    context.drawImage(updatedImage, sourceX - 56, sourceY - 8, width, height, 0, 0, width, height);
                    break;
                case 5:
                    context.drawImage(updatedImage, 136, sourceY - 55, width - 4, height, 0, 0, width, height);
                    break;
            }
        }


        piece.href = canvas.toDataURL()


        const doc = new DOMParser()

        const response = await fetch(piece.imageSrc)
        const str = await response.text()

        const svgImage = await doc.parseFromString(str, "image/svg+xml")

        svgImage.querySelector('image').setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', piece.href);

        svgImage.querySelector('image').setAttribute( 'width', piece.width);
        svgImage.querySelector('image').setAttribute( 'height', piece.height);

        svgImage.querySelector('svg').setAttribute('viewBox', '0 0 ' + (piece.width + 2) + ' ' + piece.height)
        svgImage.querySelector('svg').setAttribute('width', width)
        svgImage.querySelector('svg').setAttribute('height', height)

        pieceDOM.innerHTML = svgImage.documentElement.outerHTML

        // const pieceIndex = pieceDOM.dataset.pieceIndex
        // const square = document.querySelector(`.quiz__square[data-square-index="${pieceIndex}"]`)
        // setFinalPosition(pieceDOM, square)
    }
}
imageObj.onload = setGame

// window.addEventListener('resize', function() {
//     // Меняем позицию при пазла, чтобы не выходило за пределы доски
//
//     const pieces = document.querySelectorAll('.quiz__piece.fixed')
//
//     for (let index = 0; index < pieces.length; index++) {
//         const piece = pieces[index]
//         const pieceIndex = piece.dataset.pieceIndex
//         const square = document.querySelector(`.quiz__square[data-square-index="${pieceIndex}"]`)
//         setFinalPosition(piece, square)
//     }
//     setGame()
// })

function resizeImage(image) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext("2d");
    const board = document.querySelector('.quiz__board')

    let height = parseFloat(getComputedStyle(board).height) + 5
    let width = parseFloat(getComputedStyle(board).width) + 5

    if (window.matchMedia('(max-width: 767.98px)').matches) {
        height = 137
        width = 204
    }

    canvas.height = height
    canvas.width = width

    context.drawImage(image, 0, 0, width, height)
    const dataUrl = canvas.toDataURL('image/jpeg')
    const newImage = new Image()

    newImage.src = dataUrl
    return newImage
}



function setQuestion(e) {
    const piece = e.target.closest('.quiz__piece')

    // Если пазл уже установлен, то он не интересует
    if (piece.classList.contains('fixed')) return

    // Обнуляем варианты ответа на вопрос
    const variants = document.querySelector('.quiz__variants')
    variants.innerHTML = ''
    variants.classList.add('active')
    // Получаем данные о вопросе
    const index = piece.dataset.pieceIndex
    const question = questions[index]

    // Добавляем заголовок вопроса (сам вопрос)
    const title = document.querySelector('.quiz__title')

    if (!title.classList.contains('active')) {
        title.classList.add('active')
    }

    title.textContent = question.question

    if (window.matchMedia('(max-width: 767.98px)').matches) {
        variants.appendChild(title)
        document.body.classList.add('lock')
        document.querySelector('.header').classList.add('active')
    }

    // Устанавливаем индекс текущего вопроса
    sessionStorage.setItem('stageIndex', index)

    // Добавляем элементы ответа в DOM
    for (let index = 0; index < question.items.length; index++) {
        const item = question.items[index]

        let letter

        switch (index) {
            case 0:
                letter = 'A'
                break;
            case 1:
                letter = 'B'
                break;
            case 2:
                letter = 'C'
                break;
        }

        const el = document.createElement('div')
        el.className = 'quiz__variant variant-quiz'
        el.innerHTML = `
            <div class="variant-quiz__body">
                <div class="variant-quiz__letter">${letter}</div>
                <p class="variant-quiz__text">${item}</p>
            </div>
        `
        el.addEventListener('click', checkAnswer)
        variants.appendChild(el)
    }

    const answerDOM = document.createElement('div')
    answerDOM.className = 'quiz__answer'
    document.querySelector('.quiz__variants').appendChild(answerDOM);
}

function checkAnswer(e) {
    // Массив ответов
    const answers = document.querySelectorAll('.quiz__variant')

    // Текущий выбранный ответ
    const answer = e.target.closest('.quiz__variant')

    // Индекс вопроса
    const questionIndex = +sessionStorage.getItem('stageIndex')

    // Получаем данные о вопросе
    const question = questions[questionIndex]

    // Переменная с правильным ответов на вопрос
    let rightAnswerIndex

    // Преобразовываем буквы вопроса в индексы для дальнейшего сравнения
    switch (question.rightAnswer.toLowerCase()) {
        case 'a':
            rightAnswerIndex = 0
            break;
        case 'b':
            rightAnswerIndex = 1
            break;
        case 'c':
            rightAnswerIndex = 2
            break;
    }


    if (document.querySelector('.variant-quiz__body.active')) return

    answer.querySelector('.variant-quiz__body').classList.add('active')

    for (let index = 0; index < answers.length; ++index) {
        const item = answers[index]

        // Если ответ правильный
        if (answer.isEqualNode(item) && rightAnswerIndex === index) {
            if (document.querySelector('.quiz__win')) continue

            const el = document.createElement('div')

            el.className = 'quiz__win win-quiz'

            el.innerHTML = `
                <div class="win-quiz__top">
                    <div class="win-quiz__image">
                        <img src="images/puzzles/win.png" alt="">
                    </div>
                    <div class="win-quiz__title">
                            Это <br>
                            правильный <br>
                            ответ!
                    </div>
                </div>
                <div class="win-quiz__text">
                    <p>В кукурузе содержатся вещества бета-каротин и лютеин, которые помогают зрению правильно развиваться!</p>
                </div>`

            if (window.matchMedia('(max-width: 767.98px)').matches) {
                document.querySelector('.quiz__board').appendChild(el)
            } else {
                document.querySelector('.quiz').appendChild(el)
            }



            setTimeout(() => {
                if (document.querySelector('.quiz__win')) {
                    document.querySelector('.quiz__win').remove()
                }
                if (document.querySelector('.variant-quiz__body.active')) {
                    document.querySelector('.variant-quiz__body.active').classList.remove('active')
                }
            }, 10000)
            const puzzle = document.querySelector(`.quiz__piece[data-piece-index="${questionIndex}"]`)

            puzzle.classList.add('active')
            if (document.querySelector('.quiz__loss')) {
                document.querySelector('.quiz__loss').remove()
            }

            resetQuestion()
            break;
        } else {
            if (document.querySelector('.quiz__loss')) continue
            const el = document.createElement('div')
            el.className = 'quiz__loss loss-quiz'
            el.innerHTML = `
                <div class="loss-quiz__image">
                    <img src="images/puzzles/loss.png" alt="">
                </div>
                <p class="loss-quiz__text">
                    Попробуй <br>
                    ещё раз!
                </p>`

            if (window.matchMedia('(max-width: 767.98px)').matches) {
                document.querySelector('.quiz__answer').appendChild(el)
            } else {
                document.querySelector('.quiz').appendChild(el)
            }


            setTimeout(() => {
                if (document.querySelector('.quiz__loss')) {
                    document.querySelector('.quiz__loss').remove()
                }
                if (document.querySelector('.variant-quiz__body.active')) {
                    document.querySelector('.variant-quiz__body.active').classList.remove('active')
                }
            }, 5000)

        }


    }

    e.stopPropagation()
}

window.addEventListener('click', function(e) {
    if (document.querySelector('.quiz__win') && !e.target.closest('.quiz__win')) {
        document.querySelector('.quiz__win').remove()
        if (document.querySelector('.variant-quiz__body.active')) {
            document.querySelector('.variant-quiz__body.active').classList.remove('active')
        }
    }
})

window.addEventListener('click', function(e) {
    if (document.querySelector('.quiz__loss') && !e.target.closest('.quiz__loss')) {
        document.querySelector('.quiz__loss').remove()
        if (document.querySelector('.variant-quiz__body.active')) {
            document.querySelector('.variant-quiz__body.active').classList.remove('active')
        }

    }
})







function setFinalPosition(piece, square) {
    const index = +piece.dataset.pieceIndex

    if (window.matchMedia("(min-width: 1100px)").matches) {
        switch (index) {
            case 0:
                piece.style.left = square.offsetLeft + "px";
                piece.style.top = square.offsetTop + "px";
                break;
            case 1:

                piece.style.left = square.offsetLeft - 11 + "px";
                piece.style.top = square.offsetTop + "px";
                break;
            case 2:

                piece.style.left = square.offsetLeft - 43 + "px";
                piece.style.top = square.offsetTop + "px";
                break;
            case 3:
                piece.style.top = square.offsetTop - 48 + "px";
                piece.style.left = square.offsetLeft + "px";
                break;
            case 4:
                piece.style.top = square.offsetTop - 12 + "px";
                piece.style.left = square.offsetLeft - 43 + "px";
                break;
            case 5:
                piece.style.top = square.offsetTop - 47 + "px";
                piece.style.left = square.offsetLeft - 11 + "px";
                break;
            default:
                piece.style.top = square.offsetTop + "px";
                piece.style.left = square.offsetLeft + "px";
        }
    } else if (window.matchMedia("(min-width: 767.98px) and (max-width: 1100px)").matches) {
        switch (index) {
            case 0:
                piece.style.left = square.offsetLeft + "px";
                piece.style.top = square.offsetTop + "px";
                break;
            case 1:
                piece.style.left = square.offsetLeft - 11 + "px";
                piece.style.top = square.offsetTop + "px";
                break;
            case 2:
                piece.style.left = square.offsetLeft - 37 + "px";
                piece.style.top = square.offsetTop + "px";
                break;
            case 3:
                piece.style.top = square.offsetTop - 41 + "px";
                piece.style.left = square.offsetLeft + "px";
                break;
            case 4:
                piece.style.top = square.offsetTop - 9 + "px";
                piece.style.left = square.offsetLeft - 37 + "px";
                break;
            case 5:
                piece.style.top = square.offsetTop - 40 + "px";
                piece.style.left = square.offsetLeft - 10 + "px";
                break;
            default:
                piece.style.top = square.offsetTop + "px";
                piece.style.left = square.offsetLeft + "px";
        }
    } else if (window.matchMedia("(max-width: 767px)").matches) {
        switch (index) {
            case 0:
                piece.style.left = square.offsetLeft + "px";
                piece.style.top = square.offsetTop + "px";
                piece.style.width = '136px'
                piece.style.height = '115px'
                piece.querySelector('svg').setAttribute('width', 136)
                piece.querySelector('svg').setAttribute('height', 115)
                break;
            case 1:
                piece.style.left = square.offsetLeft - 6 + "px";
                piece.style.top = square.offsetTop + "px";
                piece.style.width = '123px'
                piece.style.height = '139px'
                piece.querySelector('svg').setAttribute('width', 123)
                piece.querySelector('svg').setAttribute('height', 139)
                break;
            case 2:
                piece.style.left = square.offsetLeft - 28 + "px";
                piece.style.top = square.offsetTop + "px";
                piece.style.width = '137px'
                piece.style.height = '115px'
                piece.querySelector('svg').setAttribute('width', 137)
                piece.querySelector('svg').setAttribute('height', 115)
                break;
            case 3:
                piece.style.top = square.offsetTop - 31 + "px";
                piece.style.left = square.offsetLeft + "px";
                piece.style.width = '115px'
                piece.style.height = '139px'
                piece.querySelector('svg').setAttribute('width', 115)
                piece.querySelector('svg').setAttribute('height', 139)
                break;
            case 4:
                piece.style.top = square.offsetTop - 6 + "px";
                piece.style.left = square.offsetLeft - 28 + "px";
                piece.style.width = '167px'
                piece.style.height = '114px'
                piece.querySelector('svg').setAttribute('width', 167)
                piece.querySelector('svg').setAttribute('height', 114)
                break;
            case 5:
                piece.style.top = square.offsetTop - 32 + "px";
                piece.style.left = square.offsetLeft - 3 + "px";
                piece.style.width = '114px'
                piece.style.height = '139px'
                piece.querySelector('svg').setAttribute('width', 114)
                piece.querySelector('svg').setAttribute('height', 139)
                break;
            default:
                piece.style.top = square.offsetTop + "px";
                piece.style.left = square.offsetLeft + "px";
                piece.style.width = '136px'
                piece.style.height = '115px'
                piece.querySelector('svg').setAttribute('width', 136)
                piece.querySelector('svg').setAttribute('height', 115)
        }
    }

    piece.classList.add('fixed')
    piece.classList.remove('active')
}

function setInitialPosition(el) {
    const index = Array.from(document.querySelectorAll('.quiz__piece')).findIndex(piece => {
        return el.isEqualNode(piece)
    })

    switch (index) {
        case 0:

            el.style.left = 0;
            el.style.top = '35px'
            el.style.right = 'auto'
            el.style.bottom = 'auto'
            break;
        case 1:

            el.style.left = 'auto';
            el.style.top = '35px'
            el.style.right = 0
            el.style.bottom = 'autp'
            break;
        case 2:
            el.style.bottom = 0;
            el.style.left = 0
            el.style.right = 'auto'
            el.style.top = 'auto'
            break;
        case 3:
            el.style.bottom = 0;
            el.style.left = "28%"
            el.style.right = 'auto'
            el.style.top = 'auto'
            break;
        case 4:
            el.style.left = "53%";
            el.style.bottom = 0;
            el.style.right = 'auto'
            el.style.top = 'auto'
            break;
        case 5:
            el.style.right = 0;
            el.style.bottom = 0
            el.style.left = 'auto'
            el.style.top = 'auto'
            break;
    }
    // el.classList.remove('active')
    // el.classList.remove('fixed')
}


