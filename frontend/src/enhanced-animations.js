// Enhanced Animations and Interactive Features for Zerodha Website

// Scroll Animation Observer
const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach(el => observer.observe(el));

  return observer;
};

// Counter Animation
const animateCounters = () => {
  const counters = document.querySelectorAll('.stat-number, .impact-number, .highlight-number');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
    const suffix = counter.textContent.replace(/[\d]/g, '');
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current) + suffix;
    }, 30);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
};

// Parallax Effect
const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
};

// Smooth Scrolling for Navigation Links
const initSmoothScrolling = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// Form Validation and Enhancement
const enhanceForms = () => {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      // Add focus effects
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement.classList.remove('focused');
        }
      });
      
      // Real-time validation
      input.addEventListener('input', () => {
        validateField(input);
      });
    });
    
    // Form submission enhancement
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const isValid = validateForm(form);
      if (isValid) {
        showLoadingState(form);
        // Simulate form submission
        setTimeout(() => {
          hideLoadingState(form);
          showSuccessMessage(form);
        }, 2000);
      }
    });
  });
};

// Field validation
const validateField = (field) => {
  const value = field.value.trim();
  const fieldType = field.type;
  const fieldName = field.name;
  
  let isValid = true;
  let errorMessage = '';
  
  // Remove existing error
  removeFieldError(field);
  
  // Validation rules
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required';
  } else if (fieldType === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }
  } else if (fieldType === 'tel' && value) {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(value.replace(/\D/g, ''))) {
      isValid = false;
      errorMessage = 'Please enter a valid 10-digit phone number';
    }
  } else if (fieldName === 'password' && value) {
    if (value.length < 8) {
      isValid = false;
      errorMessage = 'Password must be at least 8 characters long';
    }
  } else if (fieldName === 'confirmPassword' && value) {
    const password = field.form.querySelector('input[name="password"]').value;
    if (value !== password) {
      isValid = false;
      errorMessage = 'Passwords do not match';
    }
  }
  
  if (!isValid) {
    showFieldError(field, errorMessage);
  }
  
  return isValid;
};

// Form validation
const validateForm = (form) => {
  const inputs = form.querySelectorAll('input, textarea, select');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  return isValid;
};

// Show field error
const showFieldError = (field, message) => {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'field-error';
  errorDiv.textContent = message;
  errorDiv.style.color = '#dc3545';
  errorDiv.style.fontSize = '0.85rem';
  errorDiv.style.marginTop = '5px';
  
  field.parentElement.appendChild(errorDiv);
  field.style.borderColor = '#dc3545';
};

// Remove field error
const removeFieldError = (field) => {
  const existingError = field.parentElement.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }
  field.style.borderColor = '#e9ecef';
};

// Show loading state
const showLoadingState = (form) => {
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loading"></span> Processing...';
  }
};

// Hide loading state
const hideLoadingState = (form) => {
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Submit';
  }
};

// Show success message
const showSuccessMessage = (form) => {
  const successDiv = document.createElement('div');
  successDiv.className = 'alert alert-success';
  successDiv.innerHTML = `
    <strong>Success!</strong> Your form has been submitted successfully.
  `;
  
  form.parentElement.insertBefore(successDiv, form);
  
  // Remove success message after 5 seconds
  setTimeout(() => {
    successDiv.remove();
  }, 5000);
};

// Navbar scroll effect
const initNavbarScroll = () => {
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
};

// Mobile menu enhancement
const enhanceMobileMenu = () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });
    
    // Close menu when clicking on a link
    const navLinks = navbarCollapse.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbarCollapse.classList.remove('show');
      });
    });
  }
};

// Tooltip enhancement
const initTooltips = () => {
  const tooltipElements = document.querySelectorAll('[data-tooltip]');
  
  tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = element.dataset.tooltip;
      tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.85rem;
        z-index: 1000;
        pointer-events: none;
        white-space: nowrap;
      `;
      
      document.body.appendChild(tooltip);
      
      const rect = element.getBoundingClientRect();
      tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
    });
    
    element.addEventListener('mouseleave', () => {
      const tooltip = document.querySelector('.tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    });
  });
};

// Initialize all enhancements
const initEnhancements = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEnhancements);
    return;
  }
  
  // Initialize all features
  initScrollAnimations();
  animateCounters();
  initParallax();
  initSmoothScrolling();
  enhanceForms();
  initNavbarScroll();
  enhanceMobileMenu();
  initTooltips();
  
  // Add CSS classes for enhanced navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.transition = 'all 0.3s ease';
  }
  
  // Add scroll-animate class to sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.classList.add('scroll-animate');
    section.dataset.delay = `${index * 0.1}s`;
  });
};

// Export for use in components
export {
  initEnhancements,
  initScrollAnimations,
  animateCounters,
  initParallax,
  enhanceForms,
  initNavbarScroll,
  enhanceMobileMenu,
  initTooltips
};

// Auto-initialize when script is loaded
initEnhancements(); 