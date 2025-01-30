//Tem o intuito de mostrar algumas funcionalidades, por isso que a aparência está "bem simples" (brega)
'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Escuro";
    }
    else {
        this.textContent = "Claro";
    }

});


const translations = {
    pt: {
        title: "Lista de tarefa",
        msg: "Tarefas atuais:",
        tasks: [
            "Adicionar estilos visuais",
            "Adicionar temas claros e escuros",
            "Habilitar a alternância de temas",
            "Adicionar suporte a três línguas",
            "Habilitar a alternância de idiomas",
            "Adicionar suporte ao tamanho da letra",
            "Habilitar a alternância do tamanho",

        ],
        button: "Escuro"
    },
    en: {
        title: "Task List",
        msg: "Current tasks:",
        tasks: [
            "Add visual styles",
            "Add light and dark themes",
            "Enable theme switching",
            "Add support for three languages",
            "Enable language switching",
            "Add support for font size",
            "Enable size switching",
        ],
        button: "Dark"
    },
    es: {
        title: "Lista de tareas",
        msg: "Tareas actuales:",
        tasks: [
            "Agregar estilos visuales",
            "Agregar temas claro y oscuro",
            "Habilitar cambio de tema",
            "Agregar soporte para tres idiomas",
            "Habilitar cambio de idioma",
            "Agregar soporte para el tamaño de la letra",
            "Habilitar la alternancia del tamaño",
        ],
        button: "Oscuro"
    }
};

document.getElementById('language-selector').addEventListener('change', function() {
    const lang = this.value;
    
    document.querySelector("h1").textContent = translations[lang].title;
    document.getElementById("msg").textContent = translations[lang].msg;
    
    const tasks = document.querySelectorAll("ul li");
    translations[lang].tasks.forEach((task, index) => {
        if (tasks[index]) {
            tasks[index].textContent = task;
        }
    });

    switcher.textContent = translations[lang].button;
});


let fontSize = 16;
const minFontSize = 10;
const maxFontSize = 19;

function alterarFonte(delta) {
    const newFontSize = fontSize + delta;
    if (newFontSize >= minFontSize && newFontSize <= maxFontSize) {
        fontSize = newFontSize;
        document.body.style.fontSize = fontSize + "px";
    }
}