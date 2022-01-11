import React from 'react';
import {connect} from 'react-redux';

import {
    ModalPage,
    ModalPageHeader,
    PanelHeaderButton,
    withPlatform,
    IOS,
    Card,
    Div,
    Button, Textarea
} from "@vkontakte/vkui";
import {
    Icon24Dismiss,
    Icon24Cancel
} from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';
import renderjson from "renderjson";

class ViewResponseGetToken extends React.Component {

    state = {
        textButton: true,
        disabledButton: false
    }

    componentDidMount() {
        renderjson.set_show_to_level(30)
        document.getElementById('responseTokenAccessToken').appendChild(renderjson(window.responseToken['access_token']))
        document.getElementById('responseTokenScope').appendChild(renderjson(window.responseToken['scope']))

    }

    async copy() {
        await bridge.send('VKWebAppCopyText', {text: JSON.stringify(window.responseToken['access_token'])})

        this.setState({
            textButton: false,
            disabledButton: true
        })
    }

    render() {
        const {id, onClose, platform} = this.props;
        const {textButton, disabledButton} = this.state

        return (
            <ModalPage
                id={id}
                header={
                    <ModalPageHeader
                        left={platform !== IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Cancel/></PanelHeaderButton>}
                        right={platform === IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
                    >
                        Ключ Доступа
                    </ModalPageHeader>
                }
                onClose={onClose}
                settlingHeight={200}
            >
                <Card>
                    <Div className="scroll">
                        Ваш токен:
                        <div id='responseTokenAccessToken'></div>
                    </Div>
                    <Div className="scroll">
                        Права доступа токена:
                        <div id='responseTokenScope'></div>
                    </Div>
                </Card>

                <Div>
                    <Button
                        size="l"
                        stretched
                        mode="secondary"
                        disabled={disabledButton}
                        onClick={() => this.copy()}
                    >
                        {textButton ? 'Скопировать' : 'Успешно!'}
                    </Button>
                </Div>
            </ModalPage>
        );
    }

}

export default withPlatform(connect()(ViewResponseGetToken));
