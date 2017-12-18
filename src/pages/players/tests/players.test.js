import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import nightmareRedirect from 'services/testing/nightmare';

describe('[PLAYERS PANE] acceptance test', () => {
  test('login page acceptance test', async function () {
    const page = await nightmareRedirect('/players')
      .click('button#filterPopoverButton > span.data-table-filter__label:nth-child(2)')
      .wait(100)
      .click('input#Organization')
      .wait(100)
      .click('div#root')
      .wait(100)
      .evaluate(() =>
        document.querySelector('section#main-content > div.container-fluid:nth-child(1) > div.row:nth-child(4) > div.react-bs-table-container.col-md-12:nth-child(1) > div.react-bs-table.react-bs-table-bordered:nth-child(1) > div.react-bs-container-header.table-header-wrapper:nth-child(1) > table.table.table-hover.table-bordered:nth-child(1) > thead:nth-child(2) > tr:nth-child(1) > th.usafb__table-header.sort-column:nth-child(7)').innerHTML
      )
      .end()
      .then((result) => {
        const value = result.substring(0, 9);
        expect(value).toBe('Age Group');
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  });
});
