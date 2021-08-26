// inputs
const sub1 = document.getElementById('sub-1');
const sub2 = document.getElementById('sub-2');
const sub3 = document.getElementById('sub-3');
const sub4 = document.getElementById('sub-4');
const sub5 = document.getElementById('sub-5');
const sub6 = document.getElementById('sub-6');
const sub7 = document.getElementById('sub-7');
const sub8 = document.getElementById('sub-8');

//results
const ext_text = document.getElementById('ext_calculated');
const message = document.getElementById('message_text')

//buttons
const successButton = document.getElementById('btn-success');
const resetButton = document.getElementById('btn-reset');

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

    
    ext_text.textContent = "___________________";
    

}

function eventHandle() {
    if(Number(sub1.value) && Number(sub2.value) && Number(sub3.value) && Number(sub4.value) && Number(sub5.value) && Number(sub6.value) && Number(sub7.value) && Number(sub8.value)) {
        calculate_ext();
    } else {
        alert('Give proper values!');
        reset();
    }

}

function debug(){
	alert('Debug mode!');

}

successButton.addEventListener('click', eventHandle);
resetButton.addEventListener('click', reset);

