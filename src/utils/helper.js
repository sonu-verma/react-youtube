// Function to generate a random name
export function getRandomName() {
    const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"];
    return names[Math.floor(Math.random() * names.length)];
}

// Function to generate a random description with a specified word count
export function getRandomDescription(wordCount) {
    const words = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", 
        "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", 
        "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam"
    ];
    let description = [];
    for (let i = 0; i < wordCount; i++) {
        description.push(words[Math.floor(Math.random() * words.length)]);
    }
    return description.join(" ");
}

export function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



 export const sum = (num) => {
        console.log("sum function called")
        let total = 0;
        for (let i = 0; i < num; i++) {
            total += i;
        }
        return total;
    }