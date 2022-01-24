import React from "react";
import {connect} from 'react-redux';

import {setStory} from "../store/router/actions";
import {store} from "../../index";

import {
    Panel,
    Div,
    Button,
    Group,
    Gallery,
    Title,
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

class Intro extends React.Component {

    setUserSeenIntro() {
        let {panelsHistory} = this.props;

        bridge.send("VKWebAppStorageSet", {key: 'userSeenIntro', value: 'true'})
        delete panelsHistory.Intro
        store.dispatch(setStory('home', 'base'))
    };

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
                <Group>
                    <Div>
                        <Gallery
                            slideWidth="100%"
                            align="center"
                            style={{ height: '100%' }}
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

const mapStateToProps = (state) => {
    return {
      panelsHistory: state.router.panelsHistory
    };
};

const mapDispatchToProps = { setStory };
export default connect(mapStateToProps, mapDispatchToProps)(Intro);