import React from 'react';
import {connect} from 'react-redux';

import {closePopout, openPopout} from '../../store/router/actions';
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
    Card,
    Header,
    Chip,
    Snackbar, 
    Avatar,
    ScreenSpinner
} from '@vkontakte/vkui'
import { Icon20HelpOutline, Icon16Cancel } from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";
import renderjson from "renderjson";
import { ChipsSelect } from "@vkontakte/vkui/unstable";

const groups = [
    {
        value: "0",
        label: "friends",
    },
    {
        value: "1",
        label: "photos",
    },
    {
        value: "2",
        label: "video",
    },
    {
        value: "3",
        label: "stories",
    },
    {
        value: "4",
        label: "pages",
    },
    {
        value: "5",
        label: "status",
    },
    {
        value: "6",
        label: "notes",
    },
    {
        value: "7",
        label: "wall",
    },
    {
        value: "8",
        label: "docs",
    },
    {
        value: "9",
        label: "groups",
    },
    {
        value: "10",
        label: "stats",
    },
    {
        value: "11",
        label: "market",
    }
];

class HomePanelBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            section: null,
            infoMethods: [],
            infMethod: null,
            responseAPI: '',
            use_method: false,
            disabledButtonMethod: false,
            textButtonMethod: true,
            AccessToken: null,
            selectedGroups: [],
            snackbar: null
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
        const { name, value, } = e.currentTarget;
        value !== '' ? 
          (name === 'section' ? 
            this.setState({ [name]: value, infMethod: null }) : 
            this.setState({ [name]: value })
          ) : 
          (name === 'section' ? 
            this.setState({ [name]: null, infMethod: null }) : 
            this.setState({ [name]: null })
        )
          
        this.setState({
            use_method: false,
            textButtonMethod: true,
            disabledButtonMethod: false,
        })

        try {
            if (name === 'section') {
                await sleep(1) //setState не обновляется моментально => костыль

                let arrInfoMethods = []
                // eslint-disable-next-line
                infoMethod[this.state.section].methods.map((el, index) => {
                    arrInfoMethods.push({ value: index, label: el.title })
                })

                this.setState({
                    infoMethods: arrInfoMethods,
                })
            }
            else {
                let arr = this.state.param
                arr[index] = value
                this.setState({ param: arr })
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

    }

    async getToken() {
        this.props.openPopout(<ScreenSpinner/>)

        try {
            try {
                let scopes = []
                // eslint-disable-next-line
                this.state.selectedGroups.map((el) => {
                    scopes.push(el.label)
                })

                let response = await bridge.send(
                    "VKWebAppGetAuthToken",
                    {
                        app_id: 7976662,
                        scope: scopes.join()
                    }
                )

                if (response.scope !== scopes.join()) {
                    // eslint-disable-next-line
                    throw 'lets go to catch!'
                }

                this.setState({ 
                    disabledButtonMethod: false,
                    use_method: false,
                    textButtonMethod: true,
                    accessToken: response.access_token
                })
            } catch(err) {
                console.log(err)
                this.setState({ snackbar :
                    <Snackbar
                        layout='vertical'
                        onClose={() => this.setState({ snackbar: null })}
                        action='Попробовать снова'
                        onActionClick={() => this.getToken()}
                        before={
                            <Avatar size={24} style={{ background: 'var(--destructive)' }}> 
                                <Icon16Cancel fill='#fff' width={14} height={14}/> 
                            </Avatar>
                        }
                    >
                        Ошибочка... Не удалось получить токен
                    </Snackbar>,
                    accessToken: ''
                })
            }
        } catch(err) {
            console.log(err)
        }

        this.props.closePopout()
    }

    actionCheckbox(index) {

        this.setState({
            use_method: false,
            textButtonMethod: true,
            disabledButtonMethod: false,
        })

        let arr = this.state.param
        if (arr[index] === '' || arr[index] === 0) {
            arr[index] = 1
        } else {
            arr[index] = 0
        }

        this.setState({ param: arr })
    }

    async executeMethod() {
        this.props.openPopout(<ScreenSpinner/>)

        this.setState({use_method: true})
        renderjson.set_show_to_level(30)
        try {

            let params1 = {}
            // eslint-disable-next-line
            this.state.param.map((el, index) => {

                // eslint-disable-next-line
                if (infoMethod[this.state.section].methods[this.state.infMethod].params.length === index || el === '') return
                params1[`${infoMethod[this.state.section].methods[this.state.infMethod].params[index].name}`] = el
            })

            params1['v'] = 5.131
            params1['access_token'] = this.state.accessToken

            let response = await bridge.send(
                'VKWebAppCallAPIMethod',
                {
                    method: infoMethod[this.state.section].methods[this.state.infMethod].title,
                    params: params1
                }
                )

            window.responseAPI = response
            //this.props.openModal('viewResponse')
            document.getElementById('response').appendChild(renderjson(response))
        } catch(err) {
            window.responseAPI = err
            //this.props.openModal('viewResponse')
            document.getElementById('response').appendChild(renderjson(err))
        }

        this.props.closePopout()
    }

    render() {
        const {id} = this.props;
        const {
            selectedGroups, 
            section, param, 
            infoMethods, 
            infMethod, 
            use_method,
            disabledButtonMethod, 
            textButtonMethod, 
            accessToken,
            snackbar
        } = this.state;

        const groupsChipsProps = {
            value: selectedGroups,
            onChange: (e) => {this.setState({selectedGroups: e})},
            options: groups,
            placeholder: "Не выбраны",
            emptyText: "Совсем ничего не найдено",
        };

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
                                            <FormItem top={`${el.name} (${el.type})`} bottom={<>{el.description} <br/> Параметр {el.is_required ? 'обязательный.' : 'необязательный'}</>}>
                                                <Textarea
                                                    name={el.name}
                                                    value={param[index]}
                                                    onChange={(e) => {this.onChange(e, index)}}
                                                    placeholder='Введите параметр...'
                                                    maxLength={100}
                                                />
                                            </FormItem>
                                        )
                                    } else if (el.type === 'text') {
                                        return(
                                            <FormItem top={`${el.name} (${el.type})`} bottom={<>{el.description} <br/> Параметр {el.is_required ? 'обязательный.' : 'необязательный'}</>}>
                                                <Textarea
                                                    name={el.name}
                                                    maxLength={100}
                                                    onChange={(e) => this.onChange(e, index)}
                                                    placeholder='Введите параметр...'
                                                />
                                            </FormItem>
                                        )
                                    } else if (el.type === 'positive') {
                                        return(
                                            <FormItem top={`${el.name} (${el.type})`} bottom={<>{el.description} <br/> Параметр {el.is_required ? 'обязательный.' : 'необязательный'}</>}>
                                                <Textarea
                                                    name={el.name}
                                                    value={param[index]}
                                                    maxLength={100}
                                                    onChange={(e) => this.onChange(e, index)}
                                                    placeholder='Введите параметр...'
                                                />
                                            </FormItem>
                                        )
                                    } else if (el.type === 'integer') {
                                        return(
                                            <FormItem top={`${el.name} (${el.type})`} bottom={<>{el.description} <br/> Параметр {el.is_required ? 'обязательный.' : 'необязательный'}</>}>
                                                <Input
                                                    name={el.name}
                                                    value={param[index]}
                                                    type='number'
                                                    maxLength={100}
                                                    inputMode='decimal'
                                                    onChange={(e) => this.onChange(e, index)}
                                                    placeholder='Введите параметр...'
                                                />
                                            </FormItem>
                                        )
                                    } else if (el.type === 'checkbox') {
                                        return(
                                            <FormItem top={`${el.name} (${el.type})`} bottom={<>{el.description} <br/> Параметр {el.is_required ? 'обязательный.' : 'необязательный'}</>}>
                                                <Checkbox
                                                    name={el.name}
                                                    value={param[index]}
                                                    onChange={(e) => this.actionCheckbox(index)}
                                                    placeholder='Введите параметр...'
                                                >
                                                    1
                                                </Checkbox>
                                            </FormItem>
                                        )
                                    }
                                }
                                )
                            }

                            <Header mode='primary'>Получить токен</Header>
                            <FormItem
                                top='Выберите права для токена'
                                bottom={
                                    infoMethod[this.state.section].methods[this.state.infMethod].access_rights.length !== 0 ?
                                        <>
                                            Нужные права для вызова метода: {infoMethod[this.state.section].methods[this.state.infMethod].access_rights}.
                                        </>:
                                        <>
                                            Для этого метода не нужны никакие права доступа.
                                        </>
                            }>
                                <ChipsSelect
                                    name='accessRights'
                                    {...groupsChipsProps}
                                    showSelected
                                    closeAfterSelect={false}
                                    renderChip={({ value, label, option: { icon }, ...rest }) => (
                                        <Chip
                                            value={value}
                                            {...rest}
                                        >
                                            {label}
                                        </Chip>
                                    )}
                                />
                            </FormItem>
                            <FormItem>
                                <Button
                                    stretched
                                    size='l'
                                    mode='secondary'
                                    onClick={() =>
                                        this.getToken()
                                    }
                                >
                                    Получить токен
                                </Button>
                            </FormItem>

                            <FormItem top='access_token (string)'>
                                <Input
                                    type='text'
                                    name='accessToken'
                                    placeholder='Введите токен...'
                                    value={accessToken}
                                    maxLength={100}
                                    onChange={(e) => this.onChange(e)}
                                />
                            </FormItem>

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
                </Group>

                {use_method &&
                    <Group header={<Header mode='secondary'>Результат</Header>}>
                        <Card>
                            <Div>
                                <div className='scroll' id='response'/>
                            </Div>
                        </Card>

                        <Div>
                            <Button
                                size="l"
                                stretched
                                mode="secondary"
                                onClick={() => this.copy()}
                            >
                                Скопировать
                            </Button>
                        </Div>
                    </Group>
                }

                {snackbar}
            </Panel>
        );
    }
}


const mapDispatchToProps = {
    openPopout,
    closePopout,
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
