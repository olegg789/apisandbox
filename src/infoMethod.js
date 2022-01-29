export let infoMethod = [
  {
    "title": "Account",
    "methods": [
      {
        "title": "account.getActiveOffers",
        "description": "Возвращает список активных рекламных предложений (офферов), выполнив которые, пользователь сможет получить соответствующее количество голосов на свой счёт внутри приложения.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "account.getAppPermissions",
        "description": "Получает настройки текущего пользователя в данном приложении.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "account.getCounters",
        "description": "Возвращает ненулевые значения счетчиков пользователя.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "account.setNameInMenu",
        "description": "Устанавливает короткое название приложения (до 17 символов), которое выводится пользователю в левом меню.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Ads",
    "methods": [
      {
        "title": "ads.addOfficeUsers",
        "description": "Добавляет администраторов и/или наблюдателей в рекламный кабинет.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.checkLink",
        "description": "Проверяет ссылку на рекламируемый объект.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.createAds",
        "description": "Создает рекламные объявления.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.createCampaigns",
        "description": "Создает рекламные кампании.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.createClients",
        "description": "Создаёт клиентов рекламного агентства.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.createLookalikeRequest",
        "description": "Создаёт запрос на поиск похожей аудитории.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.createTargetGroup",
        "description": "Создаёт аудиторию для ретаргетинга рекламных объявлений на пользователей, которые посетили сайт рекламодателя (просмотрели информации о товаре, зарегистрировались и т.д.).",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.createTargetPixel",
        "description": "Создаёт пиксель ретаргетинга.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.deleteAds",
        "description": "Архивирует рекламные объявления.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.deleteCampaigns",
        "description": "Архивирует рекламные кампании.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.deleteClients",
        "description": "Архивирует клиентов рекламного агентства.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.deleteTargetGroup",
        "description": "Удаляет аудиторию ретаргетинга.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.deleteTargetPixel",
        "description": "Удаляет пиксель ретаргетинга.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getAccounts",
        "description": "Возвращает список рекламных кабинетов.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getAds",
        "description": "Возвращает список рекламных объявлений.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getAdsLayout",
        "description": "Возвращает описания внешнего вида рекламных объявлений.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getAdsPostsReach",
        "description": "Возвращает подробную информацию об охвате рекламных записей.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getAdsTargeting",
        "description": "Возвращает параметры таргетинга рекламных объявлений",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getBudget",
        "description": "Возвращает текущий бюджет рекламного кабинета.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getCampaigns",
        "description": "Возвращает список кампаний рекламного кабинета.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getCategories",
        "description": "Позволяет получить возможные тематики рекламных объявлений.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getClients",
        "description": "Возвращает список клиентов рекламного агентства.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getDemographics",
        "description": "Возвращает демографическую статистику по рекламным объявлениям или кампаниям.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getFloodStats",
        "description": "Возвращает информацию о текущем состоянии счетчика — количество оставшихся запусков методов и время до следующего обнуления счетчика в секундах.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getLookalikeRequests",
        "description": "Возвращает список запросов на поиск похожей аудитории.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getMusicians",
        "description": "Возвращает информацию о музыкантах, на слушателей которых доступно таргетирование.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getMusiciansByIds",
        "description": "Возвращает информацию о музыкантах на слушателей, для которых доступно таргетирование.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getOfficeUsers",
        "description": "Возвращает список администраторов и наблюдателей рекламного кабинета.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getPostsReach",
        "description": "Возвращает подробную статистику по охвату рекламных записей из объявлений и кампаний для продвижения записей сообщества.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getRejectionReason",
        "description": "Возвращает причину, по которой указанному объявлению было отказано в прохождении премодерации.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getStatistics",
        "description": "Возвращает статистику показателей эффективности по рекламным объявлениям, кампаниям, клиентам или всему кабинету.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getSuggestions",
        "description": "Возвращает набор подсказок для различных параметров таргетинга.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getTargetGroups",
        "description": "Возвращает список аудиторий ретаргетинга.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getTargetPixels",
        "description": "Возвращает список пикселей ретаргетинга.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getTargetingStats",
        "description": "Возвращает размер целевой аудитории таргетинга, а также рекомендованные значения CPC и CPM.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getUploadURL",
        "description": "Возвращает URL-адрес для загрузки фотографии рекламного объявления.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.getVideoUploadURL",
        "description": "Возвращает URL-адрес для загрузки видеозаписи рекламного объявления.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.importTargetContacts",
        "description": "Импортирует список контактов рекламодателя для учета зарегистрированных во ВКонтакте пользователей в аудитории ретаргетинга.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.removeOfficeUsers",
        "description": "Удаляет администраторов и/или наблюдателей из рекламного кабинета.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.removeTargetContacts",
        "description": "Принимает запрос на исключение контактов рекламодателя из аудитории ретаргетинга.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.saveLookalikeRequestResult",
        "description": "Сохраняет результат поиска похожей аудитории.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.shareTargetGroup",
        "description": "Предоставляет доступ к аудитории ретаргетинга другому рекламному кабинету. В результате выполнения метода возвращается идентификатор аудитории для указанного кабинета.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.updateAds",
        "description": "Редактирует рекламные объявления.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.updateCampaigns",
        "description": "Редактирует рекламные кампании.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.updateClients",
        "description": "Редактирует клиентов рекламного агентства.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.updateOfficeUsers",
        "description": "Добавляет или редактирует администраторов и/или наблюдателей в рекламный кабинет.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.updateTargetGroup",
        "description": "Редактирует аудиторию ретаргетинга.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "ads.updateTargetPixel",
        "description": "Редактирует пиксель ретаргетинга.",
        "access_rights": ["ads"],
        "params": []
      }
    ]
  },

  {
    "title": "AppWidgets",
    "methods": [
      {
        "title": "appWidgets.getAppImageUploadServer",
        "description": "Позволяет получить адрес для загрузки фотографии в коллекцию приложения для [виджетов приложений сообществ](api/community-apps-widgets/getting-started).",
        "access_rights": [],
        "params": []
      },
      {
        "title": "appWidgets.getAppImages",
        "description": "Позволяет получить коллекцию изображений, загруженных для приложения, в [виджетах приложений сообществ](api/community-apps-widgets/getting-started).",
        "access_rights": [],
        "params": []
      },
      {
        "title": "appWidgets.getGroupImageUploadServer",
        "description": "Позволяет получить адрес для загрузки фотографии в коллекцию сообщества для [виджетов приложений сообществ](api/community-apps-widgets/getting-started).",
        "access_rights": [
          "app_widget"
        ],
        "params": []
      },
      {
        "title": "appWidgets.getGroupImages",
        "description": "Позволяет получить коллекцию изображений, загруженных для приложения, в [виджетах приложений сообществ](api/community-apps-widgets/getting-started).",
        "access_rights": [
          "app_widget"
        ],
        "params": []
      },
      {
        "title": "appWidgets.getImagesById",
        "description": "Позволяет получить изображение для [виджетов приложений сообществ](api/community-apps-widgets/getting-started) по его идентификатору.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "appWidgets.saveAppImage",
        "description": "Позволяет сохранить изображение в коллекцию приложения для [виджетов приложений сообществ](api/community-apps-widgets/getting-started) после загрузки на сервер.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "appWidgets.saveGroupImage",
        "description": "Позволяет сохранить изображение в коллекцию сообщества для [виджетов приложений сообществ](api/community-apps-widgets/getting-started). после загрузки на сервер.",
        "access_rights": [
          "app_widget"
        ],
        "params": []
      },
      {
        "title": "appWidgets.update",
        "description": "Позволяет обновить [виджет приложения сообщества](api/community-apps-widgets/getting-started).",
        "access_rights": [
          "app_widget"
        ],
        "params": []
      }
    ]
  },

  {
    "title": "Apps",
    "methods": [
      {
        "title": "apps.get",
        "description": "Возвращает данные о запрошенном приложении.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "apps.getCatalog",
        "description": "Возвращает список приложений, доступных для пользователей сайта через каталог приложений.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "apps.getLeaderboard",
        "description": "Возвращает рейтинг пользователей в игре.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "apps.getMiniAppPolicies",
        "description": "",
        "access_rights": [],
        "params": []
      },
      {
        "title": "apps.getScopes",
        "description": "",
        "access_rights": [],
        "params": []
      },
      {
        "title": "apps.getScore",
        "description": "Метод возвращает количество очков пользователя в этой игре.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "apps.promoHasActiveGift",
        "description": "Проверить есть ли у пользователя подарок в игре.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "apps.promoUseGift",
        "description": "Использовать подарок, полученный пользователем в промо-акции.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Auth",
    "methods": [
      {
        "title": "auth.checkPhone",
        "description": "Проверяет правильность введённого номера (возможность его использования для регистрации или авторизации).",
        "access_rights": [],
        "params": []
      },
      {
        "title": "auth.restore",
        "description": "Позволяет восстановить доступ к аккаунту, используя код, полученный через SMS.\n\n> Данный метод доступен только приложениям, имеющим доступ к [Прямой авторизации](api/direct-auth).",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Board",
    "methods": [
      {
        "title": "board.getComments",
        "description": "Возвращает список сообщений в указанной теме.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "board.getTopics",
        "description": "Возвращает список тем в обсуждениях указанной группы.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Database",
    "methods": [
      {
        "title": "database.getChairs",
        "description": "Возвращает список кафедр университета по указанному факультету.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "database.getCities",
        "description": "Возвращает список городов.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "database.getCitiesById",
        "description": "Возвращает информацию о городах и регионах по их идентификаторам.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "database.getCountries",
        "description": "Возвращает список стран.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "database.getCountriesById",
        "description": "Возвращает информацию о странах по их идентификаторам",
        "access_rights": [],
        "params": []
      },
      {
        "title": "database.getFaculties",
        "description": "Возвращает список факультетов.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "database.getMetroStations",
        "description": "Возвращает список станций метро",
        "access_rights": [],
        "params": []
      },
      {
        "title": "database.getMetroStationsById",
        "description": "Возвращает информацию об одной или нескольких станциях метро по их идентификаторам.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "database.getRegions",
        "description": "Возвращает список регионов.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "database.getSchoolClasses",
        "description": "Возвращает список классов, характерных для школ определенной страны.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "database.getSchools",
        "description": "Возвращает список школ.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "database.getUniversities",
        "description": "Возвращает список высших учебных заведений.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Docs",
    "methods": [
      {
        "title": "docs.add",
        "description": "Копирует документ в документы текущего пользователя.",
        "access_rights": ["docs"],
        "params": []
      },
      {
        "title": "docs.delete",
        "description": "Удаляет документ пользователя или группы.",
        "access_rights": ["docs"],
        "params": []
      },
      {
        "title": "docs.edit",
        "description": "Редактирует документ пользователя или группы.",
        "access_rights": ["docs"],
        "params": []
      },
      {
        "title": "docs.get",
        "description": "Возвращает расширенную информацию о документах пользователя или сообщества.",
        "access_rights": ["docs"],
        "params": []
      },
      {
        "title": "docs.getById",
        "description": "Возвращает информацию о документах по их идентификаторам.",
        "access_rights": ["docs"],
        "params": []
      },
      {
        "title": "docs.getMessagesUploadServer",
        "description": "Получает адрес сервера для [загрузки документа](upload_files_2%2310._%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0_%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2) в личное сообщение.",
        "access_rights": ["docs"],
        "params": []
      },
      {
        "title": "docs.getTypes",
        "description": "Возвращает доступные для пользователя типы документов.",
        "access_rights": ["docs"],
        "params": []
      },
      {
        "title": "docs.getUploadServer",
        "description": "Возвращает адрес сервера для [загрузки документов](https://dev.vk.com/api/upload#%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2).",
        "access_rights": ["docs"],
        "params": []
      },
      {
        "title": "docs.getWallUploadServer",
        "description": "Возвращает адрес сервера для [загрузки документов](api/upload) в папку **Отправленные**, для последующей отправки документа на стену или личным сообщением.",
        "access_rights": ["docs"],
        "params": []
      },
      {
        "title": "docs.save",
        "description": "Сохраняет документ после его успешной [загрузки](api/upload) на сервер.",
        "access_rights": ["docs"],
        "params": []
      },
      {
        "title": "docs.search",
        "description": "Возвращает результаты поиска по документам.",
        "access_rights": ["docs"],
        "params": []
      }
    ]
  },

  {
    "title": "Donut",
    "methods": [
      {
        "title": "donut.getFriends",
        "description": "Возвращает список донов, которые подписаны на определенные сообщества, из числа друзей пользователя.",
        "access_rights": ["friends", "groups"],
        "params": []
      },
      {
        "title": "donut.getSubscription",
        "description": "Возвращает информацию о подписке VK Donut.",
        "access_rights": ["groups"],
        "params": []
      },
      {
        "title": "donut.getSubscriptions",
        "description": "Возвращает информацию о подписках пользователя.",
        "access_rights": ["groups"],
        "params": []
      },
      {
        "title": "donut.isDon",
        "description": "Возвращает информацию о том, подписан ли пользователь на платный контент (является доном).",
        "access_rights": ["groups"],
        "params": []
      }
    ]
  },

  {
    "title": "DownloadedGames",
    "methods": [
      {
        "title": "downloadedGames.getPaidStatus",
        "description": "",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Friends",
    "methods": [
      {
        "title": "friends.areFriends",
        "description": "Возвращает информацию о том, добавлен ли текущий пользователь в друзья у указанных пользователей.",
        "access_rights": ["friends"],
        "params": []
      },
      {
        "title": "friends.get",
        "description": "Возвращает список идентификаторов друзей пользователя или расширенную информацию о друзьях пользователя (при использовании параметра `fields`).",
        "access_rights": [],
        "params": []
      },
      {
        "title": "friends.getAppUsers",
        "description": "Возвращает список идентификаторов друзей текущего пользователя, которые установили данное приложение.",
        "access_rights": ["friends"],
        "params": []
      },
      {
        "title": "friends.getAvailableForCall",
        "description": "Позволяет получить список идентификаторов пользователей, доступных для вызова в приложении, используя метод [Client API](sdk/javascript) `callUser`.\n\nПодробнее о [схеме вызова](sdk/javascript) из приложений.",
        "access_rights": ["friends"],
        "params": []
      },
      {
        "title": "friends.getMutual",
        "description": "Возвращает список идентификаторов общих друзей между парой пользователей.",
        "access_rights": ["friends"],
        "params": []
      },
      {
        "title": "friends.getOnline",
        "description": "Возвращает список идентификаторов друзей пользователя, находящихся на сайте.",
        "access_rights": ["friends"],
        "params": []
      },
      {
        "title": "friends.getRecent",
        "description": "Возвращает список идентификаторов недавно добавленных друзей текущего пользователя.",
        "access_rights": ["friends"],
        "params": []
      },
      {
        "title": "friends.search",
        "description": "Позволяет искать по списку друзей пользователей.",
        "access_rights": ["friends"],
        "params": []
      }
    ]
  },

  {
    "title": "Groups",
    "methods": [
      {
        "title": "groups.get",
        "description": "Возвращает список сообществ указанного пользователя.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "groups.getAddresses",
        "description": "Возвращает адрес указанного сообщества.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "groups.getById",
        "description": "Возвращает информацию о заданном сообществе или о нескольких сообществах.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "groups.getCatalog",
        "description": "Возвращает список сообществ выбранной категории каталога.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "groups.getCatalogInfo",
        "description": "Возвращает список категорий для каталога сообществ.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "groups.getMembers",
        "description": "Возвращает список участников сообщества.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "groups.getOnlineStatus",
        "description": "Получает информацию о статусе «онлайн» в сообществе.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "groups.getTokenPermissions",
        "description": "Возвращает настройки прав для ключа доступа сообщества.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "groups.isMember",
        "description": "Возвращает информацию о том, является ли пользователь участником сообщества.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "groups.search",
        "description": "Осуществляет поиск сообществ по заданной подстроке.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "groups.toggleMarket",
        "description": "Переключает функционал раздела «Товаров» в выбранной группе.",
        "access_rights": ["groups"],
        "params": []
      }
    ]
  },

  {
    "title": "LeadForms",
    "methods": [
      {
        "title": "leadForms.create",
        "description": "Создаёт форму сбора заявок.",
        "access_rights": ["groups"],
        "params": []
      },
      {
        "title": "leadForms.delete",
        "description": "Удаляет форму сбора заявок.",
        "access_rights": ["groups"],
        "params": []
      },
      {
        "title": "leadForms.get",
        "description": "Возвращает информацию о форме сбора заявок.",
        "access_rights": ["groups"],
        "params": []
      },
      {
        "title": "leadForms.getLeads",
        "description": "Возвращает заявки формы.",
        "access_rights": ["groups"],
        "params": []
      },
      {
        "title": "leadForms.getUploadURL",
        "description": "Возвращает URL для загрузки обложки для формы.",
        "access_rights": ["groups"],
        "params": []
      },
      {
        "title": "leadForms.list",
        "description": "Возвращает список форм сообщества.",
        "access_rights": ["groups"],
        "params": []
      },
      {
        "title": "leadForms.update",
        "description": "Обновляет форму сбора заявок.",
        "access_rights": ["groups"],
        "params": []
      }
    ]
  },

  {
    "title": "Likes",
    "methods": [
      {
        "title": "likes.getList",
        "description": "Получает список идентификаторов пользователей, которые добавили заданный объект в свой список «Мне нравится».",
        "access_rights": [],
        "params": []
      },
      {
        "title": "likes.isLiked",
        "description": "Проверяет, находится ли объект в списке **Мне нравится** заданного пользователя.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Market",
    "methods": [
      {
        "title": "market.add",
        "description": "Добавляет новый товар.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.addAlbum",
        "description": "Добавляет новую подборку с товарами.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.addToAlbum",
        "description": "Добавляет товар в одну или несколько выбранных подборок.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.createComment",
        "description": "Создаёт новый комментарий к товару.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.delete",
        "description": "Удаляет товар.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.deleteAlbum",
        "description": "Удаляет подборку с товарами.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.deleteComment",
        "description": "Удаляет комментарий к товару.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.edit",
        "description": "Редактирует товар.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.editAlbum",
        "description": "Редактирует подборку с товарами.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.editComment",
        "description": "Изменяет текст комментария к товару.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.editOrder",
        "description": "Редактирует заказ.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.get",
        "description": "Возвращает список товаров в сообществе.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.getAlbumById",
        "description": "Возвращает данные подборки с товарами.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.getAlbums",
        "description": "Возвращает список подборок с товарами.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.getById",
        "description": "Возвращает информацию о товарах по идентификаторам.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.getCategories",
        "description": "Возвращает список категорий для товаров.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.getComments",
        "description": "Возвращает список комментариев к товару.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.getGroupOrders",
        "description": "Возвращает заказы сообщества.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.getOrderById",
        "description": "Возвращает заказ по идентификатору.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.getOrderItems",
        "description": "Возвращает товары в заказе.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.getOrders",
        "description": "Возвращает заказы.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.removeFromAlbum",
        "description": "Удаляет товар из одной или нескольких выбранных подборок.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.reorderAlbums",
        "description": "Изменяет положение подборки с товарами в списке.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.reorderItems",
        "description": "Изменяет положение товара в подборке.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.report",
        "description": "Позволяет отправить жалобу на товар.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.reportComment",
        "description": "Позволяет оставить жалобу на комментарий к товару.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.restore",
        "description": "Восстанавливает удаленный товар.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.restoreComment",
        "description": "Восстанавливает удаленный комментарий к товару.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.search",
        "description": "Ищет товары в каталоге сообщества.",
        "access_rights": ["market"],
        "params": []
      },
      {
        "title": "market.searchItems",
        "description": "",
        "access_rights": ["market"],
        "params": []
      }
    ]
  },

  {
    "title": "Newsfeed",
    "methods": [
      {
        "title": "newsfeed.get",
        "description": "Возвращает данные, необходимые для показа списка новостей для текущего пользователя.",
        "access_rights": ["wall", "friends"],
        "params": []
      },
      {
        "title": "newsfeed.getMentions",
        "description": "Возвращает список записей пользователей на своих стенах, в которых упоминается указанный пользователь.",
        "access_rights": ["wall"],
        "params": []
      },
      {
        "title": "newsfeed.getRecommended",
        "description": "Получает список новостей, рекомендованных пользователю.",
        "access_rights": ["wall", "friends"],
        "params": []
      },
      {
        "title": "newsfeed.getSuggestedSources",
        "description": "Возвращает сообщества и пользователей, на которые текущему пользователю рекомендуется подписаться.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "newsfeed.search",
        "description": "Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Notes",
    "methods": [
      {
        "title": "notes.add",
        "description": "Создает новую заметку у текущего пользователя.",
        "access_rights": [
          "notes"
        ],
        "params": []
      },
      {
        "title": "notes.delete",
        "description": "Удаляет заметку текущего пользователя.",
        "access_rights": [
          "notes"
        ],
        "params": []
      },
      {
        "title": "notes.edit",
        "description": "Редактирует заметку текущего пользователя.",
        "access_rights": [
          "notes"
        ],
        "params": []
      },
      {
        "title": "notes.get",
        "description": "Возвращает список заметок, созданных пользователем.",
        "access_rights": [
          "notes"
        ],
        "params": []
      },
      {
        "title": "notes.getById",
        "description": "Возвращает заметку по её `id`.",
        "access_rights": [
          "notes"
        ],
        "params": []
      },
      {
        "title": "notes.getComments",
        "description": "Возвращает список комментариев к заметке.",
        "access_rights": [
          "notes"
        ],
        "params": []
      },
      {
        "title": "notes.getFriendsNotes",
        "description": "Возвращает список заметок друзей пользователя.",
        "access_rights": [
          "notes"
        ],
        "params": []
      }
    ]
  },

  {
    "title": "Notifications",
    "methods": [
      {
        "title": "notifications.get",
        "description": "Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.",
        "access_rights": [
          "notifications"
        ],
        "params": []
      },
      {
        "title": "notifications.markAsViewed",
        "description": "Сбрасывает счетчик непросмотренных оповещений об ответах других пользователей на записи текущего пользователя.",
        "access_rights": [
          "notifications"
        ],
        "params": []
      },
      {
        "title": "notifications.sendMessage",
        "description": "Отправляет уведомление пользователю приложения Mini Apps.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Orders",
    "methods": [
      {
        "title": "orders.cancelSubscription",
        "description": "Отменяет подписку.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "orders.changeState",
        "description": "Изменяет состояние заказа.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "orders.get",
        "description": "Возвращает список заказов.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "orders.getAmount",
        "description": "Возвращает стоимость голосов в валюте пользователя.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "orders.getById",
        "description": "Возвращает информацию об отдельном заказе.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "orders.getUserSubscriptionById",
        "description": "Получает информацию о подписке по её идентификатору.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "orders.getUserSubscriptions",
        "description": "Получает список активных подписок пользователя.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "orders.updateSubscription",
        "description": "Обновляет цену подписки для пользователя.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Pages",
    "methods": [
      {
        "title": "pages.clearCache",
        "description": "Позволяет очистить кеш отдельных внешних страниц, которые могут быть прикреплены к записям ВКонтакте. После очистки кеша при последующем прикреплении ссылки к записи, данные о странице будут обновлены.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "pages.get",
        "description": "Возвращает информацию о вики-странице.",
		"access_rights": ["pages"],
        "params": []
      },
      {
        "title": "pages.getHistory",
        "description": "Возвращает список всех старых версий вики-страницы.",
		"access_rights": ["pages"],
        "params": []
      },
      {
        "title": "pages.getTitles",
        "description": "Возвращает список вики-страниц в группе.",
        "access_rights": ["pages"],
        "params": []
      },
      {
        "title": "pages.getVersion",
        "description": "Возвращает текст одной из старых версий страницы.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "pages.parseWiki",
        "description": "Возвращает HTML-представление вики-разметки.",
        "access_rights": ["photos"],
        "params": []
      },
      {
        "title": "pages.preview",
        "description": "",
        "access_rights": ["pages"],
        "params": []
      },
      {
        "title": "pages.save",
        "description": "Сохраняет текст вики-страницы.",
        "access_rights": ["pages"],
        "params": []
      },
      {
        "title": "pages.saveAccess",
        "description": "Сохраняет новые настройки доступа на чтение и редактирование вики-страницы.",
        "access_rights": ["pages"],
        "params": []
      }
    ]
  },

  {
    "title": "Photos",
    "methods": [
      {
        "title": "photos.createAlbum",
        "description": "Создает пустой альбом для фотографий.",
        "access_rights": [
          "photos"
        ],
        "params": []
      },
      {
        "title": "photos.edit",
        "description": "Редактирует описание или геометку у фотографии.",
        "access_rights": [
          "photos"
        ],
        "params": []
      },
      {
        "title": "photos.editAlbum",
        "description": "Редактирует данные альбома для фотографий.",
        "access_rights": [
          "photos"
        ],
        "params": []
      },
      {
        "title": "photos.get",
        "description": "Возвращает список фотографий в альбоме.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "photos.getAlbums",
        "description": "Возвращает список фотоальбомов пользователя или сообщества.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "photos.getAlbumsCount",
        "description": "Возвращает количество доступных альбомов пользователя или сообщества.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "photos.getAll",
        "description": "Возвращает все фотографии пользователя или сообщества в антихронологическом порядке.",
        "access_rights": [
          "photos"
        ],
        "params": []
      },
      {
        "title": "photos.getAllComments",
        "description": "Возвращает отсортированный в антихронологическом порядке список всех комментариев к конкретному альбому или ко всем альбомам пользователя.",
        "access_rights": [
          "photos"
        ],
        "params": []
      },
      {
        "title": "photos.getById",
        "description": "Возвращает информацию о фотографиях по их идентификаторам.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "photos.getComments",
        "description": "Возвращает список комментариев к фотографии.",
        "access_rights": [
          "photos"
        ],
        "params": []
      },
      {
        "title": "photos.getMailUploadServer",
        "description": "",
        "access_rights": [],
        "params": []
      },
      {
        "title": "photos.getMarketAlbumUploadServer",
        "description": "Возвращает адрес сервера для [загрузки﻿ фотографии подборки товаров](api/upload#Загрузка%20фотографии%20для%20товара) в сообществе.",
        "access_rights": ["market", "photos"],
        "params": []
      },
      {
        "title": "photos.getMarketUploadServer",
        "description": "Возвращает адрес сервера для [загрузки﻿ фотографии товара](api/upload#Загрузка%20фотографии%20для%20товара).",
        "access_rights": ["market", "photos"],
        "params": []
      },
      {
        "title": "photos.getOwnerCoverPhotoUploadServer",
        "description": "Получает адрес для [загрузки обложки сообщества](api/upload#Загрузка%20обложки%20сообщества).",
        "access_rights": ["photos"],
        "params": []
      },
      {
        "title": "photos.getOwnerPhotoUploadServer",
        "description": "Возвращает адрес сервера для [загрузки главной фотографии](api/upload#Загрузка%20главной%20фотографии%20пользователя%20или%20сообщества) на страницу пользователя или сообщества.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "photos.getProfile",
        "description": "Возвращает список фотографий со страницы пользователя или сообщества. \n\nМетод устарел, воспользуйтесь методом  с параметром `album_id` = `profile`.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "photos.getUploadServer",
        "description": "Возвращает адрес сервера для [загрузки фотографий](api/upload#Загрузка%20фотографий%20в%20альбом).",
        "access_rights": ["photos"],
        "params": []
      },
      {
        "title": "photos.getUserPhotos",
        "description": "Возвращает список фотографий, на которых отмечен пользователь",
        "access_rights": [],
        "params": []
      },
      {
        "title": "photos.getWallUploadServer",
        "description": "Возвращает адрес сервера для [загрузки﻿ фотографии на стену](api/upload#Загрузка%20фотографий%20на%20стену) пользователя или сообщества.",
        "access_rights": ["photos"],
        "params": []
      },
      {
        "title": "photos.makeCover",
        "description": "Делает фотографию обложкой альбома.",
        "access_rights": ["photos"],
        "params": []
      },
      {
        "title": "photos.move",
        "description": "Переносит фотографию из одного альбома в другой.",
        "access_rights": ["photos"],
        "params": []
      },
      {
        "title": "photos.reorderAlbums",
        "description": "Меняет порядок альбома в списке альбомов пользователя.",
        "access_rights": ["photos"],
        "params": []
      },
      {
        "title": "photos.reorderPhotos",
        "description": "Меняет порядок фотографии в списке фотографий альбома пользователя.",
        "access_rights": ["photos"],
        "params": []
      },
      {
        "title": "photos.save",
        "description": "Сохраняет фотографии после успешной загрузки.",
        "access_rights": ["photos"],
        "params": []
      },
      {
        "title": "photos.saveMailPhoto",
        "description": "",
        "access_rights": [],
        "params": []
      },
      {
        "title": "photos.saveMarketAlbumPhoto",
        "description": "Сохраняет фотографии после успешной загрузки на URI, полученный методом [photos.getMarketAlbumUploadServer](method/photos.getMarketAlbumUploadServer).",
        "access_rights": ["market", "photos"],
        "params": []
      },
      {
        "title": "photos.saveMarketPhoto",
        "description": "Сохраняет фотографии после успешной загрузки на URI, полученный методом .",
        "access_rights": ["market", "photos"],
        "params": []
      },
      {
        "title": "photos.saveOwnerCoverPhoto",
        "description": "Сохраняет изображение для обложки сообщества после [успешной загрузки](api/upload#Загрузка%20обложки%20сообщества).",
        "access_rights": ["photos"],
        "params": []
      },
      {
        "title": "photos.saveOwnerPhoto",
        "description": "Позволяет сохранить главную фотографию пользователя или сообщества.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "photos.saveWallPhoto",
        "description": "Сохраняет фотографии после успешной загрузки на URI, полученный методом [photos.getWallUploadServer](method/photos.getWallUploadServer).",
        "access_rights": [],
        "params": []
      },
      {
        "title": "photos.search",
        "description": "Осуществляет поиск изображений по местоположению или описанию.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Places",
    "methods": [
      {
        "title": "places.getCheckins",
        "description": "Возвращает список отметок пользователей в местах согласно заданным параметрам.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Podcasts",
    "methods": [
      {
        "title": "podcasts.searchPodcast",
        "description": "",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Polls",
    "methods": [
      {
        "title": "polls.getById",
        "description": "Возвращает детальную информацию об опросе по его идентификатору.",
        "access_rights": [
          "wall"
        ],
        "params": []
      },
      {
        "title": "polls.getVoters",
        "description": "Получает список идентификаторов пользователей, которые выбрали определенные варианты ответа в опросе.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "PrettyCards",
    "methods": [
      {
        "title": "prettyCards.create",
        "description": "Создаёт карточку карусели.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "prettyCards.delete",
        "description": "Удаляет карточку.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "prettyCards.edit",
        "description": "Редактирует карточку карусели.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "prettyCards.get",
        "description": "Возвращает неиспользованные карточки владельца.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "prettyCards.getById",
        "description": "Возвращает информацию о карточке.",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "prettyCards.getUploadURL",
        "description": "Возвращает URL для загрузки фотографии для карточки.",
        "access_rights": ["ads"],
        "params": []
      }
    ]
  },

  {
    "title": "Search",
    "methods": [
      {
        "title": "search.getHints",
        "description": "Метод позволяет получить результаты быстрого поиска по произвольной подстроке. ",
        "access_rights": ["friends", "groups"],
        "params": []
      }
    ]
  },

  {
    "title": "Secure",
    "methods": [
      {
        "title": "secure.addAppEvent",
        "description": "Добавляет информацию о достижениях пользователя в приложении.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "secure.checkToken",
        "description": "Позволяет проверять валидность ключа доступа пользователя в **iFrame**, **VK Mini Apps** и **Standalone**-приложениях с помощью передаваемого в приложения параметра `access_token`.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "secure.getAppBalance",
        "description": "Возвращает платежный баланс (счет) приложения в сотых долях голоса.",
        "access_rights": [
          "votes"
        ],
        "params": []
      },
      {
        "title": "secure.getSMSHistory",
        "description": "Выводит список SMS-уведомлений, отосланных приложением с помощью метода [secure.sendSMSNotification](method/secure.sendSMSNotification).",
        "access_rights": [],
        "params": []
      },
      {
        "title": "secure.getTransactionsHistory",
        "description": "Выводит историю транзакций по переводу голосов между пользователями и приложением.",
        "access_rights": [
          "votes"
        ],
        "params": []
      },
      {
        "title": "secure.getUserLevel",
        "description": "Возвращает ранее выставленный игровой уровень одного или нескольких пользователей в приложении.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "secure.giveEventSticker",
        "description": "Выдает пользователю стикер и открывает игровое достижение.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "secure.sendNotification",
        "description": "Отправляет уведомление пользователю.",
        "access_rights": [
          "notify_global"
        ],
        "params": []
      },
      {
        "title": "secure.sendSMSNotification",
        "description": "Отправляет **SMS**-уведомление на мобильный телефон пользователя.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "secure.setCounter",
        "description": "Устанавливает счетчик, который выводится пользователю жирным шрифтом в левом меню.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "secure.setUserLevel",
        "description": "Устанавливает игровой уровень пользователя в приложении, который смогут увидеть его друзья.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Stats",
    "methods": [
      {
        "title": "stats.get",
        "description": "Возвращает статистику сообщества или приложения.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "stats.getPostReach",
        "description": "Возвращает статистику для записи на стене.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Status",
    "methods": [
      {
        "title": "status.get",
        "description": "Получает текст статуса пользователя или сообщества.",
        "access_rights": [
          "activity"
        ],
        "params": []
      }
    ]
  },

  {
    "title": "Storage",
    "methods": [
      {
        "title": "storage.get",
        "description": "Возвращает значение переменной, название которой передано в параметре `key`.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "storage.getKeys",
        "description": "Возвращает названия всех переменных.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "storage.set",
        "description": "Сохраняет значение переменной, название которой передано в параметре `key`.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Stories",
    "methods": [
      {
        "title": "stories.search",
        "description": "Возвращает результаты поиска по историям.",
        "access_rights": [
          "stories"
        ],
        "params": []
      },
      {
        "title": "stories.sendInteraction",
        "description": "Отправляет фидбек на историю.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Streaming",
    "methods": [
      {
        "title": "streaming.getServerUrl",
        "description": "Позволяет получить данные для подключения к [Streaming API](api/streaming/getting-started).",
        "access_rights": [],
        "params": []
      },
      {
        "title": "streaming.getSettings",
        "description": "Позволяет получить значение порога для [Streaming API](api/streaming/getting-started).",
        "access_rights": [],
        "params": []
      },
      {
        "title": "streaming.getStats",
        "description": "Позволяет получить статистику для подготовленных и доставленных событий [Streaming API](api/streaming/getting-started).",
        "access_rights": [],
        "params": []
      },
      {
        "title": "streaming.getStem",
        "description": "Позволяет получить основу слова.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "streaming.setSettings",
        "description": "Позволяет задать значение порога для [Streaming API](api/streaming/getting-started).",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Users",
    "methods": [
      {
        "title": "users.get",
        "description": "Возвращает расширенную информацию о пользователях.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "users.getFollowers",
        "description": "Возвращает список идентификаторов пользователей, которые являются подписчиками пользователя.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "users.getSubscriptions",
        "description": "Возвращает список идентификаторов пользователей и публичных страниц, которые входят в список подписок пользователя.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "users.search",
        "description": "Возвращает список пользователей в соответствии с заданным критерием поиска.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Utils",
    "methods": [
      {
        "title": "utils.checkLink",
        "description": "Возвращает информацию о том, является ли внешняя ссылка заблокированной на сайте ВКонтакте.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "utils.deleteFromLastShortened",
        "description": "Удаляет сокращенную ссылку из списка пользователя.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "utils.getLastShortenedLinks",
        "description": "Получает список сокращённых ссылок для текущего пользователя.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "utils.getLinkStats",
        "description": "Возвращает статистику переходов по [сокращённой](utils.getShortLink) ссылке.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "utils.getServerTime",
        "description": "Возвращает текущее время на сервере ВКонтакте в `unixtime`.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "utils.getShortLink",
        "description": "Позволяет получить URL, сокращённый с помощью vk.cc.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "utils.resolveScreenName",
        "description": "Определяет тип объекта (пользователь, сообщество, приложение) и его идентификатор по короткому имени `screen_name`.",
        "access_rights": [],
        "params": []
      }
    ]
  },

  {
    "title": "Video",
    "methods": [
      {
        "title": "video.add",
        "description": "Добавляет видеозапись в список пользователя.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.addAlbum",
        "description": "Создает пустой альбом видеозаписей.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.addToAlbum",
        "description": "Позволяет добавить видеозапись в альбом.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.createComment",
        "description": "Cоздает новый комментарий к видеозаписи",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.delete",
        "description": "Удаляет видеозапись со страницы пользователя.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.deleteAlbum",
        "description": "Удаляет альбом видеозаписей.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.deleteComment",
        "description": "Удаляет комментарий к видеозаписи.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.edit",
        "description": "Редактирует данные видеозаписи.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.editAlbum",
        "description": "Редактирует альбом с видео.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.editComment",
        "description": "Изменяет текст комментария к видеозаписи.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.get",
        "description": "Возвращает информацию о видеозаписях.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.getAlbumById",
        "description": "Позволяет получить информацию об альбоме с видео.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.getAlbums",
        "description": "Возвращает список альбомов видеозаписей пользователя или сообщества.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.getAlbumsByVideo",
        "description": "Возвращает список альбомов, в которых находится видеозапись.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.getComments",
        "description": "Возвращает список комментариев к видеозаписи.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.getNewTags",
        "description": "Возвращает список видеозаписей, на которых есть непросмотренные отметки.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.getTags",
        "description": "Возвращает список отметок на видеозаписи.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.moveToAlbum",
        "description": "Перемещает видеозаписи в альбом.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.putTag",
        "description": "Добавляет отметку на видеозапись.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.removeFromAlbum",
        "description": "Позволяет убрать видеозапись из альбома.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.removeTag",
        "description": "Удаляет отметку с видеозаписи.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.reorderAlbums",
        "description": "Позволяет изменить порядок альбомов с видео.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.reorderVideos",
        "description": "Позволяет переместить видеозапись в альбоме.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.restore",
        "description": "Восстанавливает удаленную видеозапись.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.restoreComment",
        "description": "Восстанавливает удаленный комментарий к видеозаписи.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.save",
        "description": "Возвращает адрес сервера, необходимый для [загрузки](api/upload), и данные видеозаписи.",
        "access_rights": [
          "video"
        ],
        "params": []
      },
      {
        "title": "video.search",
        "description": "Возвращает список видеозаписей в соответствии с заданным критерием поиска.",
        "access_rights": [
          "video"
        ],
        "params": []
      }
    ]
  },

  {
    "title": "Wall",
    "methods": [
      {
        "title": "wall.editAdsStealth",
        "description": "Позволяет отредактировать скрытую запись.",
        "access_rights": [
          "ads"
        ],
        "params": []
      },
      {
        "title": "wall.get",
        "description": "Возвращает список записей со стены пользователя или сообщества.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "wall.getById",
        "description": "Возвращает список записей со стен пользователей или сообществ по их идентификаторам.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "wall.getComment",
        "description": "Получает информацию о комментарии на стене.",
        "access_rights": ["wall"],
        "params": []
      },
      {
        "title": "wall.getComments",
        "description": "Возвращает список комментариев к записи на стене.",
        "access_rights": ["wall"],
        "params": []
      },
      {
        "title": "wall.getLikes",
        "description": "Получает информацию о пользователях, которые добавили указанную запись в свой список **Мне нравится**.",
        "access_rights": ["wall"],
        "params": []
      },
      {
        "title": "wall.getPhotoUploadServer",
        "description": "Возвращает адрес сервера для загрузки фотографии на стену пользователя.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "wall.getReposts",
        "description": "Позволяет получать список репостов заданной записи.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "wall.postAdsStealth",
        "description": "Позволяет создать скрытую запись, которая не попадает на стену сообщества и в дальнейшем может быть использована  для создания рекламного объявления типа «Запись в сообществе».",
        "access_rights": ["ads"],
        "params": []
      },
      {
        "title": "wall.search",
        "description": "Позволяет искать записи на стене в соответствии с заданными критериями.",
        "access_rights": [],
        "params": []
      }
    ]
  },
  
  {
    "title": "Widgets",
    "methods": [
      {
        "title": "widgets.getComments",
        "description": "Получает список комментариев к странице, оставленных через Виджет комментариев.",
        "access_rights": [],
        "params": []
      },
      {
        "title": "widgets.getPages",
        "description": "Получает список страниц приложения/сайта, на которых установлен [Виджет комментариев](widgets/comments) или [«Мне нравится»](widgets/like).",
        "access_rights": [],
        "params": []
      }
    ]
  }
]