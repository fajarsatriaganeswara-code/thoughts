function openModal() {
    document.getElementById('modal').classList.add('modal-active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('modal-active');
    document.getElementById('questionInput').value = '';
    document.getElementById('answerInput').value = '';
}

function addThought() {
    const question = document.getElementById('questionInput').value.trim();
    const answer = document.getElementById('answerInput').value.trim();

    if(!question || !answer) {
        alert('Please fill in both fields');
        return;
    }

    const thoughtCard = document.createElement('div');
    thoughtCard.className = 'thought-card';
    thoughtCard.innerHTML = `
    <div class="question">${question}</div>
    <div class="answer">
    <p>${answer.replace(/\n/g, '</p><p>')}</p>
    </div>
    <div class="date">Added just now</div>
    `;

    document.getElementById('thoughtsContainer').insertBefore(
        thoughtCard,
        document.getElementById('thoughtsContainer').firstChild
    );

    closeModal();
}

document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
   }
});
 
 
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal()
    }
});

 