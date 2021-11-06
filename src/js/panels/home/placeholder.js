import React from 'react';
import {connect} from 'react-redux';

import {goBack, openModal} from "../../store/router/actions";

import {
    SimpleCell,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    CellButton,
    Avatar,
    Header,
    Div,
    Button
} from "@vkontakte/vkui";
import {
    Icon28FavoriteOutline,
    Icon28MessagesOutline,
    Icon28SmartphoneOutline,
    Icon28UserOutline,
    Icon28Users3Outline
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
                <Group header={<Header mode="secondary">Основное</Header>}>
                    <CellButton before={<Avatar shadow={false} size={45}><Icon28MessagesOutline/></Avatar>} href="https://vk.me/vkapisandbox">Поддержка</CellButton>

                    <CellButton before={<Avatar shadow={false} size={45}><Icon28FavoriteOutline/></Avatar>} onClick={() => bridge.send("VKWebAppAddToFavorites")}>Добавить в избранное</CellButton>

                    <CellButton before={<Avatar shadow={false} size={45}><Icon28SmartphoneOutline/></Avatar>} onClick={() => bridge.send("VKWebAppAddToHomeScreen")}>Добавить на главный экран</CellButton>
                </Group>
                <Group header={<Header mode="secondary">Получение токенов через Implicit Flow</Header>}>
                    <CellButton before={<Icon28UserOutline/>} href={
                        "https://vk.com/dev/implicit_flow_user"}>
                        Как получить токен пользователя
                    </CellButton>

                    <CellButton before={<Icon28Users3Outline/>} href={
                        "https://vk.com/dev/implicit_flow_group"}>
                        Как получить токен сообщества
                    </CellButton>
                </Group>
                <Group header={<Header mode="secondary">Тема</Header>}>
                    <Div>
                        <Button  size="l" stretched={true} mode="secondary" onClick={() =>  this.props.openModal("MODAL_PAGE_BOTS_LIST")}>
                            Выбор темы
                        </Button>
                    </Div>

                </Group>
                <Group header={<Header mode="secondary">разработчики</Header>}>

                    <SimpleCell href="https://vk.com/kuz_s"
                        description="Сделал все"
                        before={<Avatar src={"https://sun7-7.userapi.com/s/v1/ig2/fiUFyDy1oyIR6PH_6SzNNKz76np2pFBqzZRUWZjbiuV6eBwiZSgm7lc9ZrN2s6g57Op56hRXTX2SHlTovp69GeVn.jpg?size=200x200&quality=95&crop=0,170,919,919&ava=1"}/> }
                    >
                        Александр Кузнецов
                    </SimpleCell>
                    <SimpleCell href="https://vk.com/olejii"
                            description="Ничего не делал"
                            before={<Avatar src={"https://sun7-14.userapi.com/s/v1/ig2/csPM9GKlyYZX3WngNXADJJT8C0eNfgPK5epHhWMVgRXv-NY52DKBSPL815IZVOQAUhPjjgczOdGBoyqdMadvN3N9.jpg?size=200x200&quality=96&crop=231,222,371,371&ava=1"}/>}
                    >
                        Олег Чикелёв
                </SimpleCell>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = { goBack, openModal };

export default connect(null, mapDispatchToProps)(HomePanelPlaceholder);
