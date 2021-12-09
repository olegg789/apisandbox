import {Button, Card, Div, Group, Header, Textarea} from "@vkontakte/vkui";
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