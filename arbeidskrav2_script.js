
const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];



    const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
]

//1.Skriver ut antall studenter i arrayen.
    document.getElementById("studentCount").innerHTML = students.length;

//2.Skriver ut gjennomsnittskarakter som bokstavkarakter 
    let sumKarakter = 0 

    for (let student of students) {
        sumKarakter += Number(student.grade)
    }

    let snittKarakter = sumKarakter / students.length;
    let avrundetSnitt = Math.ceil (snittKarakter);

    const bokstaver = {
        6:"A", 
        5:"B",
        4:"C",
        3:"D",
        2:"E",
        1:"F"
    };

    let bokstav = bokstaver[avrundetSnitt] || "F";
    document.getElementById("averageGrade").innerHTML = bokstav;

    


//3.Teller og skriver ut antall av hver karakter til #gradeA, #grade B osv.
//https://gemini.google.com/share/d/17R3uMLLttyQ0S2pKUo73Iw2t4MgrTwok?usp=sharing 

    let antallA = 0;
    let antallB = 0;
    let antallC = 0;
    let antallD = 0;
    let antallE = 0;
    let antallF = 0;

    for (let student of students){
        let karakter = student.grade;


    if (karakter === "6") {
        antallA++;
        } else if (karakter === "5") {
        antallB++;
        } else if (karakter === "4") {
        antallC++;
        } else if (karakter === "3") {
        antallD++;
        } else if (karakter === "2") {
        antallE++;
        } else if (karakter === "1") {
        antallF++;
        }
    }
    


     document.getElementById("gradeA").textContent= antallA; 
     document.getElementById("gradeB").textContent= antallB; 
     document.getElementById("gradeC").textContent= antallC;  
     document.getElementById("gradeD").textContent= antallD; 
     document.getElementById("gradeE").textContent= antallE; 
     document.getElementById("gradeF").textContent= antallF; 




//4.Beregner og skriver ut gjennomsnittsalder(runder av til to desimaler)
//https://gemini.google.com/app/13dc9f63403faa19?hl=no Her har jeg brukt Math.round som hjelp
//FINN EN LINK HER SOM VISER MATH.CEIL


let sumAlder= 0

for (let student of students) {
    sumAlder += student.age;
}
let snittAlder = sumAlder / students.length;
let avrundetAlder = snittAlder.toFixed(2);

document.getElementById("averageAge").innerHTML = avrundetAlder;



//.5 Teller og skriver ut antall studenter som kommer rett fra videregående
const VGS = students.filter(student => student.age === 19).length;
document.getElementById("highSchool").innerHTML = VGS;

//.6 Teller og skriver ut antall studenter som har yrkeserfaring.
let antallMedErfaring = 0

for (let teller = 0; teller < students.length; teller++ ) {
    if (students [teller].workexperience >= 1) {
    antallMedErfaring++
    }
}
document.getElementById("workExperience").innerHTML = antallMedErfaring