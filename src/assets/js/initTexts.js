const $ = selector => document.querySelector(selector)
const S$ = selector => document.querySelectorAll(selector)

initTexts = []
initTitles = []

for (let i = 1; i <= 4; i++) {
    initTexts[`initText${i}`] = $(`.initText-${i}`);
    initTitles[`initTitle${i}`] = $(`.initTitle-${i}`);

    if (initTitles[`initTitle${i}`]) {
        initTitles[`initTitle${i}`].addEventListener('click', () => {

            // Ocultar todos los initTexts
            for (let j = 1; j <= 4; j++) {
                initTexts[`initText${j}`].classList.add('hidden');
                setTimeout(() => {
                    initTexts[`initText${j}`].classList.remove('!opacity-100');
                }, 100)
                initTitles[`initTitle${j}`].classList.remove('!text-white');
            }

            // Mostrar el initText correspondiente al initTitle clickeado
            initTexts[`initText${i}`].classList.remove('hidden');
            setTimeout(() => {
                initTexts[`initText${i}`].classList.add('!opacity-100');
            }, 100)
            initTitles[`initTitle${i}`].classList.add('!text-white');
            
        });
    }
}
