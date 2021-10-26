import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    Group,
    Placeholder,
} from "@vkontakte/vkui";
import {
    Icon56CancelCircleOutline
} from '@vkontakte/icons';

class HomePanelProfile extends React.Component {

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>История</PanelHeader>
                <Group>
                    <Placeholder
                        icon={<Icon56CancelCircleOutline/>}
                        header="Заглушка"
                    >
                        Тут будет история, но потом
                    </Placeholder>
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
