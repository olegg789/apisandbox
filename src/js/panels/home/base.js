import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';
import {method} from '../../../infoMethod';

import {
    Panel,
    Group,
    PanelHeader,
    Snackbar,
    Avatar,
    FormItem,
    NativeSelect,
    PanelHeaderButton
} from '@vkontakte/vkui'
import {Icon16Done, Icon28Settings} from '@vkontakte/icons';



class HomePanelBase extends React.Component {

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

    render() {
        const {id, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderButton onClick={() => setPage('home', 'placeholder')}><Icon28Settings/></PanelHeaderButton>}>Выполнить</PanelHeader>
                <Group>
                    <FormItem top="Выберите раздел">
                        <NativeSelect placeholder="Не выбран">
                            {method.map((el, index) => {
                                return <option value={index}>{el}</option>
                            })}
                        </NativeSelect>
                    </FormItem>
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
