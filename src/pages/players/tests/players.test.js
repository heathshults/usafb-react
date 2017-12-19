import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import nightmareRedirect from 'services/testing/nightmare';

describe('[PLAYERS PANE] acceptance test', () => {
  test('filtering columns', async function () {
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

  // this test should just end without crashing
  test('advanced search', async function () {
    const page = await nightmareRedirect('/players')
      .wait('section#main-content > div.container-fluid:nth-child(1) > div.row:nth-child(3) > div.col-md-12.btn-group.data-table-filter:nth-child(1) > div:nth-child(2) > button.data-table-filter__button:nth-child(1) > span.data-table-filter__label:nth-child(2)')
      .click('section#main-content > div.container-fluid:nth-child(1) > div.row:nth-child(3) > div.col-md-12.btn-group.data-table-filter:nth-child(1) > div:nth-child(2) > button.data-table-filter__button:nth-child(1) > span.data-table-filter__label:nth-child(2)')
      .wait(100)
      .click('input#advancedsearch-Source')
      .wait(100)
      .type('input#advancedsearch-Source', 'Source')
      .wait(100)
      .click('html > body.modal-open > div:nth-child(7) > div:nth-child(1) > div.modal.fade.show:nth-child(1) > div.modal-dialog:nth-child(1) > div.modal-content:nth-child(1) > div.modal-header:nth-child(1) > button.close:nth-child(2) > span:nth-child(1)')
      .end()
  });
});
