'use strict';
// var AVATAR_INDEX = [1, 2, 3, 4, 5, 6, 7, 8];
// var TITLE_OPTIONS = ['Дом целиком, хозяин: Mituko Shimoda', 'Отдельная комната в жилье типа гостевой дом, хозяин: Kazushi', 'Современная студия для 3 человек в Синагаве', 'Спокойный дом возле Синдзюку / Сибуя', 'Наслаждайтесь барбекю / Вид на море / Расслабьтесь с вашим питомцем', 'Стандартный одноместный номер в японском стиле с телевизором', 'Удобство для изучения области ИЗУ. YadoHomare', 'Вилла на берегу озера с видом на гору Фудзи'];
// var TYPE_ACCOMODATION = ['palace', 'flat', 'house', 'bungalo'];
// var CHECKIN_OPTIONS = ['12:00', '13:00', '14:00'];
// var CHECKOUT_OPTIONS = ['12:00', '13:00', '14:00'];
// var FEATURES_OPTIONS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
// var DESCRIPTION_OPTIONS = ['Cовершенно новый дизайн-капсульный отель, открытый в марте 2019 года', 'Идеальное расположение! 5 минут ходьбы до станции JR Shinjuku / 3 минуты до станции метро 3 chome, но тихий жилой район', 'Чистая, уютная комната со всеми удобствами, чтобы ваше пребывание было комфортным', 'В комнате есть татами и сёдзи. Вы можете расслабиться с лежащим футоном', 'Красивый, совершенно приватный коттедж на вершине небольшого холма у озера Аши с великолепным видом на озеро', 'Квартира находится в жилом районе, поэтому вы можете спать спокойно и спать по ночам', 'Квартира лучше всего подходит для 2-3 гостей, но если вы хотите, я могу одолжить дополнительный футон для четвертого гостя', 'Приватная комната. Легкий доступ к центральному Токио. Идите прямо к Синдзюку'];
// var PHOTOS_OPTIONS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var PIN_BLOCK_WIDTH = 50;
var PIN_BLOCK_HEIGHT = 70;
// var ACCOMODATION_TRANSLATION = {
//   flat: 'Квартира',
//   bungalo: 'Бунгало',
//   house: 'Дом',
//   palace: 'Дворец',
// };
var ACCOMODATION_PRICE_MATCHING = {
  flat: 1000,
  bungalo: 0,
  house: 5000,
  palace: 10000,
};
var map = document.querySelector('.map');
// var mapWidth = map.offsetWidth;
// map.classList.remove('.map--faded');


// var shuffle = function (character) {
//   var temporaryIndex = 0;
//   var temporaryCharacter = '';
//   for (var i = character.length - 1; i > 0; i--) {
//     temporaryIndex = Math.floor(Math.random() * (i + 1));
//     temporaryCharacter = character[temporaryIndex];
//     character[temporaryIndex] = character[i];
//     character[i] = temporaryCharacter;
//   }
//   return character;
// };

// var getAdMock = function (avatar, title, blockWidth, features, description, photos) {
//   var adMock = [];
//   var avatarImageShuffled = shuffle(avatar);
//   var titleOptionsShuffled = shuffle(title);
//   var featuresOptionsShuffled = shuffle(features);
//   var descriptionOptionsShuffled = shuffle(description);
//   var photosOptionsShuffled = shuffle(photos);


//   for (var i = 0; i < 8; i++) {
//     var randomIndex = Math.floor(Math.random() * 10);

//     var locationX = Math.round(blockWidth - blockWidth * (Math.round(Math.random() * 10)) / 11) - PIN_BLOCK_WIDTH;
//     var locationY = Math.round(130 + 5 * (Math.round(Math.random() * 10)) * (Math.round(Math.random() * 10)));

//     adMock[i] = {
//       author: {
//         avatar: 'img/avatars/user0' + avatarImageShuffled[i] + '.png'
//       },
//       offer: {
//         title: titleOptionsShuffled[i],
//         address: String(locationX) + ', ' + String(locationY),
//         price: 100 * (randomIndex + i + 1),
//         type: TYPE_ACCOMODATION[Math.round((i + randomIndex) / 5)],
//         rooms: 1 + Math.round((i + randomIndex) / 4),
//         guests: 1 + Math.round((i + randomIndex) / 3),
//         checkin: CHECKIN_OPTIONS[Math.round((randomIndex) / 4)],
//         checkout: CHECKOUT_OPTIONS[Math.round((randomIndex) / 4)],
//         features: featuresOptionsShuffled.slice(0, (1 + Math.round((i + randomIndex) / 3))),
//         description: descriptionOptionsShuffled[i],
//         photos: photosOptionsShuffled.slice(0, (1 + Math.round((randomIndex) / 4))),
//       },
//       location: {
//         x: locationX,
//         y: locationY,
//       }
//     };
//   }
//   return adMock;
// };

