import {Avatar, Button, Card, Div, Group, Header, SimpleCell, Textarea} from "@vkontakte/vkui";
import React from "react";

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