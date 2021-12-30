export let method = [
    {"name": "VKWebAppInit",
        "description": "Инициализировать VK Bridge."
    },
    {
        "name": "VKWebAppAddToFavorites",
        "description": "Добавить приложение в избранное."
    },
    {
        "name": "VKWebAppAddToHomeScreen",
        "description": " Добавить приложение на главный экран устройства."
    },
    {
        "name": "VKWebAppAddToHomeScreenInfo",
        "description": "Получить информацию о шорткате."
    },
    {
        "name": "VKWebAppAllowNotifications",
        "description":"Запросить разрешение на отправку уведомлений."
    },
    {
        "name": "VKWebAppClose",
        "description":"Закрыть приложение."
    },
    {
        "name": "VKWebAppCopyText",
        "description":"Копировать текст в буфер обмена."
    },
    {
        "name": "VKWebAppDenyNotifications",
        "description":"Отключить уведомления."
    },
    {
        "name": "VKWebAppDownloadFile",
        "description":"Скачать файл."
    },
    {
        "name": "VKWebAppGetClientVersion",
        "description":"Получить номер версии официального приложения ВКонтакте."
    },
    {
        "name": "VKWebAppGetConfig",
        "description":"Получить конфигурацию приложения."
    },
    {
        "name": "VKWebAppGetLaunchParams",
        "description":"Получить параметры запуска."
    },
    {
        "name": "VKWebAppOpenApp",
        "description":"Открыть приложение."
    },
    {
        "name": "VKWebAppOpenCodeReader",
        "description":"Считать QR - код."
    },
    {
        "name": " VKWebAppOpenWallPost",
        "description":"Открыть запись со стены в слое."
    },
    {
        "name": "VKWebAppSendToClient",
        "description":"Отправить установочное уведомление на устройство."
    },
    {
        "name": 'VKWebAppShare',
        "description":'Поделиться ссылкой.'
    },
    {
        "name": 'VKWebAppShowImages',
        "description":'Открыть нативный экран для просмотра изображений.'
    },
    {
        "name": 'VKWebAppShowWallPostBox',
        "description":'Опубликовать запись на стене.'
    },
    {
        "name": 'VKWebAppCreateHash',
        "description":'Получить хеш.'
    },
    {
        "name": 'VKWebAppGetGrantedPermissions',
        "description":'Получить список разрешений.'
    },
    {
        "name": 'VKWebAppLocationChanged',
        "description":'Изменение хеша в адресной строке.'
    },
    {
        "name": 'VKWebAppUpdateConfig',
        "description":'Изменение конфигурации приложения.'
    },
    {
        "name": 'VKWebAppViewHide',
        "description":'Закрытие приложения.'
    },
    {
        "name": 'VKWebAppViewRestore',
        "description":'Восстановление приложения из кеша.'
    },
    {
        "name": 'VKWebAppCallAPIMethod',
        "description":'Вызвать метод API ВКонтакте.'
    },
    {
        "name": 'VKWebAppGetAuthToken',
        "description":'Получить права доступа у пользователя.'
    },
    {
        "name": 'VKWebAppGetEmail',
        "description":'Получить адрес электронной почты.'
    },
    {
        "name": 'VKWebAppGetFriends',
        "description":'Показать список друзей пользователя.'
    },
    {
        "name": 'VKWebAppGetGeodata',
        "description":'Получить данные о текущем местоположении пользователя.'
    },
    {
        "name": 'VKWebAppGetPersonalCard',
        "description":'Вызвать карточку контактов.'
    },
    {
        "name": 'VKWebAppGetPhoneNumber',
        "description":'Получить номер телефона пользователя.'
    },
    {
        "name": 'VKWebAppGetUserInfo',
        "description":'Получить данные о профиле пользователя.'
    },
    {
        "name": 'VKWebAppOpenContacts',
        "description":'Показать контакты из телефонной книги.'
    },
    {
        "name": 'VKWebAppAddToCommunity',
        "description":'Добавить приложение в сообщество.'
    },
    {
        "name":  'VKWebAppAllowMessagesFromGroup',
        "description":'Получить разрешение на отправку сообщений от имени сообщества.'
    },
    {
        "name": 'VKWebAppGetCommunityToken',
        "description":'Получить права доступа.'
    },
    {
        "name": 'VKWebAppGetGroupInfo',
        "description":'Получить информацию о сообществе.'
    },
    {
        "name": 'VKWebAppJoinGroup',
        "description":'Предложить пользователю вступить в сообщество.'
    },
    {
        "name": 'VKWebAppLeaveGroup',
        "description":'Предложить пользователю выйти из сообщества.'
    },
    {
        "name":    'VKWebAppSendPayload',
        "description":'Отправить событие в сообщество.'
    },
    {
        "name": 'VKWebAppShowCommunityWidgetPreviewBox',
        "description":'Показать виджет сообщества перед публикацией.'
    },
    {
        "name": 'VKWebAppShowOrderBox',
        "description":'Открыть окно покупки товара.'
    },
    {
        "name": 'VKWebAppOpenPayForm',
        "description":'Показать платёжное окно VK Pay.'
    },
    {
        "name": 'VKWebAppShowStoryBox',
        "description":'Открыть редактор историй.'
    },
    {
        "name": 'VKWebAppSubscribeStoryApp',
        "description":'Подписать пользователя на обновления истории.'
    },
    {
        "name":' VKWebAppCheckNativeAds',
        "description":'Проверить наличие рекламы, доступной для показа.'
    },
    {
        "name": 'VKWebAppShowNativeAds',
        "description":'Показать рекламу.'
    },
    {
        "name": 'VKWebAppConversionHit',
        "description":'Отслеживать конверсионные действия пользователей.'
    },
    {
        "name": 'VKWebAppRetargetingPixel',
        "description":'Добавить пользователя в аудиторию ретаргетинга.'
    },
    {
        "name": 'VKWebAppResizeWindow',
        "description":'Изменить размер окна приложения.'
    },
    {
        "name": 'VKWebAppScroll',
        "description":'Прокрутить окно приложения.'
    },
    {
        "name": 'VKWebAppSetLocation',
        "description":'Задать значение хеша в адресной строке.'
    },
    {
        "name": 'VKWebAppSetSwipeSettings',
        "description":'Включить свайп, как в браузере.'
    },
    {
        "name": 'VKWebAppSetViewSettings',
        "description":'Настроить вид статус-и экшен-бара.'
    },
    {
        "name": 'VKWebAppStorageGet',
        "description":'Получить значение ключа.'
    },
    {
        "name": 'VKWebAppStorageGetKeys',
        "description":'Получить названия всех переменных.'
    },
    {
        "name": 'VKWebAppStorageSet',
        "description":'Задать значение переменной.'
    },
    {
        "name": 'VKWebAppTapticImpactOccurred',
        "description":'Вызвать вибрацию при столкновении.'
    },
    {
        "name": 'VKWebAppTapticNotificationOccurred',
        "description":'Вызвать вибрацию после выполнения действия.'
    },
    {
        "name": 'VKWebAppTapticSelectionChanged',
        "description":'Вызвать вибрацию при изменении выбора.'
    },
    {
        "name": 'VKWebAppFlashGetInfo',
        "description":'Получить информацию о фонарике.'
    },
    {
        "name": 'VKWebAppFlashSetLevel',
        "description":'Задать уровень яркости фонарика.'
    },
    {
        "name": 'VKWebAppAccelerometerStart',
        "description":'Получать данные акселерометра.'
    },
    {
        "name": 'VKWebAppAccelerometerStop',
        "description":'Не получать данные акселерометра.'
    },
    {
        "name": 'VKWebAppDeviceMotionStart',
        "description":'Получать данные о вращении устройства.'
    },
    {
        "name":  'VKWebAppDeviceMotionStop',
        "description":'Не получать данные о вращении устройства.'
    },
    {
        "name": 'VKWebAppGyroscopeStart',
        "description":'Получать данные гироскопа.'
    },
    {
        "name": 'VKWebAppGyroscopeStop',
        "description":'Не получать данные гироскопа.'
    },
    {
        "name": 'VKWebAppCheckAllowedScopes',
        "description":'Проверить, есть ли доступ к данным.'
    },
    {
        "name": 'VKWebAppShowInviteBox',
        "description":'Пригласить друзей в игру.'
    },
    {
        "name": 'VKWebAppShowLeaderBoardBox',
        "description":'Показать таблицу результатов.'
    },
    {
        "name": 'VKWebAppShowSubscriptionBox',
        "description":'Показать окно подписки.'
    },
    {
        "name": 'VKWebAppShowRequestBox',
        "description":"Отправить запрос пользователю."
    },
    ]