// var similarAvatarsIndexArray = AVATAR_INDEX.slice();
// var similarTitleOptionsArray = TITLE_OPTIONS.slice();
// var similarFeaturesOptionsArray = FEATURES_OPTIONS.slice();
// var similarDescriptionOptionsArray = DESCRIPTION_OPTIONS.slice();
// var similarPhotosOptions = PHOTOS_OPTIONS.slice();

// var cardMocks = getAdMock(similarAvatarsIndexArray, similarTitleOptionsArray, mapWidth, similarFeaturesOptionsArray, similarDescriptionOptionsArray, similarPhotosOptions);

// var renderPins = function (pinDataMocks) {
//   var mapPinsTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
//   var mapPins = document.querySelector('.map__pins');
//   var renderPin = function (pinDataMock) {
//     var pinElement = mapPinsTemplate.cloneNode(true);
//     var pinElementAvatarImg = pinElement.querySelector('img');
//     pinElement.style.left = pinDataMock.location.x - (PIN_BLOCK_WIDTH / 2) + 'px';
//     pinElement.style.top = pinDataMock.location.y - PIN_BLOCK_HEIGHT + 'px';
//     pinElementAvatarImg.src = pinDataMock.author.avatar;
//     pinElementAvatarImg.alt = pinDataMock.offer.title;
//     return pinElement;
//   };

//   var fragment = document.createDocumentFragment();

//   for (var i = 0; i < pinDataMocks.length; i++) {
//     fragment.appendChild(renderPin(pinDataMocks[i]));
//   }
//   mapPins.appendChild(fragment);
//   return mapPins;
// };

// renderPins(cardMocks);

// var mapCardTemplate = document.querySelector('#card').content.querySelector('.map__card');

// var renderCard = function (cardDataMocks) {
// var cardElement = mapCardTemplate.cloneNode(true);

// var getCardTitle = function (card, cardData) {
//     var cardTitle = card.querySelector('.popup__title');
//     if (cardData.offer.title.length) {
//       cardTitle.textContent = cardData.offer.title;
//     } else {
//       card.removeChild(cardTitle);
//     }
//     return cardTitle;
//   };

//   var getCardAddress = function (card, cardData) {
//     var cardAddress = card.querySelector('.popup__text--address');
//     if (cardData.offer.address.length) {
//       cardAddress.textContent = cardData.offer.address;
//     } else {
//       card.removeChild(cardAddress);
//     }
//     return cardAddress;
//   };

//   var getCardPrice = function (card, cardData) {
//     var cardPrice = card.querySelector('.popup__text--price');
//     if (cardData.offer.price !== 'undefined') {
//       cardPrice.textContent = cardData.offer.price + '₽/ночь';
//     } else {
//       card.removeChild(cardPrice);
//     }
//     return cardPrice;
//   };

//   var getCardTypeAccomodation = function (card, cardData, translation) {
//     var cardTypeAccomodation = card.querySelector('.popup__type');
//     if (translation[cardData.offer.type].length) {
//       cardTypeAccomodation.textContent = translation[cardData.offer.type];
//     } else {
//       card.removeChild(cardTypeAccomodation);
//     }
//     return cardTypeAccomodation;
//   };

//   var getCardCapacity = function (card, cardData) {
//     var cardCapacity = card.querySelector('.popup__text--capacity');

//     if (cardData.offer.rooms !== 'undefined' && cardData.offer.guests !== 'undefined') {
//       cardCapacity.textContent = cardData.offer.rooms + ' комнаты для ' + cardData.offer.guests + ' гостей';
//     } else {
//       card.removeChild(cardCapacity);
//     }
//     return cardCapacity;
//   };

// var getCardTime = function (card, cardData) {
//   var cardTime = card.querySelector('.popup__text--time');

//   if (cardData.offer.checkin.length && cardData.offer.checkout.length) {
//     cardTime.textContent = 'Заезд после ' + cardData.offer.checkin + ', выезд до ' + cardData.offer.checkout;
//   } else {
//     card.removeChild(cardTime);
//   }
//   return cardTime;
// };

// var getFeatures = function (card, cardData) {
//   var cardFeatures = card.querySelector('.popup__features');
//   var cardFeatureList = card.querySelectorAll('.popup__feature');
//   for (var h = 0; h < cardFeatureList.length; h++) {
//     cardFeatures.removeChild(cardFeatureList[h]);
//   }

//   var fragmentFeatures = document.createDocumentFragment();

