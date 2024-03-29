import React from 'react';
import {connect} from 'react-redux';

import {openModal, setPage} from "../../store/router/actions";

import {sleep} from "../../../functions";

import {method} from '../../../infoMethodBridge';
import {infoMethod} from "../../../infoMethod";

import {
    Group,
    FormItem,
    Select,
    CustomSelectOption,
    Panel,
    PanelHeader,
    Textarea,
    MiniInfoCell,
    Div,
    Button,
    Placeholder,
    Input,
    Checkbox, Header, Card
} from "@vkontakte/vkui";
import {
    Icon20HelpOutline,
} from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";
import renderjson from "renderjson";

class HomePanelBridge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            section: null,
            infoMethods: null,
            infoMethodBridge: null,
            infMethod: null,
            responseBridge: '',
            use_method: false,
            disabledButtonMethod: false,
            textButtonMethod: true
        };

        this.onChange = this.onChange.bind(this);
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
            ]
        })
    }

    async onChange(e, index) {
        const { name, value } = e.currentTarget;
        value !== '' ? this.setState({ [name]: value }) : this.setState({ [name]: null })

        this.setState({
            use_method: false,
            textButtonMethod: true,
            disabledButtonMethod: false,
        })

        try {
            if (name === 'section') {
                await sleep(1) //setState не обновляется моментально => костыль

                let arrInfoMethods = []
                for (let index = method[this.state.section].currentCount; index <= method[this.state.section].totalCount; index++) {
                    arrInfoMethods.push(<option value={index}>{infoMethod[index].name}</option>)
                }
                this.setState({ infoMethods: arrInfoMethods })
            }
            else {
                let arr = this.state.param
                arr[index] = value
                this.setState({ param: arr })
            }
        }
        catch(err) {
            this.setState({section: null})
            this.setState({use_method: false})
        }

    }

    actionCheckbox(index) {

        this.setState({
            use_method: false,
            textButtonMethod: true,
            disabledButtonMethod: false,
        })

        let arr = this.state.param

        if (arr[index] === '' || arr[index] === false) {
            arr[index] = true
        } else {
            arr[index] = false
        }

        this.setState({ param: arr })
    }

    async executeMethod() {
        this.setState({use_method: true})
        renderjson.set_show_to_level(30)
        try {
            let params1 = {}
            // eslint-disable-next-line
            this.state.param.map((el, index) => {
                // eslint-disable-next-line
                if (method[this.state.section].params.length === index || el === '') return
                params1[`${method[this.state.section].params[index].param}`] = el
            })
            let response = await bridge.send(method[this.state.section].name, params1)

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
        const {section, param, use_method, disabledButtonMethod, textButtonMethod} = this.state;

        return (
            <Panel id={id}>
                <PanelHeader
                    >
                        VK Bridge
                    </PanelHeader>
                <Group>
                    <FormItem top="Выберите событие">
                        <Select
                            name='section'
                            placeholder="Не выбран"
                            options={method.map((el, index) => ({
                                label: el.name,
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
                        <>
                            <MiniInfoCell
                                before={<Icon20HelpOutline/>}
                                textWrap='full'
                            >
                                {method[section].description}
                            </MiniInfoCell>

                        
                            {method[section].params.length === 0 ?
                                <Placeholder className='fixPaddingPlaceholder'>
                                    У данного события отсутствуют параметры.
                                </Placeholder> :  // eslint-disable-next-line
                                method[section].params.map((el, index) => {
                                    if (el.type === 'string' || el.type === 'string[]') {
                                        return(
                                            <FormItem top={`${el.param} (${el.type})`} bottom={el.description}>
                                                <Textarea
                                                    name={el.param}
                                                    value={param[index]}
                                                    onChange={(e) => this.onChange(e, index)}
                                                    placeholder='Введите параметр...'
                                                />
                                            </FormItem>
                                        )
                                    } else if (el.type === 'object') {
                                        return(
                                            <FormItem top={`${el.param} (${el.type})`} bottom={el.description}>
                                                <Textarea
                                                    name={el.param}
                                                    value={param[index]}
                                                    onChange={(e) => this.onChange(e, index)}
                                                    placeholder='Введите параметр...'
                                                />
                                            </FormItem>
                                        )
                                    } else if (el.type === 'integer') {
                                        return(
                                            <FormItem top={`${el.param} (${el.type})`} bottom={el.description}>
                                                <Input
                                                    name={el.param}
                                                    value={param[index]}
                                                    type='number'
                                                    inputMode='decimal'
                                                    onChange={(e) => this.onChange(e, index)}
                                                    placeholder='Введите параметр...'
                                                />
                                            </FormItem>
                                        )
                                    } else if (el.type === 'boolean') {
                                            return(
                                                <FormItem top={`${el.param} (${el.type})`} bottom={el.description}>
                                                    <Checkbox
                                                        name={el.param}
                                                        value={param[index]}
                                                        onChange={(e) => this.actionCheckbox(index)}
                                                        placeholder='Введите параметр...'
                                                    >
                                                        true
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
                                    disabled={disabledButtonMethod}
                                    onClick={() => {this.executeMethod(); this.setState({textButtonMethod: false, disabledButtonMethod: true})}}
                                >
                                    {textButtonMethod ? 'Вызвать' : 'Вызвано!'}
                                </Button>
                            </Div>
                    </>}
                </Group>

                {use_method &&
                    <>
                        <Group header={<Header mode='secondary'>Результат</Header>}>
                            <Card>
                                <Div>
                                    <div className='scroll' id='response'/>
                                </Div>

                            </Card>
                        </Group>
                        <Div>
                            <Button
                                size="l"
                                stretched
                                mode="secondary"
                                onClick={() => bridge.send('VKWebAppCopyText', {text: JSON.stringify(window.responseAPI)})}
                            >
                                Скопировать
                            </Button>
                        </Div>
                    </>
                }
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBridge);
