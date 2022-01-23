import React from "react";

import {
    Panel,
    Div,
    Button,
    Group,
    Gallery,
    FormItem,
    Text,
    Title,
} from "@vkontakte/vkui";

import {

} from "@vkontakte/icons";

import bridge from "@vkontakte/vk-bridge";
import {setStory} from "../store/router/actions";
import {store} from "../../index";

class Intro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userSeenIntro: 'false',
        };

    }

    async setUserSeenIntro() {
        this.setState({userSeenIntro: true})
        await bridge.send("VKWebAppStorageSet", {key: 'userSeenIntro', value: 'true'})
        let check = await bridge.send("VKWebAppStorageGet", {keys: ['userSeenIntro']})
        console.log(check)
        store.dispatch(setStory('home', 'base'))
    };

    render() {
        const {id} = this.props;
        const { } = this.state

        return (
            <Panel id={id}>
                <Group>
                    <Div>
                        <Gallery
                            slideWidth="100%"
                            align="center"
                            style={{ height: 500 }}
                            showArrows
                        >
                            <Div>
                                <Title level="1" weight="semibold" style={{ marginBottom: 16 }}>
                                    ПРИВЕТ
                                </Title>
                            </Div>
                            <Div>
                                <Title level="1" weight="semibold" style={{ marginBottom: 16 }}>
                                    ЭТО АПИ СЕНДБОКС
                                </Title>
                            </Div>
                            <Div>
                                <Title level="1" weight="semibold" style={{ marginBottom: 16 }}>
                                    ПОЕХАЛИ
                                </Title>
                                <Div>
                                    <Button
                                        stretched
                                        size='l'
                                        onClick={() => this.setUserSeenIntro()}
                                    >
                                        СТАРТ
                                    </Button>
                                </Div>
                            </Div>
                        </Gallery>
                    </Div>
                </Group>
            </Panel>
        )
    }

}

export default Intro;