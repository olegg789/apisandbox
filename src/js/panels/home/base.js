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
    MiniInfoCell,
    Button,
    Div,
    Textarea,
    PromoBanner,
    FixedLayout
} from '@vkontakte/vkui'
import {
    Icon16Done,
    Icon20HelpOutline,
    Icon28SettingsOutline
} from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";

class HomePanelBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            section: null,
            infoMethods: null,
            infMethod: null,
            responseAPI: '',
            promoBannerProps: this.promoBannerProps()
        };

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
    };

    async onChange(e) {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })

        if (name === 'section') {
            await sleep(1) //setState не обновляется моментально => костыль

            let arrInfoMethods = []
            for (let index = method[this.state.section].currentCount; index <= method[this.state.section].totalCount; index++) {
                arrInfoMethods.push(<option value={index}>{infoMethod[index].name}</option>)
            }
            this.setState({ infoMethods: arrInfoMethods })
        }
    }

    async getStorage(key) {
        try {
            let response = await bridge.send("VKWebAppStorageGet", {"keys": [key]})
            console.log(response.keys[0].value)
            return response.keys[0].value}
        catch (err) {
            console.log(err)
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

    promoBannerProps() {
        bridge.send('VKWebAppGetAds')
            .then((promoBannerProps) => {
            this.setState({promoBannerProps});
        })
    }

    render() {
        const {id, setPage} = this.props;
        const {section, infoMethods, infMethod, params} = this.state;

        return (
            <Panel id={id}>
                <PanelHeader left={<PanelHeaderButton onClick={() => setPage('home', 'placeholder')}><Icon28SettingsOutline fill="#2B8FFE"/></PanelHeaderButton>}>Выполнить</PanelHeader>
                <Group>
                    <FormItem top="Выберите раздел">
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
                        <FormItem top="Выберите метод">
                            <NativeSelect
                                name='infMethod'
                                onChange={this.onChange}
                                placeholder="Не выбран"
                            >
                                {infoMethods}
                            </NativeSelect>
                        </FormItem>
                    }

                    {infMethod !== null &&
                        <>
                            <MiniInfoCell
                                before={<Icon20HelpOutline/>}
                                textWrap='full'
                            >
                                {infoMethod[infMethod].description}
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
                    <FixedLayout vertical="bottom">
                        { this.state.promoBannerProps && <PromoBanner bannerData={ this.state.promoBannerProps } /> }
                    </FixedLayout>
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
