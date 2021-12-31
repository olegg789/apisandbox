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
    Button
} from "@vkontakte/vkui";
import { 
    Icon24Dismiss, 
    Icon24Cancel 
} from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';
import renderjson from 'renderjson';

class ViewResponseAPIModal extends React.Component {

    state = {
        textButton: true,
        disabledButton: false
    }

    componentDidMount() {
        renderjson.set_show_to_level(30)
        document.getElementById('responseAPI').appendChild(renderjson(window.responseAPI))
    }

    async copy() {
        await bridge.send('VKWebAppCopyText', {text: JSON.stringify(window.responseAPI)})

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
                        Результат
                    </ModalPageHeader>
                }
                onClose={onClose}
                settlingHeight={200}
            >
                <Card>
                    <Div>
                        <div id='responseAPI'></div>
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

export default withPlatform(connect()(ViewResponseAPIModal));
