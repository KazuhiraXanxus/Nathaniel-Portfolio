    // Navigation functionality
    document.addEventListener('DOMContentLoaded', function() {
        const navButtons = document.querySelectorAll('.nav-button');
        const sections = document.querySelectorAll('.content-section');

        navButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all sections
                sections.forEach(section => {
                    section.classList.remove('active');
                });

                // Get target section
                const targetSection = this.getAttribute('data-section');
                const targetElement = document.getElementById(targetSection);
                
                if (targetElement) {
                    targetElement.classList.add('active');
                }

                // Update navbar button states
                navButtons.forEach(btn => btn.classList.remove('active-nav'));
                this.classList.add('active-nav');
            });
        });

        // CTA button functionality
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', function() {
                // Remove active class from all sections
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show projects section
                document.getElementById('projects').classList.add('active');
                
                // Update navbar
                navButtons.forEach(btn => btn.classList.remove('active-nav'));
                document.querySelector('[data-section="projects"]').classList.add('active-nav');
            });
        }

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(241, 245, 249, 0.98)';
            } else {
                navbar.style.background = 'rgba(241, 245, 249, 0.95)';
            }
        });

        // Add interactive cursor effect
        document.addEventListener('mousemove', function(e) {
            const circles = document.querySelectorAll('.bg-decoration');
            circles.forEach((circle, index) => {
                const speed = (index + 1) * 0.02;
                const x = e.clientX * speed;
                const y = e.clientY * speed;
                circle.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Project Modal Functionality
        const projectCards = document.querySelectorAll('.project-card');
        const modal = document.getElementById('project-modal');
        const closeModal = document.querySelector('.close-modal');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const screenshotsWrapper = document.getElementById('screenshots-wrapper');
        const galleryDots = document.getElementById('gallery-dots');
        
        let currentSlide = 0;
        let currentProject = null;

        // Project data - UPDATE THESE PATHS TO MATCH YOUR ACTUAL IMAGE FILES
        const projectData = {
            ecommerce: {
                title: "Capstone",
                description: "Interactive data visualization dashboard with real-time updates, custom charts, and comprehensive reporting features. Built with MongoDB, Express.js, React, and Node.js.",
                screenshots: [
                    { 
                        image: "images/User_Landing Page.png",     // ← Replace with your actual filename
                        title: "Homepage",
                        fallback: "🏠" 
                    },
                    { 
                        image: "images/User_Download Page.png",     // ← Replace with your actual filename
                        title: "Shopping Cart",
                        fallback: "🛒" 
                    },
                    { 
                        image: "images/Admin_Login.png",  // ← Replace with your actual filename
                        title: "Checkout",
                        fallback: "💳" 
                    },
                    { 
                        image: "images/Admin_Dashboard.png",     // ← Replace with your actual filename
                        title: "Homepage",
                        fallback: "🏠" 
                    },
                    { 
                        image: "images/Admin_Manage Adoption.png",     // ← Replace with your actual filename
                        title: "Shopping Cart",
                        fallback: "🛒" 
                    },
                    { 
                        image: "images/Admin_Manage Animals.png",  // ← Replace with your actual filename
                        title: "Checkout",
                        fallback: "💳" 
                    },
                    { 
                        image: "images/Admin_Manage Rehoming.png",     // ← Replace with your actual filename
                        title: "Homepage",
                        fallback: "🏠" 
                    },
                    { 
                        image: "images/Admin_Post Announcements.png",     // ← Replace with your actual filename
                        title: "Shopping Cart",
                        fallback: "🛒" 
                    },
                    { 
                        image: "images/Admin_View Reports.png",  // ← Replace with your actual filename
                        title: "Checkout",
                        fallback: "💳" 
                    },
                    // Add more screenshots or remove unused ones
                ]
            },
            dashboard: {
                title: "E-Commerce", 
                description: "A full-stack online store with payment integration, user authentication, and modern responsive design. Built with React, Node.js, and MongoDB.",
                screenshots: [
                    { 
                        image: "images/NUHome.jpg", // ← Replace with your actual filename
                        title: "Main Dashboard",
                        fallback: "📊" 
                    },
                    { 
                        image: "images/NUProfile.jpg", // ← Replace with your actual filename
                        title: "Analytics View",
                        fallback: "📈" 
                    },
                    { 
                        image: "images/NUProfile2.jpg", // ← Replace with your actual filename
                        title: "Main Dashboard",
                        fallback: "📊" 
                    },
                    { 
                        image: "images/NUProfile3.jpg", // ← Replace with your actual filename
                        title: "Analytics View",
                        fallback: "📈" 
                    },
                    { 
                        image: "images/NUImage.jpg", // ← Replace with your actual filename
                        title: "Main Dashboard",
                        fallback: "📊" 
                    },
                    { 
                        image: "images/NUSchoolMerch.jpg", // ← Replace with your actual filename
                        title: "Analytics View",
                        fallback: "📈" 
                    },
                    { 
                        image: "images/NUMerch2.jpg", // ← Replace with your actual filename
                        title: "Main Dashboard",
                        fallback: "📊" 
                    },
                    { 
                        image: "images/NUSignup.jpg", // ← Replace with your actual filename
                        title: "Analytics View",
                        fallback: "📈" 
                    },
                    { 
                        image: "images/NUCheckout.jpg", // ← Replace with your actual filename
                        title: "Main Dashboard",
                        fallback: "📊" 
                    },
                    // Add more or modify as needed
                ]
            }
        };

        // Open modal when project card is clicked
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                currentProject = projectData[projectId];
                
                if (currentProject) {
                    openModal(currentProject);
                }
            });
        });

        // Also add event listeners for featured projects
        const featuredProjects = document.querySelectorAll('.featured-project');
        featuredProjects.forEach(card => {
            card.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                currentProject = projectData[projectId];
                
                if (currentProject) {
                    openModal(currentProject);
                }
            });
        });

        function openModal(project) {
            document.getElementById('modal-title').textContent = project.title;
            document.getElementById('modal-description').textContent = project.description;
            
            // Create screenshots
            screenshotsWrapper.innerHTML = '';
            galleryDots.innerHTML = '';
            
            project.screenshots.forEach((screenshot, index) => {
                // Create screenshot slide
                const slide = document.createElement('div');
                slide.className = 'screenshot-slide';
                
                // Check if image property exists, otherwise use fallback
                if (screenshot.image) {
                    slide.innerHTML = `
                        <img src="${screenshot.image}" 
                            alt="${screenshot.title}" 
                            style="width: 100%; height: 100%; object-fit: contain; object-position: center; background: rgba(255,255,255,0.1);"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="screenshot-placeholder" style="display: none;">
                            <div style="font-size: 4rem;">${screenshot.fallback || '📷'}</div>
                            <h3>${screenshot.title}</h3>
                        </div>
                    `;
                } else {
                    // Use fallback if no image
                    slide.innerHTML = `
                        <div class="screenshot-placeholder">
                            <div style="font-size: 4rem;">${screenshot.icon || screenshot.fallback || '📷'}</div>
                            <h3>${screenshot.title}</h3>
                        </div>
                    `;
                }
                screenshotsWrapper.appendChild(slide);
                
                // Create dot
                const dot = document.createElement('div');
                dot.className = `dot ${index === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => goToSlide(index));
                galleryDots.appendChild(dot);
            });
            
            currentSlide = 0;
            updateSlidePosition();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModalFunction() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            currentSlide = 0;
        }

        function nextSlide() {
            if (currentProject && currentSlide < currentProject.screenshots.length - 1) {
                currentSlide++;
                updateSlidePosition();
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlidePosition();
            }
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlidePosition();
        }

        function updateSlidePosition() {
            const translateX = -currentSlide * 100;
            screenshotsWrapper.style.transform = `translateX(${translateX}%)`;
            
            // Update dots
            const dots = galleryDots.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Event listeners
        closeModal.addEventListener('click', closeModalFunction);
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunction();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (modal.style.display === 'block') {
                if (e.key === 'Escape') {
                    closeModalFunction();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                } else if (e.key === 'ArrowLeft') {
                    prevSlide();
                }
            }
        });
    });