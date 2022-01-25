import React from "react";
import {connect} from 'react-redux';

import {setStory} from "../store/router/actions";
import {store} from "../../index";

import {
    Panel,
    Div,
    Button,
    Gallery,
    FixedLayout,
    Placeholder,
    Group,
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {Icon20HelpOutline, Icon28CarOutline, Icon56GestureOutline} from "@vkontakte/icons";

class Intro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0
        };

    }

    setUserSeenIntro() {
        let {panelsHistory} = this.props;

        bridge.send("VKWebAppStorageSet", {key: 'userSeenIntro', value: 'true'})
        delete panelsHistory.Intro
        store.dispatch(setStory('home', 'base'))
    };

    render() {
        const {id} = this.props;
        const {slideIndex} = this.state;

        return (
            <Panel id={id}>
                <FixedLayout vertical='top'>
                    <Group>
                        <Div>
                            <Gallery
                                align="center"
                                style={{ height: '100%'}}
                                slideIndex={slideIndex}
                            >
                                <div>
                                    <Placeholder
                                        icon={<Icon56GestureOutline />}
                                        header="Привет, это сервис VK API/VK Bridge Sandbox"
                                        action={<Button onClick={() => this.setState({slideIndex: this.state.slideIndex + 1})} size="m">Дальше</Button>}
                                    >
                                        Здесь ты можешь легко и быстро протестировать любой метод из API или Bridge.
                                    </Placeholder>
                                </div>
                                <div>
                                    <Placeholder
                                        icon={<Icon20HelpOutline width={56} height={56}/>}
                                        header="Что и как"
                                        action={
                                            <>
                                                <Button className='btn_onboarding' onClick={() => this.setState({slideIndex: this.state.slideIndex - 1})} size="m">Назад</Button>
                                                <Button className='btn_onboarding' onClick={() => this.setState({slideIndex: this.state.slideIndex + 1})} size="m">Дальше</Button>
                                            </>
                                        }

                                    >
                                        Все просто:<br/>
                                        1) Выбираешь нужный тебе метод API или Bridge на соответствующей панели.<br/>
                                        2) Вводишь необходимые параметры и получаешь ответ.
                                    </Placeholder>
                                </div>
                                <div>
                                    <Placeholder
                                        icon={<Icon20HelpOutline width={56} height={56}/>}
                                        header="А что если у меня нет токена?"
                                        action={
                                            <>
                                                <Button className='btn_onboarding' onClick={() => this.setState({slideIndex: this.state.slideIndex - 1})} size="m">Назад</Button>
                                                <Button className='btn_onboarding' onClick={() => this.setState({slideIndex: this.state.slideIndex + 1})} size="m">Дальше</Button>
                                            </>
                                        }
                                    >
                                        Ты можешь получить его у нас. Перейди на панель "Настройки" и нажми кнопку "Получить токен".<br/>
                                        К сожалению, с таким токеном получится вызвать не все методы API(

                                    </Placeholder>
                                </div>

                                <div>
                                    <Placeholder
                                        icon={<Icon28CarOutline width={56} height={56}/>}
                                        header='Всё понятно?'
                                        action={
                                            <>
                                                <Button className='btn_onboarding' onClick={() => this.setState({slideIndex: this.state.slideIndex - 1})} size="l">Назад</Button>
                                                <Button className='btn_onboarding' size='l' onClick={() => this.setUserSeenIntro()}>Поехали!</Button>
                                            </>
                                        }
                                    >

                                    </Placeholder>
                                </div>
                            </Gallery>
                        </Div>
                    </Group>
                </FixedLayout>
            </Panel>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      panelsHistory: state.router.panelsHistory
    };
};

const mapDispatchToProps = { setStory };
export default connect(mapStateToProps, mapDispatchToProps)(Intro);