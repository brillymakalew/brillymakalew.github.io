document.addEventListener('DOMContentLoaded', () => {
    // Preregistration Form
    const preregistrationForm = document.getElementById('preregistrationForm');
    if (preregistrationForm) {
        preregistrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('uploadMessage').textContent = 'File uploaded successfully';
        });
    }

    // Forum
    const threadForm = document.getElementById('threadForm');
    const threadsDiv = document.getElementById('threads');
    if (threadForm) {
        threadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const threadTitle = document.getElementById('threadTitle').value;
            const threadDiv = document.createElement('div');
            threadDiv.className = 'thread';
            threadDiv.innerHTML = `<h3>${threadTitle}</h3><form class="commentForm"><input type="text" placeholder="Add a comment" required><button type="submit">Comment</button></form><div class="comments"></div>`;
            threadsDiv.appendChild(threadDiv);

            const commentForm = threadDiv.querySelector('.commentForm');
            const commentsDiv = threadDiv.querySelector('.comments');
            commentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const commentText = commentForm.querySelector('input').value;
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                commentDiv.textContent = commentText;
                commentsDiv.appendChild(commentDiv);
                commentForm.reset();
            });

            threadForm.reset();
        });
    }

    // Post-publication Services
    const citationCountSpan = document.getElementById('citationCount');
    if (citationCountSpan) {
        citationCountSpan.textContent = Math.floor(Math.random() * 100);
    }

    // Self-check Form
    const selfCheckForm = document.getElementById('selfCheckForm');
    if (selfCheckForm) {
        selfCheckForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const plagiarismScore = Math.floor(Math.random() * 100);
            document.getElementById('plagiarismReport').textContent = `Plagiarism Score: ${plagiarismScore}%`;
        });
    }
});