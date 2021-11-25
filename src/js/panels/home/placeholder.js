import React from 'react';
import {connect} from 'react-redux';

import {goBack, openModal} from "../../store/router/actions";

import {
    SimpleCell,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Avatar,
    Header,
} from "@vkontakte/vkui";
import {
    Icon28FavoriteOutline,
    Icon28MessagesOutline, Icon28ShareOutline,
    Icon28SmartphoneOutline,
    Icon28UserOutline,
    Icon28Users3Outline,

} from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';

class HomePanelPlaceholder extends React.Component {

    render() {
        const {id, goBack} = this.props;


        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Настройки
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
                        href="https://vk.com/dev/implicit_flow_user"
                        target="_blank"
                    >
                        Как получить токен пользователя
                    </SimpleCell>

                    <SimpleCell 
                        before={<Icon28Users3Outline fill="#2B8FFE"/>}
                        href="https://vk.com/dev/implicit_flow_group"
                        target="_blank"
                    >
                        Как получить токен сообщества
                    </SimpleCell>
                </Group>

                <Group header={<Header mode="secondary">разработчики</Header>}>
                    <SimpleCell 
                        href="https://vk.com/kuz_s"
                        description="где я"
                        before={<Avatar src="https://sun7-7.userapi.com/s/v1/ig2/fiUFyDy1oyIR6PH_6SzNNKz76np2pFBqzZRUWZjbiuV6eBwiZSgm7lc9ZrN2s6g57Op56hRXTX2SHlTovp69GeVn.jpg?size=200x200&quality=95&crop=0,170,919,919&ava=1"/>}
                    >
                        Александр Кузнецов
                    </SimpleCell>

                    <SimpleCell 
                        href="https://vk.com/olejii"
                        description="кто такой Александр Кузнецов"
                        before={<Avatar src="https://sun7-14.userapi.com/s/v1/ig2/csPM9GKlyYZX3WngNXADJJT8C0eNfgPK5epHhWMVgRXv-NY52DKBSPL815IZVOQAUhPjjgczOdGBoyqdMadvN3N9.jpg?size=200x200&quality=96&crop=231,222,371,371&ava=1"/>}
                    >
                        Олег Чикелёв
                    </SimpleCell>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = { 
    goBack, 
    openModal 
};

export default connect(null, mapDispatchToProps)(HomePanelPlaceholder);
