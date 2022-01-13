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
            textButton: true,
            disabledButton: false,

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
            let response = await bridge.send("VKWebAppGetAuthToken", {app_id: 7976662, scope: this.state.param})

            console.log(this.state.param)

            this.setState({
                textButton: false,
                disabledButton: true
            })

            window.responseToken = response
            this.props.openModal('viewResponseToken')
        }
        catch(err) {
            console.log(err)
        }
    }

    render() {
        const {id} = this.props;
        const {textButton, disabledButton} = this.state;

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

                        <Checkbox name="friends" onChange={this.actionCheckbox('friends')}>friends</Checkbox>
                        <Checkbox name="photos" onChange={this.actionCheckbox('photos')}>photos</Checkbox>
                        <Checkbox name='video' onChange={this.actionCheckbox('video')}>video</Checkbox>
                        <Checkbox name='stories' onChange={this.actionCheckbox('stories')}>stories</Checkbox>
                        <Checkbox name='pages' onChange={this.actionCheckbox('pages')}>pages</Checkbox>
                        <Checkbox name='status' onChange={this.actionCheckbox('status')}>status</Checkbox>
                        <Checkbox name='notes' onChange={this.actionCheckbox('notes')}>notes</Checkbox>
                        <Checkbox name='wall' onChange={this.actionCheckbox('wall')}>wall</Checkbox>
                        <Checkbox name='docs' onChange={this.actionCheckbox('docs')}>docs</Checkbox>
                        <Checkbox name='groups' onChange={this.actionCheckbox('groups')}>groups</Checkbox>
                        <Checkbox name='stats' onChange={this.actionCheckbox('stats')}>stats</Checkbox>
                        <Checkbox name="market" onChange={this.actionCheckbox('market')}>market</Checkbox>

                        <Div>
                            <Button
                                stretched
                                mode="secondary"
                                size="l"
                                onClick={() => this.getToken()}
                                disabled={disabledButton}
                            >
                                {textButton ? "Получить токен" : "Токен получен!"}
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