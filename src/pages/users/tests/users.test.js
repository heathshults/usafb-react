import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import nightmareRedirect from 'services/testing/nightmare';

describe('[NAVIGATION BAR] acceptance test', () => {
  test('create new user test', async function () {
    const page = nightmareRedirect('/users', true);

    const testValues = (total, updatedTotal) => {
      console.log(total, updatedTotal);
    }

    await page.wait(500);
    const totalItems = await page.evaluate(() => document.querySelector('.pagination__label').textContent);

    await page.click('section#main-content > div.container-fluid:nth-child(1) > div.row:nth-child(1) > div.col-12:nth-child(1) > div.row.d-flex.align-items-center:nth-child(1) > div.col-5:nth-child(3) > div.d-flex.h-100:nth-child(1) > button.btn.btn-primary-02.ml-auto:nth-child(1)');
    await page.wait(200);
    await page.insert('input#user-input-FirstName', 'Test');
    await page.wait(200);
    await page.insert('input#user-input-LastName', 'User');
    await page.wait(200);
    await page.insert('input#user-input-Email', 'kldskjsd@gmail.com');
    await page.wait(200);
    await page.insert('input#user-input-Phone', '8088888888');
    await page.wait(200);
    await page.insert('input#user-input-Organization', 'Verys');
    await page.wait(200);
    await page.insert('input#user-input-1234MainSt', 'Tech Center Drive');
    await page.wait(200);
    await page.insert('input#user-input-City', 'Irvine');
    await page.wait(200);
    await page.type('select#user-input-State', 'CA');
    await page.wait(1000);
    await page.click('html > body.modal-open > div:nth-child(7) > div:nth-child(1) > div.modal.fade.show:nth-child(1) > div.modal-dialog:nth-child(1) > div.modal-content:nth-child(1) > div.modal-footer:nth-child(3) > button.btn.btn-primary:nth-child(2)')
    const updatedTotalItems = await page.evaluate(() => document.querySelector('.pagination__label').textContent);
    await page.end();
    await testValues(totalItems, updatedTotalItems);
  });
});