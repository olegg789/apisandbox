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
    Button
} from "@vkontakte/vkui";
import {
    Icon16LikeOutline,
    Icon20BugOutline,
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

    render() {
        const {id} = this.props;

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
                        target='_blank'
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