import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://sleepy-refuge-03523.herokuapp.com/`;

test('My first test', async t => {
  await t.expect(Selector('h1').innerText).eql('HELLO!');
});