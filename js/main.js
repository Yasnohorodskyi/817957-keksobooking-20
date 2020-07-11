'use strict';
var AVATAR_INDEX = [1, 2, 3, 4, 5, 6, 7, 8];
var TITLE_OPTIONS = ['Дом целиком, хозяин: Mituko Shimoda', 'Отдельная комната в жилье типа гостевой дом, хозяин: Kazushi', 'Современная студия для 3 человек в Синагаве', 'Спокойный дом возле Синдзюку / Сибуя', 'Наслаждайтесь барбекю / Вид на море / Расслабьтесь с вашим питомцем', 'Стандартный одноместный номер в японском стиле с телевизором', 'Удобство для изучения области ИЗУ. YadoHomare', 'Вилла на берегу озера с видом на гору Фудзи'];
var TYPE_ACCOMODATION = ['palace', 'flat', 'house', 'bungalo'];
var CHECKIN_OPTIONS = ['12:00', '13:00', '14:00'];
var CHECKOUT_OPTIONS = ['12:00', '13:00', '14:00'];
var FEATURES_OPTIONS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var DESCRIPTION_OPTIONS = ['Cовершенно новый дизайн-капсульный отель, открытый в марте 2019 года', 'Идеальное расположение! 5 минут ходьбы до станции JR Shinjuku / 3 минуты до станции метро 3 chome, но тихий жилой район', 'Чистая, уютная комната со всеми удобствами, чтобы ваше пребывание было комфортным', 'В комнате есть татами и сёдзи. Вы можете расслабиться с лежащим футоном', 'Красивый, совершенно приватный коттедж на вершине небольшого холма у озера Аши с великолепным видом на озеро', 'Квартира находится в жилом районе, поэтому вы можете спать спокойно и спать по ночам', 'Квартира лучше всего подходит для 2-3 гостей, но если вы хотите, я могу одолжить дополнительный футон для четвертого гостя', 'Приватная комната. Легкий доступ к центральному Токио. Идите прямо к Синдзюку'];
var PHOTOS_OPTIONS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var PIN_BLOCK_WIDTH = 50;
var PIN_BLOCK_HEIGHT = 70;

var map = document.querySelector('.map');
var mapWidth = map.offsetWidth;
map.classList.remove('.map--faded');

var shuffle = function (character) {
  var temporaryIndex = 0;
  var temporaryCharacter = '';
  for (var i = character.length - 1; i > 0; i--) {
    temporaryIndex = Math.floor(Math.random() * (i + 1));
    temporaryCharacter = character[temporaryIndex];
    character[temporaryIndex] = character[i];
    character[i] = temporaryCharacter;
  }
  return character;
};

var getAdMock = function (avatar, title, blockWidth, features, description, photos) {
  var adMock = [];
  var avatarImageShuffled = shuffle(avatar);
  var titleOptionsShuffled = shuffle(title);
  var featuresOptionsShuffled = shuffle(features);
  var descriptionOptionsShuffled = shuffle(description);
  var photosOptionsShuffled = shuffle(photos);


  for (var i = 0; i < 8; i++) {
    var randomIndex = Math.floor(Math.random() * 10);

    var locationX = Math.round(blockWidth - blockWidth * (Math.round(Math.random() * 10)) / 11) - 50;
    var locationY = Math.round(130 + 4 * Math.pow((Math.floor(Math.random() * 10)), 2));

    adMock[i] = {
      author: {
        avatar: 'img/avatars/user0' + avatarImageShuffled[i] + '.png'
      },
      offer: {
        title: titleOptionsShuffled[i],
        address: String(locationX) + ', ' + String(locationY),
        price: 100 * (randomIndex + i + 1),
        type: TYPE_ACCOMODATION[Math.round((i + randomIndex) / 5)],
        rooms: 1 + Math.round((i + randomIndex) / 4),
        guests: 1 + Math.round((i + randomIndex) / 3),
        checkin: CHECKIN_OPTIONS[Math.round((randomIndex) / 4)],
        checkout: CHECKOUT_OPTIONS[Math.round((randomIndex) / 4)],
        features: featuresOptionsShuffled.slice(0, (1 + Math.round((i + randomIndex) / 3))),
        description: descriptionOptionsShuffled[i],
        photos: photosOptionsShuffled.slice(0, (1 + Math.round((randomIndex) / 4))),
      },
      location: {
        x: locationX,
        y: locationY,
      }
    };
  }
  return adMock;
};

var similarAvatarsIndexArray = AVATAR_INDEX.slice();
var similarTitleOptionsArray = TITLE_OPTIONS.slice();
var similarFeaturesOptionsArray = FEATURES_OPTIONS.slice();
var similarDescriptionOptionsArray = DESCRIPTION_OPTIONS.slice();
var similarPhotosOptions = PHOTOS_OPTIONS.slice();

var cartMocks = getAdMock(similarAvatarsIndexArray, similarTitleOptionsArray, mapWidth, similarFeaturesOptionsArray, similarDescriptionOptionsArray, similarPhotosOptions);

var mapPinsTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var mapPins = document.querySelector('.map__pins');

var renderPin = function (pinDataMocks) {
  var pinElement = mapPinsTemplate.cloneNode(true);
  var pinElementAvatarImg = pinElement.querySelector('img');
  pinElement.style.left = pinDataMocks.location.x - (PIN_BLOCK_WIDTH / 2) + 'px';
  pinElement.style.top = pinDataMocks.location.y - PIN_BLOCK_HEIGHT + 'px';
  pinElementAvatarImg.src = pinDataMocks.author.avatar;
  pinElementAvatarImg.alt = pinDataMocks.offer.title;
  return pinElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < cartMocks.length; i++) {
  fragment.appendChild(renderPin(cartMocks[i]));
}

mapPins.appendChild(fragment);

