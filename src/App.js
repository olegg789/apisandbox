import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {goBack, closeModal, setStory} from "./js/store/router/actions";
import {getActivePanel} from "./js/services/_functions";

import {
  Epic, 
  View, 
  Root, 
  Tabbar, 
  ModalRoot, 
  TabbarItem, 
  ConfigProvider,
  AdaptivityProvider, 
  AppRoot,
  platform,
  VKCOM,
  Cell,
  SplitCol,
  PanelHeader,
  SplitLayout,
  Panel,
  Group
} from "@vkontakte/vkui";

import { 
  Icon28HomeOutline, 
  Icon28Profile,
  Icon28HistoryForwardOutline,
  Icon28LightbulbOutline,
  Icon28ArrowUpCircleOutline
} from '@vkontakte/icons';

import HomePanelBase from './js/panels/home/base';
import HomePanelPlaceholder from './js/panels/home/placeholder';

import MorePanelBase from './js/panels/more/base';

import HomeBotsListModal from './js/components/modals/HomeBotsListModal';
import HomeBotInfoModal from './js/components/modals/HomeBotInfoModal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasHeader: true,
      isDesktop: false,
      Platform: platform()
    }

    this.lastAndroidBackAction = 0;
  }

  async componentDidMount() {
    const {goBack} = this.props;

    let parsedUrl = new URL(window.location.href)
    if (parsedUrl.searchParams.get('vk_platform') === 'desktop_web') {
      this.setState({ 
        isDesktop: true,
        hasHeader: false,
        Platform: VKCOM
      })
    }

    window.onpopstate = () => {
      let timeNow = +new Date();

      if (timeNow - this.lastAndroidBackAction > 500) {
        this.lastAndroidBackAction = timeNow;

        goBack();
      } else {
        window.history.pushState(null, null);
      }
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {activeView, activeStory, activePanel, scrollPosition} = this.props;

    if (
      prevProps.activeView !== activeView ||
      prevProps.activePanel !== activePanel ||
      prevProps.activeStory !== activeStory
    ) {
      let pageScrollPosition = scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

      window.scroll(0, pageScrollPosition);
    }
  }

  render() {
    const {goBack, setStory, closeModal, popouts, activeView, activeStory, activeModals, panelsHistory} = this.props;
    const { isDesktop, hasHeader, Platform } = this.state

    let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
    let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];
    let activeModal = (activeModals[activeView] === undefined) ? null : activeModals[activeView];

    const homeModals = (
      <ModalRoot activeModal={activeModal}>
        <HomeBotsListModal
          id="MODAL_PAGE_BOTS_LIST"
          onClose={() => closeModal()}
        />
        <HomeBotInfoModal
          id="MODAL_PAGE_BOT_INFO"
          onClose={() => closeModal()}
        />
      </ModalRoot>
    );

    return (     
      <ConfigProvider platform={Platform} isWebView={true}>
        <AdaptivityProvider>
          <AppRoot>
            <SplitLayout
              header={hasHeader && <PanelHeader separator={false} />}
              style={{ justifyContent: "center" }}
            >
              <SplitCol
                animate={!isDesktop}
                spaced={isDesktop}
                width={isDesktop ? '560px' : '100%'}
                maxWidth={isDesktop ? '560px' : '100%'}
              >   
                <Epic activeStory={activeStory} tabbar={ !isDesktop && 
                <Tabbar>
                  <TabbarItem
                    onClick={() => setStory('home', 'base')}
                    selected={activeStory === 'home'}
                    text='Выполнить'
                  ><Icon28ArrowUpCircleOutline/></TabbarItem>
                  <TabbarItem
                    onClick={() => setStory('more', 'callmodal')}
                    selected={activeStory === 'more'}
                    text='История'
                  ><Icon28HistoryForwardOutline/></TabbarItem>
                </Tabbar>}>
                  <Root id="home" activeView={activeView} popout={popout}>
                    <View
                      id="home"
                      modal={homeModals}
                      activePanel={getActivePanel("home")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <HomePanelBase id="base" withoutEpic={false}/>
                      <HomePanelPlaceholder id="placeholder"/>
                    </View>
                  </Root>
                  <Root id="more" activeView={activeView} popout={popout}>
                    <View
                      id="more"
                      modal={homeModals}
                      activePanel={getActivePanel("more")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <MorePanelBase id="callmodal"/>
                    </View>
                  </Root>
                </Epic>
              </SplitCol>

              {isDesktop && (
                <SplitCol fixed width='280px' maxWidth='280px'>
                  <Panel id='menuDesktop'>
                    {hasHeader && <PanelHeader/>}
                    <Group>
                      <Cell
                        onClick={() => setStory('home', 'base')}
                        disabled={activeStory === 'home'}
                        before={<Icon28ArrowUpCircleOutline/>}
                        style={ activeStory === 'home' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Выполнить
                      </Cell>
                      <Cell
                        onClick={() => setStory('more', 'callmodal')}
                        disabled={activeStory === 'more'}
                        before={<Icon28HistoryForwardOutline/>}
                        style={ activeStory === 'more' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        История
                      </Cell>
                    </Group>
                  </Panel>
                </SplitCol>
              )}
              
            </SplitLayout>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeView: state.router.activeView,
    activeStory: state.router.activeStory,
    panelsHistory: state.router.panelsHistory,
    activeModals: state.router.activeModals,
    popouts: state.router.popouts,
    scrollPosition: state.router.scrollPosition,
  };
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({setStory, goBack, closeModal}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);