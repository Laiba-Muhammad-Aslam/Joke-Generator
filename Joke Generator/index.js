//Creating Variables 

let joke = document.querySelector(".joke");
let btn = document.querySelector(".btn");

const jokes =[
    {
        jo: "How does the ocean say hi? It waves!"
    },
    {
        jo: "Why did the teddy bear say no to dessert? Because she was stuffed."
    },
    {
        jo: "Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands."
    },
    {
        jo: "Name the kind of tree you can hold in your hand? A palm tree!"
    },
    {
        jo: "Why did the drum take a nap? It was beat"
    },
    {
        jo: " Did you hear about the Italian chef who died? He pasta-way."
    },
    {
        jo: "Why did the school kids eat their homework? Because their teacher told them it was a piece of cake."
    },
    {
        jo: "What’s the most musical part of the chicken? The drumstick."
    },
    {
        jo: "Why are teddy bears never hungry? Because they’re always stuffed!"
    },
    {
        jo: "Why shouldn’t you write with a broken pencil? Because it’s pointless."
    },
    
];

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * jokes.length);
    joke.innerText = jokes[random].jo;
})

