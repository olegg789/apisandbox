import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from "../../store/router/actions";

import {sleep} from "../../../functions";

import {method} from '../../../infoMethodBridge';
import {infoMethod} from "../../../infoMethod";

import {
    Group,
    FormItem,
    NativeSelect,
    Panel,
    PanelHeader,
    Textarea,
    MiniInfoCell,
    Div, 
    Button,
    Placeholder,
    Input,
    Checkbox
} from "@vkontakte/vkui";
import {
    Icon20HelpOutline,
} from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";

class HomePanelBridge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            section: null,
            infoMethods: null,
            infoMethodBridge: null,
            infMethod: null,
            responseBridge: ''
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

    async getStorage(key) {
        try {
            let response = await bridge.send("VKWebAppStorageGet", {"keys": [key]});
            console.log(response.keys[0].value);
            return response.keys[0].value}
        catch (err) {
            console.log(err)
        }
    };

    async onChange(e, index) {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })

        if (name === 'section') {
            await sleep(1) //setState не обновляется моментально => костыль

            let arrInfoMethods = []
            for (let index = method[this.state.section].currentCount; index <= method[this.state.section].totalCount; index++) {
                arrInfoMethods.push(<option value={index}>{infoMethod[index].name}</option>)
            }
            this.setState({ infoMethods: arrInfoMethods })
        } else {
            let arr = this.state.param
            arr[index] = value
            this.setState({ param: arr })
        }
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

    async executeMethod() {
        try {
            let params1 = {}
            this.state.param.map((el, index) => {
                if (method[this.state.section].params.length === index || el === '') return 
                params1[`${method[this.state.section].params[index].param}`] = el
            })

            let response = await bridge.send(method[this.state.section].name, params1)

            window.responseAPI = response
            this.props.openModal('viewResponse')
        } catch(err) {
            window.responseAPI = err
            this.props.openModal('viewResponse')
        }
    }

    render() {
        const {id} = this.props;
        const {section, params, param} = this.state;

        return (
            <Panel id={id}>
                <PanelHeader
                    >
                        VK BRIDGE
                    </PanelHeader>
                <Group>
                    <FormItem top="Выберите событие">
                        <NativeSelect
                            name='section'
                            onChange={this.onChange}
                            placeholder="Не выбран"
                        >
                            {method.map((el, index) => {
                                return <option value={index}>{el.name}</option>
                            })}
                        </NativeSelect>
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
                                </Placeholder> :
                                method[section].params.map((el, index) => {
                                    if (el.type === 'string' || el.type === 'string[]') {
                                        return(
                                            <FormItem top={`${el.param} (${el.type})`} bottom={el.description}>
                                                <Textarea
                                                    name={el.param}
                                                    value={param[index]}
                                                    onChange={(e) => this.onChange(e, index)}
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
                                    onClick={() => {this.executeMethod()}}
                                >
                                    Вызвать
                                </Button>
                            </Div>
                    </>}
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

export default connect(null, mapDispatchToProps)(HomePanelBridge);
