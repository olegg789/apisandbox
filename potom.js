
<Group header={<Header mode="secondary">Тема</Header>}>
    <Div>
        <Button  size="l" stretched={true} mode="secondary" onClick={() =>  {this.props.openModal("MODAL_PAGE_BOTS_LIST"); bridge.send("VKWebAppTapticImpactOccurred", {"style" : "heavy"})}}>
            Выбор темы
        </Button>
    </Div>
</Group>
