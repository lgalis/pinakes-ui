/* eslint-disable react/prop-types */
import React from 'react';
import { Tabs, Tab } from '@patternfly/react-core';
import { useLocation } from 'react-router-dom';
import useEnhancedHistory from '../../utilities/use-enhanced-history';

export interface AppTabsProps {
  tabItems: {
    name: string;
    eventKey: number;
    message: string;
  }[];
}
const AppTabs: React.ComponentType<AppTabsProps> = (tabs: AppTabsProps) => {
  const { push } = useEnhancedHistory();
  const { pathname, search } = useLocation();
  const activeTab = tabs.tabItems.find(({ name }) => pathname.includes(name));
  const handleTabClick = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    tabIndex: number | string
  ) => push({ pathname: tabs.tabItems[tabIndex as number].name, search });

  return (
    <Tabs
      activeKey={activeTab ? activeTab.eventKey : 0}
      onSelect={handleTabClick}
    >
      {tabs.tabItems.map((item) => (
        <Tab
          title={item.title}
          key={item.eventKey}
          eventKey={item.eventKey}
          name={item.name}
          disabled={item.disabled}
        />
      ))}
    </Tabs>
  );
};

export default AppTabs;