//   if (cardData.offer.features.length) {
//     for (var k = 0; k < cardData.offer.features.length; k++) {
//       var cardFeature = document.createElement('li');
//       cardFeature.className = 'popup__feature popup__feature--' + cardData.offer.features[k];
//       fragmentFeatures.appendChild(cardFeature);
//     }
//   }
//   cardFeatures.appendChild(fragmentFeatures);
//   return cardFeatures;
// };

//   var getCardDescription = function (card, cardData) {
//     var cardDescription = card.querySelector('.popup__description');
//     if (cardData.offer.description.length) {
//       cardDescription.textContent = cardData.offer.description;
//     } else {
//       card.removeChild(cardDescription);
//     }
//     return cardDescription;
//   };

//   var getCardPhotos = function (card, cardData) {
//     var fragmentPhotos = document.createDocumentFragment();
//     var cardPhotos = card.querySelector('.popup__photos');
//     var cardPhoto = card.querySelector('.popup__photo');

//     if (cardData.offer.photos.length) {
//       cardPhoto.src = cardData.offer.photos[0];
//       for (var j = 1; j < cardData.offer.photos.length; j++) {
//         var cardImg = cardPhoto.cloneNode(true);
//         cardImg.src = cardData.offer.photos[j];
//         fragmentPhotos.appendChild(cardImg);
//       }
//       cardPhotos.appendChild(fragmentPhotos);
//     } else {
//       card.removeChild(cardPhoto);
//     }
//     return cardPhotos;
//   };

//   var getAvatar = function (card, cardData) {
//     var cardAvatar = card.querySelector('.popup__avatar');
//     if (cardData.author.avatar.length) {
//       cardAvatar.src = cardData.author.avatar;
//     } else {
//       card.removeChild(cardAvatar);
//     }
//     return cardAvatar;
//   };

//   getCardTitle(cardElement, cardDataMocks);
//   getCardAddress(cardElement, cardDataMocks);
//   getCardPrice(cardElement, cardDataMocks);
//   getCardTypeAccomodation(cardElement, cardDataMocks, ACCOMODATION_TRANSLATION);
//   getCardCapacity(cardElement, cardDataMocks);
//   getCardTime(cardElement, cardDataMocks);
//   getCardDescription(cardElement, cardDataMocks);
//   getCardPhotos(cardElement, cardDataMocks);
//   getAvatar(cardElement, cardDataMocks);
//   getFeatures(cardElement, cardDataMocks);

//   return cardElement;
// };
// var mapFiltersContainer = map.querySelector('.map__filters-container');
// map.insertBefore(renderCard(cardMocks[0]), mapFiltersContainer);

var setDisabledAdForm = function () {
  var adForm = document.querySelector('.ad-form');
  var inputAdFormList = adForm.getElementsByTagName('input');
  for (var i = 0; i < inputAdFormList.length; i++) {
    inputAdFormList[i].setAttribute('disabled', 'disabled');
  }
  var selectAdFormList = adForm.getElementsByTagName('select');
  for (var j = 0; j < selectAdFormList.length; j++) {
    selectAdFormList[j].setAttribute('disabled', 'disabled');
  }
};
setDisabledAdForm();

var setDisabledMapFilters = function () {
  var mapFilters = document.querySelector('.map__filters');
  var inputMapFiltersList = mapFilters.getElementsByTagName('input');
  for (var i = 0; i < inputMapFiltersList.length; i++) {
    inputMapFiltersList[i].setAttribute('disabled', 'disabled');
  }
  var selectMapFiltersList = mapFilters.getElementsByTagName('select');
  for (var j = 0; j < selectMapFiltersList.length; j++) {
    selectMapFiltersList[j].setAttribute('disabled', 'disabled');
  }
};

setDisabledMapFilters();

var activatePageHandler = function () {

  map.classList.remove('map--faded');

  var adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');

  var removeDisabledAdForm = function () {
    var inputAdFormList = adForm.getElementsByTagName('input');
    for (var i = 0; i < inputAdFormList.length; i++) {
      inputAdFormList[i].removeAttribute('disabled');
    }
    var selectAdFormList = adForm.getElementsByTagName('select');
    for (var j = 0; j < selectAdFormList.length; j++) {
      selectAdFormList[j].removeAttribute('disabled');
    }
  };

  var removeDisabledMapFilters = function () {
    var mapFilters = document.querySelector('.map__filters');
    var inputMapFiltersList = mapFilters.getElementsByTagName('input');
    for (var i = 0; i < inputMapFiltersList.length; i++) {
      inputMapFiltersList[i].removeAttribute('disabled');
    }
    var selectMapFiltersList = mapFilters.getElementsByTagName('select');
    for (var j = 0; j < selectMapFiltersList.length; j++) {
      selectMapFiltersList[j].removeAttribute('disabled');
    }
  };

  removeDisabledAdForm();
  removeDisabledMapFilters();
};

