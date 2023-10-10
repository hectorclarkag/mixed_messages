
let mood = ['Good', 'Wonderfull', 'Amazing', 'Perfect']
let modIndex = Math.floor(Math.random() * mood.length)

let periodOfTheDay = ['Morning', 'Afternoon', 'Evening', 'Night']
let periodOfTheDayIndex = Math.floor(Math.random() * periodOfTheDay.length)

let phraseComplement = ['will be warm!', 'Will be freezing today!', 'Today will be snowy!', 'is raining again!' ]
let phraseComplementIndex = Math.floor(Math.random() * phraseComplement.length)

console.log(mood[modIndex] + ' ' + periodOfTheDay[periodOfTheDayIndex] + ' ' + phraseComplement[phraseComplementIndex])
