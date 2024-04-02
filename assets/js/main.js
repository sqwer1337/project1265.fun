document.addEventListener("DOMContentLoaded", function() {
    var banners = ['BigBanner', 'BigBanner2', 'BigBanner3'];
    var randomIndex = Math.floor(Math.random() * banners.length);
    
    banners.forEach(function(bannerId, index) {
        var banner = document.querySelector('.' + bannerId);

        if (index === randomIndex) {
            banner.style.display = 'block';
            // Таймер для запуска видео внутри активного баннера
            setTimeout(function() {
                var bannerText = banner.querySelector('.big_banner_text');
                var videoContainer = banner.querySelector('.big_banner_video');
                var video = videoContainer.querySelector('video');

                bannerText.style.opacity = '0';

                setTimeout(function() {
                    bannerText.style.display = 'none';
                    videoContainer.style.display = 'block';
                    setTimeout(function() {
                        videoContainer.style.opacity = '1';
                        video.play();
                    }, 500);
                }, 500);

                video.addEventListener('ended', function() {
                    videoContainer.style.opacity = '0';
                    setTimeout(function() {
                        videoContainer.style.display = 'none';
                        bannerText.style.display = 'block';
                        setTimeout(function() {
                            bannerText.style.opacity = '1';
                        }, 500);
                    }, 500);
                });

            }, 5000); // Задержка перед показом видео
        } else {
            banner.style.display = 'none';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки переключения звука в каждом big_banner_button_mute_container
    var muteButtons = document.querySelectorAll('.big_banner_button_mute_container .catalog_info_watch_button');

    muteButtons.forEach(function(button) {
        // Находим ближайший к кнопке контейнер видео и внутри него ищем элемент video
        var videoContainer = button.closest('.BigBanner2, .BigBanner3, .big_banner_video');
        var video = videoContainer ? videoContainer.querySelector('video') : null;

        if (video) {
            button.addEventListener('click', function() {
                // Переключаем состояние звука в видео
                video.muted = !video.muted;

                // Переключение видимости SVG в контексте текущей кнопки
                var svgMute = button.querySelector('#svg-mute');
                var svgUnmute = button.querySelector('#svg-unmute');

                if (svgMute && svgUnmute) {
                    if (video.muted) {
                        svgMute.style.display = 'block';
                        svgUnmute.style.display = 'none';
                    } else {
                        svgMute.style.display = 'none';
                        svgUnmute.style.display = 'block';
                    }
                } else {
                    console.error('SVG elements not found!');
                }
            });
        } else {
            console.error('Video not found for the button:', button);
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    var episodes = document.querySelectorAll('.second_menu_var');

    // Функция для обновления номера эпизода и src атрибута iframe
    function updateEpisode(episodeNumber) {
        var iframe = document.querySelector('.player_page_player_iframe');
        if (iframe) {
            iframe.src = 'https://player2.anitype.fun/?player=anitype&ambient=200&translation=AniLibria.TV&id=52299&episode=' + episodeNumber + '&season=1';
        }
        var episodeTitleElement = document.querySelector('.episode-number');
        if (episodeTitleElement) {
            episodeTitleElement.textContent = episodeNumber + ' эпизод, AniLibria.TV';
        }

        // Сохраняем номер эпизода в localStorage
        localStorage.setItem('selectedEpisode', episodeNumber);
    }

    episodes.forEach(function(episode) {
        episode.addEventListener('click', function() {
            var episodeNumber = this.id.replace('episode', '');
            updateEpisode(episodeNumber);
        });
    });

    // Проверяем localStorage и устанавливаем сохранённый номер эпизода или '1', если ничего не сохранено
    var savedEpisodeNumber = localStorage.getItem('selectedEpisode') || '1';
    updateEpisode(savedEpisodeNumber);
});