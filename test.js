import test from 'ava';
import add from './add';

test('Should return 0 on empty string', t => {
	t.is(add(''), 0);
});

test('bar', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
});