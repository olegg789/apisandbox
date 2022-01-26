import {
    Avatar,
    Button,
    Card,
    Checkbox,
    Div,
    Gallery,
    Group,
    Header,
    Placeholder,
    SimpleCell,
    Textarea
} from "@vkontakte/vkui";
import React from "react";
import {Icon20HelpOutline, Icon28CarOutline, Icon56GestureOutline} from "@vkontakte/icons";

<Group header={<Header mode="secondary">Тема</Header>}>
    <Div>
        <Button  size="l" stretched={true} mode="secondary" onClick={() =>  {this.props.openModal("MODAL_PAGE_BOTS_LIST"); bridge.send("VKWebAppTapticImpactOccurred", {"style" : "heavy"})}}>
            Выбор темы
        </Button>
    </Div>
</Group>


<Card mode="outline">
    <Group
        header={<Header
            mode="secondary"
        >
            Метод
        </Header>}>
        <Div>
            TEST METHOD
        </Div>
        <Header
            mode="secondary"
        >
            Ответ
        </Header>
        <Div>

            <Textarea
                value="TEST RESPONSE"
            />
        </Div>
        <Div>
            <Button
                stretched
                size="s"
            >
                Скопировать
            </Button>
        </Div>
    </Group>
</Card>





<Group header={<Header mode="secondary">Разработчики</Header>}>
    <SimpleCell
        href="https://vk.com/kuz_s"
        description="где я"
        before={<Avatar src="https://sun7-8.userapi.com/s/v1/ig2/PmOD0qC9KzWgSJACYQERm9qPaJBUn3ZEmFDsP9lgf9zluEC48Mrw3A7e6Xpl9IBJAmCulCGoHXb13wc0Tg1F41dY.jpg?size=200x200&quality=96&crop=0,0,734,734&ava=1"/>}>
        Александр Кузнецов
    </SimpleCell>

    <SimpleCell
        href="https://vk.com/olejii"
        description="кто такой Александр Кузнецов"
        before={<Avatar src="https://sun7-9.userapi.com/s/v1/ig2/qeJzocv5LPJYtYR4Sw4mPOxiAlmDh0iiJC3nPV3PMi9EzDQCNxwu-V0Cy0l8R8rm4LfJifpshjNxJbmTPSFpl2JZ.jpg?size=200x200&quality=95&crop=192,168,325,325&ava=1"/>}
    >
        Олег Чикелёв
    </SimpleCell>
</Group>

<Checkbox name="friends" onChange={(e) => this.setState({param: e.currentTarget.name})}>friends</Checkbox>
<Checkbox name="photos" onChange={(e) => this.setState({param: e.currentTarget.name})}>photos</Checkbox>
<Checkbox name='video' onChange={(e) => this.setState({param: e.currentTarget.name})}>video</Checkbox>
<Checkbox name='stories' onChange={(e) => this.setState({param: e.currentTarget.name})}>stories</Checkbox>
<Checkbox name='pages' onChange={(e) => this.setState({param: e.currentTarget.name})}>pages</Checkbox>
<Checkbox name='status' onChange={(e) => this.setState({param: e.currentTarget.name})}>status</Checkbox>
<Checkbox name='notes' onChange={(e) => this.setState({param: e.currentTarget.name})}>notes</Checkbox>
<Checkbox name='wall' onChange={(e) => this.setState({param: e.currentTarget.name})}>wall</Checkbox>
<Checkbox name='docs' onChange={(e) => this.setState({param: e.currentTarget.name})}>docs</Checkbox>
<Checkbox name='groups' onChange={(e) => this.setState({param: e.currentTarget.name})}>groups</Checkbox>
<Checkbox name='stats' onChange={(e) => this.setState({param: e.currentTarget.name})}>stats</Checkbox>
<Checkbox name="market" onChange={(e) => this.setState({param: e.currentTarget.name})}>market</Checkbox>



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