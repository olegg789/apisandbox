import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';
import {method, account} from '../../../infoMethod';

import {
    Panel,
    Group,
    PanelHeader,
    Snackbar,
    Avatar,
    FormItem,
    NativeSelect,
    PanelHeaderButton,
} from '@vkontakte/vkui'
import {Icon16Done, Icon28Settings} from '@vkontakte/icons';

class HomePanelBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            section: null
        };

        /*
            создаем объект state
            в нём создаем section
        */

        this.onChange = this.onChange.bind(this);
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

    onChange(e) {
        const { value } = e.currentTarget;
        this.setState({ section: value }) // меняем значение section на value, которое находится в option
    }

    render() {
        const {id, setPage} = this.props;
        const {section} = this.state; //из this.state берём значение section, чтобы дальше просто писать "section", а не "this.state.section"

        return (
            <Panel id={id}>
                <PanelHeader left={<PanelHeaderButton onClick={() => setPage('home', 'placeholder')}><Icon28Settings/></PanelHeaderButton>}>Выполнить</PanelHeader>
                <Group>
                    <FormItem top="Выберите раздел">
                        <NativeSelect 
                            placeholder="Не выбран"
                            onChange={this.onChange} //запускается, когда меняется значение элемента
                        >
                            {method.map((el, index) => {
                                return <option value={index}>{el}</option>
                            })}
                        </NativeSelect>
                    </FormItem>

                    {section !== null && //если section не равен нач. значению, то отображаем второй NativeSelect, для выбора метода
                        <FormItem top="Выберите метод">
                            <NativeSelect 
                                placeholder="Не выбран"
                                //onClick={this.onChange}
                            >
                                {account.map((el1, index1) => {
                                    return <option value={index1}>{el1}</option>
                                })}
                            </NativeSelect>
                        </FormItem>
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
