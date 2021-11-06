import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';
import {method, infoMethod} from '../../../infoMethod';
import {sleep} from '../../../functions';

import {
    Panel,
    Group,
    PanelHeader,
    Snackbar,
    Avatar,
    FormItem,
    NativeSelect,
    PanelHeaderButton,
    MiniInfoCell
} from '@vkontakte/vkui'
import {
    Icon16Done,
    Icon20HelpOutline,
    Icon28SettingsOutline
} from '@vkontakte/icons';

class HomePanelBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            section: null,
            infoMethods: null,
            infMethod: null
        };

        this.onChangeSections = this.onChangeSections.bind(this);
        this.onChangeMethods = this.onChangeMethods.bind(this);
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

    async onChangeSections(e) {
        const { value } = e.currentTarget;
        this.setState({ section: value })

        await sleep(300) //setState не обновляется моментально => костыль

        let arrInfoMethods = []
        for (let index = method[this.state.section].currentCount; index <= method[this.state.section].totalCount; index++) {
            arrInfoMethods.push(<option value={index}>{infoMethod[index].name}</option>)
        }
        this.setState({ infoMethods: arrInfoMethods })
    }

    onChangeMethods(e) {
        const { value } = e.currentTarget;
        this.setState({ infMethod: value })
    }

    render() {
        const {id, setPage} = this.props;
        const {section, infoMethods, infMethod} = this.state;

        return (
            <Panel id={id}>
                <PanelHeader left={<PanelHeaderButton onClick={() => setPage('home', 'placeholder')}><Icon28SettingsOutline/></PanelHeaderButton>}>Выполнить</PanelHeader>
                <Group>
                    <FormItem top="Выберите раздел">
                        <NativeSelect 
                            placeholder="Не выбран"
                            onChange={this.onChangeSections}
                        >
                            {method.map((el, index) => {
                                return <option value={index}>{el.name}</option>
                            })}
                        </NativeSelect>
                    </FormItem>

                    {section !== null &&
                        <FormItem top="Выберите метод">
                            <NativeSelect
                                placeholder="Не выбран"
                                onChange={this.onChangeMethods}
                            >
                                {infoMethods}
                            </NativeSelect>
                        </FormItem>
                    }

                    {infMethod !== null &&
                        <MiniInfoCell
                            before={<Icon20HelpOutline/>}
                            textWrap='full'
                        >
                            {infoMethod[infMethod].description}
                        </MiniInfoCell>
                    }
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
