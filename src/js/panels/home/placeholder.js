import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    CellButton,
    Avatar,
    Header
} from "@vkontakte/vkui";
import {Icon28FavoriteOutline, Icon28MessagesOutline} from '@vkontakte/icons';
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
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = { goBack };

export default connect(null, mapDispatchToProps)(HomePanelPlaceholder);
