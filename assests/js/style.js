const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const ChallangerScoreSpan = document.querySelector('[data-Challanger-score]')
MeScoreSpan = document.querySelector('[data-Me-score]')
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '⛰',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '🧻',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✂',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
       const selectionName = selectionButton.dataset.selection
       const selection = SELECTIONS.find(selection => selection.name === selectionName)
       makeSelection(selection)
    })
})

function makeSelection(selection) {
    const ChallangerSelection = randomSelection()
    const MeWinner = isWinner(selection, ChallangerSelection)
    const ChallangerWinner = isWinner(ChallangerSelection, selection)

    addSelectionResult(ChallangerSelection, ChallangerWinner)
    addSelectionResult(selection, MeWinner)

    if (MeWinner)incrementScore(MeScoreSpan)
    if (ChallangerWinner) incrementScore(ChallangerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {

}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)

}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS [randomIndex]
}

