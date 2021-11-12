import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    Group,
    Textarea,
    Div, Header
} from "@vkontakte/vkui";
import {

} from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";

class HomePanelProfile extends React.Component {

    state = {
        value: null
    };

    async getStorage(key) {
        try {
            let response = await bridge.send("VKWebAppStorageGet", {"keys": [key]})
            console.log(response.keys[0].value)
            return response.keys[0].value}
        catch (err) {
            console.log(err)
        }
    };

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>История</PanelHeader>
                <Group>
                    <div align="center">
                        Показываются последние 5 вызовов
                    </div>
                </Group>
                <Group header={<Header mode="secondary">Первый</Header>}>
                    <Div>
                        <Textarea value={this.state.value}/>
                    </Div>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    openPopout,
    closePopout
};

export default connect(null, mapDispatchToProps)(HomePanelProfile);
