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
    CustomSelectOption,
    Placeholder,
    Input,
    Checkbox,
    Card, Header
} from '@vkontakte/vkui'
import { Icon20HelpOutline } from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";
import renderjson from "renderjson";

class HomePanelBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            section: null,
            infoMethods: [],
            infMethod: null,
            responseAPI: '',
            use_method: false,
            textButton: true,
            disabledButton: false,
            disabledButtonMethod: false,
            textButtonMethod: true
        };

        this.onChange = this.onChange.bind(this);
    }

    async onChange(e) {
        const { name, value } = e.currentTarget;
        value !== '' ? this.setState({ [name]: value }) : this.setState({ [name]: null })
        this.setState({
            use_method: false,
            textButtonMethod: true,
            disabledButtonMethod: false,
            disabledButton: false,
            textButton: true
        })

        try {
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
        catch(err) {
            this.setState({section: null})
            this.setState({infMethod: null})
            this.setState({use_method: false})
            console.log(err)
        }
    }

    async copy() {
        await bridge.send('VKWebAppCopyText', {text: JSON.stringify(window.responseAPI)})

        this.setState({
            textButton: false,
            disabledButton: true
        })
    }

    async executeMethod() {
        this.setState({use_method: true})
        renderjson.set_show_to_level(30)
        try {
            let response = await bridge.send('VKWebAppCallAPIMethod', {method: infoMethod[this.state.section].methods[this.state.infMethod].title, params: this.state.params})

            window.responseAPI = response
            //this.props.openModal('viewResponse')
            document.getElementById('response').appendChild(renderjson(response))
        } catch(err) {
            window.responseAPI = err
            //this.props.openModal('viewResponse')
            document.getElementById('response').appendChild(renderjson(err))
        }
    }

    render() {
        const {id} = this.props;
        const {section, infoMethods, infMethod, use_method, disabledButton, textButton, disabledButtonMethod, textButtonMethod} = this.state;

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

                            {infoMethod[section].methods[infMethod].params.length === 0 ?
                                <Placeholder className='fixPaddingPlaceholder'>
                                    У данного события отсутствуют параметры.
                                </Placeholder> :  // eslint-disable-next-line
                                infoMethod[section].methods[infMethod].params.map((el, index) => {
                                    if (el.type === 'string' || el.type === 'string[]') {
                                        return(
                                            <FormItem top={`${el.name} (${el.type})`} bottom={`${el.description} Обязательный: ${el.is_required}`}>
                                                <Textarea
                                                    name={el.name}
                                                    onChange={(e) => this.onChange(e, index)}
                                                />
                                            </FormItem>
                                        )
                                    } else if (el.type === 'text') {
                                        return(
                                            <FormItem top={`${el.name} (${el.type})`} bottom={`${el.description} Обязательный: ${el.is_required}`}>
                                                <Textarea
                                                    name={el.name}
                                                    onChange={(e) => this.onChange(e, index)}
                                                />
                                            </FormItem>
                                        )
                                    } else if (el.type === 'positive') {
                                        return(
                                            <FormItem top={`${el.name} (${el.type})`} bottom={`${el.description} Обязательный: ${el.is_required}`}>
                                                <Textarea
                                                    name={el.name}
                                                    onChange={(e) => this.onChange(e, index)}
                                                />
                                            </FormItem>
                                        )
                                    } else if (el.type === 'integer') {
                                        return(
                                            <FormItem top={`${el.name} (${el.type})`} bottom={`${el.description} Обязательный: ${el.is_required}`}>
                                                <Input
                                                    name={el.name}
                                                    type='number'
                                                    inputMode='decimal'
                                                    onChange={(e) => this.onChange(e, index)}
                                                />
                                            </FormItem>
                                        )
                                    } else if (el.type === 'checkbox') {
                                        return(
                                            <FormItem top={`${el.name} (${el.type})`} bottom={`${el.description} Обязательный: ${el.is_required}`}>
                                                <Checkbox
                                                    name={el.name}
                                                    onChange={(e) => this.actionCheckbox(index)}
                                                >
                                                    1
                                                </Checkbox>
                                            </FormItem>
                                        )
                                    }
                                })
                            }

                            <Div>
                                <Button
                                    size="l"
                                    stretched
                                    mode="secondary"
                                    onClick={() => {this.executeMethod(); this.setState({textButtonMethod: false, disabledButtonMethod: true})}}
                                    disabled={disabledButtonMethod}
                                >
                                    {textButtonMethod ? "Выполнить" : "Выполнено!"}
                                </Button>
                            </Div>
                        </>
                    }
                    {use_method &&
                        <>
                            <Group header={<Header mode='secondary'>Результат</Header>}>
                                <Card>
                                    <Div>
                                        <div className='scroll' id='response'></div>
                                    </Div>

                                </Card>
                            </Group>
                            <Div>
                                <Button
                                    size="l"
                                    stretched
                                    mode="secondary"
                                    disabled={disabledButton}
                                    onClick={() => this.copy()}
                                >
                                    {textButton ? 'Скопировать' : 'Успешно!'}
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
