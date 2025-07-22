document.addEventListener('DOMContentLoaded', function() {
    // Handle comment submission for all forms
    const commentForms = document.querySelectorAll('.comment-form');
    
    commentForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('input[type="text"]');
            const commentInput = this.querySelector('textarea');
            const commentsContainer = this.previousElementSibling;
            
            const name = nameInput.value.trim();
            const comment = commentInput.value.trim();
            
            if (name && comment) {
                // Create new comment element
                const commentElement = document.createElement('div');
                commentElement.className = 'comment';
                
                const authorElement = document.createElement('div');
                authorElement.className = 'comment-author';
                authorElement.textContent = name;
                
                const dateElement = document.createElement('div');
                dateElement.className = 'comment-date';
                dateElement.textContent = new Date().toLocaleDateString();
                
                const textElement = document.createElement('div');
                textElement.className = 'comment-text';
                textElement.textContent = comment;
                
                commentElement.appendChild(authorElement);
                commentElement.appendChild(dateElement);
                commentElement.appendChild(textElement);
                
                // Add comment to the container
                commentsContainer.appendChild(commentElement);
                
                // Clear the form
                nameInput.value = '';
                commentInput.value = '';
                
                // Scroll to the new comment
                commentElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
                
                // Update URL without reloading
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Add some sample comments for demonstration
    addSampleComments();
});

function addSampleComments() {
    const sampleComments = [
        {
            postId: 'post1',
            comments: [
                { name: 'Alex', text: 'Great post! I completely agree with your perspective on coding.' },
                { name: 'Jamie', text: 'What programming languages do you recommend for beginners?' }
            ]
        },
        {
            postId: 'post2',
            comments: [
                { name: 'Taylor', text: 'I traveled through Europe last summer using these exact tips!' }
            ]
        },
        {
            postId: 'post3',
            comments: [
                { name: 'Casey', text: 'Healthy eating has changed my life. Thanks for sharing!' },
                { name: 'Riley', text: 'Do you have any favorite healthy recipes?' }
            ]
        }
    ];
    
    sampleComments.forEach(post => {
        const commentsContainer = document.querySelector(`#${post.postId} .comments-container`);
        
        post.comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            
            const authorElement = document.createElement('div');
            authorElement.className = 'comment-author';
            authorElement.textContent = comment.name;
            
            const dateElement = document.createElement('div');
            dateElement.className = 'comment-date';
            dateElement.textContent = new Date().toLocaleDateString();
            
            const textElement = document.createElement('div');
            textElement.className = 'comment-text';
            textElement.textContent = comment.text;
            
            commentElement.appendChild(authorElement);
            commentElement.appendChild(dateElement);
            commentElement.appendChild(textElement);
            
            commentsContainer.appendChild(commentElement);
        });
    });
}