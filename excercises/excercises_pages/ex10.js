const quizButtons = document.querySelectorAll('.quiz-button'); 
const questionField = document.getElementById('quizquestion')
quizButtons.forEach(quizButton => {
    quizButton.addEventListener('click', event => {
        console.log('Element clicked:', event.target);
    });
});  

const questions = [
    {
        question: 'What is my name',
        possibleAnswers: ['jason', 'me', 'brainbox' , 'robot'],
        correctAnswer: 'brainbox',
    },

    {
        question: 'who is JLai',
        possibleAnswers: ['jason', 'asian ', 'him' , 'robot'],
        correctAnswer: 'robot',
    },

    {
        question: 'What colour is the sky',
        possibleAnswers: ['blue', 'red', 'green' , 'black'],
        correctAnswer: 'blue',
    },

    {
        question: 'What is the SI unit of electric current?',
        possibleAnswers: ['Volt', 'Ampere', 'Ohm', 'Watt'],
        correctAnswer: 'Ampere',
    },
    {
        question: 'Which of the following is a vector quantity?',
        possibleAnswers: ['Mass', 'Speed', 'Energy', 'Force'],
        correctAnswer: 'Force',
    },
    {
        question: 'What is the speed of light in a vacuum?',
        possibleAnswers: ['3 x 10^6 m/s', '3 x 10^8 m/s', '3 x 10^10 m/s', '3 x 10^12 m/s'],
        correctAnswer: '3 x 10^8 m/s',
    },
    {
        question: 'Which law states that the current through a conductor is directly proportional to the voltage?',
        possibleAnswers: ['Faraday\'s Law', 'Ohm\'s Law', 'Newton\'s First Law', 'Boyle\'s Law'],
        correctAnswer: 'Ohm\'s Law',
    },
    {
        question: 'What is the energy of a photon with frequency f?',
        possibleAnswers: ['hf', 'h/f', 'hf²', 'h²f'],
        correctAnswer: 'hf',
    },
    {
        question: 'Which particle is not a fundamental particle?',
        possibleAnswers: ['Electron', 'Quark', 'Proton', 'Neutrino'],
        correctAnswer: 'Proton',
    },
    {
        question: 'What is the work done when a force of 10N moves an object 5m in the direction of the force?',
        possibleAnswers: ['2J', '5J', '50J', '0.5J'],
        correctAnswer: '50J',
    },
    {
        question: 'Which phenomenon demonstrates the wave nature of light?',
        possibleAnswers: ['Photoelectric effect', 'Compton effect', 'Interference', 'Blackbody radiation'],
        correctAnswer: 'Interference',
    },
    {
        question: 'What is the time period of a simple pendulum if its length is quadrupled?',
        possibleAnswers: ['Doubles', 'Halves', 'Quadruples', 'Remains same'],
        correctAnswer: 'Doubles',
    },
    {
        question: 'Which of these is not a type of radioactive decay?',
        possibleAnswers: ['Alpha', 'Beta', 'Gamma', 'Delta'],
        correctAnswer: 'Delta',
    }
];

console.log(questions[1].question);

function showQuestions(){
    let questionIndex = Math.floor((Math.random() * questions.length));
    questionField.innerHTML = questions[questionIndex].question
    let i = 0
    quizButtons.forEach(quizButton => {
        quizButton.innerHTML = questions[questionIndex].possibleAnswers[i]
        i++
    });
};

showQuestions();