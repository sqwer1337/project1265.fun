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
            episodeTitleElement.textContent = episodeNumber + ' эпизод';
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

document.addEventListener('DOMContentLoaded', function() {
    var episodes = document.querySelectorAll('.second_menu_var');

    // Функция для обновления номера эпизода и src атрибута iframe
    function updateEpisode(episodeNumber) {
        var iframe = document.querySelector('.player_page_player_iframe2');
        if (iframe) {
            iframe.src = 'https://player2.anitype.fun/?player=kodik&ambient=200&translation=2x2&id=20&episode=' + episodeNumber + '&season=1';
        }
        var episodeTitleElement = document.querySelector('.episode-number');
        if (episodeTitleElement) {
            episodeTitleElement.textContent = episodeNumber + ' эпизод';
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

document.addEventListener('DOMContentLoaded', function() {
    var episodes = document.querySelectorAll('.second_menu_var');

    // Функция для обновления номера эпизода и src атрибута iframe
    function updateEpisode(episodeNumber) {
        var iframe = document.querySelector('.player_page_player_iframe3');
        if (iframe) {
            iframe.src = 'https://player2.anitype.fun/?player=anitype&ambient=200&translation=AniLibria.TV&id=52034&episode=' + episodeNumber + '&season=1';
        }
        var episodeTitleElement = document.querySelector('.episode-number');
        if (episodeTitleElement) {
            episodeTitleElement.textContent = episodeNumber + ' эпизод';
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

document.addEventListener('DOMContentLoaded', function() {
    var episodes = document.querySelectorAll('.second_menu_var');

    // Функция для обновления номера эпизода и src атрибута iframe
    function updateEpisode(episodeNumber) {
        var iframe = document.querySelector('.player_page_player_iframe4');
        if (iframe) {
            iframe.src = 'https://player2.anitype.fun/?player=anitype&ambient=200&translation=AniLibria.TV&id=49596&episode=' + episodeNumber + '&season=1';
        }
        var episodeTitleElement = document.querySelector('.episode-number');
        if (episodeTitleElement) {
            episodeTitleElement.textContent = episodeNumber + ' эпизод';
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




document.addEventListener('DOMContentLoaded', function() {
    var queryParams = new URLSearchParams(window.location.search);
    var relizId = queryParams.get('id');

    if (relizId) { // Проверяем, действительно ли есть 'id' в параметрах URL
        var releaseElement = document.getElementById(relizId);

        if (releaseElement) {
            releaseElement.style.display = 'block'; // Показываем релиз
        } else {
            console.error('Релиз с ID ' + relizId + ' не найден на этой странице.');
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var backLink = document.getElementById('backToReleaseLink');
    var relizElements = document.querySelectorAll('.reliz');
    
    if (relizElements.length > 0) {
        // Берём ID первого элемента с классом 'reliz', предполагая, что на странице только один такой элемент
        var relizId = relizElements[0].id;
        
        if (relizId) {
            // Добавляем к URL ссылки параметр id
            backLink.href += '?id=' + relizId;
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Функция для получения значения параметра по его имени из URL
    function getQueryParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    // Функция для изменения заголовка страницы
    function changeTitle(newTitle) {
        document.title = newTitle ? newTitle : "Ошибка"; // Если новое название найдено, обновить заголовок, иначе установить "Ошибка"
    }

    const catalogId = getQueryParam('id'); // Получаем значение параметра id из URL

    if (catalogId) {
        const catalogItems = document.querySelectorAll('.catalog_item_no_link'); // Получаем все элементы каталога

        for (let item of catalogItems) {
            const href = item.getAttribute('href'); // Получаем значение атрибута href у ссылки
            const urlParams = new URLSearchParams(href.substring(href.indexOf('?'))); // Создаем объект URLSearchParams из параметров href
            const itemId = urlParams.get('id'); // Получаем значение параметра id из href

            if (itemId === catalogId) { // Если id элемента совпадает с id из URL
                const catalogNameElement = item.querySelector('.catalog_item_name'); // Ищем элемент с названием каталога
                if (catalogNameElement) {
                    changeTitle(catalogNameElement.textContent.trim()); // Меняем заголовок на текст этого элемента
                    break; // Прерываем цикл, так как нужный элемент найден
                }
            }
        }
    }
});






function isMobileDevice() {
    // Проверяем строку агента пользователя на наличие ключевых слов, характерных для мобильных устройств
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  function checkAndApplyFullscreen() {
    if (!isMobileDevice()) {
      // Если устройство не является мобильным, не выполняем никаких действий
      return;
    }
  
    var player = document.getElementById('player_iframe');
    if (window.innerWidth > window.innerHeight) {
      if (!document.fullscreenElement) {
        if (player.requestFullscreen) {
          player.requestFullscreen();
        } else if (player.mozRequestFullScreen) {
          player.mozRequestFullScreen();
        } else if (player.webkitRequestFullscreen) {
          player.webkitRequestFullscreen();
        } else if (player.msRequestFullscreen) {
          player.msRequestFullscreen();
        }
      }
    } else {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  }
  
  // Установка интервала для регулярной проверки размеров окна и применения полноэкранного режима при необходимости
  if (isMobileDevice()) {
    setInterval(checkAndApplyFullscreen, 100); // Проверка каждую секунду
  }