var getInitialMainPinAddress = function () {
  var mainPinAddress = document.querySelector('#address');
  var mainPinTop = mainPin.style.top.slice(0, -2);
  var mainPinLeft = mainPin.style.left.slice(0, -2);
  var mainPinLocationX = (PIN_BLOCK_WIDTH / 2) + Number(mainPinLeft);
  var mainPinLocationY = PIN_BLOCK_HEIGHT + Number(mainPinTop);
  mainPinAddress.value = mainPinLocationX + ', ' + mainPinLocationY;
};

var mainPin = document.querySelector('.map__pin--main');

mainPin.addEventListener('mousedown', function (evt) {
  if (evt.button === 0) {
    activatePageHandler();
    getInitialMainPinAddress();
  }
});

mainPin.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    activatePageHandler();
    getInitialMainPinAddress();
  }
});


var setAccomodationPriceMatch = function (priceMatching) {
  var accomodationType = document.querySelector('#type');
  var accomodationPrice = document.querySelector('#price');
  var accomodationTypePriceHandler = function (evt) {
    var targetMinPrice = priceMatching[evt.target.value];
    accomodationPrice.min = targetMinPrice;
    accomodationPrice.placeholder = String(targetMinPrice);
  };
  accomodationType.addEventListener('change', accomodationTypePriceHandler);
};

setAccomodationPriceMatch(ACCOMODATION_PRICE_MATCHING);

var setCheckinCheckoutMatch = function () {
  var checkinFieldset = document.querySelector('#timein');
  var checkinOptions = checkinFieldset.getElementsByTagName('option');
  var checkoutFieldset = document.querySelector('#timeout');
  var checkoutOptions = checkoutFieldset.getElementsByTagName('option');

  var checkinHandler = function (evt) {
    var targetTime = evt.target.value;
    for (var i = 0; i < checkinOptions.length; i++) {
      checkinOptions[i].removeAttribute('selected');
      checkoutOptions[i].removeAttribute('selected');
    }
    for (var j = 0; j < checkinOptions.length; j++) {
      if (checkinOptions[j].value === targetTime) {
        checkoutOptions[j].setAttribute('selected', '');
        checkinOptions[j].setAttribute('selected', '');
      }
    }
  };

  var checkoutHandler = function (evt) {
    var targetTime = evt.target.value;
    for (var i = 0; i < checkoutOptions.length; i++) {
      checkinOptions[i].removeAttribute('selected');
      checkoutOptions[i].removeAttribute('selected');
    }
    for (var j = 0; j < checkoutOptions.length; j++) {
      if (checkoutOptions[j].value === targetTime) {
        checkoutOptions[j].setAttribute('selected', '');
        checkinOptions[j].setAttribute('selected', '');
      }
    }
  };

  checkinFieldset.addEventListener('change', checkinHandler);
  checkoutFieldset.addEventListener('change', checkoutHandler);
};

setCheckinCheckoutMatch();


var setRoomCapasityGuestMatch = function () {
  var rooomQuantity = document.querySelector('#room_number');
  var guestCapacity = document.querySelector('#capacity');
  var roomCapacity = 1;
  var guestQuantityRequired = 1;

  rooomQuantity.addEventListener('input', function (evt) {
    roomCapacity = Number(evt.target.value);
    guestRoomValidationHandler();
  });

  guestCapacity.addEventListener('input', function (evt) {
    guestQuantityRequired = Number(evt.target.value);
    guestRoomValidationHandler();
  });

  var guestRoomValidationHandler = function () {

    if (roomCapacity === 100 && guestQuantityRequired > 0) {
      rooomQuantity.setCustomValidity('Аппартаменты не предназначены для гостей!');
    } else if (roomCapacity === 1 && guestQuantityRequired !== 1) {
      rooomQuantity.setCustomValidity('В этой квартире может жить только 1 гость');
    } else if (roomCapacity === 2 && guestQuantityRequired < 1) {
      rooomQuantity.setCustomValidity('Выберите жилье на 100 комнат');
    } else if (roomCapacity === 2 && guestQuantityRequired > 2) {
      rooomQuantity.setCustomValidity('Выберите жилье на 3 комнаты');
    } else if (roomCapacity === 3 && guestQuantityRequired < 1) {
      rooomQuantity.setCustomValidity('Выберите жилье на 100 комнат');
    } else {
      rooomQuantity.setCustomValidity('');
    }

  };

};

setRoomCapasityGuestMatch();
