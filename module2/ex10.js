const numberOfCandidates = parseInt(prompt("How many candidates? "));
let candidateArray = [];
let name = [];
for (let i = 0; i <numberOfCandidates; i++){
  candidateName = prompt(`Name of candidate ${i+1}: `);
  let candidate = {
    name: candidateName,
    votes: 0,
    addVote: function() {return this.votes++}
  };
  candidateArray.push((candidate));
  name.push(candidateName)
};

//console.log(candidateArray);      //list of candidate names and votes

const numberOfVoters = parseInt(prompt("Number of voters: "));
for (let a = 0; a <numberOfVoters; a++){
  let candidateName = prompt("Enter candidate name: ");
  if (name.includes(candidateName) == true){
    const index = name.indexOf(candidateName);
    /*console.log(index)
    console.log(candidateArray[index])*/
    candidateArray[index].addVote()
       }
}

console.log(candidateArray)           //list of candidate names and votes after election
candidateArray.sort((a, b) => (b.votes) - (a.votes));     //sort the array in descending of votes
const winner = document.querySelector("#election")
winner.innerHTML = `The winner is ${candidateArray[0].name} with ${candidateArray[0].votes} votes<br> `;

const div = document.querySelector('#vote-list');
div.innerHTML = `Result:`;
for (let i=0; i< candidateArray.length; i++){
    div.innerHTML += `<p>${candidateArray[i].name}: ${candidateArray[i].votes} votes </p>`;
}

