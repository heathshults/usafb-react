import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import nightmareRedirect from 'services/testing/nightmare';

import Players from '../Players';
import Container from 'components/containers/Container';
import DataHeader from 'components/data-header/DataHeader';
import ImportModal from '../components/import-modal/ImportModal';
import DataTable from 'components/data-table/DataTable';

const setupPlayerComponent = () => {
  const props = {};
  const playerWrapper = mount(<Players {...props} />);

  return {
    props,
    playerWrapper
  };
}

describe('[Players Pane] UI components test', () => {
  const { playerWrapper } = setupPlayerComponent();

  test('Container exists', () => {
    expect(playerWrapper.find(Container).length).toBe(1);
  });

  test('DataHeader exists', () => {
    expect(playerWrapper.find(DataHeader).length).toBe(1);
  });

  test('ImportModal exists', () => {
    expect(playerWrapper.find(ImportModal).length).toBe(1);
  });

  test('DataTable exists', () => {
    expect(playerWrapper.find(DataTable).length).toBe(1);
  });
});
