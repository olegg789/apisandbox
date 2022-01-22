import React, { Fragment } from "react";
import {Panel, Group, Div, Title, Text, Button, Placeholder} from "@vkontakte/vkui";
import {Icon56DiamondOutline} from "@vkontakte/icons";
import bridge from "@vkontakte/vk-bridge";

class Intro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userSeenIntro: false

        };

    }

    async setUserSeenIntro() {
        this.setState({userSeenIntro: false})
        bridge.send("VKWebAppStorageSet", {key: 'userSeenIntro', value: String(this.state.userSeenIntro)})
        let check = await bridge.send("VKWebAppStorageGet", {keys: ['userSeenIntro']})
        console.log(check)
    };

    render() {
        return (
            <Panel id='id'>
                <Div>
                    <Placeholder
                        icon={<Icon56DiamondOutline/>}
                        header="okok"
                    >
                        ЗАГЛУШКА ТЕСТ
                    </Placeholder>
                    <Button
                        onClick={() => this.setUserSeenIntro()}
                    >
                        TEST
                    </Button>
                </Div>
            </Panel>
        )
    }

}

export default Intro;