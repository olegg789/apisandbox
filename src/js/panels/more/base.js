import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    Div,
    Card, Group, Header, Button, Textarea,
} from "@vkontakte/vkui";
import {

} from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";

class HomePanelProfile extends React.Component {

    state = {
        textButton: true,
        disabledButton: false
    };

    async getStorage(key) {
        try {
            let response = await bridge.send("VKWebAppStorageGet", {"keys": [key]});
            console.log(response.keys[0].value);
            return response.keys[0].value}
        catch (err) {
            console.log(err)
        }
    };

    async copy() {
        await bridge.send("VKWebAppCopyText", {"text": 'АЛЕ ГАРАЖ'})

        this.setState({
            textButton: false,
            disabledButton: true
        })
    }

    render() {
        const {id} = this.props;
        const {disabledButton, textButton} = this.state

        return (
            <Panel id={id}>
                <PanelHeader>История</PanelHeader>
                    <Div>
                        <Card mode="outline">
                            <Group
                                header={<Header
                                    mode="secondary"
                                >
                                    Метод
                                </Header>}>
                                <Div>
                                    TEST METHOD
                                </Div>
                            <Header
                                mode="secondary"
                            >
                                Ответ
                            </Header>
                                <Div>

                                    <Textarea
                                        value={this.getStorage('first')}
                                        disabled
                                    />
                                </Div>
                                <Div>
                                    <Button
                                        stretched
                                        size="s"
                                        onClick={() => this.copy()}
                                        disabled={disabledButton}
                                    >
                                        {textButton ? "Скопировать" : "Скопировано!"}
                                    </Button>
                                </Div>
                            </Group>
                        </Card>
                    </Div>
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
