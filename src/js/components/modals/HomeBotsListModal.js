import React from 'react';
import {connect} from 'react-redux';

import {openModal} from "../../store/router/actions";

import {
    List,
    ModalPage, 
    ModalPageHeader, 
    PanelHeaderButton, 
    withPlatform, 
    IOS,
    CellButton,
} from "@vkontakte/vkui";
import {Icon24Dismiss, Icon24Cancel, Icon28MoonOutline, Icon28SunOutline, Icon28SettingsOutline} from '@vkontakte/icons'
//import bridge from "@vkontakte/vk-bridge";

class HomeBotsListModal extends React.Component {

    render() {
        const {id, onClose, platform} = this.props;

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
                        Тема
                    </ModalPageHeader>
                }
                onClose={onClose}
                settlingHeight={100}
            >
                <List>
                    <CellButton activeEffectDelay={3} before={<Icon28SettingsOutline/>} onClick={() => this.props.changeScheme('system')}>Системная</CellButton>

                    <CellButton activeEffectDelay={3} before={<Icon28MoonOutline/>} onClick={() => this.props.changeScheme('space_gray')}>Тёмная</CellButton>

                    <CellButton activeEffectDelay={3} before={<Icon28SunOutline/>} onClick={() => this.props.changeScheme('bright_light')}>Светлая</CellButton>
                </List>
            </ModalPage>
        );
    }

}

const mapDispatchToProps = {
    openModal
};

export default withPlatform(connect(null, mapDispatchToProps)(HomeBotsListModal));
