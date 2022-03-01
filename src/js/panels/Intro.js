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
            slideIndex: 0,
            isDesktop: false
        };

    }

    setUserSeenIntro() {
        let {panelsHistory} = this.props;

        bridge.send("VKWebAppStorageSet", {key: 'userSeenIntro', value: 'true'})
        delete panelsHistory.Intro
        store.dispatch(setStory('home', 'base'))
    };

    async componentDidMount() {
        let parsedUrl = new URL(window.location.href)
        if (parsedUrl.searchParams.get('vk_platform') === 'desktop_web') {
            this.setState({
                isDesktop: true
            })
        }
    }

    render() {
        const {id, isDesktop} = this.props;
        const {slideIndex} = this.state;

        return (
            <Panel id={id}>
                <FixedLayout vertical='top' className='fixOnbordingFixedLayout'>
                    <Group>
                        <Div>
                            <Gallery
                                slideIndex={isDesktop && slideIndex}
                                align="center"
                                style={{ height: '100%'}}
                                bullets={isDesktop ? 'dark' : 'light'}
                                isDraggable={!isDesktop}
                            >
                                <Placeholder
                                    icon={<Icon56GestureOutline />}
                                    header="Привет, это сервис VK API/VK Bridge Sandbox"
                                    action={isDesktop && <Button onClick={() => this.setState({slideIndex: (slideIndex + 1) % 4})} size="m">Дальше</Button>}
                                >
                                    Здесь ты можешь легко и быстро протестировать любой метод из <b>VK API</b> или <b>VK Bridge</b>.
                                </Placeholder>

                                <Placeholder
                                    icon={<Icon20HelpOutline width={56} height={56}/>}
                                    header="Что и как"
                                    action={isDesktop &&
                                        <>
                                            <Button className='btn_onboarding' onClick={() => this.setState({slideIndex: (slideIndex - 1) % 4})} size="m">Назад</Button>
                                            <Button className='btn_onboarding' onClick={() => this.setState({slideIndex: (slideIndex + 1) % 4})} size="m">Дальше</Button>
                                        </>
                                    }

                                >
                                    • Выбираешь нужный тебе метод <b>VK API</b> или <b>VK Bridge</b> на соответствующей панели. <br/><br/>
                                    • Вводишь необходимые параметры и получаешь ответ.
                                </Placeholder>

                                <Placeholder
                                    icon={<Icon20HelpOutline width={56} height={56}/>}
                                    header="А что если у меня нет токена?"
                                    action={isDesktop &&
                                        <>
                                            <Button className='btn_onboarding' onClick={() => this.setState({slideIndex: (slideIndex - 1) % 4})} size="m">Назад</Button>
                                            <Button className='btn_onboarding' onClick={() => this.setState({slideIndex: (slideIndex + 1) % 4})} size="m">Дальше</Button>
                                        </>
                                    }
                                >
                                    Ты можешь получить его у нас.<br/> 
                                    Во время вызова метода выбери нужные права доступа для токена и нажми "Получить токен"
                                </Placeholder>

                                <Placeholder
                                    icon={<Icon28CarOutline width={56} height={56}/>}
                                    header='Всё понятно?'
                                    action={isDesktop ?
                                        <>
                                            <Button className='btn_onboarding' onClick={() => this.setState({slideIndex: (slideIndex - 1) % 4})} size="l">Назад</Button>
                                            <Button className='btn_onboarding' size='l' onClick={() => this.setUserSeenIntro()}>Поехали!</Button>
                                        </> :
                                        <Button className='btn_onboarding' size='l' onClick={() => this.setUserSeenIntro()}>Поехали!</Button>

                                    }
                                />
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