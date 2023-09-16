const problemContainer = document.getElementById('problem-container');

// Function to fetch random problems from Codeforces API
async function getRandomProblems() {
    const response = await fetch('https://codeforces.com/api/problemset.problems');
    const data = await response.json();
    const problems = data.result.problems;

    // Generate 5 random problem indices
    const randomIndices = [];
    while (randomIndices.length < 5) {
        const randomIndex = Math.floor(Math.random() * problems.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }

    // Display the random problems
    randomIndices.forEach(index => {
        const problem = problems[index];
        const problemCard = document.createElement('div');
        problemCard.classList.add('problem-card');
        problemCard.innerHTML = `
      <h2>${problem.name}</h2>
      <p>${problem.index}</p>
      <p>${problem.rating}</p>
      <p>Tags: ${problem.tags.join(', ')}</p>
      <a href="https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}" target="_blank">View Problem</a>
    `;
        problemContainer.appendChild(problemCard);
    });
}

getRandomProblems();
