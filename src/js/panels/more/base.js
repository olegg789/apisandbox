import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    ScreenSpinner,
    Group,
} from "@vkontakte/vkui";
import {

} from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';

var infouser = 0
var first_name = 'Загрузка...'
var last_name
var user_id
var photo

class HomePanelProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: first_name,
            last_name: last_name,
            user_id: user_id,
            photo: photo
        };
    }

    componentDidMount() {
        if (infouser === 0) {
            this.getInfoUser();
        }
    }

    async getInfoUser() {
        this.props.openPopout(<ScreenSpinner/>)

        let user_info = await bridge.send('VKWebAppGetUserInfo');
        first_name = user_info.first_name
        last_name = user_info.last_name
        photo = 'data:image/jpeg;base64,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'
        user_id = user_info.id
        this.setState({ 
            first_name: first_name,
            last_name: last_name,
            user_id: user_id,
            photo: photo,
        });
        infouser = 1

        this.props.closePopout()

    }

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>История</PanelHeader>
                <Group>
                    Тут будет история но Олег ленивая жопа не сделал еще
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
