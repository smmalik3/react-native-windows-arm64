/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

// $FlowFixMe[cannot-resolve-module]
import typeof DrawerLayoutAndroid from './DrawerLayoutAndroid.android';

module.exports =
  require('../UnimplementedViews/UnimplementedView') as $FlowFixMe as DrawerLayoutAndroid;
