/*------------------------------------------------------------------
STAAU - Official Website JavaScript
Modern Interactions with Language Support
-------------------------------------------------------------------*/

(function($) {
    'use strict';

    // ===================================
    // 1. Preloader
    // ===================================
    $(window).on('load', function() {
        $('.doc-loader').fadeOut(800);
        
        // Trigger animations after preloader
        setTimeout(function() {
            $('.animate').each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.addClass('animated');
                }, index * 200);
            });
        }, 900);
    });

    // ===================================
    // 2. Mobile Menu Toggle
    // ===================================
    $('#toggle').on('click', function() {
        $(this).toggleClass('active');
        $('.menu-holder').toggleClass('active');
        $('body').toggleClass('menu-open');
    });

    // Close mobile menu when clicking on a link
    $('.main-menu a').on('click', function() {
        $('#toggle').removeClass('active');
        $('.menu-holder').removeClass('active');
        $('body').removeClass('menu-open');
    });

    // ===================================
    // 3. Smooth Scrolling
    // ===================================
    $('a.scroll[href*="#"]:not([href="#"])').on('click', function(e) {
        e.preventDefault();
        
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800, 'swing');
        }
    });

    // ===================================
    // 4. Sticky Header on Scroll
    // ===================================
    var lastScrollTop = 0;
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        
        if (st > 100) {
            $('.header-holder').addClass('scrolled');
        } else {
            $('.header-holder').removeClass('scrolled');
        }
        
        lastScrollTop = st;
    });

    // ===================================
    // 5. Scroll Animations
    // ===================================
    function checkScroll() {
        $('.animate:not(.animated)').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom - 100) {
                $(this).addClass('animated');
            }
        });
    }

    $(window).on('scroll', function() {
        checkScroll();
    });

    // Trigger on page load
    checkScroll();

    // ===================================
    // 6. Language Switcher
    // ===================================
    let currentLang = localStorage.getItem('language') || 'tr';

    // Set initial language
    document.documentElement.lang = currentLang;
    updateLanguage(currentLang);

    // Language button click handlers
    $('.lang-btn').on('click', function() {
        var lang = $(this).data('lang');
        switchLanguage(lang);
    });

    function switchLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        
        // Update active button
        $('.lang-btn').removeClass('active');
        $('.lang-btn[data-lang="' + lang + '"]').addClass('active');
        
        updateLanguage(lang);
    }

    function updateLanguage(lang) {
        // Update all elements with language attributes
        $('[data-tr]').each(function() {
            var $el = $(this);
            if (lang === 'tr') {
                $el.text($el.attr('data-tr'));
            } else if (lang === 'en') {
                $el.text($el.attr('data-en'));
            }
        });
    }

    // ===================================
    // 7. Contact Form Handler
    // ===================================
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        
        var name = $('#name').val();
        var email = $('#contact-email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        
        // Basic validation
        if (!name || !email || !message) {
            alert(currentLang === 'tr' ? 'Lütfen tüm alanları doldurun!' : 'Please fill all fields!');
            return;
        }
        
        // Email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert(currentLang === 'tr' ? 'Geçerli bir e-posta adresi girin!' : 'Please enter a valid email!');
            return;
        }
        
        // Success message (you would integrate with your backend here)
        alert(currentLang === 'tr' ? 
            'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.' : 
            'Your message has been sent successfully! We will get back to you soon.'
        );
        
        // Reset form
        this.reset();
    });

    // ===================================
    // 8. Parallax Effect for Hero
    // ===================================
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        $('.hero-section .section-content').css('transform', 'translateY(' + (scrolled * 0.3) + 'px)');
    });

    // ===================================
    // 9. Feature Item Hover Effects
    // ===================================
    $('.service-item').on('mouseenter', function() {
        $(this).find('.service-icon-emoji').css('transform', 'scale(1.2) rotate(10deg)');
    }).on('mouseleave', function() {
        $(this).find('.service-icon-emoji').css('transform', 'scale(1) rotate(0deg)');
    });

    // ===================================
    // 10. Book Category Hover Effects
    // ===================================
    $('.book-category').on('mouseenter', function() {
        $(this).find('.portfolio-emoji').css('transform', 'scale(1.2) rotate(-10deg)');
    }).on('mouseleave', function() {
        $(this).find('.portfolio-emoji').css('transform', 'scale(1) rotate(0deg)');
    });

    // ===================================
    // 11. Add Transition to Icons
    // ===================================
    $('.service-icon-emoji, .portfolio-emoji, .digital-emoji').css({
        'transition': 'transform 0.3s ease',
        'display': 'inline-block'
    });

    // ===================================
    // 12. Scroll Progress Indicator
    // ===================================
    function updateScrollProgress() {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height() - $(window).height();
        var scrollPercent = (scrollTop / docHeight) * 100;
        
        // Create progress bar if it doesn't exist
        if ($('.scroll-progress').length === 0) {
            $('<div class="scroll-progress"></div>').appendTo('body');
            $('.scroll-progress').css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'width': '0%',
                'height': '3px',
                'background': 'linear-gradient(90deg, #6366f1, #ec4899)',
                'z-index': '10001',
                'transition': 'width 0.1s ease'
            });
        }
        
        $('.scroll-progress').css('width', scrollPercent + '%');
    }

    $(window).on('scroll', updateScrollProgress);
    updateScrollProgress();

    // ===================================
    // 13. Keyboard Navigation
    // ===================================
    $(document).on('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            $('#toggle').removeClass('active');
            $('.menu-holder').removeClass('active');
            $('body').removeClass('menu-open');
        }
    });

    // ===================================
    // 14. Touch Gestures for Mobile
    // ===================================
    var touchStartX = 0;
    var touchEndX = 0;

    $(document).on('touchstart', function(e) {
        touchStartX = e.originalEvent.changedTouches[0].screenX;
    });

    $(document).on('touchend', function(e) {
        touchEndX = e.originalEvent.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        var swipeThreshold = 50;
        var diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && $('.menu-holder').hasClass('active')) {
                // Swipe left - close menu
                $('#toggle').removeClass('active');
                $('.menu-holder').removeClass('active');
                $('body').removeClass('menu-open');
            } else if (diff < 0 && !$('.menu-holder').hasClass('active')) {
                // Swipe right - open menu (optional)
                // Uncomment if you want swipe to open menu
                // $('#toggle').addClass('active');
                // $('.menu-holder').addClass('active');
                // $('body').addClass('menu-open');
            }
        }
    }

    // ===================================
    // 15. Active Menu Item on Scroll
    // ===================================
    function updateActiveMenuItem() {
        var scrollPos = $(window).scrollTop() + 100;
        
        $('.main-menu a[href^="#"]').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            
            if (refElement.length) {
                if (refElement.position().top <= scrollPos && 
                    refElement.position().top + refElement.height() > scrollPos) {
                    $('.main-menu a').removeClass('active');
                    currLink.addClass('active');
                } else {
                    currLink.removeClass('active');
                }
            }
        });
    }

    $(window).on('scroll', updateActiveMenuItem);
    updateActiveMenuItem();

    // ===================================
    // 16. Counter Animation (if needed later)
    // ===================================
    function animateCounter($elem, target, duration) {
        var start = 0;
        var increment = target / (duration / 16);
        var current = start;
        
        var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            $elem.text(Math.floor(current));
        }, 16);
    }

    // ===================================
    // 17. Image Lazy Loading Enhancement
    // ===================================
    if ('IntersectionObserver' in window) {
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(function(img) {
            imageObserver.observe(img);
        });
    }

    // ===================================
    // 18. Smooth Page Transitions
    // ===================================
    $(document).on('click', 'a:not(.scroll):not([target="_blank"])', function(e) {
        var href = $(this).attr('href');
        
        // Check if it's an internal link
        if (href && href.indexOf('#') !== 0 && href.indexOf('http') !== 0) {
            e.preventDefault();
            
            $('body').fadeOut(300, function() {
                window.location = href;
            });
        }
    });

    // ===================================
    // 19. Console Branding
    // ===================================
    console.log('%cSTAAU', 'font-size: 40px; font-weight: bold; background: linear-gradient(135deg, #6366f1, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
    console.log('%cİçerikle Geleceği Şekillendiriyoruz', 'font-size: 14px; color: #64748b;');
    console.log('%c🚀 www.staau.com', 'font-size: 12px; color: #6366f1;');

})(jQuery);







