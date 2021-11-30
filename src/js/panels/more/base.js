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

import { bug, openDialog, bugIconText } from 'bugy';

bug({
    onclick: () => openDialog({ id: 1 }),
    text: bugIconText({ text: "Test" })
});

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
                                        value="TEST RESPONSE"
                                    />
                                </Div>
                                <Div>
                                    <Button
                                        stretched
                                        size="s"
                                    >
                                        Скопировать
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
