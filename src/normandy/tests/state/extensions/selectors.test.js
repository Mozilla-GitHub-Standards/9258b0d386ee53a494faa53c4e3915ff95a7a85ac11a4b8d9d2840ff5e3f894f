import { fromJS } from 'immutable';

import { getExtension } from 'normandy/state/app/extensions/selectors';
import { INITIAL_STATE } from 'normandy/tests/state';
import { ExtensionFactory } from 'normandy/tests/state/extensions';

describe('getExtension', () => {
  const extension = ExtensionFactory.build();

  const STATE = {
    ...INITIAL_STATE,
    extensions: {
      ...INITIAL_STATE.extensions,
      items: INITIAL_STATE.extensions.items.set(
        extension.id,
        fromJS(extension),
      ),
    },
  };

  it('should return the extension', () => {
    expect(getExtension(STATE, extension.id)).toEqual(fromJS(extension));
  });

  it('should return `null` for invalid ID', () => {
    expect(getExtension(STATE, 0)).toEqual(null);
  });

  it('should return default value for invalid ID with default provided', () => {
    expect(getExtension(STATE, 0, 'default')).toEqual('default');
  });
});
