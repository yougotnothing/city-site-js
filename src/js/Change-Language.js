const header = document.querySelector('.header');
const paragrapf = document.querySelector('.paragrapf');
const slogan = document.querySelector('.slogan');
const modal__title = document.querySelector('.modal__title')

function LangToUA() {
    header.innerHTML = "Ґданськ";
    paragrapf.innerHTML = "Ґданськ відомий як один з найважливіших портів Північної Європи. У минулому він був членом Ганзейського союзу і одним з найбагатших міст Польщі, що процвітало завдяки торгівлі бурштином і з'єднувало схід і центр європейського континенту. Незважаючи на руйнування Другої світової війни, Гданськ славиться своєю чудовою архітектурою, безліччю цікавих пам'яток і чудовою атмосферою старого портового міста.";
    slogan.innerHTML = "Не з нерозважливою хоробрістю, але й без боязкості";
    modal__title.innerHTML = "Фото Ґданську";
}

function LangToPL() {
    header.innerHTML = "Gdańsk";
    paragrapf.innerHTML = "Gdańsk jest znany jako jeden z najważniejszych portów w Europie Północnej. W przeszłości był członkiem Hanzy i jednym z najbogatszych miast w Polsce, prosperującym na handlu bursztynem i łączącym wschód i centrum kontynentu europejskiego. Pomimo zniszczeń II wojny światowej, Gdańsk słynie ze wspaniałej architektury, wielu interesujących zabytków i wspaniałej atmosfery starego miasta portowego."
    slogan.innerHTML = "Nec temere, nec timide";
    modal__title.innerHTML = "Zdjęcie Gdańska"
}