import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from "../../store/router/actions";

import {
    PanelHeader,
    Panel,
    Group,
    Header,
    SimpleCell,
    Avatar,
    Footer,
    Link,
    Div,
    Button,
    MiniInfoCell
} from "@vkontakte/vkui";
import {
    Icon16LikeOutline,
    Icon20BugOutline,
    Icon20HelpOutline,
    Icon28ArrowUpCircleOutline,
    Icon28BookOutline,
    Icon28FavoriteOutline,
    Icon28KeyOutline,
    Icon28MessagesOutline,
    Icon28ShareOutline,
    Icon28SmartphoneOutline,
} from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";

class HomePanelSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textButton: true,
            disabledButton: false,

        };

    }

    componentDidMount() {
        this.setState({
            param: [
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
            ]
        })
    }

    async getToken() {
        try {
            let response = await bridge.send("VKWebAppGetAuthToken", {app_id: 7976662, scope: 'friends, photos, video, stories, pages, status, notes, wall, docs, groups, stats, market'})

            this.setState({
                textButton: false,
                disabledButton: true
            })

            window.responseToken = response
            this.props.openModal('viewResponseToken')
        }
        catch(err) {
            console.log(err)
        }
    }

    render() {
        const {id} = this.props;
        const {textButton, disabledButton} = this.state;

        return (
            <Panel id={id}>
                <PanelHeader>Настройки</PanelHeader>

                <Button onClick={() => bridge.send("VKWebAppStorageSet", {key: 'userSeenIntro', value: ''})}>
                    СБРОСИТЬ ОНБОРДИНГ
                </Button>

                <Group header={<Header mode="secondary">Прочее</Header>}>
                    <SimpleCell
                        className='btn_settings'
                        before={
                            <Avatar
                                shadow={false}
                                size={43}
                            >
                                <Icon28FavoriteOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        onClick={() => bridge.send("VKWebAppAddToFavorites")}
                    >
                        Добавить в избранное
                    </SimpleCell>

                    <SimpleCell
                        className='btn_settings'
                        before={
                            <Avatar
                                shadow={false}
                                size={43}
                            >
                                <Icon28SmartphoneOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        onClick={() => bridge.send("VKWebAppAddToHomeScreen")}
                    >
                        Добавить на главный экран
                    </SimpleCell>

                    <SimpleCell
                        className='btn_settings'
                        before={
                            <Avatar
                                shadow={false}
                                size={43}
                            >
                                <Icon28MessagesOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        href="https://vk.me/vkapisandbox"
                    >
                        Поддержка
                    </SimpleCell>

                    <SimpleCell
                        before={
                            <Avatar
                                shadow={false}
                                size={43}
                            >
                                <Icon28ShareOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        onClick={() => bridge.send("VKWebAppShare")}
                    >
                        Поделиться приложением
                    </SimpleCell>
                </Group>

                <Group header={<Header mode='secondary'>Полезные ссылки</Header> }>
                    <SimpleCell
                        className='btn_settings'
                        before={
                            <Avatar
                                shadow={false}
                                size={43}
                            >
                                <Icon28ArrowUpCircleOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        href="https://dev.vk.com/reference"
                        target='_blank'
                    >
                        Документация VK API
                    </SimpleCell>
                    <SimpleCell
                        className='btn_settings'
                        before={
                            <Avatar
                                shadow={false}
                                size={43}
                            >
                                <Icon28BookOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        href="https://dev.vk.com/bridge/getting-started"
                        target='_blank'
                    >
                        Документация VK Bridge
                    </SimpleCell>
                    <SimpleCell
                        before={
                            <Avatar
                                shadow={false}
                                size={43}
                            >
                                <Icon28KeyOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        href="https://dev.vk.com/api/access-token/getting-started"
                        target='_blank'
                    >
                        Про ключи доступа
                    </SimpleCell>
                </Group>

                <Group header={<Header mode="secondary">Получение токена пользователя(access_token)</Header>}>
                    <Div>
                        <Button
                            stretched
                            mode="secondary"
                            size="l"
                            onClick={() => {this.getToken()}}
                            disabled={disabledButton}
                        >
                            {textButton ? "Получить токен(со всеми правами)" : "Токен получен!"}
                        </Button>
                        <MiniInfoCell
                            before={<Icon20HelpOutline/>}
                            textWrap="full"
                        >
                            Для работы со всеми методами API вам необходимо передавать в запросе access_token — специальный ключ доступа. Он представляет собой строку из латинских букв и цифр и может соответствовать отдельному пользователю, сообществу или вашему приложению.
                            При нажатии кнопки "Получить токен", Вас попросят дать права доступа для приложения. Это необходимо, чтобы Вам стали доступны все возможные методы.
                        </MiniInfoCell>
                    </Div>
                </Group>

                <Footer>
                    <Div className="podpis">
                        От <Link href="https://vk.com/kuz_s" target="_blank">@kuz_s</Link> и <Link href="https://vk.com/olejii" target="_blank">@olejii</Link>
                    </Div>
                    <Div className="podpis">
                        Сделано с <Icon16LikeOutline/> и <Icon20BugOutline/>
                    </Div>
                </Footer>
            </Panel>
            );

        };

    }

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelSettings);