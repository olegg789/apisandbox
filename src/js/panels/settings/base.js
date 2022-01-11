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
} from "@vkontakte/vkui";
import {
    Icon16LikeOutline, Icon20BugOutline,
    Icon28FavoriteOutline,
    Icon28MessagesOutline,
    Icon28ShareOutline,
    Icon28SmartphoneOutline,
    Icon28UserOutline,
    Icon28Users3Outline

} from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";

class HomePanelSettings extends React.Component {

    async getToken() {
        try {
            let response = await bridge.send("VKWebAppGetAuthToken", {app_id: 7976662, scope: "friends, photos, video, stories, pages, status, notes, wall, docs, groups, stats, market"})

            window.responseToken = response
            this.props.openModal('viewResponseToken')
        }
        catch(err) {
            console.log(err)
        }
    }

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

                <Group header={<Header mode="secondary">Получение ключа доступа (access_token)</Header>}>
                    <SimpleCell
                        before={<Icon28UserOutline fill="#2B8FFE"/>}
                        onClick={() => this.getToken()}
                    >
                        Получить ключ доступа пользователя
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