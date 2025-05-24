// Window load
$(document).ready(function () {
	"use strict";

	$(document).ready(function () {
		/*------custom-cursor-----*/
		if ($(".custom-cursor").length) {
			var cursor = document.querySelector(".custom-cursor-one");
			var cursorinner = document.querySelector(".custom-cursor-two");
			var a = document.querySelectorAll("a");

			document.addEventListener("mousemove", function (e) {
				var x = e.clientX;
				var y = e.clientY;
				cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
			});

			document.addEventListener("mousemove", function (e) {
				var x = e.clientX;
				var y = e.clientY;
				cursorinner.style.left = x + "px";
				cursorinner.style.top = y + "px";
			});

			document.addEventListener("mousedown", function () {
				cursor.classList.add("click");
				cursorinner.classList.add("custom-cursor-innerhover");
			});

			document.addEventListener("mouseup", function () {
				cursor.classList.remove("click");
				cursorinner.classList.remove("custom-cursor-innerhover");
			});

			a.forEach((item) => {
				item.addEventListener("mouseover", () => {
					cursor.classList.add("custom-cursor-hover");
				});
				item.addEventListener("mouseleave", () => {
					cursor.classList.remove("custom-cursor-hover");
				});
			});
		}
		// sticky-header
		$(window).on("scroll", function () {
			if ($(".main-header").length) {
				var headerScrollPos = 300;
				var stricky = $(".main-header");
				if ($(window).scrollTop() > headerScrollPos) {
					setTimeout(function () {
						stricky.addClass("sticky-fixed");
					})
					stricky.addClass("sticky-header--cloned");
				} else if ($(this).scrollTop() <= headerScrollPos) {
					stricky.removeClass("sticky-fixed");
					stricky.removeClass("sticky-header--cloned");
				}
			}
		});
		// current
		function dynamicCurrentMenuClass(selector) {
			let FileName = window.location.href.split("/").reverse()[0];
			selector.find("li").each(function () {
				let anchor = $(this).find("a");
				if ($(anchor).attr("href") == FileName) {
					$(this).addClass("current");
				}
			});
			// if any li has .current elmnt add class
			selector.children("li").each(function () {
				if ($(this).find(".current").length) {
					$(this).addClass("current");
				}
			});
			// if no file name return
			if ("" == FileName) {
				selector.find("li").eq(0).addClass("current");
			}
		}
		if ($(".main-menu>ul, .main-menu-left>ul").length) {
			// dynamic current class
			let mainNavUL = $(".main-menu>ul, .main-menu-left>ul");
			dynamicCurrentMenuClass(mainNavUL);
		}
		// mobile-nav
		jQuery(function ($) {
			$('.header-right-end, .header-three-menu').on('click', function () {
				$('.mobile-nav-wrapper').toggleClass('expanded')
				$("body").toggleClass("locked");
			})
		})
		if ($(".mobile-nav-toggler").length) {
			$(".mobile-nav-toggler").on("click", function (e) {
				e.preventDefault();
				$(".mobile-nav-wrapper").toggleClass("expanded");
				$("body").toggleClass("locked");
			});
		}
		if ($(".mobile-nav-container .mobile-menu-list").length) {
			let dropdownAnchor = $(
				".mobile-nav-container .mobile-menu-list .dropdown > a"
			);
			dropdownAnchor.each(function () {
				let self = $(this);
				let toggleBtn = document.createElement("BUTTON");
				toggleBtn.setAttribute("aria-label", "dropdown toggler");
				toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
				self.append(function () {
					return toggleBtn;
				});
				self.find("button").on("click", function (e) {
					e.preventDefault();
					let self = $(this);
					self.toggleClass("expanded");
					self.parent().toggleClass("expanded");
					self.parent().parent().children("ul").slideToggle();
				});
			});
		}
		// wow animation
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: "wow", // animated element css class (default is wow)
				animateClass: "animated", // animation css class (default is animated)
				mobile: true, // trigger animations on mobile devices (default is true)
				live: true // act on asynchronously loaded content (default is true)
			});
			wow.init();
		}
		if ($(".services-one-slider").length) {
			$(".services-one-slider").owlCarousel({
				items: 3,
				margin: 30,
				loop: true,
				dots: true,
				responsive: {
					0: {
						items: 1,
					},
					768: {
						items: 2,
					},
					992: {
						items: 2,
					},
					1200: {
						items: 3,
					},
					1500: {
						items: 3,
					},
					1800: {
						items: 3,
					}
				}
			});
		}
		if ($(".promo-one-slider").length) {
			$(".promo-one-slider").owlCarousel({
				items: 5,
				margin: 45,
				loop: true,
				dots: false,
				autoplay: true,
				autoplayTimeout: 5000,
				slideTransition: 'linear',
				smartSpeed: 5000,
				responsive: {
					0: {
						items: 1.5,
					},
					575: {
						items: 1.5,
					},
					768: {
						items: 1.5,
					},
					992: {
						items: 2,
					},
					1199: {
						items: 2.5,
						margin: 0,
					},
					1300: {
						items: 3,
						margin: 0,
					},
					1400: {
						items: 3.5,
						margin: 10,
					}
				}
			});
		}
		if ($(".testimonial-one-slider").length) {
			$(".testimonial-one-slider").owlCarousel({
				items: 2,
				margin: 30,
				loop: true,
				dots: true,
				responsive: {
					0: {
						items: 1,
					},
					575: {
						items: 1,
					},
					768: {
						items: 1,
					},
					992: {
						items: 1,
					},
					1199: {
						items: 2,
					},
					1400: {
						items: 2,
					}
				}
			});
		}
		if ($(".testimonial-six-slider").length) {
			$(".testimonial-six-slider").owlCarousel({
				items: 1,
				margin: 30,
				loop: true,
				dots: true,
			});
		}
		if ($(".services-two-slider").length) {
			$(".services-two-slider").owlCarousel({
				items: 5,
				margin: 0,
				loop: true,
				dots: false,
				responsive: {
					0: {
						items: 1,
					},
					575: {
						items: 2,
					},
					768: {
						items: 2,
					},
					992: {
						items: 3,
					},
					1199: {
						items: 4,
					},
					1400: {
						items: 4,
					},
					1500: {
						items: 5,
					}
				}
			});
		}
		if ($(".awards-one-slider").length) {
			$(".awards-one-slider").owlCarousel({
				items: 4,
				margin: 30,
				loop: true,
				dots: true,
				autoplay: true,
				smartSpeed: 1000,
				responsive: {
					0: {
						items: 2,
						margin: 15,
					},
					575: {
						items: 2,
					},
					768: {
						items: 2,
					},
					992: {
						items: 3,
					},
					1199: {
						items: 3,
					},
					1400: {
						items: 4,
					}
				}
			});
		}
		if ($(".services-three-slider").length) {
			$(".services-three-slider").owlCarousel({
				items: 3,
				margin: 0,
				loop: true,
				dots: true,
				responsive: {
					0: {
						items: 1,
					},
					575: {
						items: 1,
					},
					768: {
						items: 2,
					},
					992: {
						items: 2,
					},
					1199: {
						items: 3,
					},
					1400: {
						items: 3,
					},
					1500: {
						items: 3,
					}
				}
			});
		}
		if ($(".promo-two-detail").length) {
			$(".promo-two-detail").owlCarousel({
				items: 5,
				loop: true,
				dots: false,
				autoplay: true,
				autoplayTimeout: 5000,
				slideTransition: 'linear',
				smartSpeed: 5000,
				responsive: {
					0: {
						items: 4,
					},
					575: {
						items: 3.5,
					},
					768: {
						items: 4,
					},
					992: {
						items: 5,
					},
					1199: {
						items: 5,
					},
					1400: {
						items: 5,
					}
				}
			});
		}
		if ($(".testimonial-three-slider").length) {
			$(".testimonial-three-slider").owlCarousel({
				items: 3,
				margin: 30,
				loop: true,
				dots: true,
				responsive: {
					0: {
						items: 1,
					},
					575: {
						items: 1,
					},
					768: {
						items: 2,
					},
					992: {
						items: 2,
					},
					1199: {
						items: 2,
					},
					1400: {
						items: 3,
					},
					1500: {
						items: 3,
					}
				}
			});
		}

		if ($('.testimonial-two-thumb').length) {
			var review_thumb = new Swiper(".testimonial-two-thumb", {
				slidesPerView: 3,
				spaceBetween: 0,
			})
		}
		if ($('.testimonial-two-reviews').length) {
			var review_swiper = new Swiper(".testimonial-two-reviews", {
				slidesPerView: 1,
				loop: true,
				spaceBetween: 0,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				thumbs: {
					swiper: review_thumb,
				},
			})
		}
		// ---------------video-popup
		if ($(".video-popup").length) {
			$('.video-popup').YouTubePopUp();
		}
		// ---------------service-one-count
		$('.project-count').each(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
				duration: 5000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
			$('.project-count').addClass('wow animated fadeInLeft');
		});


		// urgent-scenario-btn  active btn
		$('.urgent-scenario-btn span').on('click', function () {
			// Add the class 'highlight' to the clicked element
			$('.urgent-scenario-btn span').removeClass('active');

			// Add the class 'active' to the clicked tab
			$(this).addClass('active');
		});

		// page-numbers  active btn
		$('.page-numbers li a').on('click', function () {
			// Add the class 'highlight' to the clicked element
			$('.page-numbers li a').removeClass('active');

			// Add the class 'active' to the clicked tab
			$(this).addClass('active');
		});
		const allRanges = document.querySelectorAll(".range-wrap");
		allRanges.forEach(wrap => {
			const range = wrap.querySelector(".range");
			const bubble = wrap.querySelector(".bubble");

			range.addEventListener("input", () => {
				setBubble(range, bubble);
			});
			setBubble(range, bubble);
		});

		function setBubble(range, bubble) {
			const val = range.value;
			const min = range.min ? range.min : 0;
			const max = range.max ? range.max : 100;
			const newVal = Number(((val - min) * 100) / (max - min));

			// Concatenate the percentage sign to the value
			const formattedVal = val + '%';

			bubble.innerHTML = formattedVal;

			// Sorta magic numbers based on the size of the native UI thumb
			bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
		}

		$(".accordion-button").on('click', function () {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				$(this)
					.siblings(".content")
					.slideUp(200);
				$(".accordion-button i")
					.removeClass("fa-minus")
					.addClass("fa-plus");
			} else {
				$(".accordion-button i")
					.removeClass("fa-minus")
					.addClass("fa-plus");
				$(this)
					.find("i")
					.removeClass("fa-plus")
					.addClass("fa-minus");
				$(".accordion-button").removeClass("active");
				$(this).addClass("active");
				$(".content").slideUp(200);
				$(this)
					.siblings(".content")
					.slideDown(200);
			}
		});
	});
})
$(window).on("load", function () {
	/*------preloader-----*/
	if ($(".preloader").length) {
		$(".preloader").delay(50).fadeOut();
	}
})