import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from "../../store/router/actions";

import {
    PanelHeader,
    Panel,
    Group,
    Header,
    SimpleCell,
    Avatar,
    Footer,
    Link,
    Div,
    Button,
    Checkbox,
} from "@vkontakte/vkui";
import {
    Icon16LikeOutline, Icon20BugOutline,
    Icon28FavoriteOutline,
    Icon28MessagesOutline,
    Icon28ShareOutline,
    Icon28SmartphoneOutline,
} from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";

class HomePanelSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    componentDidMount() {
        this.setState({
            param: [
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
            ]
        })
    }

    actionCheckbox(index) {
        let arr = this.state.param

        if (arr[index] === '' || arr[index] === false) {
            arr[index] = true
        } else {
            arr[index] = false
        }

        this.setState({ param: arr })
    }

    async getToken() {
        try {
            let response = await bridge.send("VKWebAppGetAuthToken", {app_id: 7976662, scope: [this.state.param]})

            console.log(this.state.param)

            window.responseToken = response
            this.props.openModal('viewResponseToken')
        }
        catch(err) {
            console.log(err)
        }
    }

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                >
                    SETTINGS
                </PanelHeader>

                <Group header={<Header mode="secondary">Прочее</Header>}>
                    <SimpleCell
                        before={
                            <Avatar
                                shadow={false}
                                size={43}
                            >
                                <Icon28FavoriteOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        onClick={() => bridge.send("VKWebAppAddToFavorites")}
                    >
                        Добавить в избранное
                    </SimpleCell>

                    <SimpleCell
                        before={
                            <Avatar
                                shadow={false}
                                size={43}
                            >
                                <Icon28SmartphoneOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        onClick={() => bridge.send("VKWebAppAddToHomeScreen")}
                    >
                        Добавить на главный экран
                    </SimpleCell>

                    <SimpleCell
                        before={
                            <Avatar
                                shadow={false}
                                size={43}
                            >
                                <Icon28MessagesOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        href="https://vk.me/vkapisandbox"
                    >
                        Поддержка
                    </SimpleCell>

                    <SimpleCell
                        before={
                            <Avatar
                                shadow={false}
                                size={43}
                            >
                                <Icon28ShareOutline fill="#2B8FFE"/>
                            </Avatar>
                        }
                        onClick={() => bridge.send("VKWebAppShare")}
                    >
                        Поделиться приложением
                    </SimpleCell>
                </Group>

                <Group header={<Header mode="secondary">Получение токена пользователя(access_token)</Header>}>
                    <Div>
                        <Div>
                            Права доступа токена
                        </Div>

                        <Checkbox name="friends" onChange={(e) => this.setState({param: e.currentTarget.name})}>friends</Checkbox>
                        <Checkbox name="photos" onChange={(e) => this.setState({param: e.currentTarget.name})}>photos</Checkbox>
                        <Checkbox name='video' onChange={(e) => this.setState({param: e.currentTarget.name})}>video</Checkbox>
                        <Checkbox name='stories' onChange={(e) => this.setState({param: e.currentTarget.name})}>stories</Checkbox>
                        <Checkbox name='pages' onChange={(e) => this.setState({param: e.currentTarget.name})}>pages</Checkbox>
                        <Checkbox name='status' onChange={(e) => this.setState({param: e.currentTarget.name})}>status</Checkbox>
                        <Checkbox name='notes' onChange={(e) => this.setState({param: e.currentTarget.name})}>notes</Checkbox>
                        <Checkbox name='wall' onChange={(e) => this.setState({param: e.currentTarget.name})}>wall</Checkbox>
                        <Checkbox name='docs' onChange={(e) => this.setState({param: e.currentTarget.name})}>docs</Checkbox>
                        <Checkbox name='groups' onChange={(e) => this.setState({param: e.currentTarget.name})}>groups</Checkbox>
                        <Checkbox name='stats' onChange={(e) => this.setState({param: e.currentTarget.name})}>stats</Checkbox>
                        <Checkbox name="market" onChange={(e) => this.setState({param: e.currentTarget.name})}>market</Checkbox>

                        <Div>
                            <Button
                                stretched
                                mode="secondary"
                                size="l"
                                onClick={() => this.getToken()}
                            >
                                Получить токен
                            </Button>
                        </Div>
                    </Div>
                </Group>

                <Footer>
                    <Div className="podpis">
                        От <Link href="https://vk.com/kuz_s" target="_blank">@kuz_s</Link> и <Link href="https://vk.com/olejii" target="_blank">@olejii</Link>
                    </Div>
                    <Div className="podpis">
                        Сделано с <Icon16LikeOutline/> и <Icon20BugOutline/>
                    </Div>
                </Footer>
            </Panel>
            );

        };

    }

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelSettings);