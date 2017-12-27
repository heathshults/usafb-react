import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import nightmareRedirect from 'services/testing/nightmare';

describe('[NAVIGATION BAR] acceptance test', () => {
  test('navigation bar test', async function () {
    const page = nightmareRedirect('/users');
    const testValue = (response) => {
      expect(response).toBe('5a3d52767dfb9');
    }

    await page.wait(500);
    await page.click('section#main-content > div.container-fluid:nth-child(1) > div.row.d-flex.justify-content-between.mt-3.mb-3:nth-child(3) > ul.mb-0.pagination:nth-child(2) > li.usafb-pagination__link.page-item:nth-child(3) > a.page-link:nth-child(1)')
    const data = await page.evaluate(() => document.querySelector('section#main-content > div.container-fluid:nth-child(1) > div.row:nth-child(2) > div.react-bs-table-container.col-md-12:nth-child(1) > div.react-bs-table.react-bs-table-bordered:nth-child(1) > div.react-bs-container-body:nth-child(2) > table.table.table-bordered:nth-child(1) > tbody:nth-child(2) > tr.data-table__striped-row:nth-child(1) > td:nth-child(1)').textContent);
    await page.end();
    await testValue(data);
  });
});