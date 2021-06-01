import React from 'react';
import { Tabs, Tab, TabsProps } from '../Tabs';

function Wrapper(props: TabsProps) {
  return (
    <Tabs {...props}>
      <Tab label="First">First tab content</Tab>
      <Tab label="Second">Second tab content</Tab>
      <Tab label="Third">Third tab content</Tab>
    </Tabs>
  );
}

const codeTemplate = (props: string) => `<Tabs${props}>
  <Tab label="First">First tab content</Tab>
  <Tab label="Second">Second tab content</Tab>
  <Tab label="Third">Third tab content</Tab>
</Tabs>`;

export const positionConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'grow', type: 'boolean', defaultValue: false },
    {
      name: 'position',
      type: 'select',
      initialValue: 'left',
      defaultValue: 'left',
      data: [
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' },
        { label: 'center', value: 'center' },
        { label: 'apart', value: 'apart' },
      ],
    },
  ],
};
