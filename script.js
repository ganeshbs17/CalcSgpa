// inputs
const sub1 = document.getElementById('sub-1');
const sub2 = document.getElementById('sub-2');
const sub3 = document.getElementById('sub-3');
const sub4 = document.getElementById('sub-4');
const sub5 = document.getElementById('sub-5');
const sub6 = document.getElementById('sub-6');
const sub7 = document.getElementById('sub-7');
const sub8 = document.getElementById('sub-8');

const sub41 = document.getElementById('sub-41');
const sub42 = document.getElementById('sub-42');
const sub43 = document.getElementById('sub-43');
const sub44 = document.getElementById('sub-44');
const sub45 = document.getElementById('sub-45');
const sub46 = document.getElementById('sub-46');
const sub47 = document.getElementById('sub-47');
const sub48 = document.getElementById('sub-48');

const ext_m = document.getElementById('ext-m');

//results
const ext_text = document.getElementById('ext_calculated');
const sgpa4_val = document.getElementById('sgpa4_exp')

//buttons
const successButton = document.getElementById('btn-success');
const resetButton = document.getElementById('btn-reset');

const successButtonSgpa = document.getElementById('btn-success-sgpa');
const resetButtonSgpa = document.getElementById('btn-reset-sgpa');
//calculate function

function calculate_ext() {
	

	let m1, m2, m3, m4, m5, m6, m7 ,m8, ext;

	m1 = Number(sub1.value);
	m2 = Number(sub2.value);
	m3 = Number(sub3.value);
	m4 = Number(sub4.value);
	m5 = Number(sub5.value);
	m6 = Number(sub6.value);
	m7 = Number(sub7.value);
	m8 = Number(sub8.value);

	ext=((((m1+m2+m3+m4+m5+m6+m7+m8)/8)/60)*50);

	ext_text.textContent= ext.toFixed(0)+" ±1";
}

function calculate_sgpa4(){

	let m41, m42, m43, m44, m45, m46, m47, m48, ext_mk, sgpa4;

	ext_mk = Number(ext_m.value);
    console.log(ext_mk);


	m41 = parseInt((Number(sub41.value) + ext_mk)/10) + 1 ;
	m42 = parseInt((Number(sub42.value) + ext_mk)/10) + 1 ;
	m43 = parseInt((Number(sub43.value) + ext_mk)/10) + 1 ;
	m44 = parseInt((Number(sub44.value) + ext_mk)/10) + 1 ;
	m45 = parseInt((Number(sub45.value) + ext_mk)/10) + 1 ;
	m46 = parseInt((Number(sub46.value) + ext_mk)/10) + 1 ;
	m47 = parseInt((Number(sub47.value) + ext_mk)/10) + 1 ;
	m48 = parseInt((Number(sub48.value) + ext_mk)/10) + 1 ;

	let Total = ((4 * m42) + (3 * (m41 + m43 + m44 + m45 + m46)) + (2 * (m47 + m48))) ;
    console.log(Total);
    
  let c = 4 * 1 + 3 * 5 + 2 * 2 ;
    console.log(c);


   sgpa4 = Total / c;
    console.log(sgpa4);


   sgpa4_val.textContent= sgpa4.toFixed(2) + "\n approximately 🤪";


	



}

	

// }
// function showMessage(marks) {
//     if (marks < 40) {
//         return "You have failed. try again!";
//     } else if(marks >= 40 && marks <= 50) {
//         return "You have passed with average result. try more!";
//     } else if(marks >= 60 && marks <= 69) {
//         return "You got first class!";
//     } else if(marks >= 70 && marks <=79) {
//         return "You got star marks. it is very good result";
//     } else if(marks >= 80) {
//         return "You got A+. it is outstanding result";
//     } else {
//         return "you have put more than 100 marks";
//     }

// }

function reset() {
	
    sub1.value = "";
    sub2.value = "";
    sub3.value = "";
    sub4.value = "";
    sub5.value = "";
    sub6.value = "";
    sub7.value = "";
    sub8.value = "";
    ext_m.value = "" ;

    sub41.value  = "";
 	sub42.value = "";
	sub43.value = "";
	sub44.value = "";
	sub45.value = "";
	sub46.value = "";
	sub47.value = "";
	sub48.value  = "";

    
    ext_text.textContent, sgpa4_val.textContent = "___________";
  

}

function eventHandle() {
    if(Number(sub1.value) && Number(sub2.value) && Number(sub3.value) && Number(sub4.value) && Number(sub5.value) && Number(sub6.value) && Number(sub7.value) && Number(sub8.value)) {
        
        	calculate_ext();
        
        }
     else {
        alert('Give proper values!');
        reset();
    }

}

function eventHandle4() {
    if(Number(sub41.value) && Number(sub42.value) && Number(sub43.value) && Number(sub44.value) && Number(sub45.value) && Number(sub46.value) && Number(sub47.value) && Number(sub48.value)) {
        
        	calculate_sgpa4();
        
        }
     else {
        alert('Give proper values!');
        reset();
    }

}


function debug(){
	alert('Debug mode!');

}

successButton.addEventListener('click', eventHandle);
resetButton.addEventListener('click', reset);

successButtonSgpa.addEventListener('click', eventHandle4);
resetButtonSgpa.addEventListener('click', reset);


