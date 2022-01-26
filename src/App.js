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
  Icon28ArrowUpCircleOutline,
  Icon28BookOutline,
  Icon28SettingsOutline
} from '@vkontakte/icons';

import HomePanelBase from './js/panels/home/base';
import HomePanelPlaceholder from './js/panels/home/placeholder';

import HomePanelBridge from './js/panels/bridge/base';

import HomePanelSettings from "./js/panels/settings/base";

import HomeBotsListModal from './js/components/modals/HomeBotsListModal';
import ViewResponseAPIModal from './js/components/modals/viewResponseAPIModal';

import ViewResponseGetToken from "./js/components/modals/viewResponseGetToken";

import Intro from "./js/panels/Intro";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasHeader: true,
      isDesktop: false,
      Platform: platform(),
    };

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

  changeScheme(scheme) {
    this.setState({ scheme: scheme })
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
          changeScheme={(scheme) => this.changeScheme(scheme)}
        />
        <ViewResponseAPIModal
          id="viewResponse"
          onClose={() => closeModal()}
        />
        <ViewResponseGetToken
          id="viewResponseToken"
          onClose={() => closeModal()}
        />
      </ModalRoot>
    );

    return (     
      <ConfigProvider platform={Platform} isWebView={true} scheme={this.state.scheme}>
        <AdaptivityProvider>
          <AppRoot>
            <SplitLayout
              header={hasHeader && <PanelHeader separator={false} />}
              style={{ justifyContent: "center" }}
            >
              <SplitCol
                animate={!isDesktop}
                spaced={isDesktop}
                width={isDesktop ? (activeStory !== 'Intro' ? '560px' : '1000px') : '100%'}
                maxWidth={isDesktop ? (activeStory !== 'Intro' ? '560px' : '1000px') : '100%'}
              >   
                <Epic activeStory={activeStory} tabbar={ !isDesktop && activeStory !== 'Intro' && 
                  <Tabbar>
                    <TabbarItem
                      onClick={() => setStory('home', 'base')}
                      selected={activeStory === 'home'}
                      text='VK API'
                    ><Icon28ArrowUpCircleOutline/></TabbarItem>
                    <TabbarItem
                      onClick={() => setStory('bridge', 'base')}
                      selected={activeStory === 'bridge'}
                      text='VK Bridge'
                    ><Icon28BookOutline/></TabbarItem>
                    <TabbarItem
                        onClick={() => setStory('settings', 'base')}
                        selected={activeStory === 'settings'}
                        text='Настройки'
                    ><Icon28SettingsOutline/></TabbarItem>
                  </Tabbar>
                }>
                  <Root id="home" activeView={activeView} popout={popout}>
                    <View
                      id="home"
                      modal={homeModals}
                      activePanel={getActivePanel("home")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <HomePanelBase id="base"/>
                      <HomePanelPlaceholder id="placeholder"/>
                    </View>
                  </Root>
                  <Root id="bridge" activeView={activeView} popout={popout}>
                    <View
                      id="bridge"
                      modal={homeModals}
                      activePanel={getActivePanel("bridge")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <HomePanelBridge id="base"/>
                      <HomePanelPlaceholder id="placeholder"/>
                    </View>
                  </Root>
                  <Root id="settings" activeView={activeView} popout={popout}>
                    <View
                      id="settings"
                      modal={homeModals}
                      activePanel={getActivePanel("settings")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <HomePanelSettings id="base"/>
                    </View>
                  </Root>
                  <Root id="Intro" activeView={activeView} popout={popout}>
                    <View
                      id="Intro"
                      modal={homeModals}
                      activePanel={getActivePanel("Intro")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <Intro id="base" isDesktop={isDesktop}/>
                    </View>
                  </Root>
                </Epic>
              </SplitCol>

              {isDesktop && activeStory !== 'Intro' && (
                <SplitCol fixed width='280px' maxWidth='280px'>
                  <Panel id='menuDesktop'>
                    {hasHeader && <PanelHeader/>}
                    <Group>
                      <Cell
                        onClick={() => setStory('home', 'base')}
                        disabled={activeStory === 'home'}
                        before={<Icon28ArrowUpCircleOutline fill="#2B8FFE"/>}
                        className={activeStory === 'home' ? 'activeCellMenu' : ''}
                      >
                        VK API
                      </Cell>
                      <Cell
                        onClick={() => setStory('bridge', 'base')}
                        disabled={activeStory === 'bridge'}
                        before={<Icon28BookOutline fill="#2B8FFE"/>}
                        className={activeStory === 'bridge' ? 'activeCellMenu' : ''}
                      >
                        VK Bridge
                      </Cell>
                      <Cell
                          onClick={() => setStory('settings', 'base')}
                          disabled={activeStory === 'settings'}
                          before={<Icon28SettingsOutline fill="#2B8FFE"/>}
                          className={activeStory === 'settings' ? 'activeCellMenu' : ''}
                      >
                        Настройки
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