let currentKlas = "A";

const setup = () => {
    toonAantalKlas("A");
    toonAantalKlas("B");
    toonAantalKlas("C");
    toonAantalKlas("D");

    toonKlas(currentKlas);

    let klassen = document.querySelectorAll("img");

    for (let i=0;i<klassen.length;i++) {
        let klas = klassen[i];
        klas.addEventListener("click", klikKlas);
    }

   
}

const studentClick = (event) => {
    let studentKlik = event.target;
    let student = studentKlik.getAttribute("id");

    //toon gegevens uit students in studentDetail

    //voeg class studentDetailAdd toe

}



const klikKlas = (event) => {
    let klasKlik = event.target;
    let klas = klasKlik.getAttribute("data-klas");
    toonKlas(""+klas+"");
}

const toonAantalKlas = (klas) => {
    //toon het aantal studenten waarbij attribute class gelijk is aan klas

    let counter = 0;
    let deklas = document.getElementById("klas"+klas);
    for (let i = 0; i<students.length;i++) {
        let klasStudent = students[i].class;
        if (klasStudent == klas) {
            console.log(klas);
            counter++;
        }

    }

    let aantalString = '<p class="aantal">'+ counter +'</p>';
    deklas.innerHTML += aantalString;

    return(counter);
}

const toonKlas = (klas) => {
    let classList = document.getElementById("classList");

    //eerst clearen zodat je zeker bent dat er geen namen meer staan
    classList.innerHTML = "";

    for (let i=0;i<students.length;i++) {
        let klasStudent = students[i].class;
        let naamStudent = students[i].firstname + " " + students[i].lastname;
        if (klasStudent == klas) {
            let stringStudent = '<h1 id="student_'+i+'">'+ naamStudent+ '</h1>';
            classList.innerHTML += stringStudent;

            let score = students[i].score;
            if (score === null) {
                //add class 'ontbreek' to the h1 van student met id "student_'i'"
                let stud = document.getElementById("student_"+i);
                stud.classList.add("ontbreek");
            }
        }

    }


}


window.addEventListener("load", setup);