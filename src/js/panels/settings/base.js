import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from "../../store/router/actions";

import {
    PanelHeader,
    Panel,
    Group,
    Header,
    SimpleCell,
    Avatar
} from "@vkontakte/vkui";
import {
    Icon28FavoriteOutline,
    Icon28MessagesOutline,
    Icon28ShareOutline,
    Icon28SmartphoneOutline,
    Icon28UserOutline,
    Icon28Users3Outline

} from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";

class HomePanelSettings extends React.Component {

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                >
                    SETTINGS
                </PanelHeader>

                <Group header={<Header mode="secondary">Прочее</Header>}>
                    <SimpleCell
                        before={
                            <Avatar
                                shadow={false}
                                size={45}
                            >
                                <Icon28FavoriteOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        onClick={() => bridge.send("VKWebAppAddToFavorites")}
                    >
                        Добавить в избранное
                    </SimpleCell>

                    <SimpleCell
                        before={
                            <Avatar
                                shadow={false}
                                size={45}
                            >
                                <Icon28SmartphoneOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        onClick={() => bridge.send("VKWebAppAddToHomeScreen")}
                    >
                        Добавить на главный экран
                    </SimpleCell>

                    <SimpleCell
                        before={
                            <Avatar
                                shadow={false}
                                size={45}
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
                                size={45}
                            >
                                <Icon28ShareOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        onClick={() => bridge.send("VKWebAppShare")}
                    >
                        Поделиться приложением
                    </SimpleCell>
                </Group>

                <Group header={<Header mode="secondary">Получение токенов через Implicit Flow</Header>}>
                    <SimpleCell
                        before={<Icon28UserOutline fill="#2B8FFE"/>}
                        href="https://dev.vk.com/api/access-token/implicit-flow-user"
                        target="_blank"
                    >
                        Как получить токен пользователя
                    </SimpleCell>

                    <SimpleCell
                        before={<Icon28Users3Outline fill="#2B8FFE"/>}
                        href="https://dev.vk.com/api/access-token/implicit-flow-community"
                        target="_blank"
                    >
                        Как получить токен сообщества
                    </SimpleCell>
                </Group>

                <Group header={<Header mode="secondary">Разработчики</Header>}>
                    <SimpleCell
                        href="https://vk.com/kuz_s"
                        description="где я"
                        before={<Avatar src="https://sun7-8.userapi.com/s/v1/ig2/PmOD0qC9KzWgSJACYQERm9qPaJBUn3ZEmFDsP9lgf9zluEC48Mrw3A7e6Xpl9IBJAmCulCGoHXb13wc0Tg1F41dY.jpg?size=200x200&quality=96&crop=0,0,734,734&ava=1"/>}>
                        Александр Кузнецов
                    </SimpleCell>

                    <SimpleCell
                        href="https://vk.com/olejii"
                        description="кто такой Александр Кузнецов"
                        before={<Avatar src="https://sun7-9.userapi.com/s/v1/ig2/qeJzocv5LPJYtYR4Sw4mPOxiAlmDh0iiJC3nPV3PMi9EzDQCNxwu-V0Cy0l8R8rm4LfJifpshjNxJbmTPSFpl2JZ.jpg?size=200x200&quality=95&crop=192,168,325,325&ava=1"/>}
                    >
                        Олег Чикелёв
                    </SimpleCell>
                </Group>
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