import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";
import {method, } from '../../../infoMethodBridge';

import {
    Group,
    FormItem,
    NativeSelect,
    Panel,
    PanelHeader,
    PanelHeaderButton, Textarea, MiniInfoCell
} from "@vkontakte/vkui";
import {
    Icon20HelpOutline,
    Icon28SettingsOutline

} from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";
import {sleep} from "../../../functions";
import {infoMethod} from "../../../infoMethod";


class HomePanelProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            section: null,
            infoMethods: null,
            infoMethodBridge: null,
            infMethod: null
        };

        this.onChange = this.onChange.bind(this);
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

    async copy() {
        await bridge.send("VKWebAppCopyText", {"text": 'АЛЕ ГАРАЖ'})

        this.setState({

        })
    }

    render() {
        const {id} = this.props;
        const {section, infoMethodBridge, infoMethods, infMethod} = this.state;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderButton onClick={() => setPage('more', 'placeholder')}><Icon28SettingsOutline fill="#2B8FFE"/></PanelHeaderButton>}
                    >
                        VK BRIDGE
                    </PanelHeader>
                <Group>
                    <FormItem top="Выберите метод">
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
                        <MiniInfoCell
                            before={<Icon20HelpOutline/>}
                            textWrap='full'
                        >
                            {}
                        </MiniInfoCell>}
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    openPopout,
    closePopout
};

export default connect(null, mapDispatchToProps)(HomePanelProfile);
