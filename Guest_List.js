"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Guest_List = ['Sarfaraz Ahmed', 'Babar Azam', 'shoaib Malik'];
//for(let i=0; i<Guest_List.length; i++){
//  console.log('Respected Sir. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you,Thank You\n\nThank You)!')
//}
let absent_Guest = 'shoaib Malik';
let new_Guest = 'Imad Wasim';
Guest_List[2] = new_Guest;
//for(let i=2; i<Guest_List.length; i++){
//  console.log('Respected Sir. ' + Guest_List[i] + ',\nIt is our pleasure to invite you,Thank You\n\nUnfortunately)!')
//}
console.log(`Sir. ${absent_Guest} is not coming to play cricket match .`);
console.log('Good News! We find Big Table so we are inviting 3 more Guest.');
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Kamraan tessori');
Guest_List.push('Ameen Alam');
for (let i = 2; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\nIt is our pleasure to invite you,Thank You\n\nThank You!\n\n');
}
console.log('\nSorry we can not arange big table, only Two peoples will be invited.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`sorry Mr. ${remove_Guest}, You are not invited for Diner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\nYou are still invited,Thank You\n\n)!');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
