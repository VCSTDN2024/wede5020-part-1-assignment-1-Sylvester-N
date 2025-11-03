document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Form Validation and Error Handling (Retained from previous step) ---

    // Function to handle form submission and custom validation
    const handleFormSubmission = (event, formId, errorId) => {
        const form = document.getElementById(formId);
        const errorMessage = document.getElementById(errorId);
        
        // Use checkValidity() for HTML5 built-in validation
        if (!form.checkValidity()) {
            // Stop submission if HTML5 validation fails
            event.preventDefault(); 
            
            // Basic custom validation check
            let isJSValid = true;
            let firstInvalidElement = null;

            // Simple check for required fields, beyond basic HTML5 required attribute
            const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
            for (const input of inputs) {
                if (!input.value.trim()) {
                    isJSValid = false;
                    if (!firstInvalidElement) firstInvalidElement = input;
                }
            }

            if (!isJSValid) {
                errorMessage.textContent = 'Please correct the errors marked in red and fill in all required fields.';
                errorMessage.style.display = 'block';
                if (firstInvalidElement) firstInvalidElement.focus();
                return;
            }

            // Fallback for generic client-side error if validation fails
            errorMessage.textContent = 'Please ensure all fields are correctly filled according to the required formats.';
            errorMessage.style.display = 'block';
            return; 
        }

        // If validation passes, hide error message (If using AJAX, preventDefault here, then run AJAX)
        errorMessage.style.display = 'none';

        // NOTE: For a static submission, we let the form submit (AJAX Submission is noted as a future enhancement)
        // For demonstration, we prevent default to show a success message instead of a real submission
        event.preventDefault();
        alert('Thank you! Your message has been received. (Simulated submission)');
        form.reset();
    };

    // Apply handler to Enquiry Form
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => handleFormSubmission(e, 'enquiryForm', 'enquiry-error'));
    }

    // Apply handler to Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => handleFormSubmission(e, 'contactForm', 'contact-error'));
    }

    // --- 2. Dynamic Content / DOM Manipulation (Retained from previous step) ---

    // Example of using JS to change content on the Projects page
    const downloadButton = document.getElementById('download-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            // Simple DOM manipulation to update content based on a user action
            const projectList = document.getElementById('project-list');
            if (projectList) {
                // Simulate dynamically loading an update/response (e.g., product listing, post)
                const updateMessage = document.createElement('p');
                updateMessage.classList.add('dynamic-update');
                updateMessage.innerHTML = '<strong>A new project update has been dynamically loaded:</strong> The resources are currently being updated. Please check back tomorrow! <span style="color:var(--gea-green);">[This content was added using JavaScript]</span>';
                
                // Check if the update is already there to prevent duplicates
                if (!projectList.querySelector('.dynamic-update')) {
                    projectList.insertBefore(updateMessage, projectList.firstChild);
                    
                    // Add a simple transition/animation to the dynamically loaded element
                    updateMessage.style.opacity = 0;
                    setTimeout(() => {
                        updateMessage.style.transition = 'opacity 0.5s ease-in';
                        updateMessage.style.opacity = 1;
                    }, 50);
                }
            }
        });
    }

    // --- 3. Lightbox Gallery Feature (NEW IMPLEMENTATION) ---

    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Function to open the lightbox
    const openLightbox = (imageSrc) => {
        lightboxImage.src = imageSrc;
        lightboxOverlay.style.display = 'block';
        // Optional: prevent background scrolling when lightbox is open
        document.body.style.overflow = 'hidden';
    };

    // Function to close the lightbox
    const closeLightbox = () => {
        lightboxOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Add click listener to each gallery item
    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Prevent the default link behavior (navigating to the image file)
            e.preventDefault(); 
            // The href attribute holds the full-size image source
            const imageSrc = item.getAttribute('href'); 
            openLightbox(imageSrc);
        });
    });

    // Add click listener to the close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Add click listener to the overlay itself (to close when clicking outside the image)
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', (e) => {
            // Only close if the click is directly on the overlay, not on the image or close button
            if (e.target === lightboxOverlay) {
                closeLightbox();
            }
        });
    }

    // Optional: Close lightbox on ESC key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxOverlay.style.display === 'block') {
            closeLightbox();
        }
    });
});