import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout} from '../../store/router/actions';
import {infoMethod} from '../../../infoMethod';
import {sleep} from '../../../functions';

import {
    Panel,
    Group,
    PanelHeader,
    FormItem,
    MiniInfoCell,
    Button,
    Div,
    Textarea,
    Select,
    CustomSelectOption
} from '@vkontakte/vkui'
import { Icon20HelpOutline } from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";

class HomePanelBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            section: null,
            infoMethods: [],
            infMethod: null,
            responseAPI: '',
        };

        this.onChange = this.onChange.bind(this);
    }

    async onChange(e) {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })

        if (name === 'section') {
            await sleep(1) //setState не обновляется моментально => костыль

            let arrInfoMethods = []
            // eslint-disable-next-line
            infoMethod[this.state.section].methods.map((el, index) => {
                arrInfoMethods.push({ value: index, label: el.title })
            })

            this.setState({ infoMethods: arrInfoMethods })
        }
    }

    async executeMethod() {
        try {
            let response = await bridge.send('VKWebAppCallAPIMethod', {method: infoMethod[this.state.infMethod].name, params: this.state.params})
            
            window.responseAPI = response
            this.props.openModal('viewResponse')
        } catch(err) {
            window.responseAPI = err
            this.props.openModal('viewResponse')
        }
    }

    render() {
        const {id} = this.props;
        const {section, infoMethods, infMethod, params} = this.state;

        return (
            <Panel id={id}>
                <PanelHeader>VK API</PanelHeader>
                <Group>
                    <FormItem top="Выберите раздел">
                        <Select
                            name='section'
                            placeholder="Не выбран"
                            options={infoMethod.map((el, index) => ({
                                label: el.title,
                                value: index,
                            }))}
                            renderOption={({ option, ...restProps }) => (
                                <CustomSelectOption
                                    {...restProps}
                                />
                            )}
                            onChange={this.onChange}
                            searchable={true}
                        />
                    </FormItem>

                    {section !== null &&
                        <FormItem top="Выберите метод">
                            <Select
                                name='infMethod'
                                placeholder="Не выбран"
                                options={infoMethods.map((el) => ({
                                    label: el.label,
                                    value: el.value,
                                }))}
                                renderOption={({ option, ...restProps }) => (
                                    <CustomSelectOption
                                        {...restProps}
                                    />
                                )}
                                onChange={this.onChange}
                                searchable={true}
                            />
                        </FormItem>
                    }

                    {infMethod !== null &&
                        <>
                            <MiniInfoCell
                                before={<Icon20HelpOutline/>}
                                textWrap='full'
                            >
                                {infoMethod[section].methods[infMethod].description}
                            </MiniInfoCell>

                            <Div>
                                <Textarea
                                    name='params'
                                    value={params}
                                    onChange={this.onChange}
                                    placeholder='Введите параметры...'
                                />
                            </Div>

                            <Div>
                                <Button 
                                    size="l" 
                                    stretched
                                    mode="secondary" 
                                    onClick={() => {this.executeMethod(); bridge.send("VKWebAppStorageSet", {"key": "first", "value": "test"})}}
                                >
                                    Выполнить
                                </Button>
                            </Div>
                        </>
                    }
                </Group>
            </Panel>
        );
    }
}


const mapDispatchToProps = {
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
