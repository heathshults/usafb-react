import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
// import configureStore from 'redux-mock-store';

import nightmareRedirect from 'services/testing/nightmare';


describe('[NAVIGATION BAR] acceptance test', () => {
  test('navigation bar test', async function () {
    const page = nightmareRedirect('/coaches', true);
    const testValue = (response) => {
      expect(response).toBe('NUMBER OF PLAYERS');
    }

    await page.wait(500);
    await page.click('div#root > div:nth-child(1) > header.row.justify-space-between.p-4.nav-bar:nth-child(1) > ul.d-flex.nav-bar__navigation.mr-auto.mt-2.mt-lg-0.ml-auto:nth-child(2) > li:nth-child(3) > a.nav-bar__link:nth-child(1)');
    await page.wait(500);

    const data = await page.evaluate(() => document.querySelector('section#main-content > div.container-fluid:nth-child(1) > div.row:nth-child(1) > div.col-12.pt-3:nth-child(1) > div.row.align-items-center:nth-child(1) > div.col-4.page-title-container:nth-child(1) > h1.page-title.offset-top-10:nth-child(1) > span.offset-top-8.mr-2:nth-child(1) > b:nth-child(1)').textContent);
    await page.end();
    await test(data);
  });
});