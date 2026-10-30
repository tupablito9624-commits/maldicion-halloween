// Base de datos de los 11 jugadores
const players = {
    "andrea": {
        name: "Andrea",
        nickname: "La Vampira Sedienta",
        mission: "Consigue que alguien te ofrezca de su bebida sin pedírselo directamente. Si se da cuenta, pierdes la oportunidad con esa persona."
    },
    "diana": {
        name: "Diana",
        nickname: "La Bruja del Engaño",
        mission: "Inventa una mentira absurda sobre ti o sobre la fiesta y consigue que al menos una persona se la crea por completo durante 5 minutos."
    },
    "laura1": {
        name: "Laura",
        nickname: "El Fantasma Burlón",
        mission: "Imita un gesto muy característico o la forma de hablar de otro jugador de forma exagerada hasta que alguien más lo note."
    },
    "almudena": {
        name: "Almudena",
        nickname: "La Momia Silenciosa",
        mission: "Quédate mirando fijamente a alguien sin decir absolutamente nada hasta que esa persona se ponga incómoda y te pregunte qué te pasa."
    },
    "yaiza": {
        name: "Yaiza",
        nickname: "La Sirena Oscura",
        mission: "Empieza una discusión completamente inventada y sin sentido, y consigue que alguien te dé la razón para apoyarte."
    },
    "laura2": {
        name: "Laura 2",
        nickname: "El Espectro Sombrío",
        mission: "Aparece detrás de la gente en las fotos de grupo poniendo caras raras o asustando sin que se den cuenta hasta que vean la foto."
    },
    "manu": {
        name: "Manu",
        nickname: "El Hombre Lobo",
        mission: "Consigue que alguien haga un ruido extraño (aullido, gruñido, grito) engañándolo con algún juego o broma."
    },
    "rodri": {
        name: "Rodri",
        nickname: "El Demonio Susurrante",
        mission: "Convence a alguien para que vaya a otra habitación a buscar algo que no existe o a hablar con alguien que no está ahí."
    },
    "hurtado": {
        name: "Hurtado",
        nickname: "El Hechicero Loco",
        mission: "Consigue que alguien diga una palabra prohibida elegida por ti (ej. 'fiesta', 'beber', 'miedo') haciéndole preguntas trampa."
    },
    "dani": {
        name: "Dani",
        nickname: "El Zombi Contagioso",
        mission: "Finge un bostezo muy exagerado o ráscate mucho una zona del cuerpo y consigue que alguien te imite por puro reflejo."
    },
    "pablo": {
        name: "Pablo",
        nickname: "El Científico Macabro",
        mission: "Propón un brindis completamente ridículo y sin sentido, y consigue que al menos tres personas beban por ello."
    }
};

// Referencias al DOM
const errorScreen = document.getElementById('errorScreen');
const playerScreen = document.getElementById('playerScreen');
const realNameEl = document.getElementById('realName');
const nicknameEl = document.getElementById('nickname');
const missionTextEl = document.getElementById('missionText');
const counterEl = document.getElementById('counter');
const addPointBtn = document.getElementById('addPointBtn');

// Obtener el ID de la URL (ejemplo: index.html?id=manu)
const urlParams = new URLSearchParams(window.location.search);
const playerId = urlParams.get('id');

// Variable para la puntuación
let currentScore = 0;

// Inicialización
if (playerId && players[playerId]) {
    const player = players[playerId];
    
    // Ocultar error y mostrar interfaz
    errorScreen.classList.add('hidden');
    playerScreen.classList.remove('hidden');
    
    // Cargar datos del jugador
    realNameEl.textContent = player.name;
    nicknameEl.textContent = player.nickname;
    missionTextEl.textContent = player.mission;
    
    // Cargar puntuación guardada
    const savedScore = localStorage.getItem(`halloween_score_${playerId}`);
    if (savedScore) {
        currentScore = parseInt(savedScore);
        counterEl.textContent = currentScore;
    }
    
    // Evento del botón para sumar puntos
    addPointBtn.addEventListener('click', () => {
        currentScore++;
        counterEl.textContent = currentScore;
        localStorage.setItem(`halloween_score_${playerId}`, currentScore);
        
        // Animación visual del contador
        counterEl.classList.add('bump');
        setTimeout(() => {
            counterEl.classList.remove('bump');
        }, 200);
    });

} else {
    // Si no hay ID o el ID no existe en la base de datos
    errorScreen.classList.remove('hidden');
    playerScreen.classList.add('hidden');
}