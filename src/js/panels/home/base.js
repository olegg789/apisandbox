import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {
    Div, 
    Panel, 
    Alert, 
    Group, 
    Button, 
    PanelHeader,
    ScreenSpinner,
    Snackbar,
    Avatar,
    FormItem,
    NativeSelect
} from '@vkontakte/vkui'
import { Icon16Done } from '@vkontakte/icons'
import Chel from '../../../svg/chel.svg'


class HomePanelBase extends React.Component {

    state = {
        showImg: false
    };

    showImg = () => {
        this.setState({showImg: true});
    };

    openPopout() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    mode: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    mode: 'destructive',
                    action: this.showImg
                }]}
                onClose={() => this.props.closePopout()}
                header='Вопрос значит'
                text='Вас роняли в детстве?'
            />
        );
    }

    async openSpinner() {
        this.props.openPopout(<ScreenSpinner/>)
        await this.sleep(2500)
        this.props.closePopout()
    }

    openSnackbar() {
        this.props.openPopout(
            <Snackbar
                layout='vertical'
                onClose={() => this.props.closePopout()}
                action='Например кнопка'
                before={<Avatar size={24} style={{ background: 'var(--accent)' }}> <Icon16Done fill='#fff' width={14} height={14}/> </Avatar>}
            >
                Какой-то текст
            </Snackbar>
        );
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Выполнить</PanelHeader>
                <Group>
                    <Group>
                        <FormItem top="Выберите раздел">
                            <NativeSelect placeholder="Не выбран">
                                <option value="a">Account</option>
                                <option value="b">Ads</option>
                                <option value="c">Apps</option>
                                <option value="d">Board</option>
                                <option value="e">Database</option>
                                <option value="f">Docs</option>
                                <option value="g">Fave</option>
                                <option value="h">Friends</option>
                                <option value="i">Gifts</option>
                                <option value="j">Groups</option>
                                <option value="k">Leads</option>
                                <option value="l">Likes</option>
                                <option value="m">Market</option>
                                <option value="n">Messages</option>
                                <option value="o">Newsfeed</option>
                                <option value="p">Notes</option>
                                <option value="q">Notifications</option>
                                <option value="r">Pages</option>
                                <option value="s">Photos</option>
                                <option value="t">Polls</option>
                                <option value="u">Search</option>
                                <option value="v">Secure</option>
                                <option value="w">Stats</option>
                                <option value="x">Status</option>
                                <option value="y">Storage</option>
                                <option value="z">Users</option>
                                <option value="a1">Utils</option>
                                <option value="b1">Video</option>
                                <option value="c1">Donut</option>
                                <option value="d1">Podcasts</option>
                                <option value="e1">LeadForms</option>
                                <option value="h1">PrettyCards</option>
                                <option value="g1">Store</option>
                                <option value="f1">Stories</option>
                                <option value="m1">AppWidgets</option>
                                <option value="k1">Streaming</option>
                                <option value="p1">Orders</option>
                                <option value="z1">Wall</option>
                                <option value="l1">Widgets</option>
                            </NativeSelect>
                        </FormItem>
                    </Group>
                </Group>
                </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